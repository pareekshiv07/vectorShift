import axios from 'axios';
import { useStore } from './store';
import { useState } from 'react';

export const SubmitButton = () => {
  const { nodes, edges } = useStore((state) => ({
    nodes: state.nodes,
    edges: state.edges,
  }));

  const [response, setResponse] = useState(null);

  const handleSubmit = async () => {
    const pipeline = { nodes, edges };

    try {
      const res = await axios.post('http://localhost:8000/pipelines/parse', pipeline);
      const data = res.data;
      setResponse(data);
      alert(`Number of Nodes: ${data.num_nodes}, Number of Edges: ${data.num_edges}, Is DAG: ${data.is_dag}`);
    } catch (error) {
      console.error('Failed to fetch:', error);
      alert('Failed to fetch data from server.');
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button  className="bg-green-500 w-20 h-10 rounded-lg" type="button" onClick={handleSubmit}>Submit</button>
    </div>
  );
};
