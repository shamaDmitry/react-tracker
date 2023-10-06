const Errors = ({ data }) => {
  return (
    <div className="w-full p-2 mb-4 text-sm text-center text-red-500 border border-red-500 rounded">
      {typeof data.message === 'string' && <span>{data.message}</span>}
      {typeof data.message === 'object' && (
        <ul className="list-disc list-inside">
          {data.message.map(error => {
            return (
              <li key={error.path} className="">
                <span>{error.path}</span>
                <span className="block">{error.msg}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Errors;
