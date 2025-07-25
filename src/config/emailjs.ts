// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and verify your email
// 3. Create a new service (Gmail, Outlook, etc.)
// 4. Create an email template
// 5. Replace the values below with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: 'service_pz0flvp', // Your EmailJS service ID
  templateId: 'template_uwwv9z5', // Your EmailJS template ID
  publicKey: '9TOl-Wl_HYP3dnY6K', // Your EmailJS public key
  recipientEmail: 'llithira3@gmail.com' // Your email address
}

// Test function to validate configuration
export const validateEmailjsConfig = (): boolean => {
  const { serviceId, templateId, publicKey } = emailjsConfig
  
  if (serviceId === 'YOUR_SERVICE_ID' || 
      templateId === 'YOUR_TEMPLATE_ID' || 
      publicKey === 'YOUR_PUBLIC_KEY') {
    console.warn('⚠️ EmailJS not configured yet. Please update src/config/emailjs.ts with your actual credentials.')
    return false
  }
  
  console.log('✅ EmailJS configuration looks good!')
  return true
}

// Template variables that will be sent to EmailJS:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{message}} - Message content
// {{to_email}} - Your email (llithira3@gmail.com)

// Example template structure for EmailJS:
/*
Subject: New Portfolio Contact: {{from_name}}

Hi Lithira,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

Best regards,
Your Portfolio Website
*/
