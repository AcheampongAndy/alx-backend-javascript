export default function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        const success = true;

        setTimeout(() => {
            if (success) {
                resolve('Success: Response from API received');
            } else {
                reject('Error: Failed to received response from API');
            }
        }, 1000);
    });
}
