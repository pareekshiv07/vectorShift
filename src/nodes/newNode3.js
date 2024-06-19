// NewNode3.js

import { Position } from 'reactflow';
import { AbstractNode } from './abstractNodebstractNode';

export const NewNode3 = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'output' },
  ];

  return (
    <AbstractNode id={id} data={data} type="NewNode3" handles={handles}>
      {() => (
        <span>This is a new node type 3.</span>
      )}
    </AbstractNode>
  );
};
