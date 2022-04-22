import cors from 'cors';
import morgan from 'morgan';
import express from 'express';

import rutaAPI from '../../route/Rutas';
import validacion from '../../middleware/Validacion';
import rutaAPIPro from '../../route/RutasProgramas'; // esta luego sera cada archivo de rutas por separado

class Servidor{

    public app: express.Application;

    constructor(){
        this.app = express();
        this.Configuracion();
        this.Rutas();
    }
    public Configuracion():void{
        this.app.set('PORT', 8088);
        this.app.use(cors());
        this.app.use(morgan('dev')); //este esta en modo desarrollo
        this.app.use(express.json({limit:'100mb'}));
        this.app.use(express.urlencoded({extended:true}));
    }
    public Rutas():void{
        this.app.use('/api/Universidad', rutaAPI); //ruta padre
        this.app.use('/api/privada/pro', validacion.validarToken, rutaAPIPro); //ruta privada new 22/03/2022 . Tambien es una ruta Padre
    }
    public runServer():void{
        this.app.listen(this.app.get('PORT'), ()=>{
            console.log('Funciona el Servidor', this.app.get('PORT'));
        });
    }
}
export default Servidor;