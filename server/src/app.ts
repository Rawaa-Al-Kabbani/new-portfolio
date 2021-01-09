import express, { Application, Request, Response } from "express";
import { getProjects } from "./database";

export const app: Application = express();

app.get("/api/getProjects", async (request: Request, response: Response) => {
  const projects = await getProjects();
  response.send(projects);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}...`)
);
