import firebase from "firebase-admin";
import { Project } from "./types";

const serviceAccount = require("../secrets/serviceAccount.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://portfolio-fd748.firebaseio.com",
});

const database = firebase.database();

export const getProjects = (): Promise<Array<Project>> => {
  return new Promise((resolve, reject) => {
    const ref = database.ref("projects");
    const arr: Array<Project> = [];
    ref.on(
      "value",
      (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          const { about, link, image } = childSnapshot.val();
          arr.push({
            key: childSnapshot.key,
            about: about,
            link: link,
            image: image,
          });
        });
        resolve(arr);
      },
      (error) => {
        reject(error);
      }
    );
  });
};
