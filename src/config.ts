export const config = {
    // Unique Client ID for this Landing Page
    landingClientId: "3bc98b5d-dc73-42ff-b325-bbca0db70088",
    
    // Supabase Configuration
    supabase: {
        url: import.meta.env.VITE_SUPABASE_URL,
        anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
    }
};