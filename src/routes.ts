import { Request, Response } from "express";

import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    name: "Fabiano",
    email: "fabiano@fabianovilela.com",
    password: "123456",
    techs: ["NodeJS", "ReactJS", "React Native"],
    techsObject: [
      {title: "NodeJS", experience: 10},
      {title: "ReactJS", experience: 20},
      {title: "React Native", experience: 20}]
  });

  return response.json({ message: `Hello ${user.name} });
}
