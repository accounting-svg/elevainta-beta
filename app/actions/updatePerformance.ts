"use server";

import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function updatePerformance(
  subject: string,
  topic: string,
  attempted: number,
  correct: number,
  missed: number
) {
  const cookieStore = await cookies();


  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const { error } = await supabase.rpc(
    "increment_user_topic_performance",
    {
      p_subject: subject,
      p_topic: topic,
      p_attempted: attempted,
      p_correct: correct,
      p_missed: missed,
    }
  );

  if (error) {
    console.error("Performance update error:", error);
    throw new Error("Failed to update performance");
  }
}
