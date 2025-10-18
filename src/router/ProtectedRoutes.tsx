import AppContainer from "@/components/layout/AppContainer";
import { Outlet } from "react-router";

const ProtectedRoutes = () => {
  return (
    <AppContainer>
      <Outlet />
    </AppContainer>
  );
};

export default ProtectedRoutes;
