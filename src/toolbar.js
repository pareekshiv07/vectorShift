// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px' }}>
            <div style={{ marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='newnode1' label='NEWNODE1' />
                <DraggableNode type='newnode2' label='NEWNODE2' />
                <DraggableNode type='newnode3' label='NEWNODE3' />
                <DraggableNode type='newnode4' label='NEWNODE4' />
                <DraggableNode type='newnode5' label='NEWNODE5' />
            </div>
        </div>
    );
};
