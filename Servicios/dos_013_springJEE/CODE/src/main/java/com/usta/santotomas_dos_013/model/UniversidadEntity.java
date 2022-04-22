package com.usta.santotomas_dos_013.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="universidad")
public class UniversidadEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_universidad")
    private long idUniversidad;

    @Column(name="nombre_universidad")
    private String nombreUniversidad;

    @Column(name="nit_universidad")
    private String nitUniversidad;

    public UniversidadEntity(){

    }

    public UniversidadEntity(long idUniversidad, String nombreUniversidad, String nitUniversidad) {
        this.idUniversidad = idUniversidad;
        this.nombreUniversidad = nombreUniversidad;
        this.nitUniversidad = nitUniversidad;
    }

    public long getIdUniversidad() {        return idUniversidad;    }
    public void setIdUniversidad(long idUniversidad) {        this.idUniversidad = idUniversidad;    }

    public String getNombreUniversidad() {        return nombreUniversidad;    }
    public void setNombreUniversidad(String nombreUniversidad) {        this.nombreUniversidad = nombreUniversidad;    }

    public String getNitUniversidad() {        return nitUniversidad;    }
    public void setNitUniversidad(String nitUniversidad) {        this.nitUniversidad = nitUniversidad;    }
}
