import { Router, response } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.get("/", (request, response) => {
  return response.status(201).send();
});

router.post("/users", (request, response) => {
  // return response.json(201).send();
  return createUserController.handle(request, response);
});

export { router };
