import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Signout from "./Signout";
import { redirect } from "next/navigation";

export default async function Account() {
  const supabase = createServerComponentClient<any>({ cookies });
  const { session } = (await supabase.auth.getSession()).data;
  if (!session) redirect("/");

  return (
    <>
      <code>{JSON.stringify(session, null, 2)}</code>
      <Signout />
    </>
  );
}
