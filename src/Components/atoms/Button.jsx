import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Button = ({
  onClick,
  as = 'button',
  to,
  children,
  className,
  type = 'primary',
  size = 'normal',
  disabled,
}) => {
  const As = as === 'Link' ? Link : as;

  return (
    <As
      onClick={onClick}
      to={to}
      className={classNames(
        `transition tracking-wide flex items-center justify-center capitalize text px-4 py-2 border rounded ${className}`,
        {
          'bg-primary-500 shadow-md text-white border-primary-500 hover:bg-primary-400 hover:border-primary-400':
            type === 'primary',
          'border-primary-500 text-primary-500 shadow-sm hover:bg-primary-500 hover:text-white': type === 'outline',
          'text-base font-bold': size === 'normal',
          'text-lg': size === 'large',
          'bg-secondary-200 text-dark-200 pointer-events-none border-secondary-200 shadow-none':
            disabled,
        }
      )}
    >
      {children}
    </As>
  );
};

export default Button;
