import {Response,Request} from 'express';
import MateriasDao from '../../daos/materias/MateriasDaoCrear';
import {SQL_MATERIAS_CREAR} from '../../repositories/materias/materias_sql_Crear';
import {SQL_MATERIAS_CONFIRMAR} from '../../repositories/materias/materias_sql_Confirmar';

class MateControllerCrear extends MateriasDao{
    public grabarMateria(req:Request, res:Response):void{
        const nombre = req.body.nombreMateria;
        const referencia  = req.body.referenciaMateria;
        const parametro = [nombre, referencia];

        MateControllerCrear.crearMaterias(SQL_MATERIAS_CONFIRMAR.CONFIRMAR, SQL_MATERIAS_CREAR.CREAR, parametro, res);        
    }

}
const mateControllerCrear = new MateControllerCrear();
export default mateControllerCrear;