import classNames from 'classnames';

const Modal = ({ children, setIsShown, className }) => {
  return (
    <>
      <div
        className="fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center overflow-auto bg-black"
        onClick={e => {
          e.stopPropagation();
          setIsShown(false);
        }}
      >
        <div
          className={classNames(
            `relative w-full max-w-md p-4 bg-white ${className}`
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
