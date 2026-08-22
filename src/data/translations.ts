export type Language = 'en' | 'es';

export const translations = {
  en: {
    nav: {
      home: "Home",
      mission: "Mission",
      audiences: "Who We Help",
      services: "Services",
      howItWorks: "How It Works",
      payWhatYouCan: "Pay What You Can",
      workshops: "Workshops",
      stories: "Stories",
      survey: "Community Survey",
      contact: "Contact",
      getHelp: "Get Free Tech Help",
      callUs: "Call (760) 555-4357",
      fontSize: "Text Size",
      standard: "A",
      large: "A+",
      spanish: "Español",
      english: "English"
    },
    hero: {
      tag: "Nonprofit Community Tech Education",
      headline: "Tech Help for Seniors & Families",
      subheadline: "Patient, Friendly Technology Support in the Coachella Valley",
      body: "Technology should make life easier—not more stressful. We provide patient, judgment-free technology guidance so you can connect with loved ones, access healthcare, and feel confident in today's digital world.",
      ctaPrimary: "Request Free 1-on-1 Help",
      ctaSecondary: "View Upcoming Workshops",
      phoneText: "Prefer to talk? Call us directly at",
      phone: "(760) 555-4357",
      badge1: "100% Free / Pay What You Can",
      badge2: "Bilingual English & Spanish",
      badge3: "Home Visits & Local Libraries"
    },
    mission: {
      tag: "Our Community Mission",
      headline: "Connecting people, never leaving anyone behind",
      quote: "“Technology is only good when it includes everyone. We teach with kindness and patience.”",
      body: "Coachella Computer Aid (CCA) is a community-supported nonprofit serving the entire Coachella Valley—from Palm Springs to Coachella. We believe digital literacy is a fundamental right. Whether you want to video-call your grandchildren, make a telehealth appointment, or avoid online scams, our patient coaches will sit with you until you feel completely confident.",
      pillar1Title: "Zero Rush, Zero Jargon",
      pillar1Desc: "We speak plain English & Spanish, never confusing tech acronyms. You set the pace.",
      pillar2Title: "Dignity & Respect",
      pillar2Desc: "There are no silly questions. We celebrate every new milestone with you.",
      pillar3Title: "Pay-What-You-Can Model",
      pillar3Desc: "High-quality tech support is accessible to everyone regardless of ability to pay.",
      pillar4Title: "Trusted Local Coaches",
      pillar4Desc: "Background-checked community volunteers and staff who genuinely care."
    },
    audiences: {
      tag: "Who We Serve",
      headline: "Everyone has a place at our table",
      subtitle: "Designed specifically for neighbors who need a calm, patient hand with digital devices.",
      items: [
        {
          title: "Senior Citizens",
          subtitle: "Ages 60+ Learning Comfortably",
          desc: "Master smartphones, tablets, and computers at your own pace without feeling rushed or overwhelmed.",
          badge: "Most Popular"
        },
        {
          title: "People with Disabilities",
          subtitle: "Accessibility & Adaptive Tools",
          desc: "Custom setup for screen readers, voice controls, magnification, hearing aid Bluetooth, and adaptive input.",
          badge: "Adaptive Tech"
        },
        {
          title: "Spanish-Speaking Families",
          subtitle: "Apoyo Bilingüe y Cultural",
          desc: "Full instruction in Spanish for parents, grandparents, and students to navigate school portals and services.",
          badge: "100% Bilingüe"
        },
        {
          title: "Military Veterans",
          subtitle: "VA Healthcare & Benefits Tech",
          desc: "Dedicated support accessing My HealtheVet, telehealth appointments, VA benefits portals, and peer community.",
          badge: "Veterans First"
        },
        {
          title: "Low-Income Families",
          subtitle: "Affordable Devices & Connectivity",
          desc: "Guidance applying for subsidized home internet, low-cost tablets, and free community computer access.",
          badge: "Community Care"
        },
        {
          title: "Anyone Seeking Guidance",
          subtitle: "No Question Too Simple",
          desc: "From resetting forgotten passwords to printing medical records, we are your patient neighborhood tech ally.",
          badge: "Open to All"
        }
      ]
    },
    services: {
      tag: "How We Help You",
      headline: "Practical help for your daily life",
      subtitle: "Choose from one-on-one sessions, small group workshops, or phone assistance.",
      items: [
        {
          id: "learn",
          title: "1. Learn Technology Basics",
          desc: "One-on-one teaching on phones, tablets, and laptops. Learn touchscreen gestures, typing, saving files, and app navigation without stress.",
          examples: ["iPhone & Android Basics", "iPad & Tablet Navigation", "Computer Fundamentals", "Managing Photos & Notes"]
        },
        {
          id: "connect",
          title: "2. Stay Connected with Loved Ones",
          desc: "Set up video calling, text messaging, email, and photo sharing so distance is never a barrier to staying in touch with family.",
          examples: ["FaceTime, Zoom & WhatsApp", "Sending Pictures & Voice Mails", "Email Setup & Organization", "Grandkids Video Calls"]
        },
        {
          id: "safety",
          title: "3. Stay Safe from Scams & Fraud",
          desc: "Learn to identify suspicious text messages, phishing emails, fake pop-ups, and robocalls. Keep your bank accounts and passwords secure.",
          examples: ["Recognizing Phishing & Scams", "Creating Safe Passwords", "Two-Factor Authentication", "Safe Online Shopping & Banking"]
        },
        {
          id: "troubleshoot",
          title: "4. Device Support & Troubleshooting",
          desc: "Help when devices freeze, run slow, need printer connection, or require software updates. We diagnose in plain language.",
          examples: ["Home Wi-Fi & Printer Setup", "Speeding up Slow Computers", "Storage & Memory Cleanups", "Updating Operating Systems"]
        }
      ],
      ctaBtn: "Book Help for This Topic"
    },
    howItWorks: {
      tag: "Simple 4-Step Journey",
      headline: "Friendly, stress-free support from start to finish",
      subtitle: "We removed all the friction so asking for help feels warm and natural.",
      steps: [
        {
          number: "1",
          title: "Reach Out Easily",
          desc: "Give us a call at (760) 555-4357, fill out our short request form, or drop into any community workshop. No complicated hurdles."
        },
        {
          number: "2",
          title: "We Listen With Care",
          desc: "Tell us what you want to accomplish—or what's causing you frustration. We listen patiently with zero judgment."
        },
        {
          number: "3",
          title: "Learn Step-by-Step",
          desc: "Meet one-on-one at your local library, community center, or via phone/home visit. We provide handwritten cheat sheets."
        },
        {
          number: "4",
          title: "Gain Lifelong Confidence",
          desc: "Walk away with real skills you can use every single day. Call us back whenever you need a quick refresher."
        }
      ]
    },
    payWhatYouCan: {
      tag: "Community-Supported Model",
      headline: "Everyone Deserves Help — Pay What You Can",
      subtitle: "High quality tech education should never be a luxury. Here is how our sliding scale works:",
      sliderLabel: "Choose your contribution per 1-hour session:",
      freeBadge: "100% Free · No Questions Asked",
      note: "If you cannot contribute, your session is 100% free with the exact same dedicated care. If you can contribute, you help sponsor a neighbor in need!",
      breakdownTitle: "What your contribution supports:",
      tier0: "$0 — Fully subsidized by community donations and grants. Zero shame, maximum care.",
      tier25: "$25 — Covers printing laminated step-by-step guides and cheat sheets for 10 seniors.",
      tier50: "$50 — Sponsors a full 1-on-1 home visit session for a homebound senior or veteran.",
      tier75: "$75 — Funds workshop materials, coffee, and assistive styluses for a whole community class."
    },
    workshops: {
      tag: "Community Workshops",
      headline: "Join a friendly local class near you",
      subtitle: "Small, relaxed classes with multiple coaches in the room. Refreshments provided!",
      registerBtn: "Reserve Free Spot",
      spotsLeft: "seats left",
      list: [
        {
          id: 1,
          title: "Smartphone Basics & Big Buttons",
          location: "Palm Springs Public Library (Community Room)",
          date: "Wednesday, Sept 2, 2026",
          time: "10:00 AM – 11:30 AM",
          instructor: "Ana & Robert",
          seats: 5,
          desc: "Learn to adjust text size, organize your home screen, save emergency contacts, and take crisp photos."
        },
        {
          id: 2,
          title: "Spotting Text & Email Scams",
          location: "Cathedral City Senior Center",
          date: "Friday, Sept 4, 2026",
          time: "1:00 PM – 2:30 PM",
          instructor: "Carlos & David",
          seats: 3,
          desc: "Interactive workshop showing real-world examples of fake bank texts, Medicare imposter calls, and safe passwords."
        },
        {
          id: 3,
          title: "Connecting with Grandkids on Video",
          location: "Indio Community Center (Bilingual EN/ES)",
          date: "Tuesday, Sept 8, 2026",
          time: "10:30 AM – 12:00 PM",
          instructor: "Maria & Ana",
          seats: 8,
          desc: "Step-by-step guidance on FaceTime, Zoom, and WhatsApp with practice calls right in the classroom."
        },
        {
          id: 4,
          title: "Computer Fundamentals & Internet",
          location: "Coachella Valley Adult School",
          date: "Thursday, Sept 10, 2026",
          time: "2:00 PM – 3:30 PM",
          instructor: "Robert & Helen",
          seats: 6,
          desc: "Keyboard basics, mouse coordination, finding reliable information, and safe online navigation."
        }
      ]
    },
    stories: {
      tag: "Real Stories",
      headline: "Hear from our Coachella Valley neighbors",
      items: [
        {
          name: "Robert M., 72",
          city: "Palm Springs",
          role: "Retired Elementary Teacher",
          quote: "I was terrified of touching my new tablet because I thought I’d break something or get hacked. Ana sat with me for an hour, wrote down clear notes in large print, and now I video call my daughter in Seattle every Sunday morning.",
          outcome: "Regular Video Caller"
        },
        {
          name: "Maria G., 68",
          city: "Coachella",
          role: "Grandmother of Six",
          quote: "Tener la ayuda en español fue maravilloso. Me enseñaron cómo entrar al portal médico para pedir mis medicinas y cómo ver las fotos escolares de mis nietos sin pedirle favores a nadie.",
          outcome: "Independiente Digital"
        },
        {
          name: "Carlos T., 65",
          city: "Indio",
          role: "U.S. Army Veteran",
          quote: "Getting my VA appointments scheduled online used to take hours of frustration. The team at CCA walked me through the VA portal patiently. They treat veterans with real dignity.",
          outcome: "VA Portal Mastered"
        },
        {
          name: "Helen P., 76",
          city: "Desert Hot Springs",
          role: "Community Volunteer",
          quote: "I used to be embarrassed to ask questions because young people talk so fast and click everything in two seconds. Here, nobody rushed me. I left with a warm smile and great confidence!",
          outcome: "Safe Online Shopper"
        }
      ]
    },
    survey: {
      tag: "Community Voice",
      headline: "Help shape technology support in our Valley",
      subtitle: "We build our classes based on what YOU ask for. Take 1 minute to share your thoughts.",
      q1: "1. What would you or your family most like to learn?",
      q1Options: ["Smartphone & Tablet Basics", "Preventing Scams & Fraud", "Video Calling & Messaging Family", "Managing Health & VA Portals", "Computer Basics & Typing"],
      q2: "2. What is the biggest hurdle when using technology?",
      q2Options: ["Everything moves too fast / confusing jargon", "Fear of making a mistake or getting scammed", "Text is too small or hard to see", "No one patient nearby to ask"],
      q3: "3. Where would you prefer to receive help?",
      q3Options: ["Local Public Library", "Senior / Community Center", "My Home (1-on-1 Visit)", "Over the Phone / Video"],
      namePlaceholder: "Your Name (Optional)",
      emailPhonePlaceholder: "Email or Phone Number (Optional)",
      commentsPlaceholder: "Any specific questions or thoughts for our team?",
      submitBtn: "Submit Feedback",
      thankYouTitle: "Thank You, Neighbor!",
      thankYouDesc: "Your feedback directly influences our upcoming workshop calendar and training guides."
    },
    modal: {
      title: "Request Free 1-on-1 Tech Help",
      subtitle: "A patient coach will contact you within 24 hours to schedule a session.",
      fullName: "Full Name",
      phone: "Phone Number",
      email: "Email Address (Optional)",
      preferredLanguage: "Preferred Language",
      city: "Your City in Coachella Valley",
      topic: "What would you like help with?",
      meetingType: "Where would you like to meet?",
      inPerson: "Local Library or Community Center",
      homeVisit: "Home Visit (For seniors/disabled)",
      phoneCall: "Phone Call / Remote Guidance",
      notes: "Tell us a bit about your device or question:",
      submit: "Confirm Free Request",
      successTitle: "Help is on the way!",
      successMessage: "We received your request. One of our friendly coordinators will call you shortly to confirm your session."
    },
    footer: {
      tagline: "Patient, judgment-free technology education for seniors and families across the Coachella Valley.",
      nonprofitBadge: "Registered 501(c)(3) Nonprofit Community Organization",
      quickLinks: "Quick Navigation",
      contactTitle: "Contact Our Friendly Team",
      hotline: "Direct Phone: (760) 555-4357",
      email: "Email: hello@coachellacomputeraid.org",
      hours: "Hours: Monday – Saturday, 9:00 AM – 5:00 PM PST",
      serviceAreas: "Serving: Palm Springs, Cathedral City, Rancho Mirage, Palm Desert, Indian Wells, La Quinta, Indio, Coachella, & Desert Hot Springs.",
      rights: "Coachella Computer Aid. All rights reserved.",
      newsletterTitle: "Stay in touch with friendly tech tips",
      newsletterDesc: "Get our monthly large-print newsletter with scam alerts and easy tech guides.",
      newsletterBtn: "Subscribe",
      scamAlert: "Scam Warning: CCA will NEVER ask for your banking passwords, gift cards, or remote control of your computer without prior in-person appointment."
    }
  },
  es: {
    nav: {
      home: "Inicio",
      mission: "Misión",
      audiences: "A Quién Ayudamos",
      services: "Servicios",
      howItWorks: "Cómo Funciona",
      payWhatYouCan: "Paga lo que Puedas",
      workshops: "Talleres",
      stories: "Testimonios",
      survey: "Encuesta Comunitaria",
      contact: "Contacto",
      getHelp: "Pedir Ayuda Gratuita",
      callUs: "Llámanos: (760) 555-4357",
      fontSize: "Tamaño",
      standard: "A",
      large: "A+",
      spanish: "Español",
      english: "English"
    },
    hero: {
      tag: "Educación Tecnológica Comunitaria Sin Fines de Lucro",
      headline: "Ayuda Tecnológica para Adultos Mayores y Familias",
      subheadline: "Apoyo tecnológico paciente y amigable en el Valle de Coachella",
      body: "La tecnología debe hacerle la vida más fácil, no más estresante. Brindamos orientación paciente y sin juzgar para que pueda conectarse con su familia, acceder a citas médicas y navegar con seguridad.",
      ctaPrimary: "Solicitar Ayuda Personalizada",
      ctaSecondary: "Ver Próximos Talleres",
      phoneText: "¿Prefiere hablar? Llámenos directamente al",
      phone: "(760) 555-4357",
      badge1: "100% Gratuito / Paga lo que Puedas",
      badge2: "Totalmente Bilingüe (Inglés y Español)",
      badge3: "Visitas a Domicilio y Bibliotecas Locales"
    },
    mission: {
      tag: "Nuestra Misión Comunitaria",
      headline: "Conectando a las personas, sin dejar a nadie atrás",
      quote: "“La tecnología solo es buena cuando nos incluye a todos. Enseñamos con cariño y paciencia.”",
      body: "Coachella Computer Aid (CCA) es una organización sin fines de lucro que apoya a todo el Valle de Coachella. Creemos que la alfabetización digital es un derecho. Ya sea que desee hacer videollamadas con sus nietos, pedir citas médicas por internet o protegerse de estafas, nuestros tutores se sentarán con usted hasta que se sienta seguro.",
      pillar1Title: "Sin Prisas, Sin Términos Raros",
      pillar1Desc: "Hablamos en español claro y sencillo. Usted siempre marca el ritmo de aprendizaje.",
      pillar2Title: "Dignidad y Respeto",
      pillar2Desc: "No existen preguntas tontas. Celebramos cada nuevo logro junto a usted.",
      pillar3Title: "Modelo Paga-lo-que-Puedas",
      pillar3Desc: "Servicios accesibles para todos sin importar sus posibilidades económicas.",
      pillar4Title: "Tutores Locales de Confianza",
      pillar4Desc: "Voluntarios y personal capacitado con verificación de antecedentes que aman ayudar."
    },
    audiences: {
      tag: "A Quiénes Servimos",
      headline: "Todos tienen un lugar en nuestra comunidad",
      subtitle: "Diseñado especialmente para vecinos que necesitan una mano paciente y comprensiva.",
      items: [
        {
          title: "Adultos Mayores",
          subtitle: "Mayores de 60 años aprendiendo con calma",
          desc: "Domine teléfonos inteligentes, tabletas y computadoras a su propio paso sin sentirse presionado.",
          badge: "Más Solicitado"
        },
        {
          title: "Personas con Discapacidades",
          subtitle: "Herramientas de Accesibilidad",
          desc: "Configuración personalizada para lectores de pantalla, control de voz, aumento de texto y audífonos.",
          badge: "Tecnología Adaptada"
        },
        {
          title: "Familias Hispanohablantes",
          subtitle: "Apoyo 100% Bilingüe y Cultural",
          desc: "Instrucción completa en español para padres y abuelos en trámites escolares y servicios esenciales.",
          badge: "En Tu Idioma"
        },
        {
          title: "Veteranos Militares",
          subtitle: "Beneficios de VA y Citas Médicas",
          desc: "Apoyo dedicado para usar el portal My HealtheVet, citas virtuales y beneficios militares.",
          badge: "Honor a Veteranos"
        },
        {
          title: "Familias de Bajos Recursos",
          subtitle: "Dispositivos e Internet Asequible",
          desc: "Guía para postular a subsidios de internet para el hogar y equipos donados a bajo costo.",
          badge: "Cuidado Comunitario"
        },
        {
          title: "Cualquier Persona con Dudas",
          subtitle: "Ninguna Pregunta es Demasiado Simple",
          desc: "Desde recordar contraseñas hasta imprimir documentos, somos sus aliados tecnológicos de confianza.",
          badge: "Abierto a Todos"
        }
      ]
    },
    services: {
      tag: "Cómo Le Ayudamos",
      headline: "Ayuda práctica para su vida diaria",
      subtitle: "Elija entre sesiones individuales, talleres en grupo o asistencia telefónica.",
      items: [
        {
          id: "learn",
          title: "1. Aprender lo Básico de la Tecnología",
          desc: "Clases personalizadas para celulares, tabletas y laptops. Aprenda gestos de pantalla, escribir mensajes y guardar fotos sin estrés.",
          examples: ["Uso de iPhone y Android", "Manejo de iPad y Tabletas", "Conceptos Básicos de Computadora", "Organizar Fotos y Notas"]
        },
        {
          id: "connect",
          title: "2. Mantenerse Conectado con la Familia",
          desc: "Configure videollamadas, mensajes de texto, correo y WhatsApp para que la distancia nunca sea un obstáculo.",
          examples: ["FaceTime, Zoom y WhatsApp", "Enviar Fotos y Audios", "Configurar Correo Electrónico", "Videollamadas con Nietos"]
        },
        {
          id: "safety",
          title: "3. Protección Contra Estafas y Fraudes",
          desc: "Aprenda a reconocer mensajes sospechosos, correos falsos y llamadas de engaño. Mantenga sus cuentas y contraseñas seguras.",
          examples: ["Detectar Mensajes Falsos", "Crear Contraseñas Fuertes", "Seguridad en Cuentas Bancarias", "Compras Seguras por Internet"]
        },
        {
          id: "troubleshoot",
          title: "4. Soporte y Arreglo de Dispositivos",
          desc: "Ayuda cuando el equipo se congela, está lento o necesita conectar la impresora y el Wi-Fi de casa.",
          examples: ["Conexión de Wi-Fi e Impresoras", "Limpieza de Memoria y Espacio", "Actualización del Sistema", "Eliminación de Virus y Avisos"]
        }
      ],
      ctaBtn: "Solicitar Ayuda en este Tema"
    },
    howItWorks: {
      tag: "Paso a Paso Sencillo",
      headline: "Apoyo cálido y sin estrés de principio a fin",
      subtitle: "Eliminamos cualquier complicación para que pedir ayuda sea fácil y agradable.",
      steps: [
        {
          number: "1",
          title: "Contáctenos Fácilmente",
          desc: "Llámenos al (760) 555-4357 o llene nuestro breve formulario en español. Sin trámites difíciles."
        },
        {
          number: "2",
          title: "Escuchamos con Atención",
          desc: "Díganos qué desea aprender o qué le está causando dolor de cabeza. Le escuchamos con total paciencia."
        },
        {
          number: "3",
          title: "Aprenda a su Propio Ritmo",
          desc: "Nos reunimos en su biblioteca local, centro comunitario o por teléfono. Le dejamos apuntes en letra grande."
        },
        {
          number: "4",
          title: "Gane Confianza para Siempre",
          desc: "Utilice sus dispositivos con tranquilidad todos los días y llámenos cuando necesite un repaso."
        }
      ]
    },
    payWhatYouCan: {
      tag: "Modelo de Apoyo Solidario",
      headline: "Todos Merecen Ayuda — Paga lo que Puedas",
      subtitle: "La educación tecnológica nunca debe ser un lujo. Así funciona nuestro modelo solidario:",
      sliderLabel: "Elija su contribución voluntaria por sesión de 1 hora:",
      freeBadge: "100% Gratuito · Sin Preguntas Incómodas",
      note: "Si no puede pagar, su sesión es 100% gratuita con la misma atención y dedicación. Si puede aportar, ¡ayuda a financiar a un vecino!",
      breakdownTitle: "A qué se destina su contribución:",
      tier0: "$0 — Totalmente cubierto por donaciones comunitarias. Cero pena, máximo cariño.",
      tier25: "$25 — Cubre la impresión de guías laminadas paso a paso para 10 adultos mayores.",
      tier50: "$50 — Financia una visita a domicilio para un adulto mayor con movilidad reducida.",
      tier75: "$75 — Financia materiales, café y lápices táctiles para una clase comunitaria completa."
    },
    workshops: {
      tag: "Talleres Comunitarios",
      headline: "Únase a una clase amistosa cerca de usted",
      subtitle: "Grupos pequeños con varios tutores en el salón. ¡Ofrecemos refrigerio y café!",
      registerBtn: "Reservar Cupo Gratis",
      spotsLeft: "cupos disponibles",
      list: [
        {
          id: 1,
          title: "Uso de Celulares y Botones Grandes",
          location: "Biblioteca Pública de Palm Springs",
          date: "Miércoles, 2 de Septiembre, 2026",
          time: "10:00 AM – 11:30 AM",
          instructor: "Ana y Robert",
          seats: 5,
          desc: "Aprenda a agrandar la letra, organizar su pantalla principal, guardar contactos de emergencia y tomar fotos."
        },
        {
          id: 2,
          title: "Cómo Detectar Estafas de Texto y Llamadas",
          location: "Centro Comunitario de Cathedral City",
          date: "Viernes, 4 de Septiembre, 2026",
          time: "1:00 PM – 2:30 PM",
          instructor: "Carlos y David",
          seats: 3,
          desc: "Taller práctico con ejemplos reales de mensajes falsos de bancos, Medicare y contraseñas seguras."
        },
        {
          id: 3,
          title: "Videollamadas con Hijos y Nietos",
          location: "Centro Comunitario de Indio (Bilingüe)",
          date: "Martes, 8 de Septiembre, 2026",
          time: "10:30 AM – 12:00 PM",
          instructor: "María y Ana",
          seats: 8,
          desc: "Paso a paso para usar WhatsApp, FaceTime y Zoom con llamadas de práctica en el mismo salón."
        },
        {
          id: 4,
          title: "Fundamentos de Computadora e Internet",
          location: "Escuela de Adultos del Valle de Coachella",
          date: "Jueves, 10 de Septiembre, 2026",
          time: "2:00 PM – 3:30 PM",
          instructor: "Robert y Helen",
          seats: 6,
          desc: "Uso del teclado, ratón, búsqueda de información confiable y navegación segura por la web."
        }
      ]
    },
    stories: {
      tag: "Historias Reales",
      headline: "Vea lo que dicen nuestros vecinos del Valle",
      items: [
        {
          name: "Roberto M., 72",
          city: "Palm Springs",
          role: "Maestro Jubilado",
          quote: "Me daba miedo tocar mi tableta nueva por temor a desconfigurarla o ser estafado. Ana se sentó conmigo, me hizo apuntes claros en letra grande, y ahora hablo con mi hija cada domingo por video.",
          outcome: "Videollamadas Semanales"
        },
        {
          name: "María G., 68",
          city: "Coachella",
          role: "Abuela de Seis Nietos",
          quote: "Tener la ayuda en español fue maravilloso. Me enseñaron cómo entrar al portal médico para pedir mis medicinas y cómo ver las fotos de mis nietos sin pedirle favores a nadie.",
          outcome: "Independiente Digital"
        },
        {
          name: "Carlos T., 65",
          city: "Indio",
          role: "Veterano del Ejército",
          quote: "Agendar mis citas de VA por internet era un dolor de cabeza. El equipo de CCA me acompañó con paciencia en cada pantalla. Tratan a los veteranos con verdadero respeto.",
          outcome: "Portal de VA Dominado"
        },
        {
          name: "Elena P., 76",
          city: "Desert Hot Springs",
          role: "Voluntaria Comunitaria",
          quote: "Me daba vergüenza preguntar porque la juventud habla muy rápido y hace clic en dos segundos. Aquí nadie me apresuró. ¡Salí con una sonrisa y mucha confianza!",
          outcome: "Navegación Segura"
        }
      ]
    },
    survey: {
      tag: "Voz de la Comunidad",
      headline: "Ayúdenos a crear los talleres que usted necesita",
      subtitle: "Diseñamos nuestros programas según lo que USTED nos pide. Comparta su opinión en 1 minuto.",
      q1: "1. ¿Qué tema le gustaría más aprender a usted o a su familia?",
      q1Options: ["Uso Básico de Celulares y Tabletas", "Protección Contra Estafas y Fraudes", "Videollamadas y WhatsApp Familiar", "Portales Médicos y Trámites", "Computación Básica e Internet"],
      q2: "2. ¿Cuál es la mayor dificultad al usar tecnología?",
      q2Options: ["Todo va muy rápido / palabras difíciles", "Miedo a equivocarme o caer en estafas", "Letra muy pequeña o difícil de ver", "Falta de alguien paciente cerca para preguntar"],
      q3: "3. ¿Dónde preferiría recibir la ayuda?",
      q3Options: ["Biblioteca Pública Local", "Centro Comunitario / de Adultos Mayores", "En mi Hogar (Visita Personal)", "Por Teléfono / Asistencia Remota"],
      namePlaceholder: "Su Nombre (Opcional)",
      emailPhonePlaceholder: "Teléfono o Correo (Opcional)",
      commentsPlaceholder: "¿Alguna pregunta o mensaje para nuestro equipo?",
      submitBtn: "Enviar Opinión",
      thankYouTitle: "¡Muchas Gracias, Vecino!",
      thankYouDesc: "Su opinión define directamente las próximas fechas de talleres y folletos de ayuda."
    },
    modal: {
      title: "Solicitar Ayuda Tecnológica Gratuita",
      subtitle: "Un tutor paciente se comunicará con usted en 24 horas para coordinar la sesión.",
      fullName: "Nombre Completo",
      phone: "Número de Teléfono",
      email: "Correo Electrónico (Opcional)",
      preferredLanguage: "Idioma de Preferencia",
      city: "Su Ciudad en el Valle de Coachella",
      topic: "¿Con qué tema le gustaría recibir ayuda?",
      meetingType: "¿Dónde prefiere reunirse?",
      inPerson: "Biblioteca o Centro Comunitario Local",
      homeVisit: "Visita a Domicilio (Adultos mayores / movilidad reducida)",
      phoneCall: "Llamada Telefónica / Asistencia Remota",
      notes: "Cuéntenos un poco sobre su dispositivo o duda:",
      submit: "Confirmar Solicitud Gratuita",
      successTitle: "¡Su solicitud está en camino!",
      successMessage: "Hemos recibido su petición. Uno de nuestros coordinadores amigables le llamará muy pronto."
    },
    footer: {
      tagline: "Educación tecnológica paciente y sin prejuicios para adultos mayores y familias en todo el Valle de Coachella.",
      nonprofitBadge: "Organización Comunitaria Sin Fines de Lucro 501(c)(3)",
      quickLinks: "Enlaces Rápidos",
      contactTitle: "Comuníquese con Nuestro Equipo",
      hotline: "Teléfono Directo: (760) 555-4357",
      email: "Correo: hola@coachellacomputeraid.org",
      hours: "Horario: Lunes a Sábado, 9:00 AM – 5:00 PM PST",
      serviceAreas: "Atendemos: Palm Springs, Cathedral City, Rancho Mirage, Palm Desert, Indian Wells, La Quinta, Indio, Coachella y Desert Hot Springs.",
      rights: "Coachella Computer Aid. Todos los derechos reservados.",
      newsletterTitle: "Reciba consejos tecnológicos en letra grande",
      newsletterDesc: "Suscríbase a nuestro boletín mensual con alertas de estafas y guías sencillas.",
      newsletterBtn: "Suscribirme",
      scamAlert: "Aviso de Seguridad: CCA NUNCA le pedirá contraseñas bancarias, tarjetas de regalo ni acceso a su computadora sin una cita previa confirmada."
    }
  }
};
