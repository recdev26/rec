import {
  BadgeCheck,
  BarChart3,
  ClipboardCheck,
  FileSearch,
  HardHat,
  Landmark,
  Layers3,
  type LucideIcon,
  ScanSearch,
  ShieldCheck,
  Wrench,
} from 'lucide-react'

export interface ServiceNavItem {
  label: string
  href: string
}

export interface ServiceOverviewHighlight {
  title: string
  description: string
}

export interface ServiceOffer {
  title: string
  description: string
  items: readonly string[]
}

export interface ServiceProcessStep {
  title: string
  description: string
}

export interface ServiceReason {
  icon: LucideIcon
  title: string
  description: string
}

export interface ServiceReasonData {
  title: string
  description: string
}

export interface ServiceDownload {
  label: string
  fileName: string
  href: string
}

export interface ServiceDetail {
  slug: string
  href: string
  navLabel: string
  title: string
  shortTitle: string
  description: string
  lead: string
  imageSrc: string
  imageAlt: string
  icon: LucideIcon
  overviewParagraphs: readonly string[]
  overviewHighlights: readonly ServiceOverviewHighlight[]
  offers: readonly ServiceOffer[]
  processTitle: string
  processIntro: string
  processSteps: readonly ServiceProcessStep[]
  reasons: readonly ServiceReason[]
  brochureDownloads: readonly ServiceDownload[]
}

export interface ServiceDetailData {
  slug: string
  href: string
  navLabel: string
  title: string
  shortTitle: string
  description: string
  lead: string
  imageSrc: string
  imageAlt: string
  overviewParagraphs: readonly string[]
  overviewHighlights: readonly ServiceOverviewHighlight[]
  offers: readonly ServiceOffer[]
  processTitle: string
  processIntro: string
  processSteps: readonly ServiceProcessStep[]
  reasons: readonly ServiceReasonData[]
  brochureDownloads: readonly ServiceDownload[]
}

const serviceIconMap = {
  'avaliacao-e-consultoria': {
    icon: Landmark,
    reasons: [BadgeCheck, BarChart3, Layers3],
  },
  'gestao-de-projectos': {
    icon: HardHat,
    reasons: [ShieldCheck, HardHat, ClipboardCheck],
  },
  'peritagens-tecnicas': {
    icon: ClipboardCheck,
    reasons: [ScanSearch, FileSearch, Wrench],
  },
} as const

