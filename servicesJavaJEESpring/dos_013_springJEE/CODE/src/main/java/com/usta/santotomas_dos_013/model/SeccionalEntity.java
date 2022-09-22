package com.usta.santotomas_dos_013.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="seccional")
public class SeccionalEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_seccional")
    private long idSeccional;

    @Column(name="direccion_seccional")
    private String direccionSeccional;

    @Column(name = "nombre_seccional")
    private String nombreSeccional;

    @JoinColumn(name = "id_universidad", referencedColumnName = "id_universidad")
    @ManyToOne(fetch = FetchType.EAGER)
    private UniversidadEntity idUniversidadFK;

    public SeccionalEntity(){

    }

    public SeccionalEntity(long idSeccional, String direccionSeccional, String nombreSeccional, UniversidadEntity idUniversidadFK) {
        this.idSeccional = idSeccional;
        this.direccionSeccional = direccionSeccional;
        this.nombreSeccional = nombreSeccional;
        this.idUniversidadFK = idUniversidadFK;
    }

    public long getIdSeccional() {        return idSeccional;    }
    public void setIdSeccional(long idSeccional) {        this.idSeccional = idSeccional;    }

    public String getDireccionSeccional() {        return direccionSeccional;    }
    public void setDireccionSeccional(String direccionSeccional) {        this.direccionSeccional = direccionSeccional;    }

    public String getNombreSeccional() {        return nombreSeccional;    }
    public void setNombreSeccional(String nombreSeccional) {        this.nombreSeccional = nombreSeccional;    }

    public UniversidadEntity getIdUniversidadFK() {        return idUniversidadFK;    }
    public void setIdUniversidadFK(UniversidadEntity idUniversidadFK) {        this.idUniversidadFK = idUniversidadFK;    }
}
