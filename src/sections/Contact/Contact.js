import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import { contactData } from '../../data';
import { emailConfig } from '../../config/emailConfig';
import { validateForm } from '../../utils/validation';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null, // 'success', 'error', null
    message: ''
  });
  
  // Inicializar EmailJS
  useEffect(() => {
    if (emailConfig.publicKey && emailConfig.publicKey !== 'YOUR_PUBLIC_KEY_HERE') {
      emailjs.init(emailConfig.publicKey);
    }
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Limpar erro deste campo
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validar formulário
    const validation = validateForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    setIsLoading(true);
    setSubmitStatus({ type: null, message: '' });
    
    try {
      // Verificar se as credenciais do EmailJS estão configuradas
      if (!emailConfig.publicKey || emailConfig.publicKey === 'YOUR_PUBLIC_KEY_HERE') {
        // Mostrar mensagem informativa em desenvolvimento
        setSubmitStatus({
          type: 'error',
          message: '🔧 Formulário em desenvolvimento! Configure EmailJS para ativar envios. Ver README para instruções.'
        });
        setIsLoading(false);
        return;
      }
      
      // Enviar email via EmailJS
      await emailjs.send(
        emailConfig.serviceId,
        emailConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          to_email: contactData.email,
          message: formData.message,
          reply_to: formData.email
        }
      );
      
      // Sucesso!
      setSubmitStatus({
        type: 'success',
        message: '✨ Mensagem enviada com sucesso! Responderei em breve.'
      });
      
      // Limpar formulário
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
      
      // Fechar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSubmitStatus({ type: null, message: '' });
      }, 5000);
      
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Erro ao enviar mensagem. Por favor, tente novamente ou envie um email direto.'
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <div className="contact-container">
          <div className="contact-info slide-in-left">
            <div className="contact-item">
              <FontAwesomeIcon icon={faEnvelope} />
              <div>
                <h3>Email</h3>
                <p>
                  <a href={`mailto:${contactData.email}`}>{contactData.email}</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faPhone} />
              <div>
                <h3>Telefone</h3>
                <p>
                  <a href={`tel:${contactData.phone.replace(/\D/g, '')}`}>{contactData.phone}</a>
                </p>
              </div>
            </div>
            <div className="contact-item">
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <div>
                <h3>Localização</h3>
                <p>{contactData.location}</p>
              </div>
            </div>
          </div>
          
          <form className="contact-form slide-in-right" onSubmit={handleSubmit}>
            {submitStatus.type && (
              <div className={`form-status ${submitStatus.type}`}>
                <FontAwesomeIcon 
                  icon={submitStatus.type === 'success' ? faCheckCircle : faExclamationCircle} 
                />
                <p>{submitStatus.message}</p>
              </div>
            )}
            
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? 'input-error' : ''}
                disabled={isLoading}
                required 
              />
              {errors.name && <span className="error-message">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? 'input-error' : ''}
                disabled={isLoading}
                required 
              />
              {errors.email && <span className="error-message">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <label htmlFor="message">
                Mensagem ({formData.message.length}/1000)
              </label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={errors.message ? 'input-error' : ''}
                disabled={isLoading}
                maxLength="1000"
                required
              ></textarea>
              {errors.message && <span className="error-message">{errors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className={`btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;