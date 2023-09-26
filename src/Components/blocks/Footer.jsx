import { Link } from 'react-router-dom';
import Gear from '../../assets/icons/gear.svg?react';

const Footer = () => {
  return (
    <div className="flex justify-between">
      <Link className="flex items-center gap-x-1">
        <Gear className="text-dark-200" />
        <span className="text-sm text-dark-300">Your Full Name</span>
      </Link>

      <Link className="flex items-center justify-center px-3 py-2 text-sm border rounded-full text-dark-300 border-secondary-400">
        Work diary
      </Link>
    </div>
  );
};

export default Footer;
