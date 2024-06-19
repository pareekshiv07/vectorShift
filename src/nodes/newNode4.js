// NewNode4.js

import { Position } from 'reactflow';
import { AbstractNode } from './abstractNode';

export const NewNode4 = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'output' },
  ];

  return (
    <AbstractNode id={id} data={data} type="NewNode4" handles={handles}>
      {(currText,  handleTextChange) => (
        <label>
          Text:
          <input type="text" value={currText} onChange={handleTextChange} />
        </label>
      )}
    </AbstractNode>
  );
};
