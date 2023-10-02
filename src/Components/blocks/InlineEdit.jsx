import classNames from 'classnames';
import { useState } from 'react';

const InlineEdit = ({ value, setValue }) => {
  // const onInput = event => {
  //   if (event.target.scrollHeight > 33) {
  //     event.target.style.height = '5px';
  //     event.target.style.height = event.target.scrollHeight - 16 + 'px';
  //   }
  // };

  const [isEditing, setIsEditing] = useState(false);
  const [editingValue, setEditingValue] = useState(value);

  const onChange = event => {
    setIsEditing(true);
    setEditingValue(event.target.value);
  };

  const onKeyDown = event => {
    if (event.key === 'Escape') {
      event.target.blur();
      setEditingValue(value);
    }
    if (event.key === 'Enter') {
      event.target.blur();
      setValue(event.target.value);
    }
  };

  const onBlur = event => {
    setIsEditing(false);

    // if (event.target.value.trim() === '') {
    //   setEditingValue(value);
    // } else {
    //   setValue(event.target.value);
    // }
  };

  return (
    <div>
      <input
        onClick={() => setIsEditing(true)}
        className={classNames('transition w-full p-2 border border-transparent border-b-gray-200', {
          'border-gray-200': isEditing,
        })}
        type="text"
        aria-label="Field name"
        value={editingValue}
        onChange={onChange}
        onKeyDown={onKeyDown}
        onBlur={onBlur}
      />

      {/* {isEditing && <div>editing</div>} */}
    </div>
  );
};

export default InlineEdit;
