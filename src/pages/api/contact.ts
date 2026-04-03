export const prerender = false;

import type { APIRoute } from 'astro';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'hola@ecomm360.es';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'web@agencia-shopify.com';

export const POST: APIRoute = async ({ request }) => {
  const headers = { 'Content-Type': 'application/json' };

  try {
    const body = await request.json();
    const { name, email, company, phone, message, service } = body;

    // Validation
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Nombre, email y mensaje son obligatorios.' }),
        { status: 400, headers },
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: 'El email no es válido.' }),
        { status: 400, headers },
      );
    }

    // Honeypot check
    if (body._hp) {
      return new Response(
        JSON.stringify({ success: true }),
        { status: 200, headers },
      );
    }

    // Send notification email to the team
    const { error: notifyError } = await resend.emails.send({
      from: `Agencia Shopify <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `Nueva consulta: ${name}${company ? ` — ${company}` : ''}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111714; margin-bottom: 24px;">Nueva consulta desde agencia-shopify.com</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 12px; font-weight: 600; color: #617069; vertical-align: top; width: 120px;">Nombre</td>
              <td style="padding: 8px 12px; color: #111714;">${escapeHtml(name)}</td>
            </tr>
            <tr style="background: #f8fbf6;">
              <td style="padding: 8px 12px; font-weight: 600; color: #617069; vertical-align: top;">Email</td>
              <td style="padding: 8px 12px; color: #111714;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td>
            </tr>
            ${company ? `<tr><td style="padding: 8px 12px; font-weight: 600; color: #617069; vertical-align: top;">Empresa</td><td style="padding: 8px 12px; color: #111714;">${escapeHtml(company)}</td></tr>` : ''}
            ${phone ? `<tr style="background: #f8fbf6;"><td style="padding: 8px 12px; font-weight: 600; color: #617069; vertical-align: top;">Teléfono</td><td style="padding: 8px 12px; color: #111714;">${escapeHtml(phone)}</td></tr>` : ''}
            ${service ? `<tr><td style="padding: 8px 12px; font-weight: 600; color: #617069; vertical-align: top;">Servicio</td><td style="padding: 8px 12px; color: #111714;">${escapeHtml(service)}</td></tr>` : ''}
            <tr style="background: #f8fbf6;">
              <td style="padding: 8px 12px; font-weight: 600; color: #617069; vertical-align: top;">Mensaje</td>
              <td style="padding: 8px 12px; color: #111714; white-space: pre-wrap;">${escapeHtml(message)}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (notifyError) {
      console.error('Resend error:', notifyError);
      return new Response(
        JSON.stringify({ error: 'Error al enviar el mensaje. Inténtalo de nuevo.' }),
        { status: 500, headers },
      );
    }

    // Send confirmation email to the user
    await resend.emails.send({
      from: `eComm360 — Agencia Shopify <${FROM_EMAIL}>`,
      to: [email],
      subject: 'Hemos recibido tu consulta — eComm360',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #111714;">Gracias, ${escapeHtml(name)}</h2>
          <p style="color: #617069; line-height: 1.7;">
            Hemos recibido tu mensaje y te responderemos lo antes posible, normalmente en menos de 24 horas laborables.
          </p>
          <p style="color: #617069; line-height: 1.7;">
            Mientras tanto, puedes explorar nuestros servicios en
            <a href="https://agencia-shopify.com/shopify/" style="color: #376A21;">agencia-shopify.com</a>.
          </p>
          <p style="color: #617069; line-height: 1.7; margin-top: 24px;">
            Un saludo,<br/>
            <strong style="color: #111714;">Equipo eComm360</strong>
          </p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers },
    );
  } catch (err) {
    console.error('Contact form error:', err);
    return new Response(
      JSON.stringify({ error: 'Error interno. Inténtalo de nuevo más tarde.' }),
      { status: 500, headers },
    );
  }
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
