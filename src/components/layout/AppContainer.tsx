import AppNavBar from "../AppNavBar/AppNavBar";

const AppContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <AppNavBar />
      {children}
    </div>
  );
};

export default AppContainer;
