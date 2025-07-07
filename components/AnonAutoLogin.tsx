'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@/utils/supabase/client';

export default function AnonAutoLogin() {
  const [hasCheckedSession, setHasCheckedSession] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    const init = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        const { error } = await supabase.auth.signInAnonymously();
        if (error) console.error('Anonymous login failed:', error.message);
      }

      setHasCheckedSession(true);
    };

    init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) {
        console.log('User signed in');
      }
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  if (!hasCheckedSession) return null;
  return null;
}
