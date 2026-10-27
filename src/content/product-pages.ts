import type { App } from './en/site.ts';
import type { LocaleCode } from './locales.ts';
import { translatedProductDetail } from './product-translations.ts';
// Public store listings checked on 26 October 2026. Unreleased work is
// deliberately described separately from capabilities available to download.
export const productSlugs = ['biblelink', 'void-striker', 'nova-frontier', 'trophiva', 'galaxy-forge', 'loop', 'shield', 'guard', 'personal-finance', 'special-dates'];
export const productAccent: Record<string, string> = {
    biblelink: '#a7c6b0', 'void-striker': '#81b9ff', 'nova-frontier': '#e7bc84',
    trophiva: '#b2d6a0', 'galaxy-forge': '#baa7f4', loop: '#9ecbff',
    shield: '#92d5cd', guard: '#d9c29b', 'personal-finance': '#a0ccbb', 'special-dates': '#e4adca',
};
export const pageCopy = {
    pt: { overview: 'Visão geral', features: 'A experiência', gallery: 'Por dentro do produto', film: 'Veja em movimento', availability: 'Disponibilidade', related: 'Mais do universo NAVL', details: 'Informações do produto', planned: 'Recursos planejados', concept: 'Estudo visual · não representa uma interface pronta', inProgress: 'Em desenvolvimento', discovery: 'Em pesquisa', approved: 'Em planejamento', paused: 'Desenvolvimento suspenso', future: 'Um olhar para o que vem a seguir.', noMedia: 'As imagens e os vídeos serão apresentados quando houver material do produto pronto para compartilhar.', price: 'Preço planejado', payment: 'Pagamento único · sem assinatura · sem serviços pagos de IA', preview: 'Prévia local · aguardando sua avaliação', close: 'Fechar imagem', enlarge: 'Ampliar imagem', sources: 'Informações conferidas em 26 de outubro de 2026. A disponibilidade pode variar por plataforma e região.', upcoming: 'Evolução do produto', privacy: 'Privacidade e suporte', explore: 'Conhecer o produto', platform: 'Plataformas', stage: 'Estágio atual', videoNote: 'Vídeo de apresentação. A aparência pode diferir da versão mais recente.' },
    en: { overview: 'Overview', features: 'The experience', gallery: 'Inside the product', film: 'See it in motion', availability: 'Availability', related: 'More from NAVL', details: 'Product information', planned: 'Planned capabilities', concept: 'Visual study · not a finished interface', inProgress: 'In development', discovery: 'In discovery', approved: 'Planned product', paused: 'Development paused', future: 'A look at what comes next.', noMedia: 'Images and videos will appear when product material is ready to share.', price: 'Planned price', payment: 'One-time purchase · no subscription · no paid AI services', preview: 'Local preview · awaiting your review', close: 'Close image', enlarge: 'Enlarge image', sources: 'Information checked on October 26, 2026. Availability may vary by platform and region.', upcoming: 'Product evolution', privacy: 'Privacy and support', explore: 'Explore product', platform: 'Platforms', stage: 'Current stage', videoNote: 'Presentation film. Appearance may differ from the latest version.' },
    es: { overview: 'Descripción', features: 'La experiencia', gallery: 'Dentro del producto', film: 'Míralo en acción', availability: 'Disponibilidad', related: 'Más de NAVL', details: 'Información del producto', planned: 'Funciones previstas', concept: 'Estudio visual · no es una interfaz terminada', inProgress: 'En desarrollo', discovery: 'En investigación', approved: 'En planificación', paused: 'Desarrollo suspendido', future: 'Una mirada al futuro.', noMedia: 'Las imágenes y los vídeos se mostrarán cuando haya material listo para compartir.', price: 'Precio previsto', payment: 'Pago único · sin suscripción · sin servicios de IA de pago', preview: 'Vista previa local · pendiente de revisión', close: 'Cerrar imagen', enlarge: 'Ampliar imagen', sources: 'Información revisada el 26 de octubre de 2026. La disponibilidad varía según plataforma y región.', upcoming: 'Evolución del producto', privacy: 'Privacidad y soporte', explore: 'Conocer el producto', platform: 'Plataformas', stage: 'Estado actual', videoNote: 'Vídeo de presentación. El aspecto puede diferir de la última versión.' },
    ko: { overview: '개요', features: '제품 경험', gallery: '제품 둘러보기', film: '영상 보기', availability: '출시 정보', related: 'NAVL의 다른 제품', details: '제품 정보', planned: '계획된 기능', concept: '비주얼 콘셉트 · 완성된 인터페이스가 아닙니다', inProgress: '개발 중', discovery: '연구 중', approved: '기획 중', paused: '개발 일시 중단', future: '다가올 경험을 만나보세요.', noMedia: '공개 가능한 제품 이미지와 영상이 준비되면 소개합니다.', price: '예정 가격', payment: '일회성 구매 · 구독 없음 · 유료 AI 서비스 없음', preview: '로컬 미리보기 · 검토 대기 중', close: '이미지 닫기', enlarge: '이미지 확대', sources: '2026년 10월 26일 확인. 플랫폼과 지역에 따라 제공 여부가 다를 수 있습니다.', upcoming: '제품의 다음 단계', privacy: '개인정보 및 지원', explore: '제품 알아보기', platform: '플랫폼', stage: '현재 단계', videoNote: '소개 영상입니다. 최신 버전과 모습이 다를 수 있습니다.' },
    ar: { overview: 'نظرة عامة', features: 'التجربة', gallery: 'داخل المنتج', film: 'شاهد الفيديو', availability: 'التوفّر', related: 'المزيد من NAVL', details: 'معلومات المنتج', planned: 'الميزات المخطط لها', concept: 'تصور بصري · ليس واجهة مكتملة', inProgress: 'قيد التطوير', discovery: 'قيد البحث', approved: 'قيد التخطيط', paused: 'التطوير متوقف مؤقتاً', future: 'نظرة إلى ما هو قادم.', noMedia: 'سنقدم الصور والفيديو عندما تصبح مواد المنتج جاهزة للمشاركة.', price: 'السعر المخطط', payment: 'شراء لمرة واحدة · بلا اشتراك · بلا خدمات ذكاء اصطناعي مدفوعة', preview: 'معاينة محلية · بانتظار المراجعة', close: 'إغلاق الصورة', enlarge: 'تكبير الصورة', sources: 'تمت مراجعة المعلومات في 26 أكتوبر 2026. قد يختلف التوفر بحسب المنصة والمنطقة.', upcoming: 'تطور المنتج', privacy: 'الخصوصية والدعم', explore: 'اكتشف المنتج', platform: 'المنصات', stage: 'المرحلة الحالية', videoNote: 'فيديو تعريفي. قد يختلف المظهر عن أحدث إصدار.' },
};
type Feature = {
    title: string;
    body: string;
};
type Detail = {
    headline: string;
    intro: string;
    features: Feature[];
    note?: string;
    price?: string;
    status?: 'approved' | 'paused';
};
type LocalDetail = {
    pt: Detail;
    en: Detail;
};
const feature = (title: string, body: string): Feature => ({ title, body });
const details: Record<string, LocalDetail> = {
    loop: {
        pt: { headline: 'Inteligência para o próximo passo.', intro: 'LOOP é um aplicativo de consumo em desenvolvimento, orientado à inteligência proativa e pensado para uma experiência multilíngue.', features: [feature('Pensado para antecipar', 'A inteligência proativa é a direção do projeto; os fluxos e recursos detalhados ainda não foram anunciados.'), feature('Mais de um idioma desde o início', 'Inglês, português e espanhol fazem parte da proposta inicial.')], note: 'Sem versão pública ou data de lançamento anunciada. A imagem é um estudo conceitual.' },
        en: { headline: 'Intelligence for the next step.', intro: 'LOOP is a consumer application in development, centered on proactive intelligence and a multilingual experience.', features: [feature('Designed to anticipate', 'Proactive intelligence is the project direction; detailed workflows and capabilities have not been announced.'), feature('Multilingual from the start', 'English, Portuguese, and Spanish are part of the initial proposal.')], note: 'No public release or announced launch date. The image is concept artwork.' },
    },
    shield: {
        pt: { headline: 'Uma pausa antes de confiar.', intro: 'SHIELD é um conceito de proteção digital em pesquisa: ajudar a avaliar uma interação antes de clicar, responder ou enviar dinheiro.', features: [feature('Analisar o que você escolhe compartilhar', 'Mensagens, links, imagens e QR codes são possibilidades estudadas na avaliação de viabilidade.'), feature('Clareza sobre os limites', 'As possibilidades diferem entre iPhone e Android. Não há promessa de leitura automática de conversas ou proteção universal.'), feature('Evidências antes de promessas', 'Detecção, precisão e eficácia precisam ser validadas antes de virar recursos comerciais.')], note: 'Produto em pesquisa. O estudo de viabilidade não representa um aplicativo concluído ou uma garantia de segurança.' },
        en: { headline: 'Pause before you trust.', intro: 'SHIELD is a digital protection concept in research: helping people assess an interaction before clicking, replying, or sending money.', features: [feature('Review what you choose to share', 'Messages, links, images, and QR codes are possibilities explored in feasibility research.'), feature('Clear about limitations', 'Possibilities differ between iPhone and Android. There is no promise of automatic conversation access or universal protection.'), feature('Evidence before promises', 'Detection, accuracy, and effectiveness must be validated before becoming commercial features.')], note: 'A research-stage product. The feasibility study is not a finished app or a guarantee of safety.' },
    },
    guard: {
        pt: { headline: 'Olhe de perto para o que passa.', intro: 'GUARD explora uma ideia de proteção financeira: dar mais atenção às renovações, períodos de teste e prazos que passam despercebidos.', features: [feature('Os pequenos prazos importam', 'Renovações, mudanças de preço e janelas de devolução orientam a pesquisa do conceito.'), feature('Uma ideia em descoberta', 'O produto ainda não conecta contas bancárias, cancela serviços, solicita reembolsos ou movimenta dinheiro.')], note: 'Conceito em pesquisa, separado do futuro aplicativo Finanças Pessoais Offline. Não há funcionalidades públicas ou data de lançamento.' },
        en: { headline: 'Notice what slips by.', intro: 'GUARD explores a financial protection idea: paying closer attention to renewals, trials, and overlooked deadlines.', features: [feature('Small deadlines matter', 'Renewals, price changes, and return windows guide the concept research.'), feature('An idea in discovery', 'The product does not connect bank accounts, cancel services, request refunds, or move money.')], note: 'A research concept, separate from the future Offline Personal Finance app. No public capabilities or launch date.' },
    },
    'galaxy-forge': {
        pt: { headline: 'Outra galáxia. Um novo começo.', intro: 'GALAXY FORGE é um jogo mobile em desenvolvimento. A direção inicial é um shooter espacial vertical com controles por toque.', features: [feature('Feito para a tela vertical', 'O projeto prevê uma experiência para iPhone e Android, com foco em desempenho mobile.'), feature('O primeiro ciclo de combate', 'Nave, movimento por toque, tiro automático, ondas de inimigos e chefe fazem parte do objetivo do protótipo.')], note: 'Os objetivos do protótipo não representam recursos comerciais concluídos. A arte é conceitual; não há lançamento anunciado.' },
        en: { headline: 'Another galaxy. A new beginning.', intro: 'GALAXY FORGE is a mobile game in development. Its initial direction is a vertical space shooter with touch controls.', features: [feature('Made for portrait play', 'The project targets iPhone and Android, with a focus on mobile performance.'), feature('The first combat loop', 'A ship, touch movement, automatic fire, enemy waves, and a boss form the prototype objective.')], note: 'Prototype objectives are not completed commercial features. The artwork is conceptual; no launch has been announced.' },
    },
    biblelink: {
        pt: { headline: 'Mais espaço para a Palavra.', intro: 'Leitura, oração e reflexão em uma experiência tranquila, feita para acompanhar o seu dia — mesmo offline.', features: [feature('Leia no seu ritmo', '20 traduções em nove idiomas, comparação de traduções e ajustes de fonte, tema e tamanho do texto.'), feature('Crie um hábito de leitura', 'Seis planos de 21 a 365 dias, estudos do Momento com Deus e orações para diferentes momentos.'), feature('Guarde o que importa', 'Favoritos, destaques, notas e widgets aproximam as passagens da sua rotina.'), feature('Ouça e continue', 'Áudio de capítulos com as vozes do dispositivo e leitura disponível sem conexão.')], note: 'Experimente todos os recursos por sete dias. Depois, continue com uma compra única, sem assinatura. Confira nas lojas os recursos disponíveis em cada plataforma.' },
        en: { headline: 'Make room for the Word.', intro: 'Reading, prayer, and reflection in a calm experience that accompanies your day, even offline.', features: [feature('Read at your pace', '20 translations in nine languages, translation comparison, and adjustable text, fonts, and themes.'), feature('Build a reading rhythm', 'Six plans from 21 to 365 days, Moment with God studies, and prayers for different occasions.'), feature('Keep what matters', 'Favorites, highlights, notes, and widgets bring meaningful passages into your routine.'), feature('Listen and continue', 'Chapter audio with device voices and reading without a connection.')], note: 'Try all features for seven days, then continue with a one-time purchase. No subscription. Check the stores for the features available on each platform.' },
    },
    'void-striker': {
        pt: { headline: 'Entre no vazio. Volte mais forte.', intro: 'Combate espacial de inspiração arcade, feito para jogar com uma mão. Escolha sua nave e encontre seu caminho entre ondas de inimigos.', features: [feature('47 fases. Cinco setores.', 'A campanha da versão 1.1.3 leva você a dez confrontos com chefes e ao encontro final com Omega Archon.'), feature('Seu hangar, seu estilo', 'Sete naves desbloqueáveis e cinco armas para desenvolver com os recursos conquistados nas partidas.'), feature('Sempre mais uma partida', 'Campanha, Sobrevivência e Desafio Diário com ranking local oferecem caminhos diferentes para jogar.'), feature('O jogo em primeiro lugar', 'Sem anúncios ou compras dentro do jogo. Jogue em português, inglês ou espanhol.')], note: 'Versão 1.1.3 confirmada nas informações públicas das lojas. Consulte cada loja para preço e disponibilidade na sua região.' },
        en: { headline: 'Into the void. Back stronger.', intro: 'Arcade-inspired space combat made for one-handed play. Choose your starfighter and navigate relentless enemy waves.', features: [feature('47 waves. Five sectors.', 'The version 1.1.3 Campaign brings ten boss encounters and a final battle against Omega Archon.'), feature('Your hangar. Your style.', 'Seven unlockable ships and five weapons developed with resources earned while playing.'), feature('One more run', 'Campaign, Survival, and a Daily Challenge with a local leaderboard offer different ways to play.'), feature('The game comes first', 'No ads or in-app purchases. Play in English, Portuguese, or Spanish.')], note: 'Version 1.1.3 confirmed in public store information. Check each store for regional price and availability.' },
    },
    'nova-frontier': {
        pt: { headline: 'A próxima fronteira é sua.', intro: 'Um jogo de estratégia original em desenvolvimento. O jogador define o plano; a automação executa a estratégia.', features: [feature('Decisões que orientam a jornada', 'Campanha, mapa, preparação e combate formam o ciclo do projeto atual.'), feature('Uma experiência em construção', 'As versões de desenvolvimento incluem progressão, comandos e continuidade de partida.'), feature('Um universo próprio', 'Arte, cenários e apresentação seguem em evolução. A imagem desta página é conceitual.')], note: 'Existem builds de desenvolvimento para desktop e mobile. O jogo ainda não foi lançado, e não há data comercial anunciada.' },
        en: { headline: 'The next frontier is yours.', intro: 'An original strategy game in development. The player defines the plan; automation executes the strategy.', features: [feature('Decisions shape the journey', 'Campaign, map, preparation, and combat form the current project loop.'), feature('An experience taking shape', 'Development builds include progression, commands, and continued play.'), feature('A world of its own', 'Art, environments, and presentation are evolving. The image on this page is concept artwork.')], note: 'Desktop and mobile development builds exist. The game is unreleased, with no commercial launch date announced.' },
    },
    trophiva: {
        pt: { headline: 'Alimentação com mais clareza.', intro: 'Registrar, compreender e planejar: um produto de nutrição em desenvolvimento para simplificar as escolhas do dia a dia.', features: [feature('Registrar com menos esforço', 'Alimentos, hidratação e uma biblioteca pessoal fazem parte do trabalho atual.'), feature('Compreender seu dia', 'A visão do produto reúne metas, nutrientes e contexto para decisões mais informadas.'), feature('Planejar com flexibilidade', 'Planejamento de refeições e experiência local são direções do produto em desenvolvimento.')], note: 'Em desenvolvimento para iPhone e Android, com trabalho também para Apple Watch. Recursos e apresentação podem mudar. Não substitui orientação de profissionais de saúde.' },
        en: { headline: 'Bring clarity to everyday nutrition.', intro: 'Track, understand, and plan: a nutrition product in development to simplify everyday food choices.', features: [feature('Less effort to track', 'Food, hydration, and a personal library are part of the current work.'), feature('Understand your day', 'The product vision connects goals, nutrients, and context for informed decisions.'), feature('Plan with flexibility', 'Meal planning and a local-first experience are development directions.')], note: 'In development for iPhone and Android, with Apple Watch work too. Capabilities and appearance may change. Not a substitute for professional healthcare advice.' },
    },
    'personal-finance': {
        pt: { headline: 'Seu dinheiro. Seu controle.', intro: 'Um aplicativo de finanças pessoais offline, aprovado como futuro produto da NAVL. A proposta é organizar a vida financeira em um só lugar.', features: [feature('Organizar o dia a dia', 'Receitas, despesas, contas e cartões estão no escopo planejado.'), feature('Enxergar o próximo passo', 'Orçamentos, metas de economia e relatórios fazem parte da proposta aprovada.'), feature('Manter uma cópia com você', 'Backups locais e uso offline estão previstos desde a concepção.')], price: 'US$ 7,99', status: 'approved', note: 'Desenvolvimento ainda não iniciado. Nome comercial final, interface e data de lançamento não foram definidos. O preço é planejado, não uma oferta disponível.' },
        en: { headline: 'Your money. Your control.', intro: 'An offline personal finance app approved as a future NAVL product, designed to bring everyday finances together.', features: [feature('Organize daily finances', 'Income, expenses, accounts, and cards are in the planned scope.'), feature('See the next step', 'Budgets, savings goals, and reports are part of the approved proposal.'), feature('Keep a copy with you', 'Local backups and offline use are planned from the start.')], price: 'US$ 7.99', status: 'approved', note: 'Development has not started. Final branding, interface, and launch date are undecided. The price is planned, not an available offer.' },
    },
    'special-dates': {
        pt: { headline: 'Os dias que merecem ser esperados.', intro: 'NAVL Special Dates é um futuro aplicativo para acompanhar os momentos especiais da vida, de aniversários à próxima grande viagem.', features: [feature('Contar os dias', 'Contagens regressivas para aniversários, casamentos, viagens e outros eventos estão planejadas.'), feature('Trazer a data para perto', 'Calendário, notificações e widgets fazem parte da proposta comercial.'), feature('Fazer do seu jeito', 'Personalização está no escopo aprovado para iPhone e Android.')], price: 'US$ 3,99', status: 'paused', note: 'O projeto Flutter inicial foi criado. O desenvolvimento das funcionalidades está suspenso. O produto segue aprovado, ainda sem lançamento comercial. O preço é planejado.' },
        en: { headline: 'Some days are worth counting down to.', intro: 'NAVL Special Dates is a future app for keeping life’s special moments close, from birthdays to the next big trip.', features: [feature('Count the days', 'Countdowns for birthdays, weddings, trips, and other events are planned.'), feature('Keep the date close', 'A calendar, notifications, and widgets are part of the commercial proposal.'), feature('Make it yours', 'Personalization is in the approved scope for iPhone and Android.')], price: 'US$ 3.99', status: 'paused', note: 'The initial Flutter project exists. Feature development is paused. The product remains approved, with no commercial release yet. The price is planned.' },
    },
};
const extraNames: Record<LocaleCode, [
    string,
    string,
    string
]> = {
    en: ['Trophiva', 'Offline Personal Finance', 'NAVL Special Dates'], pt: ['Trophiva', 'Finanças Pessoais Offline', 'NAVL Special Dates'], es: ['Trophiva', 'Finanzas Personales Offline', 'NAVL Special Dates'], ko: ['Trophiva', '오프라인 개인 재무', 'NAVL Special Dates'], ar: ['Trophiva', 'المالية الشخصية دون اتصال', 'NAVL Special Dates'],
};
const extraSummaries: Record<LocaleCode, [
    string,
    string,
    string
]> = {
    pt: ['Nutrição para registrar, compreender e planejar. Em desenvolvimento.', 'Finanças offline com receitas, despesas e metas. Produto aprovado; desenvolvimento ainda não iniciado.', 'Contagens regressivas e datas especiais. Produto aprovado; desenvolvimento suspenso.'],
    en: ['Nutrition to track, understand, and plan. In development.', 'Offline finances with income, expenses, and goals. Approved product; development not started.', 'Countdowns and special moments. Approved product; development paused.'],
    es: ['Nutrición para registrar, comprender y planificar. En desarrollo.', 'Finanzas offline: ingresos, gastos y metas. Producto aprobado; desarrollo no iniciado.', 'Cuenta atrás y fechas especiales. Producto aprobado; desarrollo suspendido.'],
    ko: ['기록하고 이해하고 계획하는 영양 관리. 개발 중입니다.', '수입, 지출, 목표를 위한 오프라인 재무 앱. 승인된 제품이며 개발 전입니다.', '소중한 날을 위한 카운트다운. 승인된 제품이며 개발이 중단된 상태입니다.'],
    ar: ['تغذية للتسجيل والفهم والتخطيط. قيد التطوير.', 'مالية دون اتصال للدخل والمصروفات والأهداف. منتج معتمد ولم يبدأ تطويره.', 'العد التنازلي والمناسبات الخاصة. منتج معتمد والتطوير متوقف مؤقتاً.'],
};
export function extraApps(code: LocaleCode): App[] {
    return ['trophiva', 'personal-finance', 'special-dates'].map((slug, i) => ({
        slug, name: extraNames.en[i], displayName: extraNames[code][i], category: 'app',
        kind: code === 'pt' ? 'Aplicativo' : code === 'es' ? 'Aplicación' : code === 'ko' ? '앱' : code === 'ar' ? 'تطبيق' : 'Application',
        tagline: extraSummaries[code][i], status: i === 0 ? 'In development' : 'Product discovery',
        platforms: ['iPhone', 'Android'], description: [extraSummaries[code][i]], screenshots: [],
        stores: [{ store: 'appStore', href: '' }, { store: 'googlePlay', href: '' }],
    }));
}
export function productDetail(app: App, code: LocaleCode): Detail {
    const translated = translatedProductDetail(app.slug, code);
    if (translated)
        return translated;
    if (code === 'pt' || code === 'en') {
        const detail = details[app.slug]?.[code];
        if (detail)
            return detail;
    }
    // Existing, reviewed translations remain the source for other locales.
    return { headline: app.positioning ?? app.tagline, intro: app.description[0], features: app.description.slice(1).map((body, i) => feature(`${pageCopy[code].overview} ${String(i + 1).padStart(2, '0')}`, body)),
        ...(app.slug === 'personal-finance' ? { price: 'US$ 7.99', status: 'approved' as const } : app.slug === 'special-dates' ? { price: 'US$ 3.99', status: 'paused' as const } : {}) };
}
export function productStage(app: App, code: LocaleCode) {
    if (app.slug === 'personal-finance')
        return pageCopy[code].approved;
    if (app.slug === 'special-dates')
        return pageCopy[code].paused;
    if (app.stores.some(s => s.href))
        return pageCopy[code].availability;
    return app.status === 'Product discovery' ? pageCopy[code].discovery : pageCopy[code].inProgress;
}
export function productMedia(app: App, code: LocaleCode): App {
    const labels = {
        pt: ['Seu espaço · build de desenvolvimento', 'Aparência · build de desenvolvimento', 'Menu · versão 1.1.3', 'Campanha · versão 1.1.3', 'Menu · versão em desenvolvimento'],
        en: ['Your space · development build', 'Appearance · development build', 'Menu · version 1.1.3', 'Campaign · version 1.1.3', 'Menu · development version'],
        es: ['Tu espacio · versión en desarrollo', 'Apariencia · versión en desarrollo', 'Menú · versión 1.1.3', 'Campaña · versión 1.1.3', 'Menú · versión en desarrollo'],
        ko: ['나의 공간 · 개발 빌드', '화면 설정 · 개발 빌드', '메뉴 · 버전 1.1.3', '캠페인 · 버전 1.1.3', '메뉴 · 개발 버전'],
        ar: ['مساحتك · نسخة تطوير', 'المظهر · نسخة تطوير', 'القائمة · الإصدار 1.1.3', 'الحملة · الإصدار 1.1.3', 'القائمة · نسخة تطوير'],
    }[code];
    const shot = (src: string, i: number, width = 650, height = 1413) => ({ src: `media/apps/${app.slug}/${src}.webp`, alt: `${app.name} — ${labels[i]}`, label: labels[i], width, height });
    if (app.slug === 'trophiva')
        return { ...app, screenshots: [shot('space', 0), shot('appearance', 1)] };
    if (app.slug === 'void-striker')
        return { ...app, screenshots: [shot('menu-113', 2), shot('campaign-113', 3, 650, 1445), ...app.screenshots] };
    if (app.slug === 'nova-frontier')
        return { ...app, screenshots: [shot('development-menu', 4, 1440, 900)] };
    return app;
}
