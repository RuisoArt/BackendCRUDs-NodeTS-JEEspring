package com.usta.santotomas_dos_013.model;
import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "asignaturas")

public class AsignaturaEntity implements Serializable{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_asignatura")
    private long idAsignatura;

    @Column(name = "semestre_asignatura")
    private int semestreAsignatura;

    @Column(name = "nombre_asignatura")
    private String nombreAsignatura;

    @Column(name = "codigo_asignatura")
    private int codigoAsignatura;

    @Column(name = "tipo_asignatura")
    private String tipoAsignatura;

    @JoinColumn(name = "cod_docente")
    @ManyToOne(fetch = FetchType.EAGER)
    private DocenteEntity codDocente;

    public AsignaturaEntity(){

    }

    public AsignaturaEntity(long idAsignatura, int semestreAsignatura, String nombreAsignatura, int codigoAsignatura, String tipoAsignatura, DocenteEntity codDocente) {
        this.idAsignatura = idAsignatura;
        this.semestreAsignatura = semestreAsignatura;
        this.nombreAsignatura = nombreAsignatura;
        this.codigoAsignatura = codigoAsignatura;
        this.tipoAsignatura = tipoAsignatura;
        this.codDocente = codDocente;
    }

    public long getIdAsignatura() {        return idAsignatura;    }
    public void setIdAsignatura(long idAsignatura) {
        this.idAsignatura = idAsignatura;
    }

    public int getSemestreAsignatura() {
        return semestreAsignatura;
    }
    public void setSemestreAsignatura(int semestreAsignatura) {
        this.semestreAsignatura = semestreAsignatura;
    }

    public String getNombreAsignatura() {
        return nombreAsignatura;
    }
    public void setNombreAsignatura(String nombreAsignatura) {
        this.nombreAsignatura = nombreAsignatura;
    }

    public int getCodigoAsignatura() {
        return codigoAsignatura;
    }
    public void setCodigoAsignatura(int codigoAsignatura) {
        this.codigoAsignatura = codigoAsignatura;
    }

    public String getTipoAsignatura() {
        return tipoAsignatura;
    }
    public void setTipoAsignatura(String tipoAsignatura) {
        this.tipoAsignatura = tipoAsignatura;
    }

    public DocenteEntity getCodDocente() {
        return codDocente;
    }
    public void setCodDocente(DocenteEntity codDocente) {
        this.codDocente = codDocente;
    }
}
