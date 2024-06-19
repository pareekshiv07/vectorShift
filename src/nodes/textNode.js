import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';
import { AbstractNode } from './abstractNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [handles, setHandles] = useState([
    { type: 'source', position: Position.Right, id: 'output' },
  ]);
  const textRef = useRef(null);

  useEffect(() => {
    const newHandles = [{ type: 'source', position: Position.Right, id: 'output' }];
    const variableRegex = /{{\s*(\w+)\s*}}/g;
    let match;

    while ((match = variableRegex.exec(text)) !== null) {
      console.log("match",match);
      newHandles.push({
        type: 'target',
        position: Position.Left,
        id: match[1],
        style: { top: `${(100 * (newHandles.length)) / (newHandles.length + 1)}%` },
      });
    }

    setHandles(newHandles);
  }, [text]);

  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.width = 'auto';
      textRef.current.style.height = 'auto';
      const { scrollWidth, scrollHeight } = textRef.current;
      textRef.current.style.width = `${Math.max(200, scrollWidth)}px`;
      textRef.current.style.height = `${Math.max(50, scrollHeight)}px`;
    }
  }, [text]);

  return (
    <AbstractNode id={id} data={data} type="Text" handles={handles}>
      {() => (
        <div className="space-y-2">
          <label className="block">
            <span className="text-gray-700">Text:</span>
            <textarea
              ref={textRef}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300"
              rows="1"
            />
          </label>
        </div>
      )}
    </AbstractNode>
  );
};
