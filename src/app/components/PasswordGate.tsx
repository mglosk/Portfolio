import { FormEvent, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-password-accepted";
const DEFAULT_PASSWORD = "Elephant2026";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  });

  useEffect(() => {
    if (isUnlocked) {
      sessionStorage.setItem(STORAGE_KEY, "true");
    }
  }, [isUnlocked]);

  const correctPassword = (import.meta.env.VITE_SITE_PASSWORD || DEFAULT_PASSWORD).trim();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === correctPassword) {
      setIsUnlocked(true);
      setError("");
      sessionStorage.setItem(STORAGE_KEY, "true");
    } else {
      setError("That password is incorrect.");
    }
  };

  if (isUnlocked) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-sm">
        <p className="text-sm uppercase tracking-[0.35em] text-white/60">Private portfolio</p>
        <h1 className="mt-3 text-2xl font-semibold">Enter the password</h1>
        <p className="mt-3 text-sm leading-6 text-white/70">
          This site is password protected. Enter the password to continue.
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            autoComplete="current-password"
            className="w-full rounded-xl border border-white/15 bg-black/20 px-4 py-3 text-sm outline-none ring-0 placeholder:text-white/40 focus:border-white/40"
          />
          <button
            type="submit"
            className="w-full rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Unlock site
          </button>
        </form>

        {error ? <p className="mt-4 text-sm text-red-400">{error}</p> : null}
        <p className="mt-6 text-xs leading-5 text-white/45">
          To change this password later, set the Vercel environment variable <span className="font-medium text-white/70">VITE_SITE_PASSWORD</span>.
        </p>
      </div>
    </div>
  );
}
