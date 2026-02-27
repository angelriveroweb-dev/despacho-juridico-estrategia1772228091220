import { motion } from "framer-motion";
import { MapPin, Phone, Facebook } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="relative py-32 bg-[#0F1216]">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <div>
                        <h2 className="text-5xl font-display text-white mb-12">
                            Contacto <span className="text-[#D4AF37]">Directo</span>
                        </h2>

                        <div className="space-y-10 mb-16">
                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-white/5 rounded-full">
                                    <MapPin className="w-6 h-6 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-sm mb-2 font-bold">Oficinas Centrales</h4>
                                    <p className="text-zinc-400 leading-relaxed">
                                        Av. Ramos Millán 2308, Morelos,<br/>
                                        22056 Tijuana, B.C., México
                                    </p>
                                    <a 
                                        href="https://www.google.com/maps/place/Despacho+Jur%C3%ADdico+Estrategia+Fiscalista+Del+Noroeste/@32.5144349,-117.0559555,13z/data=!4m10!1m2!2m1!1sDespacho+jur%C3%ADdico+en+Tijuana+Baja+California+M%C3%A9xico!3m6!1s0x80d9472253bff1b5:0x9dd6633e02dd9604!8m2!3d32.5217044!4d-117.0342087!15sCjVEZXNwYWNobyBqdXLDrWRpY28gZW4gVGlqdWFuYSBCYWphIENhbGlmb3JuaWEgTcOpeGljb1o3IjVkZXNwYWNobyBqdXLDrWRpY28gZW4gdGlqdWFuYSBiYWphIGNhbGlmb3JuaWEgbcOpeGljb5IBDHRheF9hdHRvcm5leZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSMWFVcHhUa1ZCRUFF4AEA-gEFCIcBEEM!16s%2Fg%2F11g3016btc?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-[#D4AF37] text-xs uppercase tracking-wider mt-4 inline-block hover:underline"
                                    >
                                        Ver en Google Maps
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-white/5 rounded-full">
                                    <Phone className="w-6 h-6 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-sm mb-2 font-bold">Línea Directa</h4>
                                    <p className="text-zinc-400">+52 661 123 9004</p>
                                    <p className="text-zinc-500 text-xs mt-1">Atención inmediata a urgencias fiscales.</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-3 bg-white/5 rounded-full">
                                    <Facebook className="w-6 h-6 text-[#D4AF37]" />
                                </div>
                                <div>
                                    <h4 className="text-white font-sans uppercase tracking-widest text-sm mb-2 font-bold">Redes Sociales</h4>
                                    <a 
                                        href="https://www.facebook.com/estrategiafiscalistadelnoroeste/" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-[#D4AF37] transition-colors"
                                    >
                                        Estrategia Fiscalista Del Noroeste
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Map Visual */}
                    <div className="h-[500px] w-full bg-zinc-900 relative overflow-hidden rounded-2xl border border-white/10 grayscale invert contrast-125 brightness-75">
                         <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.987654321!2d-117.0342087!3d32.5217044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9472253bff1b5%3A0x9dd6633e02dd9604!2sDespacho%20Jur%C3%ADdico%20Estrategia%20Fiscalista%20Del%20Noroeste!5e0!3m2!1ses!2smx!4v1707925000000!5m2!1ses!2smx" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}