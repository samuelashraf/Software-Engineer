/**
 * Data file containing verbatim transcription, breakdown, roadmap, and courses
 * from the voice note recording.
 */

export interface TranscriptSegment {
  id: string;
  startSeconds: number;
  endSeconds: number;
  startTime: string;
  endTime: string;
  title: string;
  badge: string;
  category: 'intro' | 'english' | 'mindset' | 'core_skills' | 'technical' | 'triangle' | 'courses_hussein' | 'courses_hassan' | 'resources_extra' | 'business_quarterly';
  text: string;
  keyPoints: string[];
}

export interface CourseResource {
  id: string;
  title: string;
  instructor: string;
  platform: string;
  type: 'core' | 'recommended' | 'optional';
  category: 'backend' | 'database' | 'architecture' | 'devops' | 'system_design' | 'business';
  description: string;
  keyTopics: string[];
  searchQuery: string;
  url?: string;
}

export const AUDIO_FILE_PATH = "/assets/aistudio/WhatsApp_Audio_2026-10-29_at_02.59.00_45bd9f2d.mp4";
export const AUDIO_DURATION_SECONDS = 644; // 10 minutes and 44 seconds

export const TRANSCRIPT_SEGMENTS: TranscriptSegment[] = [
  {
    id: "seg-1",
    startSeconds: 0,
    endSeconds: 10,
    startTime: "00:00",
    endTime: "00:10",
    title: "المقدمة والهدف من التسجيل",
    badge: "مقدمة",
    category: "intro",
    text: "طيب، هجرب تاني عشان واضح ان انا بعت بالغلط. هكون مختصر وهحاول اديك الملخص المفيد يعني.",
    keyPoints: [
      "إعادة إرسال نصائح موجزة وعملية للمهندس.",
      "التركيز على الخلاصة المفيدة وخارطة الطريق الواقعية."
    ]
  },
  {
    id: "seg-2",
    startSeconds: 11,
    endSeconds: 26,
    startTime: "00:11",
    endTime: "00:26",
    title: "الركيزة الأولى: إتقان اللغة الإنجليزية",
    badge: "الأساس الأول",
    category: "english",
    text: "رقم واحد: محتاج تشتغل على الإنجليزي بتاعك، لأن ده البوابة اللي هتدخلك على أي حاجة بعد كده. لأن معظم المحتوى التعليمي المفيد بالإنجليزي، اه المحتوى العربي بيزيد وبيتحسن، بس لسه الإنجليزي هو الأساس وهو في الصدارة.",
    keyPoints: [
      "اللغة الإنجليزية هي البوابة الحقيقية للتعلم والتطور التقني المستمر.",
      "رغم نمو المحتوى العربي، فإن معظم التوثيق والمراجع العالمية والمحتوى المتقدم لا يزال بالإنجليزية."
    ]
  },
  {
    id: "seg-3",
    startSeconds: 26,
    endSeconds: 63,
    startTime: "00:26",
    endTime: "01:03",
    title: "الركيزة الثانية: الهوية البرمجية وتلاشي أهمية الـ Stack",
    badge: "الهوية والعقلية",
    category: "mindset",
    text: "رقم اتنين: انت كمهندس سوفت وير إنجينير (Software Engineer)، الستاك مش مهم. يعني كون تعريفك لذاتك انك .NET أو Angular أو .NET و Angular مابقاش Relevant زي زمان. فانت محتاج تفكر في نفسك كـ Software Engineer. بس السوفت وير إنجينير ده أنواع، ففي الـ Product Engineer اللي هو راجل بيفهم بيزنس كويس وبيعرف يسلم حاجة في سياق البيزنس ده، وبيعرف يفكر من وجهة نظر البيزنس، فده مطلوب، لأنه هو دلوقتي كونك معاك AI...",
    keyPoints: [
      "لا تعرّف نفسك بأداة أو لغة معينة (.NET Dev أو Angular Dev لم يعد تصنيفاً كافياً اليوم).",
      "فكّر في نفسك كمهندس برمجيات متكامل يحل مشاكل حقيقية.",
      "بروز دور مهندس المنتجات (Product Engineer) الذي يفهم أهداف العمل ويسلم حلولاً تخدم القيمة التجارية مباشرة."
    ]
  },
  {
    id: "seg-4",
    startSeconds: 64,
    endSeconds: 122,
    startTime: "01:04",
    endTime: "02:02",
    title: "المهارات الخمس الأساسية (1 إلى 4)",
    badge: "المهارات الخمس",
    category: "core_skills",
    text: "طيب هو قفل في وشي. أولاً كونك معاك AI، الستاك مابقاش فارق، ثانياً البيزنس بقى فارق جداً. فانت محتاج تتعلم الاتنين. فبالتالي انت كمهندس محتاج تتعلم 5 حاجات أو تركز على 5 حاجات:\n\n1. تعرف تاخد قرار (Decision Making): فلو انت شخص مابيعرفش ياخد قرار، محتاج تتعلم ازاي تعرف تعمل ده؛ يعني ايه: محتاج تعرف تتعلم ازاي تعمل Analysis، ازاي تعمل Trade-off، ازاي تفكر ما بين الاحتمالات المختلفة، وازاي تغلط وتتعلم من أخطائك.\n\n2. محتاج تتعلم تعمل Design: بالتالي انت محتاج تفهم السياق التكنيكال وأساسيات الحاجات الأساسية في التكنيكال وهكذا.\n\n3. محتاج تتعلم Delivery Management: يعني ازاي تعرف تسلّم وتـ Estimate، وازاي تبقى إنسان يعتمد عليه لما بتقول هسلّم حاجة تسلّمها، وازاي تعرف تعمل Version Management و Communication على الديليفري والترتيب والـ Plan والكلام ده كله.\n\n4. محتاج تفهم بيزنس كويس: يعني تفهم السياق اللي انت شغال فيه، تفهم الـ Added Value بتاعة البروجكت بتاعك أو البرودكت بتاعك وهكذا.",
    keyPoints: [
      "1. اتخاذ القرار والتحليل والموازنات (Trade-offs) والتعلم من الأخطاء.",
      "2. التصميم التقني (Technical Design) وفهم الأسس التكنيكال.",
      "3. إدارة التسليم (Delivery Management) ودقة التقديرات والاعتمادية والجدولة.",
      "4. فهم البيزنس والقيمة المضافة (Added Value) للمشروع الذي تعمل عليه."
    ]
  },
  {
    id: "seg-5",
    startSeconds: 124,
    endSeconds: 185,
    startTime: "02:04",
    endTime: "03:05",
    title: "المهارة الخامسة: اكتشاف المشاكل وحلها + مهارات التواصل البشري",
    badge: "المهارة 5 + التواصل",
    category: "core_skills",
    text: "خامساً: محتاج تبقى فاهم ازاي تعرف تلاقي مشكلة، ازاي عينك تجيب المشكلة. مش Problem Solving بالمعنى الضيق، لا، عينك تجيب المشكلة يعني Business Problem أو Technical Problem، وازاي تطلع حل يكون ناضج للمشاكل دي.\n\nفـ ازاي ان انت تقدر تاني تعرف تعمل Analysis، تعرف تعمل Planning، تعرف تـ Communicate. ودي الحاجة النقطة اللي هي مهمة برضو: انك انت محتاج تعرف تعمل Communication كويس وتفهم ازاي تتعامل مع البشر بشكل ممتاز. سواء كان في تيم، أو مع اللي فوقيك، أو مع اللي تحتك، وازاي تهندل الكلاينت (Client Handling) والكلام ده كله.\n\nده بالنسبة للخمس حاجات الأساسية. الحاجات دي مع وجود الـ AI هتخليك يعني Advanced أكتر عشان الـ AI بقى بيخلي الستاك بتدوب والتركيز على المهارات الأساسية دي.",
    keyPoints: [
      "5. استشعار واكتشاف المشاكل الحقيقية (سواء تقنية أو أعمال) وصياغة حلول ناضجة.",
      "التواصل البشري الفعّال (Communication) مع الفريق، الإدارة، المرؤوسين، والعملاء.",
      "هذه المهارات هي التي تحميك وترفعك في زمن الذكاء الاصطناعي لأن أدوات الذكاء الاصطناعي أذابت الستاكات."
    ]
  },
  {
    id: "seg-6",
    startSeconds: 186,
    endSeconds: 241,
    startTime: "03:06",
    endTime: "04:01",
    title: "المهارات التقنية في عصر الـ AI: توظيف الأدوات وضبط الجودة",
    badge: "التقنية والـ AI",
    category: "technical",
    text: "طيب من حيث الجزء التكنيكال: انت دلوقتي عمال أقولك AI والـ AI مشي وبتاع، فانت ايه المهارات التكنيكال اللي محتاج تعرفها؟\n\n1. محتاج تعرف تستخدم الـ AI كويس وتوظفه للمصلحة العامة؛ ازاي ان انت تعرف تـ Deliver بيه أسرع وأحسن وبـ Cost أقل. يعني: تعرف هو بيشتغل ازاي، تعرف تسلّم بيه حاجة من أولها لآخرها، اديك Business Case تطلعلي Solution. فده بيرجع لفكرة الديزاين والأساسيات والكلام ده، انك تعرف تـ Design Solution من أوله لآخره وتعرف تاخد قرار فيه، فالـ Solution Architecture بقى Relevant اليومين دول أكتر.\n\n2. تعرف بعد ما تعرف توظف الـ AI كويس وتستخدمه كويس بكوست قليل وكواليتي عالية، محتاج تبقى فاهم Quality، فتعرف ان انت يُعتمد عليك مع الـ AI بسرعة. فتفهم يعني ايه Quality، تحط Quality Gates، تعرف تطلع بيها حاجة مظبوطة وتعرف تقرأ كود كويس.",
    keyPoints: [
      "استخدام الذكاء الاصطناعي لإنتاج حلول كاملة بتكلفة أقل وسرعة وجودة أعلى.",
      "تنامي أهمية هندسة الحلول (Solution Architecture).",
      "معايير الجودة (Quality Gates) والقدرة على قراءة ومراجعة الكود البرمجي بذكاء ودقة."
    ]
  },
  {
    id: "seg-7",
    startSeconds: 242,
    endSeconds: 301,
    startTime: "04:02",
    endTime: "05:01",
    title: "طبقات الهندسة البرمجية (الطبقات 1 إلى 4)",
    badge: "أساسيات الهندسة 1-4",
    category: "technical",
    text: "تمام، موضوع الدقيقة ده مستفز جداً بس anyway...\nبعد الحتة بتاعة الـ Quality، محتاج تشتغل على أساسيات الهندسة. طيب، يعني ايه أساسيات الهندسة؟ يعني:\n\n1. ازاي تعرف تعمل Presentation Layer سواء كانت Front-end أو API أو Function Interfaces مختلفة أو Module Interfaces أو أياً يكن، تعرف تـ Design Interfaces والـ Dependencies ما بينهم، ده جزء مهم جداً كفكرة الـ API Design أصلاً.\n\n2. تعرف تعمل Business Logic Design، ده اللي هو الـ Low-Level Design (LLD). الـ Low-Level Design ده جزء منه Software Architecture وده التركيز الأساسي.\n\n3. تلاتة قصدي: تعرف تعمل High-Level Design (HLD) اللي هو System Design.\n\n4. تعرف تعمل Process اللي هي الـ Quality والـ Testing Pyramid والـ Testing Mechanisms والكلام ده كله.",
    keyPoints: [
      "1. طبقة العرض والواجهات (Presentation Layer & API Design): تصميم واجهات الاستدعاء والترابط.",
      "2. تصميم منطق الأعمال (Low-Level Design - LLD): هيكلة الكود ومعماريته البرمجية.",
      "3. التصميم عالي المستوى (High-Level Design - HLD): تصميم الأنظمة الموزعة (System Design).",
      "4. إجراءات الجودة والاختبارات (Testing Pyramid & Quality Mechanisms)."
    ]
  },
  {
    id: "seg-8",
    startSeconds: 308,
    endSeconds: 352,
    startTime: "05:08",
    endTime: "05:52",
    title: "قواعد البيانات واختيار التكنولوجيا المناسبة (Generalist vs Specialist)",
    badge: "الطبقات 5-6 والشمولية",
    category: "technical",
    text: "خامساً وده مهم جداً: ازاي تعرف تعمل Data Modeling و ERD و Database Design وما إلى ذلك.\n\nسادساً وده مهم جداً: ازاي تعرف تختار التكنولوجي المناسبة. في مينتاليتي عامة ليها علاقة بفكره انك تختار انك تبقى Generalist ولا تبقى Specialist، يعني انت توسع على نفسك ولا تحفر وتبقى عميق أكتر؟\n\nدلوقتي مع وجود الـ AI بقى في أولوية أكتر للـ Generalist اللي هو بيعرف يعمل حاجات كتير. هتعرف تعمل حاجات كتير ازاي؟ محتاج توسع نطاق المعرفة عندك، اللي هو ان انت تعرف تكنولوجيز مختلفة وتعرف توظفها امتى وتختار ما بينهم ازاي، وده بيساعدك في حتة اتخاذ القرار والديزاين اللي اتكلمنا فيها قبل كده.",
    keyPoints: [
      "5. نمذجة البيانات (Data Modeling) وتصميم المخططات (ERD) وقواعد البيانات.",
      "6. اختيار التكنولوجيا المناسبة للحل المناسب.",
      "الأفضلية في عصر الذكاء الاصطناعي للمهندس الشامل (Generalist) ذو المعرفة الأفقية العريضة والقادر على الربط والاختيار."
    ]
  },
  {
    id: "seg-9",
    startSeconds: 354,
    endSeconds: 415,
    startTime: "05:54",
    endTime: "06:55",
    title: "مثلث المقدرة الإنسانية للمهندس: المعرفة والمهارة وطريقة التفكير",
    badge: "مثلث المقدرة",
    category: "triangle",
    text: "طيب، النقطة اللي قبل الأخيرة، هي ان انت تفكر في نفسك كـ Software Engineer من خلال الخمس مهارات اللي قلتها في الأول والتكنيكال اللي انا شرحته من شوية اللي هي الخمس ليرات التكنيكال.\n\nوبالتالي انت بقى كبني آدم Overall، انت كمقدرة أو قدرة، عندك تلات حاجات أساسية:\n1. المعرفة اللي عندك (The Knowledge)\n2. المهارة اللي عندك (The Skill)\n3. الـ Attitude أو طريقة تفكيرك أو الـ Way of Thinking بتاعك أو الـ Mental Model بتاعك.\n\nدول التلاتة مختلفين عن بعض. انت ممكن تكون قاري كتاب، معاك المعرفة أو المعلومة، بس انت معكش المهارة. ممكن تكون معاك المهارة واشتغلت في حاجة معينة، بس انت مش قاري كتاب فما عندكش أي فكرة البتاعة دي بتشتغل ازاي.\n\nاللي بيحكم الاتنين دول مع بعض هي فكرة طريقة التفكير. طريقة التفكير دي هي تعريفها الخمس حاجات اللي انا قلتهم لك قبل كده اللي هي المهارات الأساسية. ده بقى قبل الـ AI بعد الـ AI هو مفرقش، هو طول عمره موجود. يعني احنا كـ AI ده مأثرش فينا قوي، احنا كنا بنكتب Assembly، بعدين بقى C، بعدين بقى Java، بعدين بقى Python، احنا بنـ Abstract مع الوقت، دلوقتي مبقناش نكتب مش فارقة، يعني ما تفرقش، المهم ان انت معاك المهارات الأساسية كمهندس.",
    keyPoints: [
      "المعرفة (Knowledge): المعلومات والنظريات المستفادة من القراءة والدراسة.",
      "المهارة (Skill): الخبرة العملية الناتجة عن الممارسة المباشرة والتطبيق.",
      "النموذج الذهني وطريقة التفكير (Mental Model & Attitude): الرابط الحاكم بين المعرفة والمهارة، وهو الجوهر المستمر عبر كل أجيال البرمجة (Assembly -> C -> Java -> Python -> AI)."
    ]
  },
  {
    id: "seg-10",
    startSeconds: 417,
    endSeconds: 471,
    startTime: "06:57",
    endTime: "07:51",
    title: "المصادر التعليمية (1): كورسات م. حسين ناصر",
    badge: "مصادر حسين ناصر",
    category: "courses_hussein",
    text: "طيب، آخر حاجة بقى هقولها: المصادر. انت دلوقتي انا قلت لك طريقة التفكير، وقلت لك الموديل، وقلت لك ازاي ان انت محتاج تـ Upskill في ايه وتعرف تروح فين وازاي وتفكر في نفسك ازاي بعد كده وانت بـ Present نفسك. ايه المصادر بقى اللي انت تتعلم منها مصادر المعرفة دي؟\n\nأول حاجة، في كورسات لطيفة جداً ممكن تاخدها تساعدك في فكرة التأسيس التكنيكال ده. شخصين أساسيين بالنسبة لي:\n\nرقم واحد: حسين ناصر (Hussein Nasser) - تلات كورسات أساسية:\n1. Fundamentals of Backend Engineering\n2. Fundamentals of Database Engineering\n3. Fundamentals of Operating Systems\nدول التلاتة المهمين. في اوبشنال ممكن تاخد واحد رابع اللي هو بتاع الـ Software Debugging باين أو حاجة زي كده... ده مهم.\nالشخص التاني المهم بالنسبة لي هقوله في الفويس نوت التانية عشان دي هتقفل في وشي.",
    keyPoints: [
      "كورسات المهندس حسين ناصر (Hussein Nasser):",
      "1. أساسيات هندسة الباك إند: Fundamentals of Backend Engineering",
      "2. أساسيات هندسة قواعد البيانات: Fundamentals of Database Engineering",
      "3. أساسيات أنظمة التشغيل: Fundamentals of Operating Systems",
      "4. (اختياري مهم): كورس Software Debugging"
    ]
  },
  {
    id: "seg-11",
    startSeconds: 478,
    endSeconds: 543,
    startTime: "07:58",
    endTime: "09:03",
    title: "المصادر التعليمية (2): كورسات م. حسن إبراهيم على Udemy",
    badge: "مصادر حسن إبراهيم",
    category: "courses_hassan",
    text: "طيب، التأسيس التاني اللي انت محتاجه هتلاقيه عند واحد اسمه حسن إبراهيم (Hassan Ibrahim)، هتلاقيه عامل أربع كورسات مهمة وواحد مش مهم:\n\n1. أول كورس مهم اللي هو Software Architecture Fundamentals، مهم جداً.\n2. الـ Kubernetes & Docker، مهم جداً تعرف ازاي البيزكس بتاعة الـ DevOps، ولو تعرف تاخد شهادة في الـ DevOps يبقى لطيف وانت بتعرف تديبلوي الأبلكيشن اللي انت بتبنيه ده.\n3. وده جزء من اللي هو التكنولوجي اكسبوجر اللي قلتلك عليه من شوية. تلاتة: ان انت تعرف الكورس التالت يعني عنده اللي هو Microservices عشان الـ System Design، مش عشان الميكروسيرفسيز مهمة.\n4. أربعة: الكورس بتاع الـ Refactoring.\n\nالأربع كورسات دولت مهمين. كلهم موجودين على Udemy، لو انت عندك اشتراك Udemy المفروض تعرف تاخدهم عادي، لو ما عندكش اشتراك يوديمي، الأوكشة كلها على بعضها مش هتكلف كتير ان شاء الله يعني.",
    keyPoints: [
      "كورسات المهندس حسن إبراهيم (Hassan Ibrahim) على يوديمي:",
      "1. أساسيات معمارية البرمجيات: Software Architecture Fundamentals",
      "2. دوكر وكوبرنيتيس: Docker & Kubernetes (أساسيات الـ DevOps والنشر)",
      "3. الميكروسيرفسيز: Microservices (لفهم وتطبيق الـ System Design)",
      "4. إعادة هيكلة الكود: Refactoring",
      "جميعها متوفرة على منصة Udemy بتكلفة معقولة."
    ]
  },
  {
    id: "seg-12",
    startSeconds: 545,
    endSeconds: 604,
    startTime: "09:05",
    endTime: "10:04",
    title: "مصادر متقدمة: السيستم ديزاين والبيزنس والـ Agile",
    badge: "السيستم ديزاين والبيزنس",
    category: "resources_extra",
    text: "طيب، في كورسات Advanced؟ اه، في كورسات Advanced، بس انت خُد الأساسيات الأول وبعدين ربنا يسهل.\n\nفي واحد بتاع داتابيز اسمه عمرو الحلو، لطيف في حتة الداتابيز دي ممكن يساعدك فيها كويس، ده بالنسبة للمحتوى العربي.\n\nبالنسبة لمحتوى السيستم ديزاين (System Design):\nفي ريسورسز كتير: Hello Interview كويس، ByteByteGo كويس، وفي ناس هنود كتير بيعملوا شغل لطيف يعني في المساحة ديت، بس مش فاكر أساميهم دلوقتي... اه، في واحد اسمه Concept && Coding كويس، بس انت لو تقدر تستحمل اللهجة يعني.\n\nطيب بكده جِبتلك مصادر التكنيكال. مصادر المش تكنيكال اللي هتبالانس مع جزء البيزنس:\nمحتاج تعرف Agile، تعرف ازاي تعمل Plans من خلالها، خد أي كورس Agile أو اقرأ كتاب Project Management في اللي هي مدخل بروجكت مانجمنت، تعرف الناس بتفكر ازاي ورايحين على فين.\nواقرأ كتاب في الـ Product Design أو Product Management، تفهم برضو البرودكت ده بيفكر ازاي.\nوحاول تعرف عن البيزنس اللي انت شغال فيه أو اللي انت عايز تشتغل فيه.",
    keyPoints: [
      "قواعد البيانات (محتوى عربي): م. عمرو الحلو.",
      "تصميم الأنظمة (System Design): مراجع ومنصات عالمية مثل ByteByteGo و Hello Interview وقناة Concept && Coding.",
      "مهارات إدارة المشاريع: دراسة الـ Agile وقراءة كتاب في مدخل إدارة المشاريع (Project Management).",
      "إدارة وتصميم المنتجات: قراءة كتاب في الـ Product Management / Design.",
      "فهم وتعمق في مجال البيزنس والقطاع (Domain) الذي تعمل فيه."
    ]
  },
  {
    id: "seg-13",
    startSeconds: 601,
    endSeconds: 644,
    startTime: "10:01",
    endTime: "10:44",
    title: "القاعدة الذهبية: تقنية جديدة كل 3 شهور والختام",
    badge: "القاعدة الذهبية",
    category: "business_quarterly",
    text: "وخُد تكنولوجي جديدة كل 3 شهور، اتعلم حاجة جديدة. تكنولوجي جديدة قصدي بيها حاجة زي مثلاً: يعني ستاك جديد، تكنولوجي جديدة زي مثلاً داتابيز جديدة، Queues، DevOps... أي حاجة تعرف تطلع بيها Output.\n\nبس، انا كده خلصت. اديتك طريقة التفكير، اديتك المعرفة اللي انت محتاجها والمصادر بتاعتها، المهارات اللي انت محتاج تعرفها وازاي توصل لها.\n\nيعني بالتوفيق ان شاء الله، وربنا يعينك وتوصل يعني. الموضوع تشالنج بس ان شاء الله ربنا يعينك وتوصل. ربنا معاك.",
    keyPoints: [
      "القاعدة الذهبية لتوسيع الأفق: تعلّم تكنولوجيا جديدة كل ربع سنة (كل 3 شهور) مثل قاعدة بيانات جديدة، Message Queues، أدوات DevOps، إلخ.",
      "الهدف أن تكون قادراً على إنتاج مخرجات عملية (Output) وبناء حلول متكاملة.",
      "التحدي حقيقي وممتع، ومع الالتزام بالأساسيات ستصل وتتميز كمهندس محترف."
    ]
  }
];

