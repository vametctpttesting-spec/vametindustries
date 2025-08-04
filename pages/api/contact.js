import { Resend } from 'resend'

const resend = new Resend(
  process.env.RESEND_API_KEY || 're_DVvZmY5M_9Ugy5vBCW7nU7YxhBYEP7Wjt'
)

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, phone, message } = req.body

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      message: 'Name, email, and message are required fields',
    })
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      message: 'Please provide a valid email address',
    })
  }

  try {
    const emailContent = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      
      <hr>
      <p><small>This message was sent from the contact form on www.vametindustries.com</small></p>
    `

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'vametctpt.testing@gmail.com',
      subject: `Message from www.vametindustries.com - ${name}`,
      html: emailContent,
      replyTo: email,
    })

    return res.status(200).json({
      message: 'Email sent successfully',
      id: data.id,
    })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({
      message: 'Failed to send email. Please try again later.',
    })
  }
}
