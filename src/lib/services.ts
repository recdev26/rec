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

export const services: readonly ServiceDetail[] = [
  {
    slug: 'avaliacao-e-consultoria',
    href: '/servicos/avaliacao-e-consultoria',
    navLabel: 'Avaliação e Consultoria',
    title: 'Avaliação e Consultoria Imobiliária',
    shortTitle: 'Avaliação e Consultoria',
    description:
      'Desenvolvemos avaliações criteriosas e independentes de imóveis e activos, seguindo padrões nacionais e internacionais para apoiar decisões seguras e fundamentadas.',
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
          'Realizamos avaliações independentes e devidamente fundamentadas para diferentes classes de activos, com enquadramento técnico e financeiro sólido.',
        items: [
          'Imobiliários: habitação, escritórios, comércio e hotelaria',
          'Industriais: máquinas, equipamentos e instalações fabris',
          'Biológicos: plantações, gado e outros activos vivos',
          'Activos fixos tangíveis: inventariação, etiquetagem e reconciliação',
          'Intangíveis e investimentos: patentes, concessões, licenças e contractos de leasing',
        ],
      },
      {
        title: 'Estudos e Consultoria Estratégica',
        description:
          'Apoiamos decisões de expansão, optimização e investimento com análises orientadas para viabilidade, risco e posicionamento competitivo.',
        items: [
          'Estudos de mercado e análise de oferta e procura',
          'Viabilidade financeira e projecções de investimento',
          'Consultoria estratégica para desenvolvimento imobiliário',
          'Peritagem de seguros e revisão de apólices',
        ],
      },
      {
        title: 'Inventariação e Tracking de Activos',
        description:
          'Organizamos activos físicos com processos digitais e controlo permanente, melhorando auditorias, reconciliação patrimonial e monitorização operacional.',
        items: [
          'Etiquetagem em poliéster térmico com registo fotográfico',
          'Base de dados digital com acesso contínuo',
          'Etiquetas RFID para localização automática até 10 metros',
          'Verificações periódicas com redução de tempo e custo',
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
          'Actuamos com alinhamento a normas e metodologias internacionais, reforçando a confiança dos clientes e parceiros.',
      },
      {
        icon: BarChart3,
        title: 'Leitura real do mercado',
        description:
          'Combinamos visão macro, contexto local e sensibilidade comercial para apoiar decisões mais seguras.',
      },
      {
        icon: Layers3,
        title: 'Soluções completas',
        description:
          'Avaliamos, organizamos e estruturamos informação crítica para que o cliente tenha uma base sólida de actuação.',
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
      'Coordenamos todas as fases do projecto, desde o planeamento inicial até à entrega final, assegurando prazos, orçamentos e padrões de qualidade.',
    lead:
      'Do conceito à entrega, assumimos o controlo técnico e operativo necessário para transformar planeamento em execução disciplinada e previsível.',
    imageSrc: '/gestao_de_projectos.png',
    imageAlt: 'Equipa em reunião de gestão de projectos e fiscalização de obras',
    icon: HardHat,
    overviewParagraphs: [
      'A vasta experiência técnica da equipa da REC, aliada a parcerias estratégicas com empresas de referência no sector, permite-nos oferecer soluções completas e integradas desde a fase inicial do projecto até à sua entrega final.',
      'Actuamos como parceiro do cliente na coordenação de equipas, controlo de custos, fiscalização da qualidade e gestão de riscos, assegurando uma execução rigorosa e alinhada com os objectivos definidos.',
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
          'Planeamos, acompanhamos e entregamos com controlo integral, reduzindo desvios e simplificando a gestão para o cliente.',
      },
      {
        title: 'Controlo de qualidade, prazo e custo',
        description:
          'Utilizamos metodologias consolidadas para manter cronogramas realistas, orçamentos controlados e conformidade regulamentar.',
      },
    ],
    offers: [
      {
        title: 'Gestão Integral de Projecto',
        description:
          'Gerimos todas as etapas do projecto com visão estratégica e controlo permanente dos recursos, dos intervenientes e dos resultados.',
        items: [
          'Planeamento global e definição de fases críticas',
          'Coordenação de equipas, fornecedores e consultores',
          'Monitorização de objectivos, risco e desempenho',
        ],
      },
      {
        title: 'Coordenação e Fiscalização',
        description:
          'Acompanhamos a execução em obra, promovendo alinhamento técnico, segurança, conformidade e qualidade ao longo do processo.',
        items: [
          'Fiscalização técnica e validação de conformidade',
          'Relatórios de progresso e controlo de obra',
          'Articulação entre dono de obra, projectistas e empreiteiros',
        ],
      },
      {
        title: 'Custos, Orçamentação e Engenharia',
        description:
          'Damos suporte à sustentabilidade financeira e técnica do projecto, desde a estimativa inicial até ao ajustamento durante a execução.',
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
          'Combinamos coordenação técnica e visão prática para responder aos desafios reais de cada projecto.',
      },
      {
        icon: ClipboardCheck,
        title: 'Relatórios claros e accionáveis',
        description:
          'Fornecemos informação objectiva para apoiar decisões rápidas, sustentadas e alinhadas com o investimento.',
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
      'Realizamos inspecções e relatórios técnicos detalhados que identificam riscos, patologias e necessidades de intervenção com rigor e clareza.',
    lead:
      'Avaliação rigorosa, diagnóstico fiável e documentação técnica sólida para decisões de compra, financiamento, manutenção e gestão patrimonial.',
    imageSrc: '/peritagens_tecnicas.png',
    imageAlt: 'Profissionais em análise técnica e peritagem de edifícios',
    icon: ClipboardCheck,
    overviewParagraphs: [
      'Na REC, compreendemos que decisões relacionadas com compra, venda, financiamento ou manutenção de imóveis dependem de informações técnicas fiáveis e detalhadas.',
      'O nosso serviço de Peritagens Técnicas combina vistorias de campo, análises instrumentais e levantamento documental para entregar relatórios completos, claros e ajustados às exigências de cada contexto.',
    ],
    overviewHighlights: [
      {
        title: 'Rigor técnico especializado',
        description:
          'A nossa equipa utiliza metodologias reconhecidas internacionalmente para garantir diagnósticos precisos e confiáveis.',
      },
      {
        title: 'Soluções personalizadas',
        description:
          'Adaptamos o nível de detalhe e o formato do relatório às necessidades do cliente, da operação ou da instituição financeira.',
      },
      {
        title: 'Cobertura completa',
        description:
          'Do levantamento quantitativo à due diligence técnica, asseguramos suporte integral em todas as fases do processo.',
      },
    ],
    offers: [
      {
        title: 'Peritagem e Inspecção de Edifícios',
        description:
          'Avaliamos estruturas, acabamentos e desempenho técnico do imóvel para identificar patologias, riscos e necessidades de intervenção.',
        items: [
          'Inspecção estrutural e de acabamentos',
          'Identificação de patologias e anomalias',
          'Verificação de conformidade técnica e legal',
        ],
      },
      {
        title: 'Due Diligence e Quantity Surveying',
        description:
          'Analisamos documentação, quantidades, custos e execução para reduzir incerteza e proteger decisões de investimento.',
        items: [
          'Due diligence técnica pré-aquisição',
          'Levantamento quantitativo de materiais e volumes',
          'Suporte à elaboração de orçamentos realistas',
        ],
      },
      {
        title: 'Relatórios para Financiamento e Gestão Patrimonial',
        description:
          'Produzimos relatórios de progresso e inventários técnicos que apoiam bancos, investidores e proprietários na gestão dos seus activos.',
        items: [
          'Vistorias de obra para financiamento',
          'Relatórios de progresso e qualidade',
          'Levantamento patrimonial detalhado de edifícios',
        ],
      },
    ],
    processTitle: '3 Etapas do Nosso Acompanhamento',
    processIntro:
      'Cada peritagem é conduzida com método, evidência e clareza, para que o cliente compreenda o estado real do activo e os riscos associados.',
    processSteps: [
      {
        title: 'Vistoria e levantamento',
        description:
          'Recolhemos dados em campo, imagens, medições e elementos documentais necessários ao diagnóstico técnico.',
      },
      {
        title: 'Diagnóstico e validação',
        description:
          'Analisamos anomalias, conformidade, custos e implicações técnicas com base em critérios objectivos.',
      },
      {
        title: 'Relatório e recomendações',
        description:
          'Entregamos conclusões claras, prioridades de intervenção e elementos úteis para negociação, manutenção ou financiamento.',
      },
    ],
    reasons: [
      {
        icon: ScanSearch,
        title: 'Diagnóstico preciso',
        description:
          'Avaliamos o activo com profundidade técnica para reduzir incerteza e antecipar necessidades de intervenção.',
      },
      {
        icon: FileSearch,
        title: 'Relatórios claros',
        description:
          'Traduzimos informação complexa em conclusões úteis para clientes, tribunais, bancos e equipas técnicas.',
      },
      {
        icon: Wrench,
        title: 'Suporte à acção',
        description:
          'As nossas recomendações ajudam a priorizar reparações, gerir risco e proteger o valor patrimonial.',
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

export function requireServiceBySlug(slug: string) {
  const service = getServiceBySlug(slug)

  if (!service) {
    throw new Error(`Serviço não encontrado: ${slug}`)
  }

  return service
}
