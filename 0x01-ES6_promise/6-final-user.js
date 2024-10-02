import { signUpUser } from './4-user-promise'
import { uploadPhoto } from './5-photo-reject'

export default async function handleProfileSignup(firstName, lastName, fileName) {
	const user = signUpUser(firstName, lastName)
	.then((value) => ({
		status: 'fulfilled',
		value,
	}));
	
	const photo = uploadPhoto(fileName)
	.catch((error) => ({
		status: 'rejected',
		value: error.toString(),
	}));

	const result = await Promise.all([ user, photo ]);
	return result;
}
