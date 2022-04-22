package com.usta.crudspring.model;
import javax.persistence.*;
import java.io.Serializable;

//..................................................................................... Nombrar que tabla vamos a Mapear
@Entity
@Table(name="facultades")
//............................................................................................................. LA CLASE
public class FacultadEntity implements Serializable {
    //................................................................. Mapeo de TODAS las variables en la base de datos
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cod_facultad")
    private long codFacultad;

    @Column(name="nombre_facultad")
    private String nombreFacultad;

    //.................................................................................................Constructor vacio
    public FacultadEntity() {
    }
    //-----------------------------------------------------------------------------------------Constructor con variables
    public FacultadEntity(long codFacultad, String nombreFacultad) {
        this.codFacultad = codFacultad;
        this.nombreFacultad = nombreFacultad;
    }


    //...............................................................................................getters and setters

    public long getCodFacultad() {        return codFacultad;    }
    public void setCodFacultad(long codFacultad) {        this.codFacultad = codFacultad;    }

    public String getNombreFacultad() {        return nombreFacultad;    }
    public void setNombreFacultad(String nombreFacultad) {        this.nombreFacultad = nombreFacultad;    }
}
