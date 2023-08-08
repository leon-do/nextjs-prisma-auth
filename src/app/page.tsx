"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const supabase = createClientComponentClient<any>();

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <h1>{isClient ? <Auth supabaseClient={supabase} view="magic_link" appearance={{ theme: ThemeSupa }} theme="dark" showLinks={false} providers={[]} redirectTo={`${window.location.href}auth/callback`} /> : ""}</h1>;
}
