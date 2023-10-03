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
import Project from './Pages/Project';
import ProtectedRoute from './Layouts/ProtectedRoute';
import { authLoader } from './loaders/authLoader';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<BasicLayout />}>
        <Route index element={<Navigate to="/login" />} />
        <Route path="/login" loader={authLoader} element={<Login />} />
        <Route path="/register" loader={authLoader} element={<SignUp />} />
        <Route path="/settings" loader={authLoader} element={<Settings />} />
        <Route
          path="/settings-lang"
          loader={authLoader}
          element={<SettingsLang />}
        />
        <Route
          path="/settings-server"
          loader={authLoader}
          delement={<SettingsServer />}
        />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route index path="/list" element={<ProjectsList />} />
        <Route path="/project/:id" element={<Project />} />
      </Route>

      <Route path="*" element={<Page_404 />} />
    </>
  )
);

export default router;