export const services: readonly ServiceDetail[] = [
  {
    slug: 'avaliacao-e-consultoria',
    href: '/servicos/avaliacao-e-consultoria',
    navLabel: 'Avaliação e Consultoria',
    title: 'Avaliação e Consultoria Imobiliária',
    shortTitle: 'Avaliação e Consultoria',
    description:
      'Desenvolvemos avaliações criteriosas, independentes e tecnicamente fundamentadas de imóveis e activos, de acordo com padrões nacionais e internacionais, para apoiar decisões de investimento, financiamento, gestão patrimonial e relato financeiro.',
    lead:
      'Credibilidade internacional, leitura de mercado e transparência total para apoiar decisões de investimento, reporte financeiro, compra, venda e gestão de activos.',
    imageSrc: '/avaliacao_consultoria.png',
    imageAlt: 'Consultores da REC a analisar documentação e activos imobiliários',
    icon: Landmark,
    overviewParagraphs: [
      'Com mais de duas décadas de presença no mercado moçambicano, a REC alia padrões internacionais de excelência, incluindo IVSC, RICS e TEGoVA, a um profundo conhecimento do contexto local.',
      'A nossa equipa multidisciplinar assegura relatórios fiáveis, metodologias certificadas e acompanhamento integral, permitindo ao cliente tomar decisões com confiança, rigor e visão estratégica.',
    ],
    overviewHighlights: [
      {
        title: 'Conformidade IFRS, NIRF e SCE',
        description:
          'Asseguramos transparência e comparabilidade nos relatórios contabilísticos, facilitando auditorias, financiamento e relacionamento com investidores.',
      },
      {
        title: 'Metodologia certificada',
        description:
          'Aplicamos processos reconhecidos e alinhados com as melhores práticas globais de avaliação e consultoria imobiliária.',
      },
      {
        title: 'Acompanhamento integral',
        description:
          'Do diagnóstico inicial à entrega final, disponibilizamos relatórios, bases de dados digitais e suporte pós-avaliação.',
      },
    ],
    offers: [
      {
        title: 'Avaliação de Activos',
        description:
          'Realizamos avaliações independentes, rigorosas e devidamente fundamentadas para diferentes classes de activos, com enquadramento técnico, financeiro e normativo adequado a cada finalidade.',
        items: [
          'Activos imobiliários: habitação, escritórios, comércio, indústria e hotelaria',
          'Activos industriais: máquinas, equipamentos, instalações técnicas e unidades fabris',
          'Activos biológicos: plantações, efectivo pecuário e outros activos vivos',
          'Activos fixos tangíveis: inventariação, etiquetagem, reconciliação e valorização patrimonial',
          'Activos intangíveis e investimentos: patentes, concessões, licenças, direitos de uso e contratos de leasing',
        ],
      },
      {
        title: 'Estudos e Consultoria Estratégica',
        description:
          'Apoiamos decisões de investimento, expansão, optimização e reposicionamento, através de análises técnicas e económicas orientadas para a viabilidade, mitigação de risco e criação de valor.',
        items: [
          'Estudos de mercado e análises da oferta e da procura',
          'Estudos de viabilidade financeira e projecções de investimento',
          'Consultoria estratégica para desenvolvimento imobiliário',
          'Peritagem de seguros e revisão técnica de apólices',
        ],
      },
      {
        title: 'Inventariação e Etiquetagem de Activos',
        description:
          'Implementamos soluções de inventariação física e controlo patrimonial com recurso a processos digitais, reforçando a fiabilidade da informação, a reconciliação patrimonial e a monitorização operacional dos activos.',
        items: [
          'Etiquetagem patrimonial em poliéster térmico com registo fotográfico',
          'Criação e organização de base de dados digital para gestão contínua',
          'Aplicação de etiquetas RFID para localização e controlo automatizado de activos',
          'Verificações periódicas para redução de tempo, custos e desvios patrimoniais',
        ],
      },
    ],
    processTitle: '3 Etapas do Nosso Acompanhamento',
    processIntro:
      'Estruturamos cada trabalho de forma clara, documentada e verificável para garantir consistência técnica e decisões fundamentadas.',
    processSteps: [
      {
        title: 'Diagnóstico e recolha de dados',
        description:
          'Levantamos informação técnica, documental e comercial relevante para enquadrar correctamente o activo ou o objectivo do estudo.',
      },
      {
        title: 'Análise e modelação',
        description:
          'Aplicamos metodologias reconhecidas, cruzamos dados de mercado e produzimos cenários comparáveis e transparentes.',
      },
      {
        title: 'Relatório e suporte à decisão',
        description:
          'Entregamos conclusões claras, recomendações práticas e documentação pronta para auditoria, negociação ou planeamento.',
      },
    ],
    reasons: [
      {
        icon: BadgeCheck,
        title: 'Referência técnica reconhecida',
        description:
          'Desenvolvemos o nosso trabalho com base em normas, metodologias e princípios reconhecidos internacionalmente, assegurando rigor técnico, consistência e confiança em cada serviço prestado.',
      },
      {
        icon: BarChart3,
        title: 'Leitura real do mercado',
        description:
          'Aliamos experiência prática, leitura do contexto económico e conhecimento aprofundado do mercado nacional para apoiar decisões mais seguras, realistas e bem fundamentadas.',
      },
      {
        icon: Layers3,
        title: 'Soluções completas',
        description:
          'Oferecemos uma abordagem completa, que combina avaliação, inventariação, consultoria e análises técnicas, permitindo ao cliente dispor de informação fiável e de uma base sólida para agir com confiança.',
      },
    ],
    brochureDownloads: [
      {
        label: 'Brochura de Avaliação e Consultoria',
        fileName: 'avaliacao-e-consultoria.txt',
        href: '/brochuras/avaliacao-e-consultoria.txt',
      },
      {
        label: 'Apresentação Institucional REC',
        fileName: 'rec-apresentacao.txt',
        href: '/brochuras/rec-apresentacao.txt',
      },
    ],
  },
  {
    slug: 'gestao-de-projectos',
    href: '/servicos/gestao-de-projectos',
    navLabel: 'Gestão de Projectos',
    title: 'Gestão de Projectos e Fiscalização de Obras',
    shortTitle: 'Gestão de Projectos',
    description:
      'Acompanhamos e coordenamos todas as fases do projecto, desde o planeamento inicial até à conclusão da obra, assegurando controlo de prazos, custos, qualidade e conformidade técnica.',
    lead:
      'Do conceito à entrega, asseguramos o controlo técnico e operativo necessário para transformar planeamento em execução disciplinada, eficiente e previsível.',
    imageSrc: '/gestao_de_projectos.png',
    imageAlt: 'Equipa em reunião de gestão de projectos e fiscalização de obras',
    icon: HardHat,
    overviewParagraphs: [
      'A experiência técnica da equipa da REC, aliada a parcerias estratégicas com entidades de referência no sector, permite-nos disponibilizar soluções integradas e ajustadas às exigências de cada projecto.',
      'Actuamos como parceiro do cliente ao longo de todo o processo, apoiando a coordenação das diferentes especialidades, o acompanhamento da execução, o controlo de custos, a fiscalização da qualidade e a gestão de riscos. O nosso objectivo é assegurar que cada projecto seja desenvolvido com rigor, eficiência e total alinhamento com os objectivos técnicos, funcionais e financeiros estabelecidos.',
    ],
    overviewHighlights: [
      {
        title: 'Equipa multidisciplinar e parcerias estratégicas',
        description:
          'Reunimos competências complementares para coordenar diferentes disciplinas e garantir decisões tecnicamente consistentes.',
      },
      {
        title: 'Serviço chave-na-mão',
        description:
          'Oferecemos um acompanhamento estruturado e abrangente, desde o planeamento até à entrega final, simplificando a gestão para o cliente e assegurando maior controlo sobre todas as fases do projecto.',
      },
      {
        title: 'Controlo de qualidade, prazo e custo',
        description:
          'Adoptamos metodologias de acompanhamento e fiscalização orientadas para o cumprimento de cronogramas, controlo orçamental, conformidade técnica e minimização de desvios durante a execução.',
      },
    ],
    offers: [
      {
        title: 'Gestão Integral de Projecto',
        description:
          'Gerimos todas as etapas do projecto com visão estratégica, controlo permanente e foco na concretização dos objectivos definidos, assegurando articulação eficaz entre recursos, intervenientes e resultados.',
        items: [
          'Planeamento global e definição de fases críticas',
          'Coordenação de equipas, fornecedores e consultores',
          'Monitorização de objectivos, risco e desempenho',
        ],
      },
      {
        title: 'Coordenação e Fiscalização',
        description:
          'Acompanhamos a execução em obra, promovendo alinhamento técnico, segurança, conformidade regulamentar e controlo de qualidade ao longo de todo o processo construtivo.',
        items: [
          'Fiscalização técnica e validação de conformidade',
          'Relatórios de progresso e controlo de obra',
          'Articulação entre dono de obra, projectistas e empreiteiros',
        ],
      },
      {
        title: 'Custos, Orçamentação e Engenharia',
        description:
          'Prestamos apoio técnico e financeiro ao projecto, desde a estimativa inicial até ao acompanhamento durante a execução, contribuindo para uma gestão mais eficiente e sustentável.',
        items: [
          'Preparação e revisão de orçamentos',
          'Gestão de custos e mitigação de desvios financeiros',
          'Apoio em arquitectura e engenharia com foco funcional',
        ],
      },
    ],
    processTitle: '3 Etapas do Nosso Acompanhamento',
    processIntro:
      'Acompanhamos o projecto com disciplina de execução e comunicação contínua, assegurando visibilidade sobre cada fase crítica.',
    processSteps: [
      {
        title: 'Planeamento e estruturação',
        description:
          'Definimos objectivos, cronograma, orçamento, equipa e matriz de responsabilidades para uma base de trabalho controlada.',
      },
      {
        title: 'Coordenação e fiscalização',
        description:
          'Supervisionamos a execução, validamos conformidade e antecipamos desvios que possam afectar qualidade, prazo ou custo.',
      },
      {
        title: 'Entrega e fecho técnico',
        description:
          'Consolidamos documentação, verificações finais e recomendações para garantir uma transição segura e organizada.',
      },
    ],
    reasons: [
      {
        icon: ShieldCheck,
        title: 'Controlo rigoroso',
        description:
          'Acompanhamos decisões e execução com foco na qualidade, previsibilidade e mitigação de risco.',
      },
      {
        icon: HardHat,
        title: 'Experiência em obra e gestão',
        description:
          'Combinamos coordenação técnica, conhecimento prático e visão estratégica para responder de forma eficaz aos desafios reais de cada projecto.',
      },
      {
        icon: ClipboardCheck,
        title: 'Relatórios claros e accionáveis',
        description:
          'Fornecemos informação objectiva, estruturada e útil para apoiar decisões rápidas, fundamentadas e alinhadas com os interesses do cliente e do investimento.',
      },
    ],
    brochureDownloads: [
      {
        label: 'Brochura de Gestão de Projectos',
        fileName: 'gestao-de-projectos.txt',
        href: '/brochuras/gestao-de-projectos.txt',
      },
      {
        label: 'Apresentação Institucional REC',
        fileName: 'rec-apresentacao.txt',
        href: '/brochuras/rec-apresentacao.txt',
      },
    ],
  },
  {
    slug: 'peritagens-tecnicas',
    href: '/servicos/peritagens-tecnicas',
    navLabel: 'Peritagens Técnicas',
    title: 'Peritagens Técnicas',
    shortTitle: 'Peritagens Técnicas',
    description:
      'Realizamos inspecções, diagnósticos e relatórios técnicos detalhados, com o objectivo de identificar patologias, riscos, anomalias construtivas e necessidades de intervenção, com rigor, clareza e independência.',
    lead:
      'Avaliação rigorosa, diagnóstico fiável e documentação técnica sólida para decisões de compra, financiamento, manutenção e gestão patrimonial.',
    imageSrc: '/peritagens_tecnicas.png',
    imageAlt: 'Profissionais em análise técnica e peritagem de edifícios',
    icon: ClipboardCheck,
    overviewParagraphs: [
      'Na REC, compreendemos que decisões relacionadas com a aquisição, alienação, financiamento, conservação ou valorização de imóveis exigem informação técnica fiável, objectiva e devidamente fundamentada.',
      'O nosso serviço de Peritagens Técnicas combina vistorias de campo, análise documental, verificação de conformidade e, sempre que necessário, levantamentos quantitativos e análises complementares, com vista à produção de relatórios claros, completos e ajustados às exigências de cada contexto.',
    ],
    overviewHighlights: [
      {
        title: 'Rigor técnico especializado',
        description:
          'A nossa equipa actua com método, prudência e critérios técnicos consistentes, assegurando diagnósticos fiáveis e avaliações fundamentadas.',
      },
      {
        title: 'Soluções personalizadas',
        description:
          'Adaptamos o âmbito da peritagem, o nível de detalhe e o formato do relatório às necessidades específicas do cliente, da operação ou da entidade financiadora.',
      },
      {
        title: 'Cobertura completa',
        description:
          'Da inspecção física do imóvel à due diligence técnica e ao levantamento quantitativo, asseguramos um acompanhamento completo em diferentes fases do processo.',
      },
    ],
    offers: [
      {
        title: 'Peritagem e Inspecção de Edifícios',
        description:
          'Avaliamos o estado físico e o desempenho técnico de edifícios e outras construções, com o objectivo de identificar patologias, anomalias, riscos e necessidades de intervenção.',
        items: [
          'Inspecção estrutural e análise de acabamentos',
          'Identificação de patologias construtivas e anomalias visíveis',
          'Verificação de conformidade técnica, funcional e legal',
        ],
      },
      {
        title: 'Due Diligence e Quantity Surveying',
        description:
          'Analisamos documentação, quantidades, custos e condições de execução, reduzindo incertezas e reforçando a segurança das decisões de investimento ou desenvolvimento.',
        items: [
          'Due diligence técnica em processo de construção ou reabilitação, de aquisição ou investimento',
          'Levantamento quantitativo de materiais, áreas e volumes',
          'Apoio à preparação e validação de orçamentos realistas',
        ],
      },
      {
        title: 'Relatórios para Financiamento e Gestão Patrimonial',
        description:
          'Produzimos relatórios de progresso e inventários técnicos que apoiam bancos, investidores e proprietários na gestão dos seus activos, acompanhamento e valorização dos seus activos.',
        items: [
          'Vistorias de obra para efeitos de financiamento',
          'Relatórios de progresso físico e controlo de qualidade',
          'Levantamento técnico patrimonial detalhado de edifícios',
        ],
      },
    ],
    processTitle: '3 Etapas do Nosso Acompanhamento',
    processIntro:
      'Cada peritagem é conduzida com método, evidência e clareza, para que o cliente compreenda o estado real do activo e os riscos associados e as implicações técnicas da decisão a tomar.',
    processSteps: [
      {
        title: 'Vistoria e levantamento',
        description:
          'Procedemos à recolha de informação em campo, incluindo observação directa, registo fotográfico, medições e recolha de elementos documentais necessários à análise técnica.',
      },
      {
        title: 'Diagnóstico e validação',
        description:
          'Analisamos anomalias, conformidade, custos e implicações técnicas com base em critérios objectivos e enquadramento adequado ao tipo de activo e à finalidade da peritagem.',
      },
      {
        title: 'Relatório e recomendações',
        description:
          'Entregamos conclusões claras, prioridades de intervenção e elementos úteis para negociação, manutenção, financiamento ou reabilitação.',
      },
    ],
    reasons: [
      {
        icon: ScanSearch,
        title: 'Diagnóstico preciso',
        description:
          'Avaliamos cada activo com profundidade técnica e sentido crítico, reduzindo incertezas e permitindo antecipar necessidades de intervenção.',
      },
      {
        icon: FileSearch,
        title: 'Relatórios claros',
        description:
          'Transformamos informação técnica complexa em conclusões objectivas, estruturadas e úteis para clientes, bancos, investidores e equipas técnicas.',
      },
      {
        icon: Wrench,
        title: 'Suporte à acção',
        description:
          'As nossas recomendações ajudam a priorizar intervenções, mitigar riscos e proteger o valor patrimonial do activo ao longo do tempo.',
      },
    ],
    brochureDownloads: [
      {
        label: 'Brochura de Peritagens Técnicas',
        fileName: 'peritagens-tecnicas.txt',
        href: '/brochuras/peritagens-tecnicas.txt',
      },
      {
        label: 'Apresentação Institucional REC',
        fileName: 'rec-apresentacao.txt',
        href: '/brochuras/rec-apresentacao.txt',
      },
    ],
  },
] as const

