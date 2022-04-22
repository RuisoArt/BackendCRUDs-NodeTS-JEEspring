import { SQL_SEMESTRES_BORRAR } from './../../repositories/semestres/semestres_sql_Borrar';
import {Response,Request} from 'express';
import SemestreDao from '../../daos/semestres/SemestresDaoBorrar';

class SemeControllerBorrar extends SemestreDao{
    public eliminarSemestre(req:Request, res:Response){
        const codigo = req.params.codigoSemestre;
        const parametro = [codigo];

        SemeControllerBorrar.eliminarSemestre(SQL_SEMESTRES_BORRAR.BORRAR, parametro, res);
    }
}
const semeControllerBorrar = new SemeControllerBorrar();
export default semeControllerBorrar;