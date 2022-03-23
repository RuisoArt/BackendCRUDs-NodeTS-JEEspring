import pgPromise from 'pg-promise';
import {opcionesPG} from './opcionesConexion';
import variablesConexion from '../dominios/var_database';

const pgp = pgPromise(opcionesPG);
const pool = pgp(variablesConexion);

pool.connect()
.then((conn)=>{
    console.log('Se realizo exitosamente la conexion', variablesConexion.database);
    conn.done();
})
.catch((miError)=>{
    console.log('Esto Exploto Mother fucker',miError);
});

export default pool;