// All site copy in English and Somali, in one place.
// NOTE: I'm not a native Somali speaker. The Somali text below is a solid,
// meaning-accurate first pass, but have a native speaker skim it before
// launch — especially the hero headline and FAQ, where natural phrasing
// matters most. Everything is plain text here, easy to hand-edit.

export const translations = {
  en: {
    nav: {
      services: 'Services',
      work: 'Work',
      faq: 'FAQ',
      contact: 'Contact',
      startProject: 'Start a project',
    },
    hero: {
      badge: 'Tusmo — Somali for structure, order, system',
      location: 'Jijiga, Ethiopia',
      reach: 'Serving clients worldwide',
      headline1: 'Order is a feature,',
      headline2: 'not an afterthought.',
      paragraph:
        'We design and build websites, apps, and management systems for hotels, restaurants, schools, and hospitals — organized from the database up, so your business runs as clean as it looks.',
      ctaPrimary: 'Message us on WhatsApp',
      ctaSecondary: 'See what we build ↓',
      branchLabels: ['HOTEL', 'HOSPITAL', 'SCHOOL', 'CAFÉ'],
    },
    dashboard: {
      eyebrow: "What you'd actually see",
      title: 'One dashboard, whatever the business.',
      note: 'Sample preview — built around your actual data',
      items: [
        { label: 'Room availability', value: 'Live', tag: 'HOTEL' },
        { label: 'Orders in kitchen', value: '3 pending', tag: 'CAFÉ' },
        { label: 'Student attendance', value: 'Synced daily', tag: 'SCHOOL' },
        { label: 'Patient records', value: 'Access-controlled', tag: 'HOSPITAL' },
      ],
    },
    services: {
      eyebrow: 'What we build',
      title: 'One team, every system your business runs on.',
      subtitle: 'Same clean architecture underneath, whatever the industry on top.',
      items: [
        {
          tag: 'HOTEL',
          title: 'Hotel systems',
          desc: 'Booking engines, room management, guest check-in, and payments — all in one clean dashboard.',
        },
        {
          tag: 'FOOD',
          title: 'Restaurant & café systems',
          desc: 'Menus, table orders, kitchen tickets, and delivery tracking that keep service fast.',
        },
        {
          tag: 'SCHOOL',
          title: 'School systems',
          desc: 'Student records, attendance, grading, and parent communication in one portal.',
        },
        {
          tag: 'HEALTH',
          title: 'Hospital systems',
          desc: 'Patient records, appointment scheduling, and staff coordination, built for accuracy.',
        },
        {
          tag: 'WEB',
          title: 'Business websites',
          desc: 'Fast, modern, mobile-first sites that make a business look as good as it actually is.',
        },
        {
          tag: 'APP',
          title: 'Mobile applications',
          desc: 'iOS and Android apps for booking, ordering, or managing your business on the go.',
        },
      ],
    },
    guarantees: [
      {
        title: 'Database-first design',
        desc: 'We model your data correctly before writing a single screen, so the system scales instead of getting rebuilt in a year.',
      },
      {
        title: 'You own everything',
        desc: 'Full source code, full deployment access. No monthly subscription lock-in — nothing is held hostage after handoff.',
      },
      {
        title: 'Fixed scope, no surprises',
        desc: 'You know the price and the deliverable before work starts — not after.',
      },
      {
        title: 'Direct line, no middlemen',
        desc: 'You talk to the person actually building your system, from first message to launch.',
      },
    ],
    story: {
      eyebrow: 'Why Tusmo exists',
      text: "Most small businesses in the region run on spreadsheets, notebooks, and memory. Tusmo exists to replace that with one clean system — built once, owned outright, and structured so it still makes sense a year from now.",
    },
    inspector: {
      eyebrow: 'System architecture',
      title: 'How we engineer each system.',
      subtitle:
        'Pick a domain. This is the same architectural thinking that goes into every project — the principles are fixed even when the industry changes.',
      capabilities: [
        {
          id: 'booking',
          tag: 'HOTEL / CAFÉ',
          title: 'Booking & reservation engines',
          summary: 'Real-time availability that never double-books a room or a table.',
          stack: ['Server-side availability locking', 'Calendar conflict prevention', 'Integrated payment capture'],
          principles: [
            'Every booking hits a single source of truth — no two guests can claim the same slot.',
            'Payment and confirmation happen in one flow, not a follow-up email.',
            'Staff dashboard and guest-facing site read from the same live data.',
          ],
        },
        {
          id: 'health',
          tag: 'HOSPITAL',
          title: 'Secure records & care workflows',
          summary: 'Patient data that is accurate, access-controlled, and auditable.',
          stack: ['Role-based access control', 'Encrypted data at rest', 'Structured audit logging'],
          principles: [
            'Every record has an owner and a permission level — nothing is open by default.',
            'Appointment, staff, and patient data are modeled separately so one failure never cascades.',
            'Every change is logged with who, what, and when — no silent edits.',
          ],
        },
        {
          id: 'retail',
          tag: 'RESTAURANT',
          title: 'Live POS & inventory',
          summary: 'Orders, kitchen tickets, and stock counts that stay in sync in real time.',
          stack: ['Real-time order sync', 'Automatic inventory deduction', 'Daily sales reporting'],
          principles: [
            'An order placed at the counter reaches the kitchen instantly — no re-typing.',
            'Stock counts update the moment an item sells, not at end-of-day reconciliation.',
            'Reports are generated from the same ledger staff use, so numbers always match.',
          ],
        },
        {
          id: 'mobile',
          tag: 'MOBILE',
          title: 'Cross-platform applications',
          summary: 'One codebase, native feel, on both iOS and Android.',
          stack: ['Shared cross-platform codebase', 'Push notifications', 'Offline-first data sync'],
          principles: [
            'One team maintains one codebase instead of two apps drifting apart over time.',
            'The app stays usable with a weak connection and syncs cleanly once it reconnects.',
            'Built to submit cleanly to both the App Store and Google Play on the first pass.',
          ],
        },
      ],
    },
    process: {
      eyebrow: 'How it runs',
      title: 'Four stages. Same order, every time.',
      items: [
        { n: '01', title: 'Blueprint', desc: 'We map out exactly what your business needs — no guessing, no bloat.' },
        { n: '02', title: 'Build', desc: 'Clean, tested code, structured so it stays easy to change later.' },
        { n: '03', title: 'Deploy', desc: 'Live, fast, and secure — ready for real customers on day one.' },
        { n: '04', title: 'Support', desc: 'We stay reachable after launch. Systems need upkeep, not abandonment.' },
      ],
    },
    faq: {
      eyebrow: 'Common questions',
      title: 'Before you reach out.',
      items: [
        {
          q: 'How much does a system cost?',
          a: 'It depends on scope. We agree on the full price and deliverable before any work starts — no hourly surprises, no scope creep billed after the fact.',
        },
        {
          q: 'Do I pay a monthly subscription?',
          a: "No. You own the system outright once it's delivered. That's different from off-the-shelf SaaS tools that charge you every month forever.",
        },
        {
          q: 'How long does a project take?',
          a: 'A focused website typically takes 1–2 weeks. A full system (hotel, school, hospital, POS) usually takes 3–6 weeks depending on complexity.',
        },
        {
          q: 'Do you work with clients outside Ethiopia?',
          a: "Yes. We're based in Jijiga but work with clients anywhere — everything is handled remotely over WhatsApp and video calls.",
        },
        {
          q: 'What happens after launch?',
          a: "We stay reachable for support after handoff. Systems need occasional upkeep — we don't disappear once the invoice is paid.",
        },
        {
          q: 'Can you build something outside these industries?',
          a: 'Yes — hotels, restaurants, schools, and hospitals are our core focus, but the same architecture approach applies to most business systems. Ask us.',
        },
      ],
    },
    contact: {
      eyebrow: "Let's talk",
      title: "Tell us what you're building.",
      text: "We work with clients everywhere — no office visit required. Send a message on WhatsApp and we'll reply with next steps, usually the same day.",
      cta: 'Chat on WhatsApp',
    },
    commandMenu: {
      jumpTo: 'Jump to',
      chat: 'Chat on WhatsApp',
    },
  },

  so: {
    nav: {
      services: 'Adeegyada',
      work: 'Shaqada',
      faq: "Su'aalaha",
      contact: 'Xiriirka',
      startProject: 'Bilow mashruuc',
    },
    hero: {
      badge: 'Tusmo — hab-dhisme, nidaam, isku-xirnaan',
      location: 'Jijiga, Itoobiya',
      reach: 'U adeegna macaamiisha adduunka oo dhan',
      headline1: 'Nidaamku waa sifo,',
      headline2: 'ma aha wax lagu daro dabadeed.',
      paragraph:
        'Waxaan naqshadeynaa oo dhisnaa websaydhyo, abaaro, iyo nidaamyada maaraynta hudheellada, maqaayadaha, dugsiyada, iyo isbitaalada — laga bilaabo qaab-dhismeedka xogta ilaa dushiisa, si ganacsigaagu u shaqeeyo si nadiif ah sida uu u eg yahay.',
      ctaPrimary: 'Nagala soo xiriir WhatsApp',
      ctaSecondary: 'Eeg waxa aan dhisno ↓',
      branchLabels: ['HUDHEEL', 'ISBITAAL', 'DUGSI', 'KAFITEERIYA'],
    },
    dashboard: {
      eyebrow: 'Waxa aad dhab ahaan arki lahayd',
      title: 'Hal shaashad oo maamul ah, ganacsi kastoo uu yahay.',
      note: 'Tusaale muujin ah — loo dhisay xogtaada dhabta ah',
      items: [
        { label: 'Qolalka banaan', value: 'Firfircoon', tag: 'HUDHEEL' },
        { label: 'Dalabka jikada', value: '3 sugaya', tag: 'KAFITEERIYA' },
        { label: 'Imaanshaha ardayda', value: 'Maalin walba la cusboonaysiiyo', tag: 'DUGSI' },
        { label: 'Diiwaanka bukaanka', value: 'Gelitaan xakameysan', tag: 'ISBITAAL' },
      ],
    },
    services: {
      eyebrow: 'Waxa aan dhisno',
      title: 'Hal kooxi, dhammaan nidaamyada ganacsigaagu ku shaqeeyo.',
      subtitle: 'Isla qaab-dhismeed nadiif ah oo hoose, si kastoo warshaduhu kala duwan tahay.',
      items: [
        {
          tag: 'HUDHEEL',
          title: 'Nidaamyada hudheellada',
          desc: 'Nidaamka buugsiga, maaraynta qolalka, diiwaan-gelinta martida, iyo lacag-bixinta — dhammaan hal shaashad nadiif ah.',
        },
        {
          tag: 'CUNTO',
          title: 'Nidaamyada maqaayadaha & kafitariyada',
          desc: 'Liistada cuntada, dalabka miisaska, waraaqaha jikada, iyo raadraaca gaarsiinta si adeeggu u dhaqso badnaado.',
        },
        {
          tag: 'DUGSI',
          title: 'Nidaamyada dugsiyada',
          desc: 'Diiwaanka ardayda, imaanshaha, buundada, iyo xiriirka waalidiinta oo dhammaan hal goobood ku yaal.',
        },
        {
          tag: 'CAAFIMAAD',
          title: 'Nidaamyada isbitaalada',
          desc: 'Diiwaanka bukaanka, jadwalka ballamaha, iyo isku-duwidda shaqaalaha, oo loo dhisay saxnaan.',
        },
        {
          tag: 'WEB',
          title: 'Websaydhyada ganacsiga',
          desc: 'Websaydh dhaqso ah, casri ah, oo ugu horeyn loo dhisay mobilada, kuwaas oo ka dhigaya ganacsigaagu inuu u muuqdo sida uu dhab ahaan u yahay.',
        },
        {
          tag: 'APP',
          title: 'Abaaraha mobilada',
          desc: 'Abaaraha iOS iyo Android ee loogu talagalay buugsiga, dalabka, ama maaraynta ganacsigaaga meel kasta oo aad joogtoba.',
        },
      ],
    },
    guarantees: [
      {
        title: 'Naqshadaynta xogta marka hore',
        desc: 'Waxaan si sax ah u qaabeynaa xogtaada ka hor inta aanan qorin hal shaashad, si nidaamku u koro halkii uu isku dhisi lahaa sanad kadib.',
      },
      {
        title: 'Adiga baad wax walba leedahay',
        desc: 'Koodhka buuxa, gelitaanka bandhigidda oo buuxa. Ma jiro xiritaan rukhsad bille ah — waxba dib looma haysto kadib marka aan kuu wareejino.',
      },
      {
        title: "Baaxad go'an, lama filaan ma jiro",
        desc: "Waad ogtahay qiimaha iyo waxa la bixin doono ka hor intaan shaqadu bilaabmin — mana aha kadib.",
      },
      {
        title: 'Xiriir toos ah, wax dhexdhexaadin ah ma jiraan',
        desc: 'Waxaad la hadli doontaa qofka dhab ahaan dhisaya nidaamkaaga, laga bilaabo fariinta ugu horeysa ilaa bilowga.',
      },
    ],
    story: {
      eyebrow: 'Sababta Tusmo u jirto',
      text: "Inta badan ganacsiyada yaryar ee gobolka waxay ku shaqeeyaan liisas, buugaag, iyo xasuus. Tusmo waxay u jirtaa inay ku beddesho hal nidaam oo nadiif ah — oo hal mar la dhisay, gebi ahaanba la leeyahay, oo si loo qaabeeyay in ay wali macno samaynayso hal sano kadib.",
    },
    inspector: {
      eyebrow: 'Qaab-dhismeedka nidaamka',
      title: 'Sida aan u dhisno nidaam kasta.',
      subtitle:
        "Dooro qayb. Kani waa isla fikirka qaab-dhismeed ee ku jira mashruuc kasta — mabaadi'da way isku mid yihiin xitaa markay warshaduhu isbeddesho.",
      capabilities: [
        {
          id: 'booking',
          tag: 'HUDHEEL / KAFITEERIYA',
          title: 'Matoorrada buugsiga & bilaanka',
          summary: 'Diyaargarow waqti-dhabta ah oo aan waligiis labanlaaban qol ama miis.',
          stack: ['Xakameynta diyaarnimada server-ka', 'Ka hortagga iskhilaafka jadwalka', 'Qabashada lacag-bixinta oo isku-dhafan'],
          principles: [
            'Buugsi kastaa wuxuu maraa isha xaqiiqda kaliya — labo marti ma sheegan karaan isla booska.',
            'Lacag-bixinta iyo xaqiijinta waxay ku dhacaan hal socod — mana aha email la raaco kadib.',
            'Shaashadda shaqaalaha iyo boggga martida way ka akhrisan yihiin isla xogta firfircoon.',
          ],
        },
        {
          id: 'health',
          tag: 'ISBITAAL',
          title: 'Diiwaanno ammaan ah & habka daryeelka',
          summary: 'Xogta bukaanka oo sax ah, gelitaanka la xakameeyay, oo la baarayn karo.',
          stack: ['Xakameynta gelitaanka ku salaysan doorka', 'Xogta sirta ah marka ay xasilloonaato', 'Diiwaan-gelin baaritaan oo qaab-dhismeed leh'],
          principles: [
            'Diiwaan kastaa wuxuu leeyahay mid u iska leh iyo heer ogolaansho — waxba si toos ah furan ma aha.',
            "Ballanka, shaqaalaha, iyo xogta bukaanka si gooni ah ayaa loo qaabeeyaa si khalad hal meel ah uusan u faafin.",
            'Isbeddel kastaa waxaa lagu diiwaan geliyaa cidda, waxa, iyo goorta — wax beddelka aamusan ma jiro.',
          ],
        },
        {
          id: 'retail',
          tag: 'MAQAAYAD',
          title: 'POS firfircoon & kaydka',
          summary: 'Dalabka, waraaqaha jikada, iyo tirinta kaydka oo waqti dhab ah isku socda.',
          stack: ['Isku-xirnaanta dalabka waqtiga dhabta ah', 'Ka-goynta kaydka si toos ah', 'Warbixinta iibka maalinlaha ah'],
          principles: [
            'Dalab laga dhigo miiska wuxuu si degdeg ah ugu gaaraa jikada — dib looma qorin.',
            'Tirada kaydku waxay cusboonaysiisaa isla xilliga alaabta la iibiyo, mana aha dhamaadka maalinta.',
            'Warbixinnada waxaa laga sameeyaa isla diiwaanka shaqaaluhu isticmaalaan, sidaas darteed tirooyinku had iyo jeer waa mid.',
          ],
        },
        {
          id: 'mobile',
          tag: 'MOBILE',
          title: 'Abaaro ku shaqeeya dhammaan nidaamyada',
          summary: 'Hal koodh oo aasaasi ah, dareen asli ah, labadaba iOS iyo Android.',
          stack: ['Koodh wadaag ah oo dhammaan nidaamyada u shaqeeya', 'Ogeysiisyo (push notifications)', 'Isku-xirnaanta xogta marka aan internetku jirin'],
          principles: [
            "Hal koox ayaa dayactirta hal koodh, halkii ay laba abaar oo kala go'aya waqti ka dib jiri lahaayeen.",
            'Abaarku wuu shaqeeyaa xitaa marka internetku daciifsan yahay, wuxuuna si nadiif ah isu xiraa marka uu dib u xirmo.',
            'Loo dhisay si loogu gudbiyo si nadiif ah App Store iyo Google Play marka ugu horreysa.',
          ],
        },
      ],
    },
    process: {
      eyebrow: 'Sida ay u socoto',
      title: 'Afar marxaladood. Isla nidaam, mar walba.',
      items: [
        { n: '01', title: 'Qorshaynta', desc: 'Waxaan si sax ah u qeexnaa waxa ganacsigaagu u baahan yahay — male-awaal ma jiro, wax dheeraad ahna ma jiraan.' },
        { n: '02', title: 'Dhisidda', desc: 'Koodh nadiif ah oo la tijaabiyay, oo loo qaabeeyay si uu u sii fududaado in dib loo beddelo.' },
        { n: '03', title: 'Bandhigidda', desc: 'Firfircoon, dhaqso ah, oo ammaan ah — diyaar u ah macaamiisha dhabta ah maalinta ugu horeysa.' },
        { n: '04', title: 'Taageero', desc: 'Waan kaa heli karnaa gudbinta ka dib. Nidaamyadu waxay u baahan yihiin dayactir, mana aha in la dayo.' },
      ],
    },
    faq: {
      eyebrow: 'Su\'aalaha guud',
      title: 'Ka hor inta aadan nala soo xiriirin.',
      items: [
        {
          q: 'Immisa ayay nidaamku kaa qaadanaysaa?',
          a: 'Waxay ku xiran tahay baaxadda. Waxaan isku raacnaa qiimaha buuxa iyo waxa la bixin doono ka hor intaan shaqadu bilaabmin — lama filaan sacaadeed ma jiraan, mana jiraan kharash dheeri ah oo la soo koobo shaqada dabadeed.',
        },
        {
          q: 'Ma bixin doonaa lacag bille ah?',
          a: 'Maya. Nidaamka gebi ahaanba waad leedahay marka lagu soo gudbiyo. Tani way ka duwan tahay qalabka SaaS ee diyaarka ah ee bil kasta lacag kaa qaadaya weligiis.',
        },
        {
          q: 'Immisa waqti ayuu mashruucu qaataa?',
          a: 'Website la xiisaynayo caadi ahaan wuxuu qaataa 1–2 toddobaad. Nidaam buuxa (hudheel, dugsi, isbitaal, POS) caadi ahaan wuxuu qaataa 3–6 toddobaad, taasoo ku xiran adeegsiga.',
        },
        {
          q: 'Ma la shaqaysaa macaamiisha ka baxsan Itoobiya?',
          a: 'Haa. Waxaan ku sugan nahay Jijiga laakiin waxaan la shaqaynaa macaamiisha meel kasta — wax walba waxaa lagu maareeyaa fog ahaan iyada oo la adeegsanayo WhatsApp iyo wicitaanno muuqaal leh.',
        },
        {
          q: 'Maxaa dhaca gudbinta ka dib?',
          a: 'Waxaan sii ahaanaynaa mid la heli karo taageero ahaan wareejinta ka dib. Nidaamyadu waxay u baahan yihiin dayactir mararka qaarkood — kuma libdhno marka biilku la bixiyo.',
        },
        {
          q: 'Ma dhisi kartaa wax ka baxsan warshadahaan?',
          a: "Haa — hudheellada, maqaayadaha, dugsiyada, iyo isbitaalada ayaa ah diirada aan saarnahay, laakiin isla habka qaab-dhismeedka ayaa ku dabaqsan inta badan nidaamyada ganacsiga. Na weydii.",
        },
      ],
    },
    contact: {
      eyebrow: 'Aan wada hadalno',
      title: 'Noo sheeg waxa aad dhisaysid.',
      text: 'Waxaan la shaqaynaa macaamiisha meel kasta — booqasho xafiis looma baahna. Noo soo dir fariin WhatsApp waxaana kugu jawaabi doonaa tallaabooyinka xiga, badanaa isla maalinta.',
      cta: 'Kula sheekayso WhatsApp',
    },
    commandMenu: {
      jumpTo: 'U gudub',
      chat: 'Kula sheekayso WhatsApp',
    },
  },
}
