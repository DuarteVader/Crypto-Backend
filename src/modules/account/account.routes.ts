import { Request, Response, Router } from "express";
import { AccountController } from "./account.controller";

const routes = Router();

const accountController = new AccountController();

routes.post("/store", async (req: Request, res: Response) => accountController.store(req, res));



export default routes;