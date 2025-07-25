# EmailJS Setup Guide

This guide will help you set up EmailJS to receive emails from your portfolio contact form directly to your Gmail account (llithira3@gmail.com).

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" as your email service
4. Click "Connect Account" and authorize EmailJS to access your Gmail
5. Your service will be created with a Service ID (something like `service_xxxxxxx`)
6. **Copy this Service ID** - you'll need it for configuration

## Step 3: Create Email Template

1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:** `New Portfolio Contact: {{from_name}}`

**Content:**
```
Hi Lithira,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Your Portfolio Website
```

4. Save the template and **copy the Template ID** (something like `template_xxxxxxx`)

## Step 4: Get Public Key

1. Go to "Account" → "General"
2. Find your **Public Key** (something like `xxxxxxxxxxxxxxx`)
3. Copy this key

## Step 5: Update Configuration

1. Open `src/config/emailjs.ts`
2. Replace the placeholder values with your actual EmailJS credentials:

```typescript
export const emailjsConfig = {
  serviceId: 'your_actual_service_id',     // From Step 2
  templateId: 'your_actual_template_id',   // From Step 3
  publicKey: 'your_actual_public_key',     // From Step 4
  recipientEmail: 'llithira3@gmail.com'    // Already configured
}
```

## Step 6: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the Contact section
3. Fill out and submit the test form
4. Check your Gmail inbox for the email

## EmailJS Free Tier Limits

- 200 emails per month
- EmailJS branding in emails
- Basic support

## Troubleshooting

**Form submission fails:**
- Check browser console for errors
- Verify all IDs are correct in the configuration
- Ensure Gmail service is properly connected

**Emails not received:**
- Check Gmail spam folder
- Verify template variables match the ones being sent
- Test with EmailJS dashboard first

**Template variables not working:**
- Make sure template uses: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- These must match exactly (case-sensitive)

## Security Note

The public key is safe to expose in client-side code. EmailJS is designed to work this way and includes spam protection and usage limits to prevent abuse.

## Current Integration Status

✅ EmailJS library installed
✅ Contact form configured with proper error handling
✅ Email addresses updated throughout the site to llithira3@gmail.com
✅ Success/error notifications implemented
✅ Form validation and loading states added
✅ Configuration file created

🔄 **Next Step:** Follow this guide to set up your EmailJS account and update the configuration file with your credentials.
