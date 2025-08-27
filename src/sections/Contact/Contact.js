import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você implementaria o envio do formulário
    alert('Obrigada pelo seu contato! Em um cenário real, esta mensagem seria enviada.');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };
  
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Entre em Contato</h2>
        <div className="contact-container">
          <div className="contact-info slide-in-left">
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <div>
                <h3>Email</h3>
                <p>seu.email@exemplo.com</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <div>
                <h3>Telefone</h3>
                <p>(00) 00000-0000</p>
              </div>
            </div>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <h3>Localização</h3>
                <p>Sua Cidade, Seu Estado</p>
              </div>
            </div>
          </div>
          <form className="contact-form slide-in-right" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nome</label>
              <input 
                type="text" 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mensagem</label>
              <textarea 
                id="message" 
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;