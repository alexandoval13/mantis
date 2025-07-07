// app/page.tsx
'use client';
import { createClient } from '../utils/supabase/client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    const checkSessionAndRedirect = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        const { error } = await supabase.auth.signInAnonymously();
        if (error) {
          console.error('Anon sign-in failed:', error.message);
          return;
        }

        // After signing in anonymously, wait for session to update
        return window.location.reload();
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) return; // just in case

      const { data: maps, error } = await supabase
        .from('maps')
        .select('id')
        .eq('user_id', user.id)
        .limit(1);

      if (error) {
        console.error('Error checking maps:', error.message);
        return;
      }

      if (maps && maps.length > 0) {
        router.replace('/dashboard');
      } else {
        router.replace('/get-started');
      }
    };

    checkSessionAndRedirect();
  }, []);

  return <p>Loading your session...</p>;
}
