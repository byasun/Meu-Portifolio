// Configuração do EmailJS
// Instrução: Obtenha suas credenciais em https://www.emailjs.com/

export const emailConfig = {
  // Seu Public Key do EmailJS
  // Encontre em: EmailJS Dashboard > Account > API Keys
  publicKey: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY_HERE',
  
  // Service ID do seu serviço de email
  // Encontre em: EmailJS Dashboard > Email Services
  serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID_HERE',
  
  // Template ID do seu template de email
  // Encontre em: EmailJS Dashboard > Email Templates
  templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID_HERE'
};

// Nota importante: As variáveis de ambiente devem estar no arquivo .env
// Exemplo de .env:
// REACT_APP_EMAILJS_PUBLIC_KEY=seu_public_key
// REACT_APP_EMAILJS_SERVICE_ID=seu_service_id
// REACT_APP_EMAILJS_TEMPLATE_ID=seu_template_id
