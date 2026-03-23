export interface BlogMockPost {
  slug: string
  title: string
  excerpt: string
  readTime: string
  category: string
  author: string
  dateDay: string
  dateMonth: string
  fullDate: string
  imageSrc: string
  imageAlt: string
  bodyIntro: readonly string[]
  quote: {
    text: string
    author: string
  }
  bodyMiddle: readonly string[]
  gallery: readonly {
    src: string
    alt: string
  }[]
  bodyConclusion: readonly string[]
  closingTitle: string
  authorRole: string
  authorBio: string
  authorImageSrc: string
  authorImageAlt: string
  tags: readonly string[]
}

export interface BlogMockCategory {
  label: string
  count: number
}

export const blogPosts: readonly BlogMockPost[] = [
  {
    slug: 'como-valorizar-activos-imobiliarios-com-maior-seguranca',
    title: 'Como valorizar activos imobiliários com maior segurança',
    excerpt:
      'Análises criteriosas, enquadramento técnico e leitura de mercado ajudam investidores e proprietários a tomar decisões mais informadas e sustentáveis.',
    readTime: '4 min de leitura',
    category: 'Avaliação',
    author: 'REC',
    dateDay: '15',
    dateMonth: 'JAN',
    fullDate: '15 de Janeiro de 2026',
    imageSrc: '/contact.jpg',
    imageAlt: 'Profissionais a analisar dados e estratégias de investimento',
    bodyIntro: [
      'A valorização de activos imobiliários exige mais do que percepção de mercado. Requer leitura técnica, enquadramento normativo e uma compreensão clara do contexto em que o imóvel ou portfólio se insere.',
      'Na REC, cruzamos informação física, documental, comercial e financeira para produzir avaliações sólidas e úteis para investimento, reporte, negociação e gestão patrimonial.',
    ],
    quote: {
      text: 'Uma decisão bem fundamentada começa sempre com informação fiável, metodologia rigorosa e leitura real do activo.',
      author: 'Equipa REC',
    },
    bodyMiddle: [
      'Quando o processo é conduzido com critérios consistentes, o cliente consegue comparar cenários, perceber riscos e defender melhor o valor do seu património perante investidores, auditores ou instituições financeiras.',
      'Este trabalho torna-se ainda mais relevante em operações complexas, onde a exactidão da análise influencia estratégia, financiamento e capacidade de negociação.',
    ],
    gallery: [
      {
        src: '/avaliacao_consultoria.png',
        alt: 'Consultores em análise de documentos e activos imobiliários',
      },
      {
        src: '/about_1.png',
        alt: 'Reunião de equipa sobre estratégia e valorização patrimonial',
      },
    ],
    bodyConclusion: [
      'Avaliar com rigor significa transformar dados dispersos em informação accionável. É esse processo que permite ao cliente avançar com mais confiança e melhor controlo.',
      'Ao combinar metodologia reconhecida com conhecimento do mercado moçambicano, a REC entrega análises que ajudam a proteger valor e apoiar decisões com visão de longo prazo.',
    ],
    closingTitle: 'Rigor técnico para decisões mais seguras',
    authorRole: 'Equipa Editorial',
    authorBio:
      'A equipa da REC reúne experiência em avaliação, consultoria e gestão imobiliária, produzindo conteúdos orientados para decisões técnicas claras e sustentadas.',
    authorImageSrc: '/contact.jpg',
    authorImageAlt: 'Retrato da equipa editorial da REC',
    tags: ['Avaliação', 'Consultoria', 'Investimento'],
  },
  {
    slug: 'o-papel-da-fiscalizacao-no-sucesso-de-um-projecto',
    title: 'O papel da fiscalização no sucesso de um projecto',
    excerpt:
      'A supervisão técnica contínua reduz desvios, protege orçamentos e assegura padrões de qualidade ao longo de todas as fases da execução.',
    readTime: '5 min de leitura',
    category: 'Fiscalização',
    author: 'REC',
    dateDay: '20',
    dateMonth: 'FEV',
    fullDate: '20 de Fevereiro de 2026',
    imageSrc: '/gestao_de_projectos.png',
    imageAlt: 'Equipa em reunião de coordenação de projecto e fiscalização',
    bodyIntro: [
      'A fiscalização de obra é um dos pilares para garantir que o projecto avança com disciplina, controlo de qualidade e alinhamento com o escopo previsto.',
      'Mais do que supervisionar tarefas, trata-se de antecipar desvios e criar mecanismos de decisão que protegem prazo, custo e desempenho técnico.',
    ],
    quote: {
      text: 'Fiscalizar bem não é apenas verificar; é coordenar, corrigir e assegurar que a execução acompanha a intenção do projecto.',
      author: 'Coordenação Técnica REC',
    },
    bodyMiddle: [
      'Uma presença técnica constante em obra ajuda a reduzir retrabalho, a melhorar comunicação entre intervenientes e a manter decisões críticas sob controlo.',
      'Para o dono de obra, isso traduz-se em maior previsibilidade, melhor documentação e maior confiança no processo de entrega.',
    ],
    gallery: [
      {
        src: '/gestao_de_projectos.png',
        alt: 'Reunião técnica de coordenação de projecto',
      },
      {
        src: '/contact_prompt.png',
        alt: 'Equipa em ambiente de trabalho colaborativo',
      },
    ],
    bodyConclusion: [
      'Projectos bem acompanhados respondem melhor aos imprevistos e mantêm uma cadeia de decisão mais eficiente.',
      'É por isso que a REC trabalha com metodologias de acompanhamento contínuo, relatórios claros e articulação entre equipas técnicas e operacionais.',
    ],
    closingTitle: 'Coordenação, controlo e qualidade em cada fase',
    authorRole: 'Coordenação Técnica',
    authorBio:
      'Os especialistas da REC acompanham projectos e obras com foco em conformidade, desempenho e articulação eficaz entre todas as partes envolvidas.',
    authorImageSrc: '/about_2.png',
    authorImageAlt: 'Retrato da coordenação técnica da REC',
    tags: ['Fiscalização', 'Projectos', 'Obra'],
  },
  {
    slug: 'peritagens-tecnicas-para-decisoes-com-mais-confianca',
    title: 'Peritagens técnicas para decisões com mais confiança',
    excerpt:
      'Relatórios claros, diagnósticos precisos e avaliação de risco reforçam a confiança em negócios patrimoniais, manutenção e processos de financiamento.',
    readTime: '4 min de leitura',
    category: 'Peritagens',
    author: 'REC',
    dateDay: '14',
    dateMonth: 'MAR',
    fullDate: '14 de Março de 2026',
    imageSrc: '/peritagens_tecnicas.png',
    imageAlt: 'Especialistas em análise técnica de edifícios',
    bodyIntro: [
      'As peritagens técnicas ajudam a transformar dúvidas em evidência objectiva, permitindo decisões mais seguras em contextos de investimento, manutenção e financiamento.',
      'Ao cruzar observação em campo, análise documental e leitura técnica especializada, o relatório final ganha valor prático para diferentes tipos de cliente.',
    ],
    quote: {
      text: 'Um diagnóstico claro permite agir no momento certo e evitar que pequenas falhas se transformem em perdas maiores.',
      author: 'Especialistas REC',
    },
    bodyMiddle: [
      'A qualidade da peritagem depende da profundidade do levantamento e da capacidade de traduzir conclusões técnicas em recomendações úteis.',
      'Isso é especialmente importante quando a análise serve de base a processos de crédito, aquisição, reabilitação ou due diligence.',
    ],
    gallery: [
      {
        src: '/peritagens_tecnicas.png',
        alt: 'Análise técnica de instalações e edifícios',
      },
      {
        src: '/about_1.png',
        alt: 'Equipa em reunião após vistoria técnica',
      },
    ],
    bodyConclusion: [
      'Quando existe clareza sobre o estado real do activo, o cliente pode definir prioridades, negociar melhor e proteger o valor patrimonial.',
      'É essa combinação entre detalhe técnico e utilidade prática que orienta cada peritagem realizada pela REC.',
    ],
    closingTitle: 'Diagnóstico fiável para agir com confiança',
    authorRole: 'Especialistas Técnicos',
    authorBio:
      'A REC produz diagnósticos e relatórios técnicos para apoiar clientes, instituições financeiras e investidores com informação clara e accionável.',
    authorImageSrc: '/about_1.png',
    authorImageAlt: 'Retrato da equipa técnica da REC',
    tags: ['Peritagens', 'Diagnóstico', 'Património'],
  },
  {
    slug: 'gestao-de-activos-e-inventariacao-com-controlo-digital',
    title: 'Gestão de activos e inventariação com controlo digital',
    excerpt:
      'Etiquetagem, reconciliação e bases de dados estruturadas permitem um controlo mais eficiente do património e melhor preparação para auditorias.',
    readTime: '3 min de leitura',
    category: 'Activos',
    author: 'REC',
    dateDay: '09',
    dateMonth: 'ABR',
    fullDate: '09 de Abril de 2026',
    imageSrc: '/avaliacao_consultoria.png',
    imageAlt: 'Consultores em processo de inventariação e avaliação patrimonial',
    bodyIntro: ['A gestão organizada de activos é essencial para conhecer, controlar e valorizar o património empresarial.', 'Processos de inventariação bem estruturados permitem reduzir perdas, reforçar auditorias e apoiar decisões de investimento e manutenção.'],
    quote: { text: 'Conhecer o activo com rigor é o primeiro passo para o gerir melhor.', author: 'REC' },
    bodyMiddle: ['A digitalização do inventário melhora rastreabilidade e tempo de resposta.', 'Ao mesmo tempo, reforça a consistência da informação usada em processos financeiros e operacionais.'],
    gallery: [{ src: '/avaliacao_consultoria.png', alt: 'Activos em processo de inventário' }, { src: '/contact_prompt.png', alt: 'Equipa a organizar informação patrimonial' }],
    bodyConclusion: ['Com maior controlo, a organização ganha eficiência e previsibilidade.', 'A REC apoia este processo com metodologia, etiquetagem e base de dados estruturada.'],
    closingTitle: 'Controlo patrimonial com melhor visibilidade',
    authorRole: 'Consultoria de Activos',
    authorBio: 'A REC apoia organizações na inventariação, etiquetagem e estruturação de activos com foco em controlo e fiabilidade de informação.',
    authorImageSrc: '/contact.jpg',
    authorImageAlt: 'Retrato da equipa de consultoria de activos da REC',
    tags: ['Activos', 'Inventário', 'Controlo'],
  },
  {
    slug: 'viabilidade-financeira-em-projectos-imobiliarios',
    title: 'Viabilidade financeira em projectos imobiliários',
    excerpt:
      'Uma leitura técnica e financeira integrada ajuda a antecipar riscos, definir cenários realistas e orientar investimentos com maior previsibilidade.',
    readTime: '4 min de leitura',
    category: 'Consultoria',
    author: 'REC',
    dateDay: '28',
    dateMonth: 'ABR',
    fullDate: '28 de Abril de 2026',
    imageSrc: '/about_1.png',
    imageAlt: 'Profissionais a discutir viabilidade e estratégia imobiliária',
    bodyIntro: ['A viabilidade financeira é uma ferramenta decisiva para estruturar projectos e reduzir incerteza.', 'Com cenários claros, o investidor consegue medir melhor retorno, exposição ao risco e capacidade de execução.'],
    quote: { text: 'Planeamento financeiro robusto reduz decisões impulsivas e reforça a capacidade de negociação.', author: 'REC' },
    bodyMiddle: ['A análise não deve limitar-se a custos directos, mas considerar operação, contexto e sensibilidade do mercado.', 'Esse enquadramento permite decisões mais sustentadas e alinhadas com os objectivos do investimento.'],
    gallery: [{ src: '/about_1.png', alt: 'Discussão de viabilidade de projecto' }, { src: '/about_2.png', alt: 'Equipa a avaliar cenários de investimento' }],
    bodyConclusion: ['Uma boa análise de viabilidade ajuda a decidir quando avançar, ajustar ou repensar um projecto.', 'É esse apoio técnico que a REC oferece aos seus clientes desde as fases iniciais.'],
    closingTitle: 'Mais previsibilidade para o investimento',
    authorRole: 'Consultoria Estratégica',
    authorBio: 'A equipa da REC apoia estudos de mercado, viabilidade financeira e decisões estratégicas com conhecimento técnico e leitura real do contexto local.',
    authorImageSrc: '/about_2.png',
    authorImageAlt: 'Retrato da equipa de consultoria estratégica da REC',
    tags: ['Viabilidade', 'Consultoria', 'Estratégia'],
  },
  {
    slug: 'como-preparar-um-imovel-para-avaliacao',
    title: 'Como preparar um imóvel para avaliação',
    excerpt:
      'Organização documental, histórico de manutenção e enquadramento do activo ajudam a melhorar a precisão do processo de avaliação.',
    readTime: '3 min de leitura',
    category: 'Avaliação',
    author: 'REC',
    dateDay: '10',
    dateMonth: 'MAI',
    fullDate: '10 de Maio de 2026',
    imageSrc: '/about_2.png',
    imageAlt: 'Edifício e documentação preparados para avaliação técnica',
    bodyIntro: ['Preparar um imóvel para avaliação ajuda a tornar o processo mais eficiente e mais preciso.', 'Documentação acessível, histórico do activo e contexto de uso fazem diferença na qualidade da análise final.'],
    quote: { text: 'Quanto melhor preparado estiver o activo, mais clara será a leitura do seu valor.', author: 'REC' },
    bodyMiddle: ['Pequenos detalhes documentais ou técnicos podem influenciar o enquadramento do imóvel.', 'Por isso, o cliente beneficia quando organiza informação antes da visita e da análise técnica.'],
    gallery: [{ src: '/about_2.png', alt: 'Documentação e preparação do imóvel' }, { src: '/avaliacao_consultoria.png', alt: 'Consultores em fase de avaliação patrimonial' }],
    bodyConclusion: ['Uma boa preparação reduz dúvidas e acelera a produção do relatório.', 'A REC acompanha este processo com clareza sobre os elementos necessários e o alcance da avaliação.'],
    closingTitle: 'Preparação correcta melhora a avaliação',
    authorRole: 'Avaliação Imobiliária',
    authorBio: 'A REC orienta clientes institucionais e particulares na preparação de activos para avaliações rigorosas e ajustadas ao seu objectivo.',
    authorImageSrc: '/contact.jpg',
    authorImageAlt: 'Retrato da equipa de avaliação imobiliária da REC',
    tags: ['Avaliação', 'Imóvel', 'Preparação'],
  },
] as const

export const blogCategories: readonly BlogMockCategory[] = [
  { label: 'Avaliação', count: 8 },
  { label: 'Consultoria', count: 6 },
  { label: 'Fiscalização', count: 5 },
  { label: 'Peritagens', count: 4 },
  { label: 'Activos', count: 3 },
] as const

export const recentBlogPosts = blogPosts.slice(0, 3)

export const blogPagination = [1, 2, 3, 4] as const

export const blogGalleryImages = blogPosts.slice(0, 6).map((post) => ({
  src: post.imageSrc,
  alt: post.imageAlt,
  href: `/blog/${post.slug}`,
}))

export const blogTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug) ?? null
}
