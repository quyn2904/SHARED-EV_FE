import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage, AuthPage } from "@/pages";
import ProtectedRoutes from "./ProtectedRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthPage authType="login" />} />
        <Route path="/register" element={<AuthPage authType="register" />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
