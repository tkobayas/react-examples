const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const data = {
    NODES: [
        {
          "id": "node-1",
          "type": "node",
          "label": "R1"
        },
        {
          "id": "node-2",
          "type": "node",
          "label": "R2"
        },
        {
          "id": "node-3",
          "type": "node",
          "label": "R3"
        },
        {
          "id": "node-4",
          "type": "node",
          "label": "R4"
        }
      ],
      EDGES: [
        {
          "id": "edge-node-1-node-2",
          "type": "edge",
          "source": "node-1",
          "target": "node-2",
          "edgeStyle": "solid"
        },
        {
          "id": "edge-node-2-node-3",
          "type": "edge",
          "source": "node-2",
          "target": "node-3",
          "edgeStyle": "solid"
        },
        {
          "id": "edge-node-4-node-3",
          "type": "edge",
          "source": "node-4",
          "target": "node-3",
          "edgeStyle": "dashed"
        }
      ]
}


app.get('/data', (req, res) => {
    res.json(data);
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
