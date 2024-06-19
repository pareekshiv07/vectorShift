import { Position } from 'reactflow';
import { AbstractNode } from './abstractNode';

export const NewNode2 = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'input' },
  ];

  return (
    <AbstractNode id={id} data={data} type="NewNode2" handles={handles}>
      {() => (
        <span className="block text-center">This is a new node type 2.</span>
      )}
    </AbstractNode>
  );
};
