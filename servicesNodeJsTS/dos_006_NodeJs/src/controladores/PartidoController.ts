//import { SQL_PARTIDOS } from './../respositorios/partidos_sql';
import {Request, Response} from 'express';
import PartidoDao from '../daos/PartidoDao';
import {SQL_PARTIDOS} from '../respositorios/partidos_sql';

class PartidoController extends PartidoDao{
    public damePartidos(req:Request, res:Response):void{
        PartidoController.obtenerPartidos(SQL_PARTIDOS.PARTIDO,[],res);
    }

    public grabarPartido(req:Request, res:Response):void{

        const nombre = req.body.nombrePartido;
        const parametro = [nombre];

        PartidoController.crearPartidos(SQL_PARTIDOS.CONFIRMAR, SQL_PARTIDOS.CREAR, parametro, res);
    }
}
const partidoController = new PartidoController();
export default partidoController;