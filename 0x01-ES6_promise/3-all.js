import { uploadPhoto, createUser } from "./utils";

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photo, user]) => {
      console.log(user.firstName + " " + user.lastName);
    })
    .catch((error) => {
      console.log("Signup system offline");
    });
}
