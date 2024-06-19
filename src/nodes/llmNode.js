import { Position } from 'reactflow';
import { AbstractNode } from './abstractNode';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'system', style: { top: '33.33%' } },
    { type: 'target', position: Position.Left, id: 'prompt', style: { top: '66.66%' } },
    { type: 'source', position: Position.Right, id: 'response' },
  ];

  return (
    <AbstractNode id={id} data={data} type="LLM" handles={handles}>
      {() => (
        <span className="text-center block">This is an LLM.</span>
      )}
    </AbstractNode>
  );
};
