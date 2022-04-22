package com.usta.crudspring.model;

import javax.persistence.*;
import java.io.Serializable;
//..................................................................................... Nombrar que tabla vamos a Mapear
@Entity
@Table(name="docentes")

//............................................................................................................. LA CLASE
public class DocenteEntity implements Serializable {
    //................................................................. Mapeo de TODAS las variables en la base de datos
    // llave primaria
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cod_docente")
    private long codDocente;

    //esta es llave foranea
    /*Una Facultad tiene muchos docentes
        --> muchos docentes tienenuna Facultad
            --> vista desde la tabla Docentes
                --> esta es la forma de ver la relacion que necesitamos,
                    siempre nos paramos desde la tabla que nos interesa */
    @JoinColumn(name="cod_facultad", referencedColumnName = "cod_facultad")
    @ManyToOne(fetch = FetchType.EAGER)
    private FacultadEntity codFacultadDoc;

    @Column(name="documento_docente")
    private String documentoDocente;

    @Column(name="apellido_docente")
    private String apellidoDocente;

    @Column(name="nombre_docente")
    private String nombreDocente;

    //.................................................................................................Constructor vacio
    public DocenteEntity(){

    }
    //-----------------------------------------------------------------------------------------Constructor con variables
    public DocenteEntity(long codDocente, FacultadEntity codFacultadDoc, String documentoDocente, String apellidoDocente, String nombreDocente) {
        this.codDocente = codDocente;
        this.codFacultadDoc = codFacultadDoc;
        this.documentoDocente = documentoDocente;
        this.apellidoDocente = apellidoDocente;
        this.nombreDocente = nombreDocente;
    }
    //...............................................................................................getters and setters
    public long getCodDocente() {        return codDocente;    }
    public void setCodDocente(long codDocente) {        this.codDocente = codDocente;    }

    public FacultadEntity getCodFacultadDoc() {        return codFacultadDoc;    }
    public void setCodFacultadDoc(FacultadEntity codFacultadDoc) {        this.codFacultadDoc = codFacultadDoc;    }

    public String getDocumentoDocente() {        return documentoDocente;    }
    public void setDocumentoDocente(String documentoDocente) {        this.documentoDocente = documentoDocente;    }

    public String getApellidoDocente() {        return apellidoDocente;    }
    public void setApellidoDocente(String apellidoDocente) {        this.apellidoDocente = apellidoDocente;    }

    public String getNombreDocente() {        return nombreDocente;    }
    public void setNombreDocente(String nombreDocente) {        this.nombreDocente = nombreDocente;    }
}