export const serviceNavItems: readonly ServiceNavItem[] = services.map((service) => ({
  label: service.navLabel,
  href: service.href,
}))

export const serviceStats = [
  {
    value: '+20',
    label: 'Anos de experiência',
    description: 'Desde 2000 a apoiar decisões imobiliárias com rigor técnico.',
  },
  {
    value: '11',
    label: 'Províncias abrangidas',
    description: 'Cobertura nacional com leitura local do mercado moçambicano.',
  },
  {
    value: '+2.500',
    label: 'Clientes atendidos',
    description: 'Empresas, instituições e particulares com necessidades diversas.',
  },
] as const

export function getServiceBySlug(slug: string) {
  return services.find((service) => service.slug === slug) ?? null
}

function getServiceIconConfig(slug: string) {
  return serviceIconMap[slug as keyof typeof serviceIconMap] ?? serviceIconMap['avaliacao-e-consultoria']
}

export function stripServiceIcons(service: ServiceDetail): ServiceDetailData {
  return {
    slug: service.slug,
    href: service.href,
    navLabel: service.navLabel,
    title: service.title,
    shortTitle: service.shortTitle,
    description: service.description,
    lead: service.lead,
    imageSrc: service.imageSrc,
    imageAlt: service.imageAlt,
    overviewParagraphs: service.overviewParagraphs,
    overviewHighlights: service.overviewHighlights,
    offers: service.offers,
    processTitle: service.processTitle,
    processIntro: service.processIntro,
    processSteps: service.processSteps,
    reasons: service.reasons.map(({ title, description }) => ({ title, description })),
    brochureDownloads: service.brochureDownloads,
  }
}

export function attachServiceIcons(service: ServiceDetailData): ServiceDetail {
  const config = getServiceIconConfig(service.slug)

  return {
    ...service,
    icon: config.icon,
    reasons: service.reasons.map((reason, index) => ({
      ...reason,
      icon: config.reasons[index] ?? config.icon,
    })),
  }
}

export function attachServiceIconsToList(services: readonly ServiceDetailData[]): ServiceDetail[] {
  return services.map(attachServiceIcons)
}

export function getSerializableFallbackServices(): ServiceDetailData[] {
  return services.map(stripServiceIcons)
}

export function requireServiceBySlug(slug: string) {
  const service = getServiceBySlug(slug)

  if (!service) {
    throw new Error(`Serviço não encontrado: ${slug}`)
  }

  return service
}
