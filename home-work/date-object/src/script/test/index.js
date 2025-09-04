function testFunctionSpeed(functionInput, ...argumentss) {
  const start = new Date().getTime(); // start time in ms
  
  // run the function with provided arguments
  const result = functionInput(...argumentss);
  
  const end = new Date().getTime(); // end time in ms
  const duration = end - start; // total time taken in ms
  
  console.log(`Execution time: ${duration} ms`);
  return { result, duration: end - start };;
}
export default testFunctionSpeed