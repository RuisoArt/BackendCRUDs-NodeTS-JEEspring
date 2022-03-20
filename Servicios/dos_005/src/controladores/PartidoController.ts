import {Request, Response} from 'express';
import PartidoDao from '../daos/PartidoDao';
import {SQL_PARTIDOS} from '../respositorios/partidos_sql';

class PartidoController extends PartidoDao{
    public damePartidos(req:Request, res:Response):void{
        PartidoController.obtenerPartidos(SQL_PARTIDOS.PARTIDO,[],res);
    }
}
const partidoController = new PartidoController();
export default partidoController;