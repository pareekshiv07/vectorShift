import { Position } from 'reactflow';
import { AbstractNode } from './abstractNode';

export const NewNode3 = ({ id, data }) => {
  const handles = [
    { type: 'source', position: Position.Right, id: 'output' },
  ];

  return (
    <AbstractNode id={id} data={data} type="NewNode3" handles={handles}>
      {() => (
        <span className="block text-center">This is a new node type 3.</span>
      )}
    </AbstractNode>
  );
};
