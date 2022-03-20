import {Response, Request} from 'express';

class PruebaDao{

    protected static async obtenerPrimero(req:Request, res:Response): Promise<any>{

        const diccionarioUno = {estudiante:'Felipe Narvaez', codigo:'2312660'};

        Promise.resolve(diccionarioUno)
        .then( (resultado:any)=>{
            console.log('Se imprime el Json DiccionarioUno = \n', resultado);
            res.status(202).json(diccionarioUno);
        })
        .catch( (error:any)=>{
            console.log('Diccionario Uno Exploto = /n',error);
            res.status(418).json({respuesta: 'Exploto la Maquina'});
        });
    }

    protected static async obtenerSegundo(req:Request, res:Response): Promise<any>{

        const diccionarioUno = {estudiante:'Luis Gomez', codigo:'2312660'};

        Promise.resolve(diccionarioUno)
        .then( (resultado:any)=>{
            console.log('Se imprime el Json DiccionarioUno = \n', resultado);
            res.status(202).json(diccionarioUno);
        })
        .catch( (error:any)=>{
            console.log('Diccionario Uno Exploto = /n',error);
            res.status(418).json({respuesta: 'Exploto la Maquina'});
        });
    }

    protected static async obtenerTercero(req:Request, res:Response): Promise<any>{

        const diccionarioUno = {estudiante:'Maoly Leal', codigo:'2312660'};

        Promise.resolve(diccionarioUno)
        .then( (resultado:any)=>{
            console.log('Se imprime el Json DiccionarioUno = \n', resultado);
            res.status(202).json(diccionarioUno);
        })
        .catch( (error:any)=>{
            console.log('Diccionario Uno Exploto = /n',error);
            res.status(418).json({respuesta: 'Exploto la Maquina'});
        });
    }
}

export default PruebaDao;