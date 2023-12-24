import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Node from './Node';
import Edge from './Edge';

const GraphVisualization = () => {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3001/graph').then((response) => setGraphData(response.data));
  };

  const addNode = () => {
    const lastNode = graphData.nodes[graphData.nodes.length - 1];
    const newNode = {
      id: graphData.nodes.length + 1,
      label: `Node ${graphData.nodes.length + 1}`,
      x: lastNode ? lastNode.x + 50 : 200,
      y: lastNode ? lastNode.y + 50 : 200,
    };

    setGraphData((prevData) => ({ ...prevData, nodes: [...prevData.nodes, newNode] }));
  };

  const addEdge = () => {
    const edgeFrom = Math.floor(Math.random() * graphData.nodes.length) + 1;
    const edgeTo = Math.floor(Math.random() * graphData.nodes.length) + 1;

    if (edgeFrom !== edgeTo) {
      const newEdge = { from: edgeFrom, to: edgeTo };
      setGraphData((prevData) => ({ ...prevData, edges: [...prevData.edges, newEdge] }));
    }
  };

  const removeLastNode = () => {
    setGraphData((prevGraph) => ({
      nodes: prevGraph.nodes.slice(0, -1), // Remove the last node
      edges: prevGraph.edges, // Keep edges unchanged
    }));
  };

  const removeLastEdge = () => {
    setGraphData((prevGraph) => ({
      nodes: prevGraph.nodes, // Keep nodes unchanged
      edges: prevGraph.edges.slice(0, -1), // Remove the last edge
    }));
  };
  

  return (
    <div style={{ position: 'relative', width: '600px', height: '400px', border: '1px solid black' }}>
      {graphData.edges.map((edge, index) => (
        <Edge key={index} fromNode={edge.from} toNode={edge.to} nodes={graphData.nodes} />
      ))}
      {graphData.nodes.map((node) => (
        <Node key={node.id} id={node.id} label={node.label} x={node.x} y={node.y}/>
      ))}
      <button onClick={addNode}>Add Node</button>
      <button onClick={addEdge}>Add Edge</button>
      <button onClick={removeLastNode}>Remove Last Node</button>
      <button onClick={removeLastEdge}>Remove Last Edge</button>
    </div>
  );
};

export default GraphVisualization;
