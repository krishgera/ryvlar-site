import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure Nodemailer with environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: parseInt(process.env.EMAIL_SERVER_PORT || '587'),
  secure: process.env.EMAIL_SERVER_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, companyDescription, reason, other } = body;

    // Basic validation
    if (!name || !company || !email || !companyDescription || !reason) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email content
    const mailOptions = {
      from: `"Ryvlar Website" <${process.env.EMAIL_FROM || 'noreply@ryvlar.com'}>`,
      to: 'support@ryvlar.com',
      subject: `New Demo Request from ${name} at ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #000;">New Demo Request</h2>
          
          <div style="margin-bottom: 20px; padding: 15px; background: #f5f5f5; border-radius: 5px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Company:</strong> ${company}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #000; margin-bottom: 10px;">Company Description</h3>
            <p>${companyDescription.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="color: #000; margin-bottom: 10px;">Why Ryvlar?</h3>
            <p>${reason.replace(/\n/g, '<br>')}</p>
          </div>
          
          ${other ? `
          <div style="margin-bottom: 20px;">
            <h3 style="color: #000; margin-bottom: 10px;">Additional Information</h3>
            <p>${other.replace(/\n/g, '<br>')}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; font-size: 12px; color: #666; border-top: 1px solid #eee; padding-top: 10px;">
            <p>This email was sent from the Ryvlar website contact form.</p>
          </div>
        </div>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
