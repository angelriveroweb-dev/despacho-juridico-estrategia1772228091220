import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-[#0F1216]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
                    alt="Arquitectura Legal"
                    className="w-full h-full object-cover opacity-20 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F1216] via-[#0F1216]/95 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1216] via-transparent to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div className="lg:col-span-12 xl:col-span-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-8"
                    >
                        {/* Authority Badge */}
                        <div className="flex items-center gap-4 mb-10 overflow-hidden">
                            <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
                            <p className="text-[#D4AF37] font-sans text-xs tracking-[0.4em] uppercase font-bold active-badge whitespace-nowrap">
                                Defensa Jurídica de Élite
                            </p>
                        </div>

                        <div className="font-display font-medium leading-none mb-10">
                            <h1 className="flex flex-col gap-2">
                                <span className="block text-white text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase font-bold">
                                    Defensa Fiscal
                                </span>
                                <span className="block text-[#D4AF37] text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase font-bold md:ml-12">
                                    & Aduanera
                                </span>
                            </h1>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="max-w-2xl mb-12"
                    >
                        <p className="text-xl md:text-2xl text-zinc-400 font-sans font-extralight leading-relaxed border-l-2 border-[#D4AF37]/30 pl-8">
                            Protegemos su patrimonio ante el SAT y autoridades federales. Estrategia legal comprobada en <span className="text-white font-normal">Tijuana y Baja California</span>.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
                    >
                        <Button
                            size="lg"
                            className="bg-gradient-to-r from-[#D4AF37] to-[#C5A059] text-black hover:brightness-110 rounded-none px-12 py-8 text-sm tracking-widest uppercase font-bold shadow-[0_20px_40px_-15px_rgba(212,175,55,0.3)] group transition-all duration-500"
                            onClick={() => window.location.href = '#contact'}
                        >
                            Resolver mi Caso Ahora
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Button>

                        <div className="flex items-center gap-4 text-zinc-500">
                            <Shield className="w-6 h-6 text-[#D4AF37]" />
                            <span className="text-xs uppercase tracking-widest font-bold">
                                Estrategia Fiscalista<br/>Del Noroeste
                            </span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}