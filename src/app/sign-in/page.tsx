"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { HiLockClosed, HiMail } from "react-icons/hi";

const LoginPage = () => {
  const router = useRouter();
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.email || !form.password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);

    // Simulate a login delay
    await new Promise((resolve) => setTimeout(resolve, 1200));

    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <div className="relative flex min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-sky-50">
      {/* Decorative background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-sky/10 blur-3xl" />
        <div className="absolute left-1/3 top-1/4 h-64 w-64 rounded-full bg-purple-200/10 blur-3xl" />
      </div>

      <div className="relative z-10 m-auto flex w-full max-w-5xl flex-col items-center gap-8 px-4 md:flex-row md:gap-12 lg:px-8">
        {/* ---------- Left side: Branding / Illustration ---------- */}
        <div className="hidden md:flex md:w-1/2 flex-col items-center justify-center text-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 animate-pulse rounded-full bg-primary/20 blur-2xl" />
            <Image
              src="/file.svg"
              alt="Smart Account Logo"
              width={120}
              height={120}
              className="relative z-10 drop-shadow-lg"
              priority
            />
          </div>

          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900">
            Smart Account
          </h1>

          <p className="max-w-xs text-sm leading-relaxed text-gray-500">
            Your all-in-one POS management solution. Sign in to manage sales,
            inventory, payroll, and more.
          </p>

          {/* Feature badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {["Sales", "Inventory", "Payroll", "Reports"].map((feat) => (
              <span
                key={feat}
                className="rounded-full border border-primary/20 bg-primary-light/60 px-3.5 py-1 text-xs font-medium text-primary-text"
              >
                {feat}
              </span>
            ))}
          </div>
        </div>

        {/* ---------- Right side: Login Card ---------- */}
        <div className="w-full max-w-md md:w-1/2">
          <div className="rounded-2xl border border-gray-100 bg-white/80 p-8 shadow-xl backdrop-blur-lg sm:p-10">
            {/* Mobile logo */}
            <div className="mb-6 text-center md:hidden">
              <Image
                src="/file.svg"
                alt="Logo"
                loading="eager"
                width={56}
                height={56}
                className="mx-auto mb-2"
              />
              <h2 className="text-xl font-bold text-gray-900">Smart Account</h2>
            </div>

            <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
            <p className="mb-8 mt-1 text-sm text-gray-500">
              Sign in to your account to continue.
            </p>

            {/* Error message */}
            {error && (
              <div className="mb-6 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-600">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="relative">
                  <HiMail className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-1.5 block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="relative">
                  <HiLockClosed className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-10 text-sm outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    tabIndex={-1}
                  >
                    {showPassword ? (
                      <FaEyeSlash size={18} />
                    ) : (
                      <FaEye size={18} />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot password */}
              <div className="flex items-center justify-between">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={() => setRememberMe((prev) => !prev)}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span className="text-sm text-gray-600">Remember me</span>
                </label>

                <button
                  type="button"
                  className="text-sm font-medium text-primary hover:text-primary-hover transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-primary/40 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg
                      className="h-5 w-5 animate-spin text-white"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      />
                    </svg>
                    Signing in…
                  </>
                ) : (
                  "Sign in"
                )}
              </button>
            </form>

            {/* Footer */}
            <p className="mt-8 text-center text-xs text-gray-400">
              &copy; {new Date().getFullYear()} Smart Account. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
