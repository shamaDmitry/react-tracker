import Logo from '../../assets/logo.svg?react';
import Back from '../../assets/icons/back.svg?react';
import { Link } from 'react-router-dom';

const Header = ({ title, subtitle, linkTo }) => {
  return (
    <div className="bg-white py-[10px] px-[17px]">
      <Logo className="w-[90px] h-[16px] mb-3" />

      <div className="flex items-center gap-[10px] min-h-[38px]">
        <Link to={linkTo}>
          <Back className="text-primary-500"></Back>
        </Link>

        <div className="flex flex-col">
          <div className="font-semibold text-primary-500 capitalize text-[17px] leading-[21px]">
            {title}
          </div>

          {subtitle && (
            <div className="text-dark-200 leading-[17px] text-sm">
              {subtitle}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
