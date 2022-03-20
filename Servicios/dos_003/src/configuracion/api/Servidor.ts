import cors from 'cors';
import morgan from 'morgan';
import express from 'express';

// import directorio from '../rutas/PruebaRuta';
import rutaFacuApi from '../../rutas/FacultadRutas';

class Servidor{

    public app: express.Application;

    constructor(){
        this.app = express();
        this.iniciarConfiguracion();
        this.activarRutas();
    }
    public iniciarConfiguracion():void{
        this.app.set('PORT', 8088);
        this.app.use(cors());
        this.app.use(morgan('dev')); //este esta en modo desarrollo
        this.app.use(express.json({limit:'100mb'}));
        this.app.use(express.urlencoded({extended:true}));
    }
    public activarRutas():void{
        this.app.use('/api/Universidad', rutaFacuApi); //ruta padre
    }
    public iniciarServidor():void{
        this.app.listen(this.app.get('PORT'), ()=>{
            console.log('Funciona el Servidor', this.app.get('PORT'));
        });
    }

}
export default Servidor;