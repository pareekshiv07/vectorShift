// NewNode5.js

import { Position } from 'reactflow';
import { AbstractNode } from './abstractNode';

export const NewNode5 = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'input' },
    { type: 'source', position: Position.Right, id: 'output' },
  ];

  return (
    <AbstractNode id={id} data={data} type="NewNode5" handles={handles}>
      {() => (
        <span>This is a new node type 5.</span>
      )}
    </AbstractNode>
  );
};
