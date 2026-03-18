// Dados do Portfólio - Projetos e Habilidades

export const projectsData = [
  { 
    id: 1,  
    title: 'Modelo de Previsão de Qualidade em Petróleo', 
    description: 'Modelo de machine learning com TensorFlow treinado para prever ajustes necessários no teor de cloreto em petróleos. Utiliza dados históricos para otimizar a qualidade do produto com precisão de 92%.', 
    image: '/images/placeholder-ml-model.svg', 
    categories: ['ml'],
    technologies: ['Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
    link: null,
    github: null
  },
  { 
    id: 2, 
    title: 'Simulador de Treinamento', 
    description: 'Simulador imersivo desenvolvido na Unity em C# para treinamento de operadores em ambientes industriais. Inclui ambientes 3D realistas, feedback háptico e avaliação de desempenho em tempo real.', 
    image: '/images/Projeto_Simuladores.png', 
    categories: ['unity'],
    technologies: ['C#', 'Unity', 'Blender'],
    link: null,
    github: null
  },
  { 
    id: 3,
    title: 'NutriFacil',
    description: 'Plataforma de gestão nutricional que centraliza informações e facilita o acompanhamento de saúde e nutrição. Sistema integrado para otimizar o controle de dados nutricionais com interface intuitiva e eficiente.',
    image: '/images/Nutrifacil.png',
    categories: ['web', 'backend'],
    technologies: ['Python', 'JavaScript', 'React', 'MongoDB'],
    link: 'https://github.com/HUB-NutriFacil',
    github: 'https://github.com/HUB-NutriFacil'
  },
  { 
    id: 4,
    title: 'Gestão PDA - REGAP',
    description: 'Sistema de gestão de PDAs implementado para a refinaria REGAP. Backend robusto com integração de processos corporativos, relatórios automatizados e controle de versões.',
    image: '/images/placeholder-gestao-pda.svg',
    categories: ['backend'],
    technologies: ['Python', 'FastAPI', 'PowerBI', 'Azure'],
    link: null,
    github: null
  },
  { 
    id: 5,
    title: 'Novo PNCP',
    description: 'Implementação de sistema de consulta ao PNCP (Portal Nacional de Compras Públicas) com modernização de processos de licitação e compras. Backend escalável com arquitetura de microserviços e integração com APIs de governo.',
    image: '/images/PNCP.png',
    categories: ['backend'],
    technologies: ['Python', 'FastAPI', 'REST API', 'React'],
    link: 'https://github.com/byasun/Novo_PNCP',
    github: 'https://github.com/byasun/Novo_PNCP'
  }
];

export const skillsData = [
  { category: 'Backend', skills: [
    { name: 'Python', level: 90 },
    { name: 'Node.js', level: 75 },
    { name: 'Flask', level: 85 },
    { name: 'FastAPI', level: 80 },
    { name: 'Java', level: 70 }
  ]},
  { category: 'Banco de Dados', skills: [
    { name: 'MongoDB', level: 85 },
    { name: 'PostgreSQL', level: 80 },
    { name: 'MySQL', level: 75 }
  ]},
  { category: 'Machine Learning', skills: [
    { name: 'TensorFlow', level: 80 },
    { name: 'Scikit-learn', level: 85 },
    { name: 'PyTorch', level: 75 },
    { name: 'Pandas', level: 88 }
  ]},
  { category: 'Game Development', skills: [
    { name: 'C#', level: 80 },
    { name: 'Unity', level: 82 },
    { name: 'Blender', level: 70 }
  ]},
  { category: 'Ferramentas Corporativas', skills: [
    { name: 'Azure', level: 80 },
    { name: 'PI AF', level: 65 },
    { name: 'Git', level: 85 }
  ]},
  { category: 'Web', skills: [
    { name: 'React', level: 75 },
    { name: 'JavaScript', level: 75 },
    { name: 'HTML/CSS', level: 80 }
  ]}
];

export const aboutData = {
  title: 'Anna Clara Gomes Silva Sousa',
  subtitle: 'Desenvolvedora Backend | Machine Learning | Game Dev',
  bio: [
    'Meu nome é Anna Clara e sou uma desenvolvedora apaixonada por criar soluções robustas e escaláveis. Com experiência em backend, machine learning e desenvolvimento Unity, trouxe inovação para diversos projetos corporativos e criativos.',
    'Minha jornada na programação começou com projetos desafiadores durante a faculdade. Desde o primeiro semestre, descobri que me fascinava mais entender como as coisas funcionam do que deixá-las bonitas - e isso moldou minha carreira focada em lógica, performance e criatividade técnica.',
    'Nos últimos anos, trabalhei em soluções que vão desde APIs robustas para sistemas corporativos até modelos de inteligência artificial para otimização de processos industriais, passando por simuladores imersivos em realidade virtual.',
    'Quando não estou codando, você me encontra com um livro, jogando, assistindo séries ou explorando novas tecnologias.'
  ],
  hobbies: ['Leitura', 'Jogos', 'Séries', 'Tecnologia'],
  cvLink: '/cv.pdf',
  avatar: '/images/avatar-anna-clara.svg'
};

export const contactData = {
  email: 'annaclarag6@gmail.com',
  phone: '(31) 98999-0745',
  location: 'Minas Gerais - Brasil',
  social: {
    github: 'https://github.com/byasun',
    linkedin: 'https://www.linkedin.com/in/anna-clara-gomes-silva-sousa-687b57185/',
    instagram: 'https://www.instagram.com/byasun1'
  }
};
