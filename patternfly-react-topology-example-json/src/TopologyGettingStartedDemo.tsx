import * as React from 'react';
import {
  ColaLayout,
  ComponentFactory,
  DefaultEdge,
  DefaultGroup,
  DefaultNode,
  EdgeStyle,
  Graph,
  GraphComponent,
  Layout,
  LayoutFactory,
  Model,
  ModelKind,
  NodeShape,
  SELECTION_EVENT,
  Visualization,
  VisualizationProvider,
  VisualizationSurface
} from '@patternfly/react-topology';

import "@patternfly/react-core/dist/styles/base.css";

const baselineLayoutFactory: LayoutFactory = (type: string, graph: Graph): Layout | undefined => {
  switch (type) {
    case 'Cola':
      return new ColaLayout(graph);
    default:
      return new ColaLayout(graph, { layoutOnDrag: false });
  }
};

const baselineComponentFactory: ComponentFactory = (kind: ModelKind, type: string) => {
  switch (type) {
    case 'group':
      return DefaultGroup;
    default:
      switch (kind) {
        case ModelKind.graph:
          return GraphComponent;
        case ModelKind.node:
          return DefaultNode;
        case ModelKind.edge:
          return DefaultEdge;
        default:
          return undefined;
      }
  }
};

const NODE_SHAPE = NodeShape.ellipse;
const NODE_DIAMETER = 75;

const NODES = [
  {
    id: 'node-1',
    type: 'node',
    label: 'R1',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE
  },
  {
    id: 'node-2',
    type: 'node',
    label: 'R2',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE
  },
  {
    id: 'node-3',
    type: 'node',
    label: 'R3',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE
  },
  {
    id: 'node-4',
    type: 'node',
    label: 'R4',
    width: NODE_DIAMETER,
    height: NODE_DIAMETER,
    shape: NODE_SHAPE
  }
];

const EDGES = [
  {
    id: 'edge-node-1-node-2',
    type: 'edge',
    source: 'node-1',
    target: 'node-2',
    edgeStyle: EdgeStyle.solid
  },
  {
    id: 'edge-node-2-node-3',
    type: 'edge',
    source: 'node-2',
    target: 'node-3',
    edgeStyle: EdgeStyle.solid
  },
  {
    id: 'edge-node-4-node-3',
    type: 'edge',
    source: 'node-4',
    target: 'node-3',
    edgeStyle: EdgeStyle.dashed
  }
];

export const TopologyGettingStartedDemo: React.FC = () => {
  const [selectedIds, setSelectedIds] = React.useState<string[]>([]);

  const controller = React.useMemo(() => {
    const model: Model = {
      nodes: NODES,
      edges: EDGES,
      graph: {
        id: 'g1',
        type: 'graph',
        layout: 'Cola'
      }
    };

    const newController = new Visualization();
    newController.registerLayoutFactory(baselineLayoutFactory);
    newController.registerComponentFactory(baselineComponentFactory);

    newController.addEventListener(SELECTION_EVENT, setSelectedIds);

    newController.fromModel(model, false);

    return newController;
  }, []);

  return (
    <VisualizationProvider controller={controller}>
      <VisualizationSurface state={{ selectedIds }} />
    </VisualizationProvider>
  );
};
