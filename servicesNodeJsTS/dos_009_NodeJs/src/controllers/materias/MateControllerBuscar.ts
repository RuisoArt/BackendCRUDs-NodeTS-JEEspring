import {Response,Request} from 'express';
import MateriasDao from '../../daos/materias/MateriasDaoBuscar';
import {SQL_MATERIAS_BUSCAR} from '../../repositories/materias/materias_sql_Buscar';

class MateControllerBuscar extends MateriasDao{
    public buscarMateria(req:Request, res:Response):void{
        const codigo = req.params.codigoMateria;
        const parametro = [codigo];

        MateControllerBuscar.encontrarMateria(SQL_MATERIAS_BUSCAR.BUSCAR, parametro, res);
    }
}
const mateControllerBuscar = new MateControllerBuscar();
export default mateControllerBuscar;