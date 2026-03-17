# 🎯 Meu Portfólio - Anna Clara

Um portfólio pessoal moderno e responsivo desenvolvido em React, mostrando projetos em Backend, Machine Learning e Game Development.

## 🎨 Características

- ✨ **Design Moderno**: Interface limpa e profissional
- 📱 **Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- ⚡ **Animações Suaves**: Transições elegantes com Intersection Observer
- 🎯 **Organizado**: Seções bem definidas (Hero, About, Skills, Projects, Contact, Footer)
- 🔗 **Navegação Intuitiva**: Menu responsivo com hamburger em mobile
- 🎨 **Design System**: Variáveis CSS centralizadas para fácil manutenção

## 🚀 Tech Stack

- **Frontend**: React 18.2
- **Ícones**: FontAwesome Pro (React Integration)
- **Estilo**: CSS3 com variáveis customizadas
- **Build Tool**: React Scripts 5.0.1

## 📋 Seções do Portfólio

1. **Header** - Navegação principal com menu responsivo
2. **Hero** - Apresentação pessoal com chamada para ação
3. **About** - Biografia e background profissional
4. **Skills** - Habilidades técnicas organizadas por categoria
5. **Projects** - Portfólio de projetos com filtros por categoria
6. **Contact** - Formulário de contato e informações de contato
7. **Footer** - Links para redes sociais

## 🛠️ Instalação

### Pré-requisitos
- Node.js (v14+)
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/byasun/meu-portifolio.git
cd meu-portifolio
```

2. **Instale as dependências**
```bash
npm install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm start
```

O aplicativo será aberto em [http://localhost:3000](http://localhost:3000)
## 📋 Próximos Passos

**Veja [PROXIMOS-PASSOS.md](PROXIMOS-PASSOS.md) para:**
- ✅ Como substituir imagens de exemplo
- ✅ Como configurar EmailJS para o formulário
- ✅ Checklist completo antes do deploy

---
## � Configurar EmailJS (Formulário de Contato)

O formulário de contato está integrado com **EmailJS** para envio de emails direto do frontend.

### Passos para configurar:

1. **Crie uma conta no EmailJS**
   - Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
   - Registre-se gratuitamente

2. **Configure seu serviço de email**
   - No dashboard, vá para "Email Services"
   - Conecte seu Gmail, Outlook ou outro fornecedor

3. **Crie um template de email**
   - Vá para "Email Templates"
   - Crie um template com as seguintes variáveis:
     - `{{from_name}}` - Nome do visitante
     - `{{from_email}}` - Email do visitante
     - `{{message}}` - Conteúdo da mensagem
   - Exemplo de template:
     ```
     Name: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```

4. **Copie suas credenciais**
   - Public Key: Account > API Keys
   - Service ID: Email Services
   - Template ID: Email Templates

5. **Configure as variáveis de ambiente**
   - Copie `.env.example` para `.env.local`
   - Preenchao com suas credenciais:
     ```bash
     REACT_APP_EMAILJS_PUBLIC_KEY=seu_public_key
     REACT_APP_EMAILJS_SERVICE_ID=seu_service_id
     REACT_APP_EMAILJS_TEMPLATE_ID=seu_template_id
     ```

6. **Reinicie o servidor**
   ```bash
   npm start
   ```

**Nota**: O formulário inclui validação completa (email, caracteres mínimos) e feedback visual para o usuário.

## �🔨 Comandos Disponíveis

```bash
# Iniciar servidor de desenvolvimento
npm start

# Build para produção
npm run build

# Executar testes
npm test

# Eject (não recomendado - irreversível)
npm run eject
```

## 📁 Estrutura do Projeto

```
src/
├── components/           # Componentes reutilizáveis
│   ├── Header/          # Navegação principal
│   ├── ProjectCard/     # Card de projeto
│   ├── SkillBar/        # Barra de habilidade
│   └── ScrollToTop/     # Botão scroll para topo
├── sections/            # Seções principais
│   ├── About/           # Seção sobre
│   ├── Contact/         # Seção de contato
│   ├── Footer/          # Rodapé
│   ├── Hero/            # Seção principal
│   ├── Projects/        # Seção de projetos
│   └── Skills/          # Seção de habilidades
├── hooks/               # React Hooks customizados
│   └── useScrollAnimation.js  # Hook para animações ao scroll
├── utils/               # Funções utilitárias
│   └── animations.js    # Funções de animação
├── data.js              # Dados centralizados (projetos, skills, contato)
├── App.js               # Componente principal
├── index.js             # Ponto de entrada
└── index.css            # Estilos globais e variáveis CSS
```

## 🎨 Customização

### Alterar Dados do Portfólio

Todos os dados (projetos, habilidades, contato) estão centralizados em `src/data.js`. Para modificar:

```javascript
// src/data.js
export const projectsData = [
  {
    id: 1,
    title: 'Seu Projeto',
    description: 'Descrição do projeto',
    image: '/images/seu-projeto.jpg',
    categories: ['categoria'],
    technologies: ['Tech1', 'Tech2'],
    link: 'https://seu-link.com',
    github: 'https://github.com/usuario/projeto'
  },
  // ... mais projetos
];
```

### Cores e Temas

Edite as variáveis CSS em `src/index.css`:

```css
:root {
  --primary-color: #2d3e50;
  --secondary-color: #3498db;
  --accent-color: #e74c3c;
  /* ... mais variáveis */
}
```

### Formulário de Contato

O formulário inclui:
- ✅ **Validação em tempo real**: Nome (min 3 caracteres), email válido, mensagem (10-1000 caracteres)
- 📤 **Integração EmailJS**: Envio de emails sem backend
- 🎯 **Feedback visual**: Mensagens de sucesso/erro com ícones
- ⏳ **Estado loading**: Botão desabilitado durante o envio
- 🎨 **Acessível**: Labels, erros em vermelho, contadores de caracteres

Para links de contato direto (email/telefone):
- Email: Abre cliente de email padrão
- Telefone: Abre discagem (em mobile)

## 📸 Capturas de Tela

*Adicione screenshots do seu portfólio aqui*

## 🔄 Animações

O portfólio utiliza:
- **Intersection Observer API** para animações ao scroll
- **CSS Transitions** para efeitos suaves
- Classes de animação: `.fade-in`, `.slide-in-left`, `.slide-in-right`

## 🌐 Deploy

### GitHub Pages

1. Atualize `package.json`:
```json
"homepage": "https://seu-usuario.github.io/meu-portifolio"
```

2. Instale o gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Adicione scripts em `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

4. Deploy:
```bash
npm run deploy
```

### Vercel

1. Conecte seu repositório no [Vercel](https://vercel.com)
2. Configure environment variables se necessário
3. Deploy automático em cada push

### Netlify

1. Conecte seu repositório no [Netlify](https://netlify.com)
2. Configure a build command como: `npm run build`
3. Configure publish directory como: `build`

## 📧 Contato

**Email**: annaclarag6@gmail.com  
**Telefone**: (31) 98999-0745  
**Localização**: Betim, Minas Gerais

### Redes Sociais

- [GitHub](https://github.com/byasun)
- [LinkedIn](https://www.linkedin.com/in/anna-clara-gomes-silva-sousa-687b57185/)
- [Instagram](https://www.instagram.com/byasun1)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🙏 Créditos

- Ícones: [FontAwesome](https://fontawesome.com/)
- Framework: [React](https://react.dev/)
- Hospedagem: [Vercel](https://vercel.com/) / [GitHub Pages](https://pages.github.com/)

---

Desenvolvido por Anna Clara