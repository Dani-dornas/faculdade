import { Request, Response } from "express";

class CarController {
    chevrolet(req:Request, res:Response){
        res.send("Onix");
    }
    
    fiat(req:Request, res:Response){
        res.send("Uno")
    }
}

export default new CarController();