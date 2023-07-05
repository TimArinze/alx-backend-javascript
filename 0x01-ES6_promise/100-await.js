import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
//   async function creating() {
//     const create = await createUser();
//     if (create) {
//       return create;
//     }
//     return null;
//   }
//   async function uploading() {
//     const upload = await uploadPhoto();
//     if (upload) {
//       return upload;
//     }
//     return null;
//   }
  const creating = await createUser();
  const uploading = await uploadPhoto();
  if (creating && uploading) {
    const userDetails = {
      photo: uploading,
      user: creating,
    };
    return userDetails;
  }
  return {
    photo: null,
    user: null,
  };
}
