//import { SQL_CANDIDATOS } from './../respositorios/candidatos_sql';
import {Request, Response} from 'express';
import CandidatoDao from '../daos/CandidatoDao';
import {SQL_CANDIDATOS} from '../respositorios/candidatos_sql';

class CandidatoController extends CandidatoDao{
    public dameCandidatos(req:Request, res:Response):void{
        CandidatoController.obtenerCandidatos(SQL_CANDIDATOS.CANDIDATO,[],res);
    }
    public grabarCandidato(req:Request, res:Response):void {

        const nombre = req.body.nombreCandidato;
        const nacimiento = req.body.fechaNacimiento;
        const evaluacion = req.body.evaluacionCandidato;
        const idpartido = req.body.idPartido;

        const parametro1 = [nombre];
        const parametro2 = [nacimiento];
        const parametro3 = [evaluacion];
        const parametro4 = [idpartido];

        CandidatoController.crearCandidatos(SQL_CANDIDATOS.CONFIRMAR, SQL_CANDIDATOS.CREAR, parametro, res);
    }
}
const candidatoController = new CandidatoController();
export default candidatoController;