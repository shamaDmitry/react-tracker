import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router-dom';

import BasicLayout from './Layouts/BasicLayout';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Page_404 from './Pages/Page_404';
import Settings from './Pages/Settings';
import SettingsLang from './Pages/SettingsLang';
import SettingsServer from './Pages/SettingsServer';
import ProjectsList from './Pages/ProjectsList';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<BasicLayout />}>
        <Route index element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings-lang" element={<SettingsLang />} />
        <Route path="/settings-server" element={<SettingsServer />} />
        <Route path="/list" element={<ProjectsList />} />
      </Route>

      <Route path="*" element={<Page_404 />} />
    </>
  )
);

export default router;
