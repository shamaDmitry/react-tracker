import classNames from 'classnames';
import { forwardRef } from 'react';

const Input = forwardRef(
  (
    {
      type = 'text',
      placeholder,
      icon,
      onChange,
      onBlur,
      name,
      className = '',
      helperText,
      defaultValue,
      required,
      error,
    },
    ref
  ) => {
    return (
      <div className="relative flex flex-col items-center w-full mb-4">
        <div className="relative w-full">
          {icon && (
            <div
              className={classNames(
                'text-primary-500 p-[3px] absolute flex top-1/2 -translate-y-1/2 items-center justify-center w-6 h-6 left-2',
                {
                  'text-red-500': error,
                }
              )}
            >
              {icon}
            </div>
          )}

          <input
            ref={ref}
            defaultValue={defaultValue}
            name={name}
            onBlur={onBlur}
            required={required}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className={classNames(
              `w-full px-4 py-2 border rounded ${className}`, {
                'pl-9': icon,
                'border-red-500 placeholder:text-red-500 text-red-500': error,
              }
            )}
          />
        </div>

        {error && (
          <div
            className={classNames(`text-xs font-normal w-full text-left py-1`, {
              'text-red-500': error,
            })}
          >
            {error.message}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
