import {Response, Request} from 'express'; //Request es pedir, Response es mi respuesta

class PruebaDAO{

    protected static async obtenerInfo(req:Request, res:Response): Promise<any> {
        const miJson = {profesores:'Harvey y Andres', materia:'DOS'}; // los Json funciones en {llave:valor}, la llave puede o no estar en llaves sencillas ''

        //Objeto, resuelve, si funciona hace el THEN si no hace el CATCH. "Programacion Reactiva"
        // ()=>{} esto es una funcion flecha
        Promise.resolve(miJson)
        .then( (resultado: any)=>{
            console.log('La Consola imprime el Json= \n', resultado);
            res.status(200).json(miJson);
        } )
        .catch( (error: any)=>{
            console.log('Ha sucedido un error= \n', error);
            res.status(400).json({respuesta: 'Se murio el sistema'});
        } ); 
    }
}
//export PruebaDAO;
export default PruebaDAO;