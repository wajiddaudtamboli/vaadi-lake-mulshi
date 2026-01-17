export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Here you can integrate with an email service like SendGrid, Nodemailer, etc.
    // For now, just log it or send a response.

    console.log('Contact form submission:', { name, email, message });

    // Example: Send email using a service
    // const nodemailer = require('nodemailer');
    // ... setup transporter and send mail

    res.status(200).json({ message: 'Message sent successfully' });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}