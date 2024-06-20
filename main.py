from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS settings
origins = [
    "http://localhost",
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

@app.get('/')
def read_root():
    return {'Ping': 'Pong'}

@app.post('/pipelines/parse')
async def parse_pipeline(pipeline: dict):
    num_nodes = len(pipeline.get('nodes', []))
    num_edges = len(pipeline.get('edges', []))
    is_dag = check_if_dag(pipeline['nodes'], pipeline['edges'])

    return {'num_nodes': num_nodes, 'num_edges': num_edges, 'is_dag': is_dag}

def check_if_dag(nodes, edges):
    # Convert nodes and edges into an adjacency list
    adj_list = {node['id']: [] for node in nodes}
    for edge in edges:
        adj_list[edge['source']].append(edge['target'])

    # Detect cycles using Kahn's algorithm
    in_degree = {node_id: 0 for node_id in adj_list}
    for node_id in adj_list:
        for neighbor in adj_list[node_id]:
            in_degree[neighbor] += 1

    sources = [node_id for node_id in in_degree if in_degree[node_id] == 0]
    sorted_nodes = []
    
    while sources:
        source = sources.pop(0)
        sorted_nodes.append(source)
        for neighbor in adj_list[source]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                sources.append(neighbor)

    return len(sorted_nodes) == len(nodes)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
