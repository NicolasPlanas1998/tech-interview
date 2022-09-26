const { prototype } = require("events");

function SolveGraph (graph, start, end) {
  // Your code here:
  let graphLength = Object.keys(graph)
  let createGraph = new Graph(graphLength.length)
  let vertices = graphLength

  for (let index = 0; index < graphLength.length; index++) {
    createGraph.addVertex(index)
  }


}
function Graph(noOfVertices){
  this.noOfVertices = noOfVertices; // store de number of vartices
  this.AdjList = new Map(); // store an adjacency list of a particular vertex
}
Graph.prototype.addVertex = function(v){
  this.AdjList.set(v, []);
  console.log(this.AdjList);
}
Graph.prototype.addEdge = function(v,w){
    // get the list for vertex v and put the
    // vertex w denoting edge between v and w
    this.AdjList.get(v).push(w);
 
    // En el caso que sea un graph indirecto agrego esto:
    // add an edge from w to v also
    // this.AdjList.get(w).push(v);
}


module.exports = SolveGraph
const graph = {
      a: ['c'],
      b: ['c'],
      c: ['s', 'r'],
      d: ['a'],
      s: ['a', 'c'],
      r: ['d'],
      z: ['z']
    }
SolveGraph(graph,"a","r")

// xdescribe('SolveGraph', function () {
//   const graph = {
//     a: ['c'],
//     b: ['c'],
//     c: ['s', 'r'],
//     d: ['a'],
//     s: ['a', 'c'],
//     r: ['d'],
//     z: ['z']
//   }
//   it('should return true as we can get from a to r', function () {
//     expect(SolveGraph(graph, 'a', 'r')).to.equal(true)
//   })
//   it('should return true as we can get from a to d', function () {
//     expect(SolveGraph(graph, 'a', 'd')).to.equal(true)
//   })
//   it('should return false as we can not get from s to b', function () {
//     expect(SolveGraph(graph, 's', 'b')).to.equal(false)
//   })
// })