export const CURATED_COURSES: CourseResource[] = [
  {
    id: "hn-backend",
    title: "Fundamentals of Backend Engineering",
    instructor: "Hussein Nasser (حسين ناصر)",
    platform: "Udemy",
    type: "core",
    category: "backend",
    description: "كورس أساسي لفهم بروتوكولات الاتصال (HTTP, WebSockets, gRPC)، وإدارة الاتصالات والخوادم والـ Concurrency ونماذج الباك إند.",
    keyTopics: ["Protocols (HTTP/1, HTTP/2, HTTP/3, WebSockets)", "TCP/IP & Networking", "Backend Communication Patterns", "Proxying & Load Balancing"],
    searchQuery: "Fundamentals of Backend Engineering Hussein Nasser Udemy"
  },
  {
    id: "hn-database",
    title: "Fundamentals of Database Engineering",
    instructor: "Hussein Nasser (حسين ناصر)",
    platform: "Udemy",
    type: "core",
    category: "database",
    description: "تأسيس عميق في آلية عمل قواعد البيانات من الداخل، محركات التخزين، الـ B-Trees، والـ Indexes والـ ACID والـ Transactions والتطبيع والـ Replication.",
    keyTopics: ["Storage Engines & B-Trees", "Indexing & Query Optimization", "ACID & Isolation Levels", "Partitioning & Sharding"],
    searchQuery: "Fundamentals of Database Engineering Hussein Nasser Udemy"
  },
  {
    id: "hn-os",
    title: "Fundamentals of Operating Systems",
    instructor: "Hussein Nasser (حسين ناصر)",
    platform: "Udemy",
    type: "core",
    category: "system_design",
    description: "فهم العمليات (Processes)، الخيوط (Threads)، إدارة الذاكرة (Virtual Memory & Paging)، ونظام الملفات والـ I/O وتأثيرها على أداء البرمجيات.",
    keyTopics: ["Processes & Threads", "Memory Management & Paging", "File Systems & Page Cache", "System Calls & I/O"],
    searchQuery: "Fundamentals of Operating Systems Hussein Nasser Udemy"
  },
  {
    id: "hn-debug",
    title: "Software Debugging / Troubleshooting",
    instructor: "Hussein Nasser (حسين ناصر)",
    platform: "Udemy",
    type: "optional",
    category: "backend",
    description: "كورس اختياري قيّم لتعلم مهارات التحقيق واستكشاف الأخطاء المعقدة، فحص الـ Traces، والـ Profiling تحت الضغط.",
    keyTopics: ["Tracing & Profiling", "Root Cause Analysis", "Debugging Production Issues", "Memory Leaks"],
    searchQuery: "Software Debugging Hussein Nasser Udemy"
  },
  {
    id: "hi-arch",
    title: "Software Architecture Fundamentals",
    instructor: "Hassan Ibrahim (حسن إبراهيم)",
    platform: "Udemy",
    type: "core",
    category: "architecture",
    description: "كورس لا غنى عنه لفهم الأنماط المعمارية (Architectural Patterns)، المبادئ (SOLID, Clean Arch)، وكيفية تقسيم النظم واختيار الحدود بين الوحدات.",
    keyTopics: ["Clean & Hexagonal Architecture", "Design Principles & Modularity", "Trade-off Analysis", "Architectural Katas"],
    searchQuery: "Software Architecture Fundamentals Hassan Ibrahim Udemy"
  },
  {
    id: "hi-k8s-docker",
    title: "Docker & Kubernetes for Developers (DevOps Basics)",
    instructor: "Hassan Ibrahim (حسن إبراهيم)",
    platform: "Udemy",
    type: "core",
    category: "devops",
    description: "فهم الحاويات (Containers)، بناء وإدارة الـ Images، والتشغيل على Kubernetes، ونشر التطبيقات وإدارتها في بيئة الإنتاج.",
    keyTopics: ["Containerization & Dockerfile Best Practices", "Kubernetes Pods, Services, Deployments", "CI/CD & Deployment Strategies", "DevOps Foundations"],
    searchQuery: "Docker Kubernetes Hassan Ibrahim Udemy"
  },
  {
    id: "hi-microservices",
    title: "Microservices Architecture (System Design Focus)",
    instructor: "Hassan Ibrahim (حسن إبراهيم)",
    platform: "Udemy",
    type: "core",
    category: "system_design",
    description: "دراسة الميكروسيرفسيز ليس لمجرد تطبيقها، بل لاستيعاب مبادئ تصميم الأنظمة الموزعة، إدارة البيانات والاتصالات المتزامنة وغير المتزامنة والـ Saga Pattern.",
    keyTopics: ["Decomposition by Business Capability", "Event-Driven & Async Communication", "Distributed Transactions (Saga)", "Resilience & Circuit Breaking"],
    searchQuery: "Microservices Hassan Ibrahim Udemy"
  },
  {
    id: "hi-refactoring",
    title: "Refactoring Code for Quality & Maintainability",
    instructor: "Hassan Ibrahim (حسن إبراهيم)",
    platform: "Udemy",
    type: "core",
    category: "architecture",
    description: "مهارة تنظيف الكود، التخلص من الـ Code Smells، إعادة الهيكلة دون كسر الوظائف، والوصول لكود يسهل قراءته وصيانته.",
    keyTopics: ["Code Smells Identification", "Refactoring Patterns & Techniques", "Automated Testing for Refactoring", "Legacy Code Handling"],
    searchQuery: "Refactoring Hassan Ibrahim Udemy"
  },
  {
    id: "bytebytego",
    title: "System Design Frameworks & Visual Guides",
    instructor: "Alex Xu (ByteByteGo)",
    platform: "ByteByteGo / Books",
    type: "recommended",
    category: "system_design",
    description: "المرجع العالمي الأكثر شهرة في تصميم الأنظمة واسعة النطاق من خلال رسومات توضيحية مبسطة ودراسات حالة واقعية.",
    keyTopics: ["Rate Limiting, Cache, CDN", "Distributed Message Queues", "Design YouTube, Twitter, Uber", "High Availability & Scalability"],
    searchQuery: "ByteByteGo System Design Alex Xu",
    url: "https://bytebytego.com"
  },
  {
    id: "hello-interview",
    title: "System Design for Real World & Interviews",
    instructor: "HelloInterview Team",
    platform: "HelloInterview",
    type: "recommended",
    category: "system_design",
    description: "دليل عملي تفاعلي حديث يركز على صياغة الحلول خطوة بخطوة وإجراء المفاضلات والمقايضات (Trade-offs) بدقة.",
    keyTopics: ["Framework for System Design", "Core Deep Dives", "Real Company Architectures", "Live Interactive Katas"],
    searchQuery: "Hello Interview System Design",
    url: "https://www.hellointerview.com"
  },
  {
    id: "concept-and-coding",
    title: "Concept && Coding (System Design & LLD)",
    instructor: "Shrayansh Jain",
    platform: "YouTube",
    type: "recommended",
    category: "system_design",
    description: "قناة متميزة جداً لتغطية Low-Level Design (Design Patterns, SOLID, Machine Coding) و High-Level Design بتفصيل معماري عميق.",
    keyTopics: ["Low Level Design (LLD)", "Design Patterns in Action", "High Level Design (HLD)", "Concurrency & Data Structures"],
    searchQuery: "Concept and Coding System Design YouTube",
    url: "https://www.youtube.com/@ConceptandCoding"
  },
  {
    id: "amr-elhelw",
    title: "شروحات هندسة قواعد البيانات بالمحتوى العربي",
    instructor: "Amr El-Helw (عمرو الحلو)",
    platform: "YouTube / Courses",
    type: "recommended",
    category: "database",
    description: "محتوى عربي راقٍ وعميق يبسط مفاهيم قواعد البيانات ومحركات التخزين وتفاصيل الـ Relational Databases.",
    keyTopics: ["مفاهيم قواعد البيانات العميقة", "الـ SQL والـ Query Optimization", "الفهارس والتنظيم الداخلي", "محتوى عربي عالي الجودة"],
    searchQuery: "عمرو الحلو قواعد بيانات Amr El-Helw Database"
  },
  {
    id: "agile-pm",
    title: "Agile & Project Management Foundations",
    instructor: "مراجع مقترحة: Scrum Guide / كتب إدارة المشاريع",
    platform: "Books / Courses",
    type: "recommended",
    category: "business",
    description: "فهم دورات التسليم السريعة (Sprints)، التخطيط، تقدير الجهد، والتنسيق الفعال مع فرق المنتجات والعملاء.",
    keyTopics: ["Agile Values & Principles", "Scrum & Kanban Workflows", "Estimation & Velocity", "Stakeholder Communication"],
    searchQuery: "Agile Project Management for Software Engineers"
  },
  {
    id: "product-mgmt",
    title: "Product Management & Product Design for Engineers",
    instructor: "كتب ومراجع مقترحة (Inspired / Continuous Discovery)",
    platform: "Books / Articles",
    type: "recommended",
    category: "business",
    description: "التحول من مجرد مبرمج ينفذ المهام إلى مهندس منتج يفهم مؤشرات الأداء (KPIs) واحتياجات المستخدم وعائد الاستثمار (ROI).",
    keyTopics: ["Product Thinking & User Value", "Prioritization Frameworks", "Metrics & Impact (ROI)", "Bridging Tech & Business"],
    searchQuery: "Product Management for Software Engineers Marty Cagan"
  }
];

