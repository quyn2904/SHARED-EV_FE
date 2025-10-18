import AppNavBar from "../AppNavBar/AppNavBar";

const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AppNavBar />
      <>{children}</>
    </>
  );
};

export default AppContainer;
