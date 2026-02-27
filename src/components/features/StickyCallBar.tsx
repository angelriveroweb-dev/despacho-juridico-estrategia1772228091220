import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// --- CONFIGURATION ---
const PHONE_NUMBER = "+526611239004";
const WHATSAPP_URL = "https://wa.me/526611239004";

export function StickyCallBar() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#0F1216]/95 backdrop-blur-xl border-t border-white/10 p-4 pb-safe flex gap-4 md:hidden shadow-[0_-4px_20px_rgba(0,0,0,0.4)] h-[80px] items-center">
            <Button
                className="flex-1 bg-green-600 hover:bg-green-700 text-white border-none shadow-lg shadow-green-900/20 rounded-xl h-12 text-sm font-bold uppercase tracking-wide"
                onClick={() => window.open(WHATSAPP_URL, '_blank')}
            >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp
            </Button>
            <Button
                className="flex-1 bg-[#D4AF37] hover:bg-[#C5A059] text-black border-none shadow-lg shadow-amber-900/20 rounded-xl h-12 text-sm font-bold uppercase tracking-wide"
                onClick={() => window.location.href = `tel:${PHONE_NUMBER}`}
            >
                <Phone className="w-5 h-5 mr-2" />
                Llamar
            </Button>
        </div>
    );
}