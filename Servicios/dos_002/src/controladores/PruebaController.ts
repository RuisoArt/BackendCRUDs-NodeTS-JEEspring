import {Request, Response} from 'express';
import PruebaDao from '../daos/PruebaDao'

class PruebaController extends PruebaDao{

    public hackme(req: Request, res:Response):void{
        PruebaController.obtenerPrimero(req, res);
    }

    public hitme(req: Request, res:Response):void{
        PruebaController.obtenerSegundo(req, res);
    }

    public findme(req: Request, res:Response):void{
        PruebaController.obtenerTercero(req, res);
    }
}

const pruebaController = new PruebaController();
export default pruebaController;