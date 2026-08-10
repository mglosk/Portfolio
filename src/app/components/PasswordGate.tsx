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
    <div className="min-h-screen bg-[#fcfbf4] flex items-center justify-center px-6 py-12">
      <div
        className="w-full max-w-[520px] rounded-2xl border border-[#ecece8] bg-white p-12 flex flex-col gap-6"
        style={{ boxShadow: "0px 12px 16px rgba(0,0,0,0.05)" }}
      >
        <h1 className="font-['Mulish',sans-serif] font-bold text-[40px] leading-[1.1] text-[#36413d]">
          Enter the password
        </h1>
        <p className="font-['Mulish',sans-serif] font-normal text-[18px] leading-[1.5] text-[#36413d] opacity-80">
          This portfolio is password protected. Please enter the access code below to view the content.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label className="font-['Mulish',sans-serif] font-bold text-[14px] uppercase tracking-wide text-[#36413d]">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="••••••••"
            autoComplete="current-password"
            className="w-full h-14 rounded-lg border border-[#ecece8] bg-[#fcfbf4] px-4 font-['Mulish',sans-serif] text-[16px] text-[#36413d] placeholder:text-[#36413d]/50 outline-none focus:border-[#36413d]/40"
          />
          <button
            type="submit"
            className="mt-1 w-full rounded-lg bg-[#36413d] px-4 py-3 font-['Mulish',sans-serif] font-bold text-[16px] text-white transition hover:bg-[#36413d]/90"
          >
            Unlock site
          </button>
        </form>

        {error ? <p className="font-['Mulish',sans-serif] text-[14px] text-red-500">{error}</p> : null}
      </div>
    </div>
  );
}
