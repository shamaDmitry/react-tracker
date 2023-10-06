import { Menu } from '@headlessui/react';
import classNames from 'classnames';
import { Link, useNavigate } from 'react-router-dom';
import Gear from '../../assets/icons/gear.svg?react';
import useUserStore from '../../store/useUserStore';

const Footer = ({ className }) => {
  const navigate = useNavigate();
  const [user, clearUser] = useUserStore(state => [
    state.user,
    state.clearUser,
  ]);

  return (
    <div
      className={classNames(
        `flex justify-between items-center ${className ? className : ''}`
      )}
    >
      <Menu className="relative" as="div">
        <Menu.Button className="flex items-center gap-x-1">
          <Gear className="text-dark-200" />

          <span className="text-sm font-bold capitalize text-dark-300">
            {user.username}
          </span>
        </Menu.Button>

        <Menu.Items className="absolute flex flex-col justify-end mb-4 overflow-hidden bg-white border rounded bottom-full w-52">
          <Menu.Item>
            {({ active }) => (
              <button
                onClick={() => {
                  clearUser();
                  navigate('/');
                }}
                className={classNames(
                  `font-bold text-primary-400 py-1 px-3 border-b last:border-b-0`,
                  {
                    'text-primary-500': active,
                  }
                )}
              >
                Logout
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>

      <Link
        to={'/'}
        className="flex items-center justify-center px-3 py-2 text-sm border rounded-full text-dark-300 border-secondary-400"
      >
        Work diary
      </Link>
    </div>
  );
};

export default Footer;
