import {Request, Response} from 'express';
import CandidatoDao from '../daos/CandidatoDao';
import {SQL_CANDIDATOS} from '../respositorios/candidatos_sql';

class CandidatoController extends CandidatoDao{
    public dameCandidatos(req:Request, res:Response):void{
        CandidatoController.obtenerCandidatos(SQL_CANDIDATOS.CANDIDATO,[],res);
    }
}
const candidatoController = new CandidatoController();
export default candidatoController;