package com.usta.santotomas_dos_013.model;
import javax.persistence.*;
import java.io.Serializable;


@Entity
@Table(name="facultad")

public class FacultadEntity implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cod_facultad")
    private long codFacultad;

    @Column(name="nombre_facultad")
    private String nombreFacultad;

    @JoinColumn(name="id_seccional")
    @ManyToOne(fetch = FetchType.EAGER)
    private SeccionalEntity idSeccional;

    public FacultadEntity() {

    }

    public FacultadEntity(long codFacultad, String nombreFacultad, SeccionalEntity idSeccional) {
        this.codFacultad = codFacultad;
        this.nombreFacultad = nombreFacultad;
        this.idSeccional = idSeccional;
    }

    public long getCodFacultad() {        return codFacultad;    }
    public void setCodFacultad(long codFacultad) {        this.codFacultad = codFacultad;    }

    public String getNombreFacultad() {        return nombreFacultad;    }
    public void setNombreFacultad(String nombreFacultad) {        this.nombreFacultad = nombreFacultad;    }

    public SeccionalEntity getIdSeccional() {        return idSeccional;    }
    public void setIdSeccional(SeccionalEntity idSeccional) {        this.idSeccional = idSeccional;    }
}
