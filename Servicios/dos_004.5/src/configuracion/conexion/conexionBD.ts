import pgPromise from 'pg-promise';
import { opcionesPG } from './opcionesConexion';
import variablesConexion from '../dominios/var_database';

const pgp = pgPromise(opcionesPG);
const pool = pgp(variablesConexion);

pool.connect()
.then((conn)=>{
    console.log('SE ESTABLECIO LA CONEXION A: ',variablesConexion.database);
    conn.done();
})
.catch((miError)=>{
    console.log('EXPLOTO, ESTE ES EL ERROR: ', miError);
});

export default pool;