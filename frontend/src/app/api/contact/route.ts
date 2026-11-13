import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { site } from '@/data/site';

interface ContactRequestBody {
  formType?: 'contact' | 'volunteer' | 'partnership' | 'newsletter';
  // Common
  name?: string;
  fullName?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  newsletterEmail?: string;
  phone?: string;
  // Contact specific
  topic?: string;
  message?: string;
  // Volunteer specific
  town?: string;
  skills?: string[];
  interests?: string[];
  availability?: string[];
  area?: string;
  motivation?: string;
  // Partnership specific
  organization?: string;
  contactName?: string;
  partnershipType?: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json().catch(() => ({}));
    const {
      formType = 'contact',
      name = '',
      fullName = '',
      firstName = '',
      lastName = '',
      email = '',
      newsletterEmail = '',
      phone = '',
      topic = '',
      message = '',
      town = '',
      skills = [],
      interests = [],
      availability = [],
      area = '',
      motivation = '',
      organization = '',
      contactName = '',
      partnershipType = '',
    } = body;

    // Resolve caller name and email
    const senderName =
      (fullName || name || contactName || `${firstName} ${lastName}`.trim()) ||
      (formType === 'newsletter' ? 'Newsletter Subscriber' : 'Website Visitor');
    const senderEmail = (email || newsletterEmail).trim();
    const senderPhone = phone.trim();

