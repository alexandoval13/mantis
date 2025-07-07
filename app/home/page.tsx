import GetStarted from '../get-started/page';

export default async function Home() {
  // const { data: maps, error } = await supabaseClient
  //   .from('maps')
  //   .select('id')
  //   .limit(1);
  // // todo: use a next fallback loading or error page
  // if (error) {
  //   console.error('Supabase error:', error);
  //   return <div>Error loading dashboard</div>;
  // }
  // if (!maps || maps.length === 0) {
  //   return <GetStarted />;
  // }
  return <GetStarted />;
}

/*
import './index.css'
  import { useState, useEffect } from 'react'
  import { createClient } from '@supabase/supabase-js'
  import { Auth } from '@supabase/auth-ui-react'
  import { ThemeSupa } from '@supabase/auth-ui-shared'

  const supabase = createClient('https://<project>.supabase.co', '<your-anon-key>')

  export default function App() {
    const [session, setSession] = useState(null)

    useEffect(() => {
      supabase.auth.getSession().then(({ data: { session } }) => {
        setSession(session)
      })

      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
      })

      return () => subscription.unsubscribe()
    }, [])

    if (!session) {
      return (<Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />)
    }
    else {
      return (<div>Logged in!</div>)
    }
  }
    */
