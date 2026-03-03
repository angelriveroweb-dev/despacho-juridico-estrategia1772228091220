export const config = {
    // Unique Client ID for this Landing Page
    landingClientId: "3bc98b5d-dc73-42ff-b325-bbca0db70088",

    // Supabase Configuration
    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL,
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    },

    // Booking / Calendly URL
    bookingUrl: import.meta.env.VITE_BOOKING_URL || "https://calendly.com/despacho-juridico",

    // Payment link (e.g. Stripe)
    paymentLink: import.meta.env.VITE_PAYMENT_LINK || "https://buy.stripe.com/despacho-juridico",

    // Google Maps Review URL
    googleMapsReviewUrl: import.meta.env.VITE_GOOGLE_MAPS_REVIEW_URL || "https://g.page/r/despacho-juridico/review",

    // Analytics / Webhook
    analytics: {
        webhookUrl: import.meta.env.VITE_SPEED_WEBHOOK || "",
    },

    // Dynamic content driven by the landing page data
    dynamicContent: {
        roadmap: [
            {
                step: 1,
                title: "Análisis del Caso",
                desc: "Evaluamos los detalles de su situación legal para identificar las mejores estrategias de defensa.",
            },
            {
                step: 2,
                title: "Estrategia Legal",
                desc: "Diseñamos un plan de acción personalizado, anticipando cada escenario posible.",
            },
            {
                step: 3,
                title: "Ejecución y Resolución",
                desc: "Representamos sus intereses con rigor hasta lograr el resultado óptimo para usted.",
            },
        ],
        stats: {
            casesWon: 500,
            experienceYears: 20,
            recoveredAmount: 50,
        },
    },

    // Testimonials
    testimonials: [
        {
            text: "El despacho manejó mi caso con una dedicación y profesionalismo excepcionales. Lograron un resultado que nunca imaginé posible.",
            name: "Carlos Mendoza",
            role: "Empresario",
            tags: ["Defensa Corporativa", "Resultado Exitoso"],
        },
        {
            text: "Gracias a su estrategia legal, recuperamos activos por más de $2 millones. Su experiencia es inigualable.",
            name: "Andrea Ruiz",
            role: "Directora Financiera",
            tags: ["Recuperación de Activos", "Litigio Comercial"],
        },
        {
            text: "En el momento más difícil de mi vida, encontré en este despacho un aliado incondicional. Su apoyo fue fundamental.",
            name: "Roberto Sánchez",
            role: "Particular",
            tags: ["Derecho Penal", "Defensa Personal"],
        },
        {
            text: "Su conocimiento del sistema judicial y su capacidad de negociación nos permitieron llegar a un acuerdo favorable sin ir a juicio.",
            name: "María González",
            role: "Gerente de Operaciones",
            tags: ["Negociación", "Acuerdo Extrajudicial"],
        },
    ],
};
