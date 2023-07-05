import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  async function creating() {
    const create = await createUser();
    if (create) {
      return create;
    }
    return null;
  }
  async function uploading() {
    const upload = await uploadPhoto();
    if (upload) {
      return upload;
    }
    return null;
  }
  const userDetails = {
    photo: await uploading(),
    user: await creating(),
  };
  return userDetails;
}
