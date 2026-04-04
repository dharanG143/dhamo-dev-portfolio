# 📧 Email Integration Guide

This guide explains how to set up email notifications for your portfolio contact form.

## 🚀 Quick Setup (Using Formspree)

### Step 1: Sign Up
1. Go to https://formspree.io
2. Create a free account
3. Create a new project

### Step 2: Create Form Endpoint
1. Click "New Form"
2. Give it a name like "Portfolio Contact"
3. Formspree will generate an endpoint ID (example: `f/xyzqwxyz`)

### Step 3: Update Contact Component
Open `src/components/Contact/Contact.jsx` and replace the form endpoint:

```javascript
// Find this line:
const response = await fetch('https://formspree.io/f/xyzqwxyz', {

// Replace 'xyzqwxyz' with your actual form ID from Formspree
```

### Step 4: Configure Email Notifications
1. In Formspree dashboard, go to your form settings
2. Add your email address to receive notifications
3. Save settings

## Alternative: Using EmailJS

### Step 1: Install EmailJS
```bash
npm install @emailjs/browser
```

### Step 2: Setup EmailJS
1. Go to https://www.emailjs.com
2. Create a free account
3. Create an email service (Gmail, Outlook, etc.)
4. Create an email template

### Step 3: Update Contact Component

Replace the email sending code in `Contact.jsx`:

```javascript
import emailjs from '@emailjs/browser';

// Initialize EmailJS (add in useEffect or component mount)
useEffect(() => {
  emailjs.init("YOUR_PUBLIC_KEY");
}, []);

// In handleSubmit function:
const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    await emailjs.send(
      "SERVICE_ID",
      "TEMPLATE_ID",
      {
        to_email: "your-email@example.com",
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }
    );
    
    setLoading(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  } catch (error) {
    console.error('Error sending email:', error);
    setError(true);
    setErrorMessage('Failed to send message. Please try again.');
    setLoading(false);
  }
};
```

## Backend Email Service (Recommended for Production)

### Using Node.js + Express

1. **Install Nodemailer**
   ```bash
   npm install nodemailer
   ```

2. **Create backend route**
   ```javascript
   // backend/routes/contact.js
   const nodemailer = require('nodemailer');
   const express = require('express');
   const router = express.Router();

   const transporter = nodemailer.createTransport({
     service: 'gmail',
     auth: {
       user: process.env.EMAIL_USER,
       pass: process.env.EMAIL_PASSWORD
     }
   });

   router.post('/send', async (req, res) => {
     const { name, email, subject, message } = req.body;

     try {
       await transporter.sendMail({
         from: process.env.EMAIL_USER,
         to: process.env.RECIPIENT_EMAIL,
         subject: `Portfolio Contact: ${subject}`,
         html: `<h3>New message from ${name}</h3>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>`
       });

       res.json({ success: true });
     } catch (error) {
       console.error('Email error:', error);
       res.status(500).json({ error: 'Failed to send email' });
     }
   });

   module.exports = router;
   ```

3. **Environment Variables (.env)**
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASSWORD=your-app-password
   RECIPIENT_EMAIL=contact@example.com
   ```

4. **Update Frontend**
   ```javascript
   const response = await fetch('/api/contact/send', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(formData)
   });
   ```

## Enable Gmail App Password

1. Go to https://myaccount.google.com
2. Select "Security" in the left menu
3. Enable "2-Step Verification" if not enabled
4. Go to "App passwords"
5. Select "Mail" and "Windows Computer"
6. Copy the generated password
7. Use this password in your .env file

## Testing the Form

1. **Development**
   ```bash
   npm start
   # Fill out the contact form
   # Check your email for the message
   ```

2. **After Deployment**
   - Visit your deployed portfolio
   - Test the contact form
   - Verify email is received

## Troubleshooting

### Common Issues

**"Failed to send email" error**
- Check API endpoint is correct
- Verify email service credentials
- Check CORS settings if using external API

**Email not received**
- Check spam/junk folder
- Verify email service is active
- Check email limit quota (Formspree: 50 submissions/month free)

**CORS errors**
- Setup backend API with proper CORS headers
- Use environment variables for sensitive data
- Never expose API keys in frontend code

## Security Best Practices

1. ✅ Use environment variables for credentials
2. ✅ Never commit .env files
3. ✅ Validate email format on frontend and backend
4. ✅ Rate limit form submissions
5. ✅ Use HTTPS for all email transmissions
6. ✅ Implement CAPTCHA for spam prevention (optional)

## Monitoring & Analytics

Track form submissions in:
- Formspree dashboard
- EmailJS dashboard
- Google Analytics
- Backend logs

## Support

For more help:
- [Formspree Documentation](https://formspree.io/docs/)
- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [Nodemailer Documentation](https://nodemailer.com/)

---

✅ Email setup complete! Your contact form will now send real emails.