    // Validation
    if (!senderEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(senderEmail)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 }
      );
    }

    if (formType === 'contact' && !message.trim()) {
      return NextResponse.json(
        { error: 'Please provide a message.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // Graceful check if Resend is not configured yet in .env
    if (!apiKey) {
      console.warn(
        '[Initiative for the Needy Form Submission] RESEND_API_KEY is not defined in environment variables. Submission logged:',
        { formType, senderName, senderEmail, senderPhone, body }
      );
      return NextResponse.json(
        {
          error:
            'Email delivery is currently unconfigured. Please add RESEND_API_KEY to your environment variables.',
          unconfigured: true,
        },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const recipientEmail =
      process.env.CONTACT_NOTIFICATION_EMAIL || site.email || 'initiativefortheneedy@gmail.com';
    const fromEmail =
      process.env.RESEND_FROM_EMAIL || 'Initiative for the Needy <onboarding@resend.dev>';

    // Build subject and details depending on formType
    let formTitle = 'Website Contact Form';
    let subjectPrefix = `[INQUIRY] New Message from ${senderName}`;

    if (formType === 'volunteer') {
      formTitle = 'Volunteer Application';
      subjectPrefix = `[VOLUNTEER] New Volunteer Application - ${senderName}`;
    } else if (formType === 'partnership') {
      formTitle = 'Partnership / CSR Inquiry';
      subjectPrefix = `[PARTNERSHIP] New Partnership Proposal from ${organization || senderName}`;
    } else if (formType === 'newsletter') {
      formTitle = 'Newsletter Subscription';
      subjectPrefix = `[NEWSLETTER] New Subscriber: ${senderEmail}`;
    } else if (topic) {
      subjectPrefix = `[${topic.toUpperCase()}] New Inquiry from ${senderName}`;
    }

    const cleanPhoneDigits = senderPhone.replace(/[^0-9]/g, '');

    // Modern, executive-styled HTML email matching visionspring quality
    const htmlEmail = `
      <!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${subjectPrefix}</title>
        </head>
        <body style="margin: 0; padding: 0; background-color: #f1f5f9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #0f172a; -webkit-font-smoothing: antialiased;">
          <div style="max-width: 620px; margin: 32px auto; background-color: #ffffff; border-radius: 18px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.08); border: 1px solid #e2e8f0;">
            
            <!-- Brand Charity Header -->
            <div style="background-color: #0b1f3a; padding: 32px 28px; text-align: left; border-bottom: 3px solid #e11d48;">
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td>
                    <span style="display: inline-block; background-color: rgba(225, 29, 72, 0.18); border: 1px solid rgba(225, 29, 72, 0.4); color: #fda4af; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.8px; padding: 4px 10px; border-radius: 9999px;">
                      ${formTitle}
                    </span>
                    <h1 style="color: #ffffff; margin: 10px 0 4px 0; font-size: 22px; font-weight: 800; letter-spacing: -0.4px;">
                      Initiative for the Needy CBO
                    </h1>
                    <p style="color: #94a3b8; margin: 0; font-size: 13px;">
                      Registration No: <strong style="color: #cbd5e1;">CBO/THK/W/022/2022/1151</strong> • Thika, Kiambu County
                    </p>
                  </td>
                  <td style="text-align: right; vertical-align: middle;">
                    <span style="font-size: 32px;">🤝</span>
                  </td>
                </tr>
              </table>
            </div>

            <!-- Email Body Content -->
            <div style="padding: 32px 28px;">
              <div style="margin-bottom: 24px;">
                <p style="font-size: 15px; line-height: 1.6; color: #334155; margin: 0;">
                  A new submission was received on the official website (<a href="https://www.initiativefortheneedy.com" style="color: #e11d48; text-decoration: none; font-weight: 600;">initiativefortheneedy.com</a>):
                </p>
              </div>

              <!-- Contact Information Card -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.6px; color: #0b1f3a;">
                  Sender Information
                </h2>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600; width: 38%;">Name:</td>
                      <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${senderName}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Email:</td>
                      <td style="padding: 10px 0;">
                        <a href="mailto:${senderEmail}" style="color: #e11d48; text-decoration: none; font-weight: 600;">
                          ${senderEmail}
                        </a>
                      </td>
                    </tr>
                    ${
                      senderPhone
                        ? `
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Phone:</td>
                      <td style="padding: 10px 0;">
                        <a href="tel:${senderPhone}" style="color: #0b1f3a; text-decoration: none; font-weight: 700;">
                          ${senderPhone}
                        </a>
                      </td>
                    </tr>`
                        : ''
                    }
                    ${
                      organization
                        ? `
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Organization:</td>
                      <td style="padding: 10px 0; color: #0f172a; font-weight: 700;">${organization}</td>
                    </tr>`
                        : ''
                    }
                    ${
                      town
                        ? `
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 10px 0; color: #64748b; font-weight: 600;">Town / Location:</td>
                      <td style="padding: 10px 0; color: #0f172a; font-weight: 600;">${town}</td>
                    </tr>`
                        : ''
                    }
                    ${
                      topic
                        ? `
                    <tr>
                      <td style="padding: 10px 0 0 0; color: #64748b; font-weight: 600;">Topic:</td>
                      <td style="padding: 10px 0 0 0; color: #e11d48; font-weight: 700;">${topic}</td>
                    </tr>`
                        : ''
                    }
                    ${
                      partnershipType
                        ? `
                    <tr>
                      <td style="padding: 10px 0 0 0; color: #64748b; font-weight: 600;">Partnership Type:</td>
                      <td style="padding: 10px 0 0 0; color: #e11d48; font-weight: 700;">${partnershipType}</td>
                    </tr>`
                        : ''
                    }
                  </tbody>
                </table>
              </div>

              ${
                formType === 'volunteer'
                  ? `
              <!-- Volunteer Profile Card -->
              <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                <h2 style="margin: 0 0 16px 0; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.6px; color: #0b1f3a;">
                  Volunteer Interests & Skills
                </h2>
                <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                  <tbody>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px 0; color: #64748b; font-weight: 600; width: 38%;">Preferred Area:</td>
                      <td style="padding: 8px 0; color: #0f172a; font-weight: 700;">${area || 'Any'}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Availability:</td>
                      <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${availability.join(', ') || 'Not specified'}</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e2e8f0;">
                      <td style="padding: 8px 0; color: #64748b; font-weight: 600;">Skills Offered:</td>
                      <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${skills.join(', ') || 'None selected'}</td>
                    </tr>
                    <tr>
                      <td style="padding: 8px 0 0 0; color: #64748b; font-weight: 600;">Causes Cared About:</td>
                      <td style="padding: 8px 0 0 0; color: #0f172a; font-weight: 600;">${interests.join(', ') || 'None selected'}</td>
                    </tr>
                  </tbody>
                </table>
              </div>`
                  : ''
              }

              ${
                message || motivation
                  ? `
              <!-- Message / Motivation Card -->
              <div style="margin-bottom: 28px;">
                <h2 style="margin: 0 0 10px 0; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.6px; color: #475569;">
                  ${formType === 'volunteer' ? 'Volunteer Motivation' : 'Message / Details'}
                </h2>
                <div style="padding: 18px 20px; background-color: #ffffff; border: 1px solid #cbd5e1; border-left: 4px solid #e11d48; border-radius: 10px; font-size: 14px; line-height: 1.65; color: #1e293b; white-space: pre-wrap;">${message || motivation}</div>
              </div>`
                  : ''
              }

              <!-- Fast Action Reply Buttons -->
              <div style="padding: 24px 0 10px 0; border-top: 1px solid #e2e8f0; text-align: center;">
                <p style="margin: 0 0 14px 0; font-size: 13px; font-weight: 600; color: #64748b;">
                  Quick Response Actions:
                </p>
                <div style="display: inline-block;">
                  ${
                    cleanPhoneDigits
                      ? `
                  <a
                    href="https://wa.me/${cleanPhoneDigits}?text=Hello%20${encodeURIComponent(
                      senderName
                    )}%2C%20thank%20you%20for%20contacting%20Initiative%20for%20the%20Needy%20CBO."
                    style="display: inline-block; background-color: #25D366; color: #ffffff; text-decoration: none; padding: 11px 20px; border-radius: 8px; font-weight: 700; font-size: 13px; margin: 4px;"
                  >
                    💬 WhatsApp (${senderPhone})
                  </a>
                  <a
                    href="tel:${senderPhone}"
                    style="display: inline-block; background-color: #0b1f3a; color: #ffffff; text-decoration: none; padding: 11px 20px; border-radius: 8px; font-weight: 700; font-size: 13px; margin: 4px;"
                  >
                    📞 Call
                  </a>`
                      : ''
                  }
                  <a
                    href="mailto:${senderEmail}?subject=${encodeURIComponent(
                      `Re: Initiative for the Needy - ${formTitle}`
                    )}"
                    style="display: inline-block; background-color: #e11d48; color: #ffffff; text-decoration: none; padding: 11px 20px; border-radius: 8px; font-weight: 700; font-size: 13px; margin: 4px;"
                  >
                    ✉️ Reply via Email
                  </a>
                </div>
              </div>

            </div>

            <!-- Footer -->
            <div style="background-color: #f8fafc; padding: 20px 24px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; line-height: 1.5;">
              <p style="margin: 0 0 4px 0; font-weight: 700; color: #0b1f3a;">
                Initiative for the Needy Charity Organization (CBO)
              </p>
              <p style="margin: 0; color: #94a3b8;">
                Thika, Kiambu County, Kenya • <a href="mailto:${recipientEmail}" style="color: #64748b; text-decoration: underline;">${recipientEmail}</a>
              </p>
            </div>

          </div>
        </body>
      </html>
    `;

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: `${senderName} <${senderEmail}>`,
      subject: subjectPrefix,
      html: htmlEmail,
    });

    if (error) {
      console.error('[Initiative for the Needy Form Submission] Resend API error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, messageId: data?.id });
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error';
    console.error(
      '[Initiative for the Needy Form Submission] Unexpected error in /api/contact:',
      err
    );
    return NextResponse.json(
      { error: `An unexpected error occurred: ${errorMessage}` },
      { status: 500 }
    );
  }
}
