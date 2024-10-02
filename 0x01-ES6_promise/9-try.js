export default function guardrail(mathFunction) {
  let queue = [];

  try {
    const result = mathFunction(); // Execute the mathFunction and capture its result

    queue = [
      result, // Store the result in the queue
      'Guardrail was processed', // Add a processing message to the queue
    ];
  } catch (error) {
    queue = [
      error.toString(), // Convert the error to a string and store in the queue
      'Guardrail was processed', // Add a processing message to the queue
    ];
  }

  return queue; // Return the queue containing either the result or error message
}
