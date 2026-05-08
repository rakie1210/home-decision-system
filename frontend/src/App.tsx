import { useState } from "react";
import login from "./actions/login";
import loginImage from "./assets/login-image-family.png";
import logo from "./assets/homewise.png";

//shadcn/ui
import { Button } from "@/components/ui/button";

//router
import { useNavigate } from "react-router-dom";

type LoginErrors = {
  email?: string;
  password?: string;
};

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<LoginErrors>({});
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors: LoginErrors = {};

    if (!email.trim()) {
      nextErrors.email = "Enter your email address.";
    }

    if (!password) {
      nextErrors.password = "Enter your password.";
    }

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      try {
        const token = await login(email, password);
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } catch (error) {
        setErrors({
          password:
            error instanceof Error
              ? error.message
              : "Failed to respond to server.",
        });
      }
    }
  }

  function onLogin(value: string) {
    setPassword(value);
    setErrors((current) => ({
      ...current,
      password: undefined,
    }));
  }

  return (
    <main className="min-h-svh bg-[#f7efe0] text-foreground lg:grid lg:grid-cols-2">
      <section
        aria-label="Heirloom kitchen illustration"
        className="relative isolate min-h-[38svh] overflow-hidden bg-[#f9cf8a] lg:min-h-svh"
      >
        <img
          src={loginImage}
          alt="Homewise kitchen"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-x-3.5 bottom-20 max-w-md rounded-2xl border border-white/35 bg-[#fff8df]/70 p-4 shadow-2xl backdrop-blur-md sm:left-8 sm:right-auto">
          <p className="text-xs font-semibold uppercase text-[#5e5135]">
            Preserve family recipes for generations to come.
          </p>
          <p className="mt-1 text-sm leading-6 text-[#68583d]">
            And making family decisions easier.
          </p>
        </div>
      </section>

      <section className="flex min-h-[62svh] items-center justify-center px-5 py-10 sm:px-8 lg:min-h-svh lg:bg-background">
        <div className="absolute top-10 right-10">
          <img src={logo} alt="Homewise" className="h-12 w-auto" />
        </div>
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-[0_24px_80px_rgba(65,52,32,0.14)] sm:p-8">
          <div className="mb-8">
            <h1 className="mt-2 text-3xl font-semibold tracking-normal text-foreground text-center">
              Welcome to Homewise
            </h1>
            <p className="mt-3 text-sm leading-6 text-muted-foreground text-center">
              Where family recipes are preserved <br /> and family decisions are
              made easy.
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="email">
                Email
              </label>
              <input
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={Boolean(errors.email)}
                autoComplete="email"
                className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25 aria-invalid:border-destructive aria-invalid:ring-destructive/20"
                id="email"
                inputMode="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                  setErrors((current) => ({ ...current, email: undefined }));
                }}
                placeholder="you@example.com"
                type="email"
                value={email}
              />
              {errors.email ? (
                <p className="text-sm text-destructive" id="email-error">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  aria-describedby={
                    errors.password ? "password-error" : undefined
                  }
                  aria-invalid={Boolean(errors.password)}
                  autoComplete="current-password"
                  className="h-11 w-full rounded-lg border border-input bg-background px-3 pr-20 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25 aria-invalid:border-destructive aria-invalid:ring-destructive/20"
                  id="password"
                  onChange={(event) => {
                    onLogin(event.target.value);
                  }}
                  placeholder="Enter password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                />
                <button
                  className="absolute inset-y-1 right-1 rounded-md px-3 text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25"
                  onClick={() => setShowPassword((current) => !current)}
                  type="button"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              {errors.password ? (
                <p className="text-sm text-destructive" id="password-error">
                  {errors.password}
                </p>
              ) : null}
            </div>

            <div className="flex items-center justify-between gap-3">
              <label className="flex items-center gap-2 text-sm text-muted-foreground">
                <input
                  checked={rememberMe}
                  className="size-4 rounded border-input accent-primary"
                  onChange={(event) => setRememberMe(event.target.checked)}
                  type="checkbox"
                />
                Remember me
              </label>
              <a
                className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                href="#forgot-password"
              >
                Forgot password?
              </a>
            </div>

            <Button className="w-full" size="lg" type="submit">
              Sign in
            </Button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            New here?{" "}
            <a
              className="font-medium text-primary underline-offset-4 hover:underline"
              href="#create-account"
            >
              Create account
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default App;
