import classNames from 'classnames';

const Input = ({ type = 'text', placeholder, icon }) => {
  return (
    <div className="relative flex items-center w-full mb-4">
      {icon && (
        <div className="p-[3px] absolute flex items-center justify-center w-6 h-6 left-2">
          {icon}
        </div>
      )}

      <input
        type={type}
        placeholder={placeholder}
        className={classNames('w-full px-4 py-2 border rounded', {
          'pl-9': icon,
        })}
      />
    </div>
  );
};

export default Input;
