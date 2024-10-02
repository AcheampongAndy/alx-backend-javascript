import { uploadPhoto, createUser } from './utils.js';

export default async function asyncUploadUser() {
    try {
        const photo = await uploadPhoto();
        const user = await createUser();
        
        // Return the responses from both functions
        return {
            photo: photo,
            user: user,
        };
    } catch (error) {
        // If any of the functions fail, return an empty object with null values
        return {
            photo: null,
            user: null,
        };
    }
}
