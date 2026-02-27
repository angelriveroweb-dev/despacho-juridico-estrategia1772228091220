import { useEffect } from 'react';

// DEACTIVATED: Visit tracking is now handled by the LexFlow CDN engine (lexflow-engine/src/main.tsx)
export const useVisitTracker = () => {
    useEffect(() => {
        console.log('📊 Analytics: Local Visit Tracker is deactivated. The CDN engine handles session_start.');
    }, []);
};
