export type BibleLinkBlock = string | string[];

export interface BibleLinkSection {
  heading: string;
  body: BibleLinkBlock[];
}

export interface BibleLinkLanguage {
  id: string;
  lang: string;
  label: string;
  sections: BibleLinkSection[];
}

export interface BibleLinkDoc {
  title: string;
  lede: string;
  updated?: string;
  languages: BibleLinkLanguage[];
}

export const bibleLinkPrivacy: BibleLinkDoc = {
  title: 'BibleLink Privacy Policy',
  lede: 'How BibleLink stores, synchronizes, exports, and deletes reading data.',
  updated: 'September 19, 2026',
  languages: [
    {
      id: 'english', lang: 'en', label: 'English', sections: [
        { heading: 'Data collection', body: ['New AI Vision Labs LLC does not collect, sell, share, or use personal data from BibleLink for tracking, advertising, or analytics. BibleLink does not require an account or login.'] },
        { heading: 'Local storage and private iCloud synchronization', body: ['Favorites, notes, highlights, reading-plan progress, reading streak, language, appearance, voice controls, reminder settings, and other main preferences are stored locally. On iPhone and iPad, BibleLink synchronizes these categories through the private CloudKit database of the iCloud account configured on the device. Notes and favorites use CloudKit encrypted fields. This information is not sent to a server operated by New AI Vision Labs.'] },
        { heading: 'Trial protection and iCloud Keychain', body: ['On Apple devices, the start and most recent dates of the seven-day evaluation are stored in the device Keychain. A protected copy may synchronize through iCloud Keychain when it is enabled for the same Apple Account. This prevents reinstalling the app or changing devices from restarting the evaluation. New AI Vision Labs cannot read this information from iCloud.'] },
        { heading: 'Purchases', body: ['The one-time unlock is processed by Apple through the App Store. BibleLink receives the product and entitlement status needed to unlock the app, but New AI Vision Labs does not receive or store payment-card or banking information.'] },
        { heading: 'Device services', body: ['BibleLink may use CloudKit for private synchronization, local notifications when you enable reminders, system voices for text-to-speech, the system share sheet when you choose to share, and App Store services for purchase and restoration. These services are controlled by the operating system and Apple’s terms.'] },
        { heading: 'Deleting information', body: ['In BibleLink Settings > Privacy, you can export a JSON copy of synchronized reading data or delete it from the device and private iCloud database after confirmation. Removing BibleLink without using this control deletes only the local copy; the private CloudKit copy remains available for restoration. Purchase status and trial-protection dates are managed separately and are not included in the export or deletion. Trial dates may remain in Apple Keychain or iCloud Keychain so the evaluation cannot be restarted by reinstalling the app.'] },
        { heading: 'Children', body: ['BibleLink does not knowingly collect information from children or anyone else. Biblical texts may contain mature themes, violence, or other material that parents may wish to review.'] },
        { heading: 'Changes and contact', body: ['We may update this policy when BibleLink changes. The effective date above identifies the current version. Questions may be sent to support@newaivisionlabs.com.'] },
      ],
    },
    {
      id: 'portugues', lang: 'pt-BR', label: 'Português', sections: [
        { heading: 'Coleta de dados', body: ['A New AI Vision Labs LLC não coleta, vende, compartilha nem usa dados pessoais do BibleLink para rastreamento, publicidade ou análise de uso. O BibleLink não exige conta nem login.'] },
        { heading: 'Armazenamento local e sincronização privada pelo iCloud', body: ['Favoritos, anotações, destaques, progresso dos planos, sequência de leitura, idioma, aparência, controles de voz, lembretes e outras preferências principais ficam armazenados localmente. No iPhone e iPad, o BibleLink sincroniza essas categorias pelo banco privado do CloudKit da conta do iCloud configurada no aparelho. Anotações e favoritos usam campos criptografados pelo CloudKit. Essas informações não são enviadas a servidores operados pela New AI Vision Labs.'] },
        { heading: 'Proteção da avaliação e Chaves do iCloud', body: ['Nos aparelhos Apple, as datas de início e de último uso da avaliação de sete dias ficam protegidas nas Chaves. Uma cópia pode ser sincronizada pelas Chaves do iCloud quando estiverem ativas na mesma Conta Apple. Isso impede que a reinstalação ou a troca de aparelho reinicie a avaliação. A New AI Vision Labs não consegue ler essas informações no iCloud.'] },
        { heading: 'Compras', body: ['O desbloqueio único é processado pela Apple por meio da App Store. O BibleLink recebe apenas o produto e o estado do direito de acesso necessários para liberar o aplicativo. A New AI Vision Labs não recebe nem armazena dados de cartão ou conta bancária.'] },
        { heading: 'Serviços do aparelho', body: ['O BibleLink pode usar o CloudKit para sincronização privada, notificações locais quando você ativa lembretes, vozes do sistema para leitura em voz alta, o menu de compartilhamento quando você escolhe compartilhar e os serviços da App Store para compra e restauração. Esses serviços são controlados pelo sistema operacional e pelos termos da Apple.'] },
        { heading: 'Exclusão', body: ['Em Ajustes > Privacidade do BibleLink, você pode exportar uma cópia JSON dos dados de leitura sincronizados ou apagá-los do aparelho e do banco privado do iCloud após uma confirmação. Remover o BibleLink sem usar esse controle apaga somente a cópia local; a cópia privada do CloudKit permanece para restauração. A compra e as datas de proteção da avaliação são gerenciadas separadamente e não entram nessa exportação ou exclusão. As datas da avaliação podem permanecer nas Chaves ou nas Chaves do iCloud.'] },
        { heading: 'Crianças', body: ['O BibleLink não coleta intencionalmente informações de crianças ou de qualquer outra pessoa. Textos bíblicos podem conter temas maduros, violência ou outros conteúdos que pais e responsáveis talvez desejem revisar.'] },
        { heading: 'Alterações e contato', body: ['Esta política pode ser atualizada quando o BibleLink mudar. A data acima identifica a versão atual. Dúvidas podem ser enviadas para support@newaivisionlabs.com.'] },
      ],
    },
    {
      id: 'espanol', lang: 'es', label: 'Español', sections: [
        { heading: 'Recopilación de datos', body: ['New AI Vision Labs LLC no recopila, vende, comparte ni utiliza datos personales de BibleLink para rastreo, publicidad o análisis. BibleLink no requiere una cuenta ni inicio de sesión.'] },
        { heading: 'Almacenamiento local y sincronización privada con iCloud', body: ['Los favoritos, notas, resaltados, progreso de los planes, racha de lectura, idioma, apariencia, controles de voz, recordatorios y demás preferencias principales se guardan localmente. En iPhone y iPad, BibleLink sincroniza estas categorías mediante la base privada de CloudKit de la cuenta de iCloud configurada en el dispositivo. Las notas y favoritos usan campos cifrados por CloudKit. Esta información no se envía a servidores operados por New AI Vision Labs.'] },
        { heading: 'Protección de la prueba y Llavero de iCloud', body: ['En dispositivos Apple, las fechas inicial y más reciente de la prueba de siete días se guardan en el Llavero. Una copia puede sincronizarse mediante el Llavero de iCloud cuando está activado para la misma Cuenta de Apple. Esto impide que la prueba se reinicie al reinstalar la app o cambiar de dispositivo. New AI Vision Labs no puede leer esta información desde iCloud.'] },
        { heading: 'Compras', body: ['El desbloqueo único es procesado por Apple mediante App Store. BibleLink recibe el producto y el estado del derecho de acceso necesarios para desbloquear la app, pero New AI Vision Labs no recibe ni guarda datos de tarjetas o cuentas bancarias.'] },
        { heading: 'Servicios del dispositivo', body: ['BibleLink puede usar CloudKit para sincronización privada, notificaciones locales cuando activas recordatorios, voces del sistema para lectura en voz alta, el menú del sistema cuando decides compartir y los servicios de App Store para comprar y restaurar. Estos servicios se rigen por el sistema operativo y los términos de Apple.'] },
        { heading: 'Eliminación', body: ['En Ajustes > Privacidad de BibleLink, puedes exportar una copia JSON de los datos de lectura sincronizados o eliminarlos del dispositivo y de la base privada de iCloud tras una confirmación. Eliminar BibleLink sin usar este control borra solo la copia local; la copia privada de CloudKit permanece disponible para restauración. La compra y las fechas de protección de la prueba se administran por separado y no se incluyen en esta exportación o eliminación. Las fechas de prueba pueden permanecer en el Llavero o el Llavero de iCloud.'] },
        { heading: 'Menores', body: ['BibleLink no recopila deliberadamente información de menores ni de ninguna otra persona. Los textos bíblicos pueden contener temas maduros, violencia u otro contenido que padres y tutores quieran revisar.'] },
        { heading: 'Cambios y contacto', body: ['Podemos actualizar esta política cuando cambie BibleLink. La fecha anterior identifica la versión vigente. Puedes escribir a support@newaivisionlabs.com.'] },
      ],
    },
    {
      id: 'korean', lang: 'ko', label: '한국어', sections: [
        { heading: '데이터 수집', body: ['New AI Vision Labs LLC는 BibleLink에서 개인정보를 수집, 판매 또는 공유하지 않으며 추적, 광고 또는 사용 분석에 이용하지 않습니다. BibleLink는 계정이나 로그인을 요구하지 않습니다.'] },
        { heading: '로컬 저장 및 비공개 iCloud 동기화', body: ['즐겨찾기, 메모, 강조 표시, 읽기 계획 진행 상황, 연속 읽기 기록, 언어, 화면 설정, 음성 조절, 알림 및 기타 주요 환경설정은 기기에 저장됩니다. iPhone과 iPad에서는 기기에 설정된 iCloud 계정의 비공개 CloudKit 데이터베이스를 통해 이 항목들이 동기화됩니다. 메모와 즐겨찾기는 CloudKit 암호화 필드를 사용합니다. 이 정보는 New AI Vision Labs가 운영하는 서버로 전송되지 않습니다.'] },
        { heading: '평가판 보호 및 iCloud 키체인', body: ['Apple 기기에서는 7일 평가판의 시작 날짜와 최근 사용 날짜가 기기 키체인에 저장됩니다. 동일한 Apple 계정에서 iCloud 키체인이 활성화되어 있으면 보호된 사본이 동기화될 수 있습니다. 이 기능은 앱을 다시 설치하거나 기기를 바꿀 때 평가판이 다시 시작되는 것을 방지합니다. New AI Vision Labs는 iCloud에서 이 정보를 읽을 수 없습니다.'] },
        { heading: '구매', body: ['일회성 잠금 해제는 App Store를 통해 Apple이 처리합니다. BibleLink는 앱 잠금 해제에 필요한 상품 및 이용 권한 상태만 받으며, New AI Vision Labs는 결제 카드나 은행 정보를 받거나 저장하지 않습니다.'] },
        { heading: '기기 서비스', body: ['BibleLink는 비공개 동기화를 위한 CloudKit, 사용자가 켠 로컬 알림, 성경 읽기를 위한 시스템 음성, 시스템 공유 화면, 구매 및 복원을 위한 App Store 서비스를 사용할 수 있습니다. 이러한 서비스에는 운영 체제와 Apple의 약관이 적용됩니다.'] },
        { heading: '정보 삭제', body: ['BibleLink 설정 > 개인정보에서 동기화된 읽기 데이터를 JSON 파일로 내보내거나 확인 후 기기와 비공개 iCloud 데이터베이스에서 삭제할 수 있습니다. 이 기능을 사용하지 않고 앱만 삭제하면 로컬 사본만 제거되며 비공개 CloudKit 사본은 복원을 위해 남습니다. 구매 상태와 평가판 보호 날짜는 별도로 관리되며 이 내보내기 또는 삭제에 포함되지 않습니다. 평가판 날짜는 Apple 키체인 또는 iCloud 키체인에 남을 수 있습니다.'] },
        { heading: '어린이', body: ['BibleLink는 어린이를 포함한 누구의 정보도 의도적으로 수집하지 않습니다. 성경 본문에는 부모나 보호자가 검토하고자 하는 성인 주제, 폭력 또는 기타 내용이 포함될 수 있습니다.'] },
        { heading: '변경 및 문의', body: ['BibleLink가 변경되면 본 정책도 업데이트될 수 있습니다. 위 시행일이 현재 버전을 나타냅니다. 문의: support@newaivisionlabs.com.'] },
      ],
    },
    {
      id: 'arabic', lang: 'ar', label: 'العربية', sections: [
        { heading: 'جمع البيانات', body: ['لا تجمع New AI Vision Labs LLC بيانات شخصية من BibleLink ولا تبيعها أو تشاركها أو تستخدمها للتتبع أو الإعلان أو التحليلات. لا يتطلب BibleLink حسابًا أو تسجيل دخول.'] },
        { heading: 'التخزين المحلي والمزامنة الخاصة عبر iCloud', body: ['تُحفظ المفضلة والملاحظات والتمييز وتقدم خطط القراءة وسلسلة الأيام واللغة والمظهر وإعدادات الصوت والتذكيرات والتفضيلات الأساسية محليًا. على iPhone وiPad، يمكن مزامنة هذه الفئات عبر قاعدة CloudKit الخاصة بحساب iCloud على الجهاز. تستخدم الملاحظات والمفضلة حقول CloudKit المشفرة. لا تُرسل هذه المعلومات إلى خادم تديره New AI Vision Labs.'] },
        { heading: 'حماية فترة التجربة وiCloud Keychain', body: ['على أجهزة Apple تُحفظ تواريخ بدء تجربة الأيام السبعة وآخر استخدام في Keychain. وقد تتزامن نسخة محمية عبر iCloud Keychain عند تفعيله للحساب نفسه، لمنع إعادة بدء التجربة بعد حذف التطبيق أو تغيير الجهاز. لا تستطيع New AI Vision Labs قراءة هذه المعلومات من iCloud.'] },
        { heading: 'المشتريات', body: ['تعالج Apple عملية الفتح لمرة واحدة عبر App Store. يتلقى BibleLink حالة المنتج والاستحقاق اللازمة لفتح التطبيق، ولا تستلم New AI Vision Labs بيانات بطاقة الدفع أو الحساب البنكي ولا تخزنها.'] },
        { heading: 'خدمات الجهاز', body: ['قد يستخدم BibleLink خدمة CloudKit للمزامنة الخاصة، والإشعارات المحلية عند تفعيل التذكيرات، وأصوات النظام للقراءة، وقائمة المشاركة، وخدمات App Store للشراء والاستعادة. تخضع هذه الخدمات لنظام التشغيل وشروط Apple.'] },
        { heading: 'حذف المعلومات', body: ['من إعدادات BibleLink ← الخصوصية يمكنك تصدير نسخة JSON من بيانات القراءة المتزامنة أو حذفها من الجهاز وقاعدة iCloud الخاصة بعد التأكيد. حذف التطبيق وحده يزيل النسخة المحلية فقط. تُدار حالة الشراء وتواريخ حماية التجربة بصورة منفصلة ولا تدخل ضمن التصدير أو الحذف.'] },
        { heading: 'الأطفال', body: ['لا يجمع BibleLink عمدًا معلومات من الأطفال أو من أي شخص آخر. قد تتضمن النصوص الكتابية موضوعات ناضجة أو عنفًا أو محتوى يرغب الوالدان في مراجعته.'] },
        { heading: 'التغييرات والتواصل', body: ['قد نحدّث هذه السياسة عند تغير BibleLink. يوضح التاريخ أعلاه النسخة الحالية. للاستفسار: support@newaivisionlabs.com.'] },
      ],
    },
  ],
};

export const bibleLinkSupport: BibleLinkDoc = {
  title: 'BibleLink Support',
  lede: 'Help with reading, widgets, reminders, audio, iCloud synchronization, purchase, and restoration.',
  languages: [
    {
      id: 'english', lang: 'en', label: 'English', sections: [
        { heading: 'Contact', body: ['BibleLink is developed and supported by New AI Vision Labs LLC. Email support@newaivisionlabs.com for app issues, feedback, or feature suggestions.', 'Include the device model, operating-system version, BibleLink version, selected language, and a short description of what happened. Do not send passwords, payment-card numbers, or private prayer notes.'] },
        { heading: 'Purchase or restoration', body: [['Use Restore Purchase in BibleLink when the same Apple Account bought the permanent unlock.', 'Confirm that the App Store is available and that the device is connected to the internet.', 'Apple processes payment and restoration. New AI Vision Labs cannot view or change your payment method.']] },
        { heading: 'Widgets', body: ['Touch and hold the Home Screen or Lock Screen, choose to add a widget, search for BibleLink, and select the desired size. Open BibleLink at least once after installation so the first verse is available.'] },
        { heading: 'Reminders and audio', body: ['Enable reminders in BibleLink Settings and allow notifications in iOS Settings. Audio uses voices installed on the device; additional voices can be managed in iOS accessibility and Read & Speak settings.'] },
        { heading: 'iCloud synchronization', body: ['Favorites, notes, highlights, reading-plan progress, streak, and main preferences are stored locally and synchronize through the user’s private CloudKit database on iPhone and iPad. The same Apple Account with iCloud Drive enabled must be active on the replacement device. In BibleLink, Settings > Privacy can export these categories as JSON or delete them from the device and iCloud after confirmation.'] },
      ],
    },
    {
      id: 'portugues', lang: 'pt-BR', label: 'Português', sections: [
        { heading: 'Contato', body: ['O BibleLink é desenvolvido e atendido pela New AI Vision Labs LLC. Escreva para support@newaivisionlabs.com para relatar problemas, enviar comentários ou sugerir melhorias.', 'Informe o modelo do aparelho, a versão do sistema, a versão do BibleLink, o idioma selecionado e uma descrição breve do ocorrido. Não envie senhas, números de cartão nem anotações ou orações particulares.'] },
        { heading: 'Compra ou restauração', body: [['Use Restaurar compra no BibleLink quando a mesma Conta Apple tiver adquirido o desbloqueio permanente.', 'Confirme que a App Store está disponível e que o aparelho está conectado à internet.', 'A Apple processa o pagamento e a restauração. A New AI Vision Labs não visualiza nem altera o método de pagamento.']] },
        { heading: 'Widgets', body: ['Mantenha pressionada a Tela de Início ou a Tela Bloqueada, escolha adicionar um widget, procure BibleLink e selecione o tamanho desejado. Abra o BibleLink pelo menos uma vez após a instalação para disponibilizar o primeiro versículo.'] },
        { heading: 'Lembretes e áudio', body: ['Ative os lembretes nos Ajustes do BibleLink e permita as notificações nos Ajustes do iOS. O áudio usa as vozes instaladas no aparelho; outras vozes podem ser gerenciadas em Acessibilidade > Leitura e Fala nos Ajustes do iOS.'] },
        { heading: 'Sincronização pelo iCloud', body: ['Favoritos, anotações, destaques, progresso dos planos, sequência de leitura e preferências principais ficam no aparelho e são sincronizados pelo banco privado do CloudKit no iPhone e iPad. O aparelho substituto deve usar a mesma Conta Apple com o iCloud Drive ativo. No BibleLink, Ajustes > Privacidade permite exportar essas categorias em JSON ou apagá-las do aparelho e do iCloud após confirmação.'] },
      ],
    },
    {
      id: 'espanol', lang: 'es', label: 'Español', sections: [
        { heading: 'Contacto', body: ['BibleLink es desarrollado y atendido por New AI Vision Labs LLC. Escribe a support@newaivisionlabs.com para informar problemas, enviar comentarios o sugerir mejoras.', 'Indica el modelo del dispositivo, la versión del sistema, la versión de BibleLink, el idioma seleccionado y una descripción breve de lo ocurrido. No envíes contraseñas, números de tarjeta ni notas u oraciones privadas.'] },
        { heading: 'Compra o restauración', body: [['Usa Restaurar compra en BibleLink cuando la misma Cuenta de Apple haya comprado el desbloqueo permanente.', 'Confirma que App Store esté disponible y que el dispositivo tenga conexión a internet.', 'Apple procesa el pago y la restauración. New AI Vision Labs no puede ver ni cambiar tu método de pago.']] },
        { heading: 'Widgets', body: ['Mantén pulsada la pantalla de inicio o la pantalla bloqueada, elige añadir un widget, busca BibleLink y selecciona el tamaño deseado. Abre BibleLink al menos una vez después de instalarlo para que esté disponible el primer versículo.'] },
        { heading: 'Recordatorios y audio', body: ['Activa los recordatorios en Ajustes de BibleLink y permite las notificaciones en Ajustes de iOS. El audio usa las voces instaladas en el dispositivo; puedes administrar otras voces en Accesibilidad > Lectura y voz dentro de Ajustes de iOS.'] },
        { heading: 'Sincronización con iCloud', body: ['Los favoritos, notas, resaltados, progreso de los planes, racha de lectura y preferencias principales se guardan en el dispositivo y se sincronizan mediante la base privada de CloudKit en iPhone y iPad. El dispositivo de reemplazo debe usar la misma Cuenta de Apple con iCloud Drive activado. En BibleLink, Ajustes > Privacidad permite exportar estas categorías como JSON o eliminarlas del dispositivo y de iCloud tras una confirmación.'] },
      ],
    },
    {
      id: 'korean', lang: 'ko', label: '한국어', sections: [
        { heading: '문의', body: ['BibleLink는 New AI Vision Labs LLC에서 개발하고 지원합니다. 앱 문제, 의견 또는 기능 제안은 support@newaivisionlabs.com으로 보내 주세요.', '기기 모델, 운영 체제 버전, BibleLink 버전, 선택한 언어와 문제에 대한 간단한 설명을 포함해 주세요. 비밀번호, 결제 카드 번호 또는 개인적인 기도와 메모는 보내지 마세요.'] },
        { heading: '구매 또는 복원', body: [['영구 잠금 해제를 구입한 동일한 Apple 계정을 사용하는 경우 BibleLink에서 구매 복원을 선택하세요.', 'App Store를 사용할 수 있고 기기가 인터넷에 연결되어 있는지 확인하세요.', '결제와 복원은 Apple이 처리합니다. New AI Vision Labs는 결제 수단을 보거나 변경할 수 없습니다.']] },
        { heading: '위젯', body: ['홈 화면 또는 잠금 화면을 길게 누르고 위젯 추가를 선택한 다음 BibleLink를 검색하여 원하는 크기를 선택하세요. 설치 후 BibleLink를 한 번 이상 열어야 첫 구절을 표시할 수 있습니다.'] },
        { heading: '알림 및 오디오', body: ['BibleLink 설정에서 알림을 켜고 iOS 설정에서 알림 권한을 허용하세요. 오디오는 기기에 설치된 음성을 사용하며, 추가 음성은 iOS 설정의 손쉬운 사용 > 읽기 및 말하기에서 관리할 수 있습니다.'] },
        { heading: 'iCloud 동기화', body: ['즐겨찾기, 메모, 강조 표시, 읽기 계획 진행 상황, 연속 읽기 기록과 주요 환경설정은 기기에 저장되고 iPhone과 iPad의 비공개 CloudKit 데이터베이스를 통해 동기화됩니다. 새 기기에서는 iCloud Drive가 켜진 동일한 Apple 계정을 사용해야 합니다. BibleLink의 설정 > 개인정보에서 이 항목을 JSON으로 내보내거나 확인 후 기기와 iCloud에서 삭제할 수 있습니다.'] },
      ],
    },
    {
      id: 'arabic', lang: 'ar', label: 'العربية', sections: [
        { heading: 'التواصل', body: ['تطوّر New AI Vision Labs LLC تطبيق BibleLink وتدعمه. أرسل المشكلات أو الآراء أو اقتراحات الميزات إلى support@newaivisionlabs.com.', 'اذكر نوع الجهاز وإصدار النظام وإصدار BibleLink واللغة المختارة ووصفًا مختصرًا لما حدث. لا ترسل كلمات مرور أو أرقام بطاقات أو ملاحظات وصلاة خاصة.'] },
        { heading: 'الشراء أو الاستعادة', body: [['استخدم «استعادة الشراء» عندما يكون حساب Apple نفسه قد اشترى الفتح الدائم.', 'تأكد من توفر App Store واتصال الجهاز بالإنترنت.', 'تعالج Apple الدفع والاستعادة، ولا تستطيع New AI Vision Labs رؤية طريقة الدفع أو تغييرها.']] },
        { heading: 'الأدوات المصغرة', body: ['اضغط مطولًا على الشاشة الرئيسية أو شاشة القفل، واختر إضافة أداة، وابحث عن BibleLink ثم اختر الحجم. افتح BibleLink مرة واحدة بعد التثبيت ليتوفر أول نص في الأداة.'] },
        { heading: 'التذكيرات والصوت', body: ['فعّل التذكيرات من إعدادات BibleLink واسمح بالإشعارات في إعدادات iOS. يستخدم الصوت الأصوات المثبتة على الجهاز، ويمكن إدارة أصوات إضافية من إعدادات تسهيلات الاستخدام والقراءة والنطق في iOS.'] },
        { heading: 'المزامنة عبر iCloud', body: ['تُحفظ المفضلة والملاحظات والتمييز وتقدم خطط القراءة وسلسلة الأيام والتفضيلات الأساسية محليًا ويمكن مزامنتها عبر قاعدة CloudKit الخاصة على iPhone وiPad. يجب أن يستخدم الجهاز البديل حساب Apple نفسه مع تفعيل iCloud Drive. من إعدادات BibleLink ← الخصوصية يمكنك تصدير هذه البيانات أو حذفها من الجهاز وiCloud بعد التأكيد.'] },
        { heading: 'توفر اللغة العربية', body: ['موقع NAVL متاح بالعربية الآن. أما واجهة BibleLink ومحتواه العربي فما زالا قيد الإعداد وسيُعلَن توفرهما عند اكتمالهما.'] },
      ],
    },
  ],
};
