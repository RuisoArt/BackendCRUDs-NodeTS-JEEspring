//import { SQL_SEMESTRES } from './../repositorios/semestres/semestres_sql';
//import { Request, Response } from 'express';
//import { SQL_PROGRAMAS } from './../repositorios/programas/programas_sql';
import {Response,Request} from 'express';
import SemestreDao from '../daos/SemestreDao';
import {SQL_SEMESTRES} from '../repositorios/semestres/semestres_sql';

class SemestreController extends SemestreDao{
    
    public dameSemestres(req:Request, res:Response):void{
        SemestreController.obtenerSemestre(SQL_SEMESTRES.TODO,[],res);
    }

    public grabarSemestres(req:Request, res:Response):void{
        const nombre = req.body.nombreSemestre;
        const parametro = [nombre];

        SemestreController.crearSemestre(SQL_SEMESTRES.CONFIRMAR, SQL_SEMESTRES.CREAR, parametro, res);
    }
}
const semestreController = new SemestreController();
export default semestreController;