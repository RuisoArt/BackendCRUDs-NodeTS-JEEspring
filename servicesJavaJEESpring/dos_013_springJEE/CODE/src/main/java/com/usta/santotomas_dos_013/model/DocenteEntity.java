package com.usta.santotomas_dos_013.model;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "docente")

public class DocenteEntity implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="cod_docente")
    private long codDocente;

    @Column(name="documento_docente")
    private String documentoDocente;

    @Column(name="nombres_docente")
    private String nombresDocente;

    @Column(name="apellidos_docente")
    private String apellidosDocente;

    @Column(name="tipo_docente")
    private int tipoDocente;

    @JoinColumn(name="cod_facultad")
    @ManyToOne(fetch = FetchType.EAGER)
    private FacultadEntity codFacultad;

    public DocenteEntity(){

    }

    public DocenteEntity(long codDocente, String documentoDocente, String nombresDocente, String apellidosDocente, int tipoDocente, FacultadEntity codFacultad) {
        this.codDocente = codDocente;
        this.documentoDocente = documentoDocente;
        this.nombresDocente = nombresDocente;
        this.apellidosDocente = apellidosDocente;
        this.tipoDocente = tipoDocente;
        this.codFacultad = codFacultad;
    }

    public long getCodDocente() {
        return codDocente;
    }

    public void setCodDocente(long codDocente) {
        this.codDocente = codDocente;
    }

    public String getDocumentoDocente() {
        return documentoDocente;
    }

    public void setDocumentoDocente(String documentoDocente) {
        this.documentoDocente = documentoDocente;
    }

    public String getNombresDocente() {
        return nombresDocente;
    }

    public void setNombresDocente(String nombresDocente) {
        this.nombresDocente = nombresDocente;
    }

    public String getApellidosDocente() {
        return apellidosDocente;
    }

    public void setApellidosDocente(String apellidosDocente) {
        this.apellidosDocente = apellidosDocente;
    }

    public int getTipoDocente() {
        return tipoDocente;
    }

    public void setTipoDocente(int tipoDocente) {
        this.tipoDocente = tipoDocente;
    }

    public FacultadEntity getCodFacultad() {
        return codFacultad;
    }

    public void setCodFacultad(FacultadEntity codFacultad) {
        this.codFacultad = codFacultad;
    }
}
