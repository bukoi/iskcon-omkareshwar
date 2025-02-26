import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Parse the incoming request data
    const body = await request.json();
    const { name, email, phone, message } = body;

    // 1. Create a Nodemailer transporter using your SMTP details
    //    (for example, using Gmail SMTP or another email service)
    const transporter = nodemailer.createTransport({
      service: "gmail", // or another email service
      auth: {
        user: process.env.EMAIL_USER, // e.g. "yourgmail@gmail.com"
        pass: process.env.EMAIL_PASS, // e.g. "yourGmailPasswordOrAppPassword"
      },
    });

    // 2. Configure the email data
    const mailOptions = {
      from: process.env.EMAIL_USER, // sender address
      to: "bluzoj@gmail.com",   // replace with the email you want to receive the form data
      subject: "New Contact Form Submission",
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      // If you want HTML format, you can use `html: "<p>...</p>"`
    };

    // 3. Send the email
    await transporter.sendMail(mailOptions);

    // 4. Return a success response
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(JSON.stringify({ success: false }), {
      status: 500,
    });
  }
}
