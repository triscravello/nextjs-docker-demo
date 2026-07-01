export default async function Home() {
  // Use NEXT_PUBLIC_BASE_URL for the fetch target, defaulting to localhost
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  let greeting = "Loading...";
  try {
    // Fetch from API route with no caching to always get fresh data
    const res = await fetch(`${baseUrl}/api/hello`, { cache: "no-store" });
    const data = await res.json();
    greeting = data.message;
  } catch {
    greeting = "Failed to fetch greeting";
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1>Next.js Production Docker Demo - 🚀 CI/CD Pipeline Verified</h1>
      <p>Deployed automatically with GitHub Actions, Amazon ECR, and Amazon EKS using OIDC authentication.</p>
      <p>
        This page is server-rendered inside a Docker container. The greeting below comes from an API route that reads a runtime environment variable.
      </p>
      <div style={{ marginTop: "1rem", padding: "1rem", background: "#f0f0f0", borderRadius: "8px" }}>
        <strong>API Response:</strong> {greeting}
      </div>
    </main>
  );
}