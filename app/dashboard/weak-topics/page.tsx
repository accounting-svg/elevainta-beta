import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function WeakTopicsPage() {
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

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: performance, error } = await supabase
    .from("user_topic_performance")
    .select("*")
    .order("missed", { ascending: false });

  if (error) {
    console.error("Error loading performance:", error);
  }

  return (
    <main style={{ padding: 24, maxWidth: 800, margin: "0 auto" }}>
      <h1>Weak Topics</h1>

      {!performance || performance.length === 0 ? (
        <p>No performance data yet. Complete a session to see insights.</p>
      ) : (
        <ul style={{ marginTop: 20 }}>
          {performance.map((item) => (
            <li key={item.id} style={{ marginBottom: 12 }}>
              <strong>{item.subject}</strong> — {item.topic}
              <br />
              Missed: {item.missed}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
