import { Outlet } from 'react-router-dom';

const BasicLayout = () => {
  return (
    <main className="relative flex flex-col max-h-screen min-h-screen font-pt">
      <Outlet />
    </main>
  );
};

export default BasicLayout;
