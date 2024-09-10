import Board from "./Board.js";
import Graph from "./Graph.js";

const BOARD_SIZE = 8;

const board = new Board(BOARD_SIZE);
const graph = new Graph(board);

function createTraveledArr() {
  let traveled = new Array(BOARD_SIZE);
  for (let i = 0; i < BOARD_SIZE; i++) {
    let row = new Array(BOARD_SIZE);
    for (let j = 0; j < BOARD_SIZE; j++) {
      row[j] = false;
    }
    traveled[i] = row;
  }
  return traveled;
}

function knightMoves(from, to) {
  // Using BFS
  let path = [];
  let queue = [];
  let traveled = createTraveledArr();
  let traceStack = [];
  const fromPoint = graph.find(from);
  queue.push(fromPoint);
  while (queue.length > 0) {
    const point = queue.shift();
    if (to[0] === point.x && to[1] === point.y) {
      while (traceStack[traceStack.length - 1].to != point) {
        traceStack.pop();
      }
      path.push(traceStack.pop());
      while (path[path.length - 1].from != fromPoint) {
        const currNode = path[path.length - 1];
        while (traceStack[traceStack.length - 1].to != currNode.from) {
          traceStack.pop();
        }
        path.push(traceStack.pop());
      }
      break;
    }
    if (!traveled[point.x][point.y]) {
      traveled[point.x][point.y] = true;
      const adjunctionNodes = graph
        .getAdjunctionList(point)
        .filter((point) => !traveled[point.x][point.y]);
      adjunctionNodes.forEach((node) => {
        queue.push(node);
        traceStack.push({ from: point, to: node });
      });
    }
  }
  console.log(`=> You made it in ${path.length} moves! Here's your path:`);
  console.log(`[${from[0]},${from[1]}]`);
  while (path.length !== 0) {
    const trace = path.pop();
    console.log(`[${trace.to.x},${trace.to.y}]`);
  }
}
knightMoves([3, 3], [4, 3]);
