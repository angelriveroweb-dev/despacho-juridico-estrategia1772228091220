import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserProvider, useUser } from "@/context/UserContext";
import { useMemo } from "react";

import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { config } from "@/config";
import { StickyCallBar } from "@/components/features/StickyCallBar";
import LexFlowWidget from "@/components/LexFlowWidget";
import { ThemeToggle } from "@/components/features/ThemeToggle";

function ChatbotManager() {
    const { name, email, clientId } = useUser();
    const query = new URLSearchParams(typeof window !== 'undefined' ? window.location.search : "");

    const metadata = useMemo(() => ({
        clientId,
        source: query.get("utm_source") || "direct",
        medium: query.get("utm_medium") || "organic",
        campaign: query.get("utm_campaign") || "none",
        user_name: name || undefined,
        user_email: email || undefined,
        origin: "landing_page"
    }), [clientId, name, email]);

    return (
        <LexFlowWidget
            botId={config.landingClientId}
            metadata={metadata}
            supabaseUrl={config.supabase.url}
            supabaseKey={config.supabase.anonKey}
        />
    );
}

function App() {
    return (
        <UserProvider>
            <Router>
                <div className="relative min-h-screen bg-[#0F1216] overflow-x-hidden">
                    <div className="noise-bg" />
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                    <Footer />
                    
                    {/* Active Features */}
                    <ChatbotManager />
                    <StickyCallBar />
                    
                    <div className="fixed bottom-4 left-4 z-50 hidden md:block">
                        <ThemeToggle />
                    </div>
                </div>
            </Router>
        </UserProvider>
    );
}

export default App;