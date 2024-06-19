import { Position } from 'reactflow';
import { AbstractNode } from './abstractNode';

export const OutputNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'value' },
  ];

  return (
    <AbstractNode id={id} data={data} type="Output" handles={handles}>
      {(currName, nodeType, handleNameChange, handleTypeChange) => (
        <div className="space-y-2">
          <label className="block">
            <span className="text-gray-700">Name:</span>
            <input
              type="text"
              value={currName}
              onChange={handleNameChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            />
          </label>
          <label className="block">
            <span className="text-gray-700">Type:</span>
            <select
              value={nodeType}
              onChange={handleTypeChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            >
              <option value="Text">Text</option>
              <option value="Image">Image</option>
            </select>
          </label>
        </div>
      )}
    </AbstractNode>
  );
};
