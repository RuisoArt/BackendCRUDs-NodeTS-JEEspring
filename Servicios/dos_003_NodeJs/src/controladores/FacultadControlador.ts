// import { SQL_FACULTAD } from './../repositorios/facultad_sql';
import {Request, Response} from 'express';
import FacultadDAO from '../daos/FacultadDAO';
import { SQL_FACULTAD } from '../repositorios/facultad_sql';

class FacultadControlador extends FacultadDAO{
    public dameFacultades(req:Request, res:Response):void {
        FacultadControlador.obtenerFacu(SQL_FACULTAD.TODAS,[],res);
    }
}
const facultadControlador = new FacultadControlador();
export default facultadControlador;
