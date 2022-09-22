import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import rutaAPI from '../../route/Rutas';

class Servidor{
    public app: express.Application;

    constructor(){
        this.app = express();
        this.Configuracion();
        this.Rutas();
    }
    public Configuracion():void{
        this.app.set('PORT', 8089);
        this.app.use(cors());
        this.app.use(morgan('dev')); //este esta en modo desarrollo
        this.app.use(express.json({limit:'100mb'}));
        this.app.use(express.urlencoded({extended:true}));
    }
    public Rutas():void{
        this.app.use('/api/Biblioteca-El-Buho-Susurrante', rutaAPI); //esta sera mi ruta padre
    }
    public runServer():void{
        this.app.listen(this.app.get('PORT'), ()=>{
            console.log('Funciona el Servidor', this.app.get('PORT'));
        });
    }
}
export default Servidor;