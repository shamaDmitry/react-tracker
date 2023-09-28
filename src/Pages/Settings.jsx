import { Link } from 'react-router-dom';
import Header from '../Components/blocks/Header';

const Settings = () => {
  return (
    <div className="flex flex-col self-center flex-1 w-full h-full Settings bg-secondary-100">
      <Header title="Settings" linkTo="/" />

      <div className="py-1">
        <Link className="flex px-4 py-3 mb-1 bg-white" to="/settings-lang">
          Change Language
        </Link>
        <Link className="flex px-4 py-3 mb-1 bg-white" to="/settings-server">
          Change Server
        </Link>
      </div>
    </div>
  );
};

export default Settings;