export const EXECUTIVE_ROADMAP = {
  coreSkills: [
    {
      num: "01",
      name: "اتخاذ القرار والمفاضلة (Decision Making & Trade-offs)",
      details: "القدرة على تحليل البدائل، موازنة المكاسب والخسائر، تحمل المسؤولية، وتدارك الأخطاء والتعلم منها بسرعة."
    },
    {
      num: "02",
      name: "التصميم التقني (Technical Design)",
      details: "فهم السياق الهندسي، بناء واجهات واضحة، وتصميم حلول برمجية مستدامة وقابلة للتطوير."
    },
    {
      num: "03",
      name: "إدارة التسليم والاعتمادية (Delivery Management)",
      details: "دقة التقدير الزمني (Estimation)، الالتزام بالمواعيد، إدارة الإصدارات، والتواصل المستمر حول تقدم العمل."
    },
    {
      num: "04",
      name: "فهم بيئة الأعمال والقيمة المضافة (Business Context & Value)",
      details: "معرفة كيف يربح التطبيق وما القيمة التي يضيفها الكود للمستخدمين وللشركة، والتفكير كمهندس منتج."
    },
    {
      num: "05",
      name: "اكتشاف المشاكل والتواصل البشري (Problem Sensing & Human Connection)",
      details: "القدرة على رصد المعضلات الحقيقية قبل تفاقمها وصياغة حلول ناضجة، مع مهارات تواصل ممتازة مع الفريق والإدارة والعميل."
    }
  ],
  engineeringLayers: [
    {
      layer: "الطبقة الأولى",
      name: "واجهات العرض والاستدعاء (Presentation Layer & API Design)",
      description: "تصميم واجهات المستخدم والـ APIs وتحديد العلاقات والاعتماديات بين الوحدات البرمجية."
    },
    {
      layer: "الطبقة الثانية",
      name: "تصميم منطق العمل (Low-Level Design - LLD & Software Architecture)",
      description: "هيكلة الكود الداخلي، تطبيق مبادئ الـ SOLID، والـ Design Patterns، ونظافة الكود وقابليته للاختبار."
    },
    {
      layer: "الطبقة الثالثة",
      name: "تصميم الأنظمة الموزعة (High-Level Design - HLD / System Design)",
      description: "معمارية المنظومة الكلية، توزيع الحمل، التخزين المؤقت (Caching)، وقابلية التوسع (Scalability)."
    },
    {
      layer: "الطبقة الرابعة",
      name: "إجراءات الجودة وهرم الاختبار (Quality & Testing Pyramid)",
      description: "آليات الاختبارات (Unit, Integration, E2E) وبوابات الجودة (Quality Gates) لمراجعة الكود الصادر من الـ AI."
    },
    {
      layer: "الطبقة الخامسة",
      name: "نمذجة وتصميم قواعد البيانات (Data Modeling, ERD & DB Design)",
      description: "بناء هياكل البيانات، رسم الـ ERD، فهم محركات التخزين، وتحسين الاستعلامات وفهارس الأداء."
    },
    {
      layer: "الطبقة السادسة",
      name: "اختيار التكنولوجيا المناسبة (Generalist Mindset)",
      description: "معرفة متى تختار كل أداة، مع توسيع الأفق كمهندس شامل (Generalist) قادر على الربط السريع في عصر الذكاء الاصطناعي."
    }
  ],
  abilityTriangle: {
    knowledge: {
      title: "المعرفة (The Knowledge)",
      description: "القراءة النظرية والاطلاع على المفاهيم، الكتب، الأوراق العلمية والدروس. لا تكفي وحدها إذا لم تُمارَس."
    },
    skill: {
      title: "المهارة (The Skill)",
      description: "القدرة العملية اليدوية على التنفيذ وحل المشاكل وكتابة الأكواد. لا تكفي وحدها بدون أساس نظري لفهم أسباب ما يحدث."
    },
    mentalModel: {
      title: "النموذج الذهني وطريقة التفكير (Attitude & Mental Model)",
      description: "الحاكم الرئيسي والبوصلة التي تربط بين المعرفة والمهارة، وتحدد كيف تفكر وتتصرف وتتخذ القرارات وتتعلم. وهي الثابت الوحيد عبر كل أجيال الحوسبة."
    }
  },
  quarterlyRule: {
    title: "القاعدة الذهبية: تقنية جديدة كل 3 شهور (Quarterly Upskilling)",
    description: "كل ربع سنة، اختر موضوعاً أو أداة جديدة خارج منطقة راحتك (قاعدة بيانات نوعية، Message Queue، أداة DevOps، إطار عمل جديد) وطبق بها مشروعاً يخرج ناتجاً ملموساً (Output). هذا ما يجعلك مهندساً ناضجاً وسريع التكيف."
  }
};
