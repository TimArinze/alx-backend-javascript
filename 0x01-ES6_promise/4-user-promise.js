export default function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    resolve({ firstName, lastName })
      .then((value) => {
        console.log(`Promise { { firstName: ${value.firstName}, lastName: ${value.lastName} } }`);
      });
  });
}
