

function executeTest(customFunction, dataSize,size) {
  for (let i = 0; i < size; i++) {
    customFunction(dataSize)
  }
}

function testFunctionSpeed(customFunction, testSize, numSamples = 1e5) {
  const start = new Date().getTime(); // start time in ms
  const before = performance.now();

  for (let i = 0; i < numSamples; i++) {
    executeTest(customFunction, numSamples, testSize);
  }

  const after = performance.now();

  const timeToExecuteTest = (after - before) / numSamples;
  const end = new Date().getTime(); // end time in ms
  const duration = end - start; // total time taken in ms
  return end - start;
  // etc
}
// function testFunctionSpeed(functionInput, dataLength) {
//   const start = new Date().getTime(); // start time in ms

//   // run the function with provided arguments
//   for (let i = 0; i < dataLength; i++) {
//     functionInput(i)
//   }

//   const end = new Date().getTime(); // end time in ms
//   const duration = end - start; // total time taken in ms

//   console.log(`Execution time: ${duration} ms`);
//   return end - start;
// }
export default testFunctionSpeed