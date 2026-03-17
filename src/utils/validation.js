// Validações para o formulário de contato

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateForm = (formData) => {
  const errors = {};
  
  // Validação do nome
  if (!formData.name.trim()) {
    errors.name = 'Nome é obrigatório';
  } else if (formData.name.trim().length < 3) {
    errors.name = 'Nome deve ter pelo menos 3 caracteres';
  }
  
  // Validação do email
  if (!formData.email.trim()) {
    errors.email = 'Email é obrigatório';
  } else if (!validateEmail(formData.email)) {
    errors.email = 'Email inválido';
  }
  
  // Validação da mensagem
  if (!formData.message.trim()) {
    errors.message = 'Mensagem é obrigatória';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Mensagem deve ter pelo menos 10 caracteres';
  } else if (formData.message.trim().length > 1000) {
    errors.message = 'Mensagem não pode ter mais de 1000 caracteres';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
