import React from 'react';

interface EditRowProps {
  mode: 'checkbox' | 'list';
  index?: number;
  label: string;
  checked?: boolean;
  onCheckChange?: (checked: boolean) => void;
  onEditClick?: () => void;
}

const EditRow: React.FC<EditRowProps> = ({
  mode,
  index,
  label,
  checked = false,
  onCheckChange,
  onEditClick,
}) => {
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
      <div className="flex items-center">
        {mode === 'checkbox' ? (
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => onCheckChange && onCheckChange(e.target.checked)}
            className="mr-2"
          />
        ) : (
          <span className="mr-2">{index}.</span>
        )}
        <span className="text-white">{label}</span>
      </div>
      <button
        onClick={onEditClick}
        className="text-white bg-blue-500 p-2 rounded hover:bg-blue-600"
      >
        ✏️
      </button>
    </div>
  );
};

export default EditRow;
