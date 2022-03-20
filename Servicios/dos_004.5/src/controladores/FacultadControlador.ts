// import { SQL_DOCENTE } from './../repositorios/docente_sql';
// import { SQL_FACULTAD } from './../repositorios/facultad_sql';
import {Request, Response} from 'express';
import FacultadDAO from '../daos/FacultadDAO';
import { SQL_FACULTAD } from '../repositorios/facultad_sql';
import {SQL_DOCENTE} from '../repositorios/docente_sql'

class FacultadControlador extends FacultadDAO{
    public dameFacultades(req:Request, res:Response):void {
        FacultadControlador.obtenerFacu(SQL_FACULTAD.FACULTADES,[],res);
    }
    public dameDocentes(req:Request, res:Response):void {
        FacultadControlador.obtenerDoce(SQL_DOCENTE.DOCENTE,[],res);
    }
}
const facultadControlador = new FacultadControlador();
export default facultadControlador;
