// LLMNode.js

import { Position } from 'reactflow';
import { AbstractNode } from './abstractNode';

export const LLMNode = ({ id, data }) => {
  const handles = [
    { type: 'target', position: Position.Left, id: 'system', style: { top: `${100 / 3}%` } },
    { type: 'target', position: Position.Left, id: 'prompt', style: { top: `${200 / 3}%` } },
    { type: 'source', position: Position.Right, id: 'response' },
  ];

  return (
    <AbstractNode id={id} data={data} type="LLM" handles={handles}>
      {() => (
        <span>This is an LLM.</span>
      )}
    </AbstractNode>
  );
};
