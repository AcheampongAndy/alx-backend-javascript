// Importing the functions from utils.js
import { uploadPhoto, createUser } from './utils.js';

function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([uploadResponse, userResponse]) => {
      console.log(uploadResponse.body, userResponse.firstName, userResponse.lastName);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
