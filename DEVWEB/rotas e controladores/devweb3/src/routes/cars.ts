import { Router } from "express";
import controller from "../controllers/CarController";

const routes= Router();

routes.get("/chevrolet", controller.chevrolet );
routes.get("/fiat", controller.fiat );

export default routes;