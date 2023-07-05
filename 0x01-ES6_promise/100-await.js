import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const creating = await createUser();
    const uploading = await uploadPhoto();
    const userDetails = {
      photo: uploading,
      user: creating,
    };
    return userDetails;
  } catch (error) {
    console.error('Error');
    return {
      photo: null,
      user: null,
    };
  }
}
