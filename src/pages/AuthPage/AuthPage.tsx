import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { Logo } from "@/constants";

const AuthPage = ({ authType }: { authType: "login" | "register" }) => {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col  gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <div className="mb-3 flex flex-col items-center">
              <a href={Logo.url} className="flex items-center gap-2">
                <img
                  src={Logo.src}
                  className="max-h-25 dark:invert"
                  alt={Logo.alt}
                />
                <span className="text-3xl font-semibold tracking-tighter">
                  {Logo.title}
                </span>
              </a>
            </div>
            {authType === "register" ? <RegisterForm /> : <LoginForm />}
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <img
          src="https://autovista24.autovistagroup.com/wp-content/uploads/sites/5/2021/09/what-is-an-ev-scaled.jpg"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
};

export default AuthPage;
