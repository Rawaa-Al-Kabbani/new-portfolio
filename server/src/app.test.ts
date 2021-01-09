import firebase from "firebase-admin";
import { getProjects } from "./database";

const PROJECTS: {
  [key: string]: {
    about: string;
    link: string;
    image: string;
  };
} = {
  project1: {
    about: "Project1",
    link: "http://www.example.com",
    image: "http://www.example.com/image.jpg",
  },
  project2: {
    about: "Project2",
    link: "http://www.example.com/2",
    image: "http://www.example.com/image2.jpg",
  },
};

jest.mock("firebase-admin", () => {
  const on = jest.fn((event, callback) => {
    const snapshot = Object.keys(PROJECTS).map((key) => {
      return {
        key,
        val: () => {
          return PROJECTS[key];
        },
      };
    });
    callback(snapshot);
  });
  return {
    credential: {
      cert: jest.fn(() => {
        return {};
      }),
    },
    database: jest.fn(() => {
      return {
        ref: jest.fn(() => {
          return {
            on,
          };
        }),
      };
    }),
    initializeApp: jest.fn(() => {
      return {};
    }),
  };
});

test("getProjects function returns an array with the projects", async () => {
  const projects = await getProjects();
  expect(projects).toEqual([
    {
      key: "project1",
      about: "Project1",
      link: "http://www.example.com",
      image: "http://www.example.com/image.jpg",
    },
    {
      key: "project2",
      about: "Project2",
      link: "http://www.example.com/2",
      image: "http://www.example.com/image2.jpg",
    },
  ]);
});
