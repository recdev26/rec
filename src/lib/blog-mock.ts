export interface BlogMockPost {
  slug: string
  title: string
  excerpt: string
  readTime?: string
  category: string
  author: string
  dateDay?: string
  dateMonth?: string
  fullDate?: string
  imageSrc: string
  imageAlt: string
  bodyIntro: readonly string[]
  quote?: {
    text: string
    author: string
  }
  bodyMiddle: readonly string[]
  gallery: readonly {
    src: string
    alt: string
  }[]
  bodyConclusion: readonly string[]
  closingTitle?: string
  authorRole?: string
  authorBio?: string
  authorImageSrc?: string
  authorImageAlt?: string
  tags?: readonly string[]
}

export interface BlogMockCategory {
  label: string
  count: number
}

const allBlogPosts: readonly BlogMockPost[] = [
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
      'Num mercado cada vez mais exigente, valorizar um activo imobiliário com segurança requer muito mais do que percepção comercial ou simples comparação de preços. Requer análise técnica, enquadramento normativo, leitura de mercado e uma compreensão clara das características concretas do activo.',
      'Na REC, entendemos a avaliação como um instrumento de suporte à decisão. Por isso, cruzamos informação física, documental, urbanística, comercial e financeira para produzir análises consistentes e tecnicamente fundamentadas, adequadas a diferentes finalidades, desde investimento e financiamento até reporte financeiro, negociação e gestão patrimonial.',
    ],
    bodyMiddle: [
      'Uma avaliação bem conduzida permite ao cliente compreender melhor o posicionamento do activo, comparar cenários, identificar riscos e sustentar o valor do seu património de forma mais robusta perante investidores, auditores, instituições financeiras ou potenciais compradores.',
      'Este trabalho torna-se ainda mais relevante em operações complexas, nas quais a qualidade da análise pode influenciar directamente a estratégia, a capacidade de negociação e a segurança da decisão.',
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
      'Ao actuar com base em metodologias reconhecidas internacionalmente, incluindo princípios alinhados com a RICS e as IVS, a REC procura assegurar rigor, objectividade, transparência e utilidade prática em cada trabalho realizado.',
      'Valorizar com maior segurança é, em última análise, transformar informação dispersa em conhecimento accionável. E é precisamente essa capacidade que permite ao cliente avançar com maior confiança e visão de longo prazo.',
    ],
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
      'A fiscalização de obra é um dos pilares essenciais para o sucesso de qualquer projecto. Mais do que acompanhar a execução, fiscalizar significa garantir controlo técnico, conformidade, qualidade e capacidade de resposta perante desvios que possam comprometer o investimento.',
      'Num contexto de obra, a diferença entre um projecto bem controlado e um projecto exposto a riscos excessivos está, muitas vezes, na qualidade do acompanhamento técnico e na eficácia da articulação entre os vários intervenientes.',
    ],
    bodyMiddle: [
      'Na REC, entendemos a fiscalização como uma função estratégica. Uma presença técnica contínua em obra permite reduzir retrabalho, melhorar a comunicação entre dono da obra, projectistas, empreiteiros e fornecedores, e assegurar que decisões críticas são tomadas com informação clara e atempada.',
      'Para o cliente, isto traduz-se em maior previsibilidade, melhor documentação do processo, controlo mais eficaz sobre a execução e maior confiança no resultado final.',
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
      'Projectos devidamente acompanhados respondem melhor aos imprevistos, preservam com maior eficácia os objectivos iniciais e mantêm uma cadeia de decisão mais disciplinada e eficiente.',
      'Mais do que uma actividade de verificação, a fiscalização é uma ferramenta de protecção do investimento. É por isso que a REC adopta metodologias de acompanhamento estruturado, relatórios claros e uma abordagem orientada para controlo, rigor e criação de valor ao longo de todas as fases da execução.',
    ],
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
      'As peritagens técnicas desempenham um papel determinante sempre que é necessário transformar dúvida em evidência objectiva. Em processos de aquisição, financiamento, manutenção, reabilitação ou gestão patrimonial, a qualidade do diagnóstico influencia directamente a qualidade da decisão.',
      'Na REC, a peritagem técnica é desenvolvida com base em observação rigorosa, análise estruturada e comunicação clara. Cruzamos vistoria em campo, análise documental, leitura técnica especializada e, quando necessário, avaliação de risco, para produzir relatórios que sejam simultaneamente sólidos do ponto de vista técnico e úteis do ponto de vista prático.',
    ],
    bodyMiddle: [
      'Um bom relatório não se limita a identificar anomalias. Deve explicar o seu impacto, a sua criticidade, as suas implicações operacionais e patrimoniais e as prioridades de intervenção recomendadas.',
      'É esta capacidade de traduzir detalhe técnico em informação útil à decisão que torna a peritagem um instrumento valioso para clientes, investidores, seguradoras, bancos e demais entidades envolvidas.',
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
      'Quando existe clareza sobre o estado real do activo, o cliente consegue definir prioridades, negociar melhor, antecipar custos, mitigar riscos e proteger o valor patrimonial com maior segurança.',
      'Na REC, cada peritagem é conduzida com o objectivo de oferecer não apenas um diagnóstico, mas uma base sólida para agir com confiança e critério.',
    ],
  },
  {
    slug: 'gestao-de-activos-e-inventariacao-com-controlo-digital',
    title: 'Gestão de activos e inventariação com controlo digital',
    excerpt:
      'Etiquetagem, reconciliação e bases de dados estruturadas permitem um controlo mais eficiente do património e melhor preparação para auditorias.',
    readTime: '3 min de leitura',
    category: 'Activos',
    author: 'REC',
    dateDay: '06',
    dateMonth: 'ABR',
    fullDate: '06 de Abril de 2026',
    imageSrc: '/avaliacao_consultoria.png',
    imageAlt: 'Consultores em processo de inventariação e avaliação patrimonial',
    bodyIntro: ['Conhecer o património com precisão é o primeiro passo para o gerir de forma eficiente. Num ambiente empresarial cada vez mais exigente em matéria de controlo, conformidade e eficiência, a gestão de activos deixou de ser uma função meramente administrativa para assumir um papel estratégico.', 'Processos de inventariação bem estruturados permitem identificar, classificar, localizar e monitorizar bens com maior fiabilidade, reduzindo riscos de omissão, extravio ou inconsistência de registo.'],
    bodyMiddle: ['Quando associados à etiquetagem patrimonial e a bases de dados digitais organizadas, estes processos ganham uma nova dimensão. A informação torna-se mais acessível, rastreável e útil para auditorias, reconciliação patrimonial, seguros, manutenção e tomada de decisão.', 'A digitalização do inventário melhora o tempo de resposta, facilita actualizações periódicas e reforça a qualidade da informação utilizada em processos financeiros e operacionais.'],
    gallery: [{ src: '/avaliacao_consultoria.png', alt: 'Activos em processo de inventário' }, { src: '/contact_prompt.png', alt: 'Equipa a organizar informação patrimonial' }],
    bodyConclusion: ['Para as organizações, isto traduz-se em maior controlo, maior previsibilidade e maior capacidade de gerir o património com eficiência e rigor.', 'Na REC, apoiamos este processo com metodologia, etiquetagem, registo estruturado e soluções ajustadas às necessidades de cada cliente, contribuindo para uma gestão patrimonial mais sólida, transparente e orientada para resultados.'],
  },
  {
    slug: 'viabilidade-financeira-em-projectos-imobiliarios',
    title: 'Viabilidade financeira em projectos imobiliários',
    excerpt:
      'Uma leitura técnica e financeira integrada ajuda a antecipar riscos, definir cenários realistas e orientar investimentos com maior previsibilidade.',
    readTime: '4 min de leitura',
    category: 'Consultoria',
    author: 'REC',
    dateDay: '24',
    dateMonth: 'ABR',
    fullDate: '24 de Abril de 2026',
    imageSrc: '/about_1.png',
    imageAlt: 'Profissionais a discutir viabilidade e estratégia imobiliária',
    bodyIntro: ['Nenhum projecto imobiliário deve avançar apenas com base em expectativa comercial ou intuição. A viabilidade financeira é um instrumento essencial para testar a robustez de uma oportunidade, medir a exposição ao risco e perceber se o investimento é sustentável nas condições reais do mercado.', 'Na REC, encaramos a análise de viabilidade como uma ferramenta de estruturação da decisão. Trabalhamos com cenários, pressupostos de mercado, custos, cronogramas, operação esperada e retorno potencial, para que o investidor disponha de uma leitura clara do projecto e das suas condicionantes.'],
    bodyMiddle: ['Um modelo financeiro bem preparado permite compreender não apenas o potencial de retorno, mas também a sensibilidade do investimento a alterações de custo, tempo, absorção, rendimento ou contexto económico.', 'Esta análise ajuda a reduzir decisões impulsivas, reforça a capacidade de negociação e permite maior disciplina na selecção, ajustamento ou reformulação de projectos.'],
    gallery: [{ src: '/about_1.png', alt: 'Discussão de viabilidade de projecto' }, { src: '/about_2.png', alt: 'Equipa a avaliar cenários de investimento' }],
    bodyConclusion: ['Mais do que olhar para custos directos, importa integrar factores como contexto de mercado, procura, risco de execução, estrutura de financiamento e resiliência do projecto em diferentes cenários.', 'Na prática, uma boa análise de viabilidade permite responder a uma questão central: vale a pena avançar, ajustar ou repensar o investimento? É esse apoio técnico e estratégico que a REC procura oferecer desde as fases iniciais de cada projecto.'],
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
    bodyIntro: ['Preparar correctamente um imóvel para avaliação é uma forma simples e eficaz de melhorar a qualidade do processo e a fiabilidade da informação analisada. Embora o valor não dependa de apresentação superficial, depende da clareza documental, do enquadramento do activo e da consistência dos elementos disponibilizados.', 'Documentação organizada, histórico de manutenção, plantas, licenças, informação sobre ocupação, intervenções realizadas e enquadramento do uso efectivo do imóvel são factores que ajudam o perito a desenvolver uma análise mais precisa e contextualizada.'],
    bodyMiddle: ['Quanto melhor preparado estiver o activo, mais eficiente será a visita, menor será o número de dúvidas e mais célere será a elaboração do relatório final.', 'Pequenos aspectos documentais ou técnicos podem influenciar o enquadramento da avaliação e o grau de segurança do parecer emitido. Por isso, a preparação prévia é uma vantagem real para o cliente, quer se trate de uma finalidade de financiamento, venda, compra, reporte financeiro ou gestão patrimonial.'],
    gallery: [{ src: '/about_2.png', alt: 'Documentação e preparação do imóvel' }, { src: '/avaliacao_consultoria.png', alt: 'Consultores em fase de avaliação patrimonial' }],
    bodyConclusion: ['Na REC, acompanhamos os clientes neste processo com clareza quanto aos elementos necessários, ao âmbito do trabalho e à finalidade da avaliação, promovendo um processo mais transparente, rigoroso e bem estruturado.', 'Uma boa avaliação começa, muitas vezes, antes da visita. Começa na qualidade da informação disponível e na forma como o activo é apresentado para análise.'],
  },
  {
    slug: 'quando-deve-ser-feita-uma-avaliacao-imobiliaria',
    title: 'Quando deve ser feita uma avaliação imobiliária?',
    excerpt:
      'Uma avaliação imobiliária deve ser realizada sempre que uma decisão relevante dependa do valor do activo, da sua capacidade de gerar rendimento ou da sua utilização como garantia.',
    category: 'Avaliação',
    author: 'REC',
    imageSrc: '/avaliacao_consultoria.png',
    imageAlt: 'Análise técnica para avaliação imobiliária',
    bodyIntro: [
      'A avaliação imobiliária não deve ser vista apenas como uma exigência bancária ou uma formalidade em processos de compra e venda. Na realidade, trata-se de uma ferramenta essencial de decisão, que permite conhecer com maior rigor o valor de um activo em função da sua finalidade, do mercado e dos pressupostos adoptados.',
      'Uma avaliação deve ser feita, entre outros contextos, em processos de aquisição e alienação, financiamento, reestruturação societária, reporte financeiro, partilhas, litígios, gestão patrimonial, seguros ou análises de investimento. Em cada um destes casos, o objectivo da avaliação influencia a base de valor, o método utilizado e o tipo de análise exigido.',
    ],
    bodyMiddle: [
      'Actuar de forma atempada é igualmente importante. Uma avaliação feita no momento certo ajuda a reduzir incerteza, a melhorar a qualidade da negociação e a evitar decisões assentes em percepções informais ou referências desactualizadas.',
      'Na REC, entendemos a avaliação como um instrumento de suporte à decisão. Mais do que atribuir um número, procuramos enquadrar tecnicamente o activo, identificar factores de risco e produzir uma opinião de valor clara, útil e defensável.',
    ],
    gallery: [{ src: '/avaliacao_consultoria.png', alt: 'Consultores da REC em trabalho de avaliação' }],
    bodyConclusion: [],
  },
  {
    slug: 'diferenca-entre-valor-de-mercado-justo-valor-e-valor-de-investimento',
    title: 'Diferença entre valor de mercado, justo valor e valor de investimento',
    excerpt:
      'Nem todos os valores significam a mesma coisa. Compreender a diferença entre valor de mercado, justo valor e valor de investimento é essencial para interpretar correctamente uma avaliação.',
    category: 'Avaliação',
    author: 'REC',
    imageSrc: '/avaliacao_consultoria.png',
    imageAlt: 'Documentação técnica sobre bases de valor',
    bodyIntro: [
      'Uma das questões mais importantes em qualquer trabalho de avaliação é definir, desde o início, qual é a base de valor aplicável. É precisamente aqui que surgem, com frequência, confusões entre valor de mercado, justo valor e valor de investimento.',
      'De forma simplificada, o valor de mercado corresponde ao valor estimado pelo qual um activo deverá transaccionar entre partes independentes, devidamente informadas e sem constrangimento, numa transacção em condições normais de mercado. O justo valor é uma base frequentemente associada ao relato financeiro e à mensuração contabilística, dependendo do enquadramento normativo aplicável. Já o valor de investimento reflecte o valor do activo para um investidor específico, tendo em conta os seus objectivos, critérios e expectativas particulares.',
    ],
    bodyMiddle: [
      'Na prática, isto significa que um mesmo imóvel pode ter valores diferentes consoante a finalidade da avaliação e o perfil do utilizador. Um investidor estratégico pode atribuir ao activo um valor superior ao valor de mercado, se identificar sinergias, rendimentos futuros ou vantagens específicas que o mercado em geral não reconhece da mesma forma.',
      'É por isso que uma avaliação rigorosa começa sempre por esclarecer a finalidade, a base de valor e os pressupostos de trabalho. Sem esta definição, o risco de interpretar mal o resultado aumenta substancialmente.',
    ],
    gallery: [{ src: '/about_1.png', alt: 'Equipa da REC a analisar critérios de avaliação' }],
    bodyConclusion: [],
  },
  {
    slug: 'avaliacao-de-activos-fixos-tangiveis-por-que-e-importante-para-empresas',
    title: 'Avaliação de activos fixos tangíveis: por que é importante para empresas',
    excerpt:
      'A avaliação de activos fixos tangíveis é essencial para empresas que pretendem reforçar controlo patrimonial, suportar decisões financeiras e melhorar a fiabilidade do relato.',
    category: 'Activos',
    author: 'REC',
    imageSrc: '/avaliacao_consultoria.png',
    imageAlt: 'Activos fixos tangíveis em ambiente empresarial',
    bodyIntro: [
      'Máquinas, equipamentos, instalações técnicas, mobiliário, veículos e infra-estruturas representam, em muitos sectores, uma parte relevante do valor económico de uma empresa. Ainda assim, estes activos nem sempre estão devidamente identificados, reconciliados ou valorizados de forma consistente.',
      'A avaliação de activos fixos tangíveis permite apoiar decisões de natureza contabilística, financeira, seguradora e patrimonial. Pode ser relevante para reavaliações, testes de imparidade, fusões e aquisições, garantias bancárias, reestruturações, inventários patrimoniais, seguros ou simples gestão interna.',
    ],
    bodyMiddle: [
      'Do ponto de vista técnico, este tipo de avaliação exige conhecimento sobre a natureza do activo, o seu estado de conservação, vida útil remanescente, obsolescência física ou funcional, mercado secundário e custo de substituição. As IVS incluem standards específicos para diferentes classes de activos e reforçam a importância da documentação, dos dados e dos inputs utilizados.',
      'Para a empresa, o benefício é claro: melhor conhecimento do património, maior qualidade da informação financeira e maior segurança na tomada de decisão.',
    ],
    gallery: [{ src: '/contact_prompt.png', alt: 'Património empresarial em processo de valorização' }],
    bodyConclusion: [],
  },
  {
    slug: 'etiquetagem-de-activos-beneficios-para-controlo-auditoria-e-gestao',
    title: 'Etiquetagem de activos: benefícios para controlo, auditoria e gestão',
    excerpt:
      'A etiquetagem de activos reforça a rastreabilidade dos bens, melhora o controlo patrimonial e facilita auditorias, reconciliações e actualizações periódicas.',
    category: 'Activos',
    author: 'REC',
    imageSrc: '/contact.jpg',
    imageAlt: 'Etiquetagem patrimonial de activos',
    bodyIntro: [
      'A etiquetagem patrimonial é muitas vezes vista como uma etapa operacional simples. No entanto, quando bem implementada, torna-se uma ferramenta poderosa de gestão.',
      'Ao atribuir a cada bem uma identificação única, a organização passa a conseguir localizar, verificar, reconciliar e monitorizar activos com maior rapidez e fiabilidade. Isto reduz o risco de omissões, duplicações, extravios e inconsistências entre o inventário físico e os registos internos.',
    ],
    bodyMiddle: [
      'Em contexto empresarial, os ganhos são transversais: melhor preparação para auditorias, maior rigor contabilístico, mais eficiência em processos de manutenção e maior qualidade da informação utilizada para avaliação, seguros ou controlo interno.',
      'Quando integrada com bases de dados estruturadas, registo fotográfico e soluções digitais, a etiquetagem deixa de ser apenas um mecanismo de identificação e passa a ser parte de um sistema de governação patrimonial mais robusto.',
    ],
    gallery: [{ src: '/contact.jpg', alt: 'Registo e controlo patrimonial com etiquetagem' }],
    bodyConclusion: [],
  },
  {
    slug: 'due-diligence-tecnica-o-que-deve-ser-analisado-antes-de-comprar-um-imovel',
    title: 'Due diligence técnica: o que deve ser analisado antes de comprar um imóvel',
    excerpt:
      'Comprar sem due diligence técnica é assumir risco desnecessário. Uma análise estruturada permite identificar fragilidades, custos ocultos e condicionantes do activo.',
    category: 'Peritagens',
    author: 'REC',
    imageSrc: '/peritagens_tecnicas.png',
    imageAlt: 'Due diligence técnica a um imóvel',
    bodyIntro: [
      'Antes de adquirir um imóvel, o comprador deve procurar responder a uma pergunta central: o activo corresponde verdadeiramente ao que aparenta valer e ao que se pretende fazer com ele?',
      'A due diligence técnica existe precisamente para reduzir essa incerteza. O seu objectivo é avaliar o estado físico do imóvel, os seus sistemas e infra-estruturas, a conformidade técnica e legal, os riscos de manutenção, a necessidade de reparações ou reforços e eventuais contingências que possam afectar o investimento.',
    ],
    bodyMiddle: [
      'Entre os aspectos normalmente analisados estão a estrutura, coberturas, fachadas, redes técnicas, estado de conservação, intervenções passadas, licenças, uso actual, compatibilidade funcional e eventuais patologias construtivas.',
      'Uma boa due diligence não se limita a apontar problemas. Deve também quantificar impactos, hierarquizar riscos e fornecer uma base prática para negociação, correcção de preço, definição de CAPEX ou planeamento de intervenção.',
    ],
    gallery: [{ src: '/peritagens_tecnicas.png', alt: 'Inspecção técnica antes de aquisição imobiliária' }],
    bodyConclusion: [],
  },
  {
    slug: 'patologias-construtivas-mais-comuns-em-edificios',
    title: 'Patologias construtivas mais comuns em edifícios',
    excerpt:
      'Humidades, fissuração, infiltrações, degradação de acabamentos e falhas em sistemas técnicos estão entre as patologias mais comuns e podem comprometer desempenho e valor.',
    category: 'Peritagens',
    author: 'REC',
    imageSrc: '/peritagens_tecnicas.png',
    imageAlt: 'Patologias construtivas em edifícios',
    bodyIntro: [
      'As patologias construtivas são manifestações de anomalias que afectam o desempenho, a durabilidade, a segurança ou a funcionalidade de um edifício. Algumas são visíveis e imediatas. Outras evoluem de forma silenciosa e só se tornam evidentes quando os custos de reparação já são significativos.',
      'Entre as patologias mais frequentes encontram-se infiltrações, humidades ascendentes, condensações, fissuras em elementos estruturais ou de revestimento, destacamento de rebocos, corrosão, deformações, falhas em impermeabilizações e degradação prematura de instalações técnicas.',
    ],
    bodyMiddle: [
      'As causas podem variar: erro de projecto, deficiência de execução, materiais inadequados, falta de manutenção, envelhecimento natural, uso indevido ou exposição agressiva ao meio envolvente.',
      'Do ponto de vista patrimonial, o impacto pode ser relevante. Uma patologia mal diagnosticada pode reduzir valor, aumentar custos futuros e comprometer decisões de compra, financiamento ou reabilitação. É por isso que a inspecção técnica especializada continua a ser indispensável para distinguir sintomas, identificar causas prováveis e definir prioridades de intervenção com critério.',
    ],
    gallery: [{ src: '/about_2.png', alt: 'Diagnóstico técnico de anomalias construtivas' }],
    bodyConclusion: [],
  },
  {
    slug: 'o-que-deve-esperar-de-uma-gestao-profissional-de-projecto',
    title: 'O que deve esperar de uma gestão profissional de projecto',
    excerpt:
      'Uma gestão profissional de projecto deve trazer método, coordenação, controlo e previsibilidade, transformando intenção estratégica em execução disciplinada.',
    category: 'Projectos',
    author: 'REC',
    imageSrc: '/gestao_de_projectos.png',
    imageAlt: 'Gestão profissional de projecto imobiliário',
    bodyIntro: [
      'Um projecto bem-sucedido não depende apenas de um bom conceito ou de um orçamento adequado. Depende, acima de tudo, da capacidade de coordenar pessoas, decisões, prazos, custos, riscos e qualidade ao longo de todo o ciclo de vida do investimento.',
      'É isso que se espera de uma gestão profissional de projecto. Não apenas acompanhamento administrativo, mas liderança técnica e operacional. Não apenas controlo pontual, mas visão integrada.',
    ],
    bodyMiddle: [
      'O cliente deve esperar clareza de objectivos, planeamento estruturado, matriz de responsabilidades, articulação eficaz entre equipas, controlo de progresso, monitorização de desvios e informação accionável para tomada de decisão.',
      'Quando esta função é bem desempenhada, o projecto ganha disciplina, reduz exposição ao improviso e melhora a probabilidade de cumprir os seus objectivos técnicos, funcionais e financeiros. Na prática, uma boa gestão de projecto protege o investimento e reduz o custo da desorganização.',
    ],
    gallery: [{ src: '/gestao_de_projectos.png', alt: 'Coordenação e controlo de projecto' }],
    bodyConclusion: [],
  },
  {
    slug: 'como-avaliar-a-viabilidade-de-um-investimento-imobiliario',
    title: 'Como avaliar a viabilidade de um investimento imobiliário',
    excerpt:
      'Avaliar a viabilidade de um investimento imobiliário exige mais do que estimar custos e receitas. Exige testar pressupostos, cenários e risco.',
    category: 'Consultoria',
    author: 'REC',
    imageSrc: '/about_1.png',
    imageAlt: 'Viabilidade de investimento imobiliário',
    bodyIntro: [
      'A viabilidade de um investimento imobiliário não se mede apenas pelo potencial de valorização ou pela percepção de oportunidade. Mede-se pela capacidade de o projecto gerar retorno ajustado ao risco, dentro de um enquadramento técnico, comercial e financeiro coerente.',
      'Uma análise de viabilidade deve considerar, entre outros factores, custos de aquisição, custos de desenvolvimento, calendário de execução, financiamento, receitas esperadas, absorção de mercado, rendimento potencial, sensibilidade a atrasos e exposição a mudanças de contexto.',
    ],
    bodyMiddle: [
      'O objectivo não é apenas perceber se o investimento parece interessante, mas testar a sua robustez em cenários realistas e menos favoráveis.',
      'Quando bem conduzida, a análise de viabilidade ajuda a decidir se faz sentido avançar, ajustar o modelo, rever o posicionamento do produto ou até abandonar a oportunidade antes de comprometer capital. Para investidores e promotores, este exercício é uma ferramenta de disciplina estratégica e protecção do investimento.',
    ],
    gallery: [{ src: '/about_1.png', alt: 'Estudo de cenários de investimento imobiliário' }],
    bodyConclusion: [],
  },
  {
    slug: 'o-que-significa-actuar-de-acordo-com-padroes-internacionais-de-avaliacao',
    title: 'O que significa actuar de acordo com padrões internacionais de avaliação',
    excerpt:
      'Actuar de acordo com padrões internacionais significa trabalhar com regras claras de ética, metodologia, documentação e reporte que reforçam a confiança no resultado.',
    category: 'Avaliação',
    author: 'REC',
    imageSrc: '/avaliacao_consultoria.png',
    imageAlt: 'Padrões internacionais de avaliação',
    bodyIntro: [
      'No contexto da avaliação profissional, invocar padrões internacionais não deve ser apenas uma afirmação institucional. Deve traduzir-se numa forma concreta de trabalhar.',
      'As IVS são desenvolvidas pelo International Valuation Standards Council, organismo internacional dedicado à definição de standards técnicos e éticos para avaliações. A RICS Red Book Global Standards incorpora e complementa esse enquadramento, estabelecendo práticas obrigatórias para membros RICS na prestação de serviços de avaliação.',
    ],
    bodyMiddle: [
      'Na prática, actuar de acordo com estes padrões significa, entre outros aspectos, definir correctamente os termos de referência, identificar a base de valor apropriada, justificar os métodos adoptados, documentar os dados e inputs relevantes, gerir conflitos de interesse e comunicar conclusões de forma clara e transparente.',
      'Para o cliente, isto traduz-se em maior confiança, maior comparabilidade e maior robustez técnica do trabalho realizado.',
    ],
    gallery: [{ src: '/avaliacao_consultoria.png', alt: 'Relatório alinhado com padrões internacionais' }],
    bodyConclusion: [],
  },
  {
    slug: 'independencia-rigor-e-transparencia-na-actividade-de-avaliacao',
    title: 'Independência, rigor e transparência na actividade de avaliação',
    excerpt:
      'Sem independência, rigor e transparência, a avaliação perde credibilidade. Estes princípios são a base da confiança do mercado e da utilidade do parecer.',
    category: 'Avaliação',
    author: 'REC',
    imageSrc: '/avaliacao_consultoria.png',
    imageAlt: 'Princípios de independência e rigor em avaliação',
    bodyIntro: [
      'Uma avaliação só é verdadeiramente útil quando o utilizador confia no processo que a sustenta. Por isso, a actividade de avaliação assenta em três pilares essenciais: independência, rigor técnico e transparência.',
      'A independência protege o trabalho contra influência indevida e reforça a neutralidade da opinião de valor. O rigor assegura que a análise é conduzida com competência, método e fundamentação adequada. A transparência garante que o utilizador compreende a base de valor, os pressupostos adoptados, os dados utilizados e as limitações do trabalho.',
    ],
    bodyMiddle: [
      'A própria RICS afirma que consistência, actuação, objectividade e transparência são fundamentais para construir e manter a confiança pública na avaliação.',
      'Para clientes institucionais, bancos, auditores, investidores e tribunais, estes princípios não são apenas desejáveis. São indispensáveis. Na REC, entendemos que a credibilidade do relatório depende tanto da qualidade técnica da análise como da integridade profissional com que ela é produzida.',
    ],
    gallery: [{ src: '/contact_prompt.png', alt: 'Trabalho técnico conduzido com rigor e independência' }],
    bodyConclusion: [],
  },
  {
    slug: 'avaliacao-imobiliaria-para-efeitos-de-financiamento-o-que-os-bancos-procuram-em-mocambique',
    title: 'Avaliação imobiliária para efeitos de financiamento: o que os bancos procuram em Moçambique',
    excerpt:
      'No financiamento imobiliário, os bancos procuram avaliações independentes, prudentes e bem fundamentadas, que permitam medir o valor da garantia e o risco do crédito.',
    category: 'Avaliação',
    author: 'REC',
    imageSrc: '/contact.jpg',
    imageAlt: 'Avaliação imobiliária para financiamento bancário',
    bodyIntro: [
      'Em Moçambique, a avaliação imobiliária tem um papel central nos processos de financiamento, sobretudo quando o imóvel serve de garantia hipotecária ou equivalente.',
      'Na prática bancária, isto significa que a instituição procura uma avaliação que seja prudente, actual, tecnicamente justificada e adequada ao tipo de activo. O banco tende a valorizar relatórios com identificação clara do imóvel, enquadramento documental, análise de mercado, método bem aplicado, pressupostos explícitos e conclusão de valor defensável.',
    ],
    bodyMiddle: [
      'Também é particularmente relevante que o relatório deixe claras as limitações, condicionantes legais ou urbanísticas, estado de conservação, liquidez do activo e eventuais factores que possam afectar a sua realização em caso de incumprimento.',
      'Além do valor em si, o banco procura conforto quanto à qualidade da garantia. Em outras palavras, quer perceber não apenas quanto vale o imóvel, mas quão fiável, executável e sustentável é esse valor no contexto do crédito concedido.',
    ],
    gallery: [{ src: '/contact.jpg', alt: 'Processo de avaliação de garantia bancária' }],
    bodyConclusion: [
      'É por isso que, em Moçambique, uma avaliação para efeitos de financiamento deve ser preparada com elevado cuidado técnico e independência, respondendo simultaneamente às necessidades do cliente e às exigências prudenciais da instituição financeira.',
    ],
  },
] as const

export const blogPosts: readonly BlogMockPost[] = allBlogPosts.slice(0, 6)

export const blogCategories: readonly BlogMockCategory[] = [
  { label: 'Avaliação', count: 2 },
  { label: 'Consultoria', count: 1 },
  { label: 'Fiscalização', count: 1 },
  { label: 'Peritagens', count: 1 },
  { label: 'Activos', count: 1 },
] as const

export const recentBlogPosts = blogPosts.slice(0, 3)

export const blogPagination = [1, 2, 3, 4] as const

export const blogGalleryImages = blogPosts.map((post) => ({
  src: post.imageSrc,
  alt: post.imageAlt,
  href: `/blog/${post.slug}`,
}))

export const blogTags = Array.from(
  new Set(blogPosts.flatMap((post) => post.tags ?? [])),
)

export function getBlogPostBySlug(slug: string) {
  return allBlogPosts.find((post) => post.slug === slug) ?? null
}
