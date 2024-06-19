// TextNode.js

import { Position } from 'reactflow';
import { AbstractNode } from './abstractNode';

export const TextNode = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'output' },
  ];

  return (
    <AbstractNode id={id} data={data} type="Text" handles={handles}>
      {(currText,  handleTextChange) => (
        <>
          <label>
            Text:
            <input type="text" value={currText} onChange={handleTextChange} />
          </label>
        </>
      )}
    </AbstractNode>
  );
};
