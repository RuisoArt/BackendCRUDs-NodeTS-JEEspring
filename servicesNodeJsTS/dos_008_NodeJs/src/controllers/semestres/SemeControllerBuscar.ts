import { SQL_SEMESTRES_BUSCAR } from './../../repositories/semestres/semestres_sql_Buscar';
import {Response,Request} from 'express';
import SemestreDao from '../../daos/semestres/SemestresDaoBuscar';

class SemeControllerBuscar extends SemestreDao{
    public buscarSemestre(req:Request, res:Response):void{
        const codigo = req.params.codigoSemestre;
        const parametro = [codigo];

        SemeControllerBuscar.encontrarSemestre(SQL_SEMESTRES_BUSCAR.BUSCAR, parametro, res);
    }
}
const semeControllerBuscar = new SemeControllerBuscar();
export default semeControllerBuscar;