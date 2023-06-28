import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(fileName)])
    .then((values) => {
      const results = [];
      values.forEach((value) => {
        results.push(value.status);
        if (value.status === 'rejected') {
          results.push(value.reason.message);
        } else {
          results.push(value.value.body);
        }
      });
      return results;
    });
}
