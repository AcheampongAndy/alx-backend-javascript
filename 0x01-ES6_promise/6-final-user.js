import { signUpUser } from './4-user-promise';
import { uploadPhoto } from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
    const user = signUpUser(firstName, lastName)
        .then((value) => ({
            status: 'fulfilled',
            value,
        }))
        .catch((error) => ({
            status: 'rejected',
            value: error.toString(),
        }));

    const photo = uploadPhoto(fileName)
        .then((value) => ({
            status: 'fulfilled',
            value,
        }))
        .catch((error) => ({
            status: 'rejected',
            value: error.toString(),
        }));

    // Use Promise.allSettled to wait for both promises to settle
    const result = await Promise.allSettled([user, photo]);

    // Return the result array
    return result;
}
