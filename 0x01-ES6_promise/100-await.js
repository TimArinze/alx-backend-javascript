import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  const userDetails = {
    photo: await uploadPhoto(),
    user: await createUser(),
  };
  return userDetails;
}
