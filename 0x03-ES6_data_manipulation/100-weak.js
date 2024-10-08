// Exporting a constant instance of WeakMap
export const weakMap = new WeakMap();

// Exporting the queryAPI function
export function queryAPI(endpoint) {
    // Check if the endpoint exists in the WeakMap
    if (!weakMap.has(endpoint)) {
        // If not, initialize it with a count of 1
        weakMap.set(endpoint, 1);
    } else {
        // If it exists, increment the count
        const count = weakMap.get(endpoint);
        weakMap.set(endpoint, count + 1);

        // If the count reaches 5 or more, throw an error
        if (count + 1 >= 5) {
            throw new Error('Endpoint load is high');
        }
    }
}
