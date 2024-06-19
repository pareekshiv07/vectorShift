import { Position } from 'reactflow';
import { AbstractNode } from './abstractNode';

export const NewNode4 = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'output' },
  ];

  return (
    <AbstractNode id={id} data={data} type="NewNode4" handles={handles}>
      {(currText, handleTextChange) => (
        <div className="space-y-2">
          <label className="block">
            <span className="text-gray-700">Text:</span>
            <input
              type="text"
              value={currText}
              onChange={handleTextChange}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            />
          </label>
        </div>
      )}
    </AbstractNode>
  );
};
