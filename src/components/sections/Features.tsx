import { motion } from "framer-motion";
import { Scale, Truck, FileWarning, Key } from "lucide-react";

export function Features() {
    const features = [
        {
            title: "Defensa Fiscal (SAT)",
            desc: "Protección integral contra auditorías, créditos fiscales y embargos. Blindaje patrimonial efectivo.",
            icon: <Scale className="w-8 h-8 text-[#D4AF37]" />
        },
        {
            title: "Materia Aduanera",
            desc: "Resolución de PAMAs, clasificación arancelaria y defensa en comercio exterior.",
            icon: <Truck className="w-8 h-8 text-[#D4AF37]" />
        },
        {
            title: "Cancelación de Infracciones",
            desc: "Litigio estratégico para la nulidad de multas federales y sanciones administrativas.",
            icon: <FileWarning className="w-8 h-8 text-[#D4AF37]" />
        },
        {
            title: "Liberación de Vehículos",
            desc: "Recuperación legal de unidades retenidas por autoridades fiscales o aduaneras.",
            icon: <Key className="w-8 h-8 text-[#D4AF37]" />
        }
    ];

    return (
        <section id="features" className="py-32 bg-[#0F1216] border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-20">
                    <p className="text-[#D4AF37] font-sans text-xs tracking-[0.3em] uppercase mb-4 font-bold">
                        Áreas de Práctica
                    </p>
                    <h2 className="text-4xl md:text-6xl font-display text-white leading-tight">
                        Especialización <span className="text-[#D4AF37] italic">Jurídica</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
                    {features.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative p-10 bg-[#0F1216] hover:bg-[#14171C] transition-all duration-500"
                        >
                            <div className="mb-6 p-4 bg-white/5 w-fit rounded-lg group-hover:bg-[#D4AF37]/10 transition-colors">
                                {item.icon}
                            </div>

                            <h3 className="text-xl font-display text-white mb-4 group-hover:text-[#D4AF37] transition-colors">
                                {item.title}
                            </h3>

                            <p className="text-zinc-500 font-sans font-light text-sm leading-relaxed">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}