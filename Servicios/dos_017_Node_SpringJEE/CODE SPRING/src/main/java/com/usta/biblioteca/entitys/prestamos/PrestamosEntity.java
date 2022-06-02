package com.usta.biblioteca.entitys.prestamos;

import com.usta.biblioteca.entitys.cliente.ClienteEntity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "prestamos_biblio")

public class PrestamosEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_prestamo")
    private long idPrestamo;

    @Column(name = "fecha_inicio")
    private Date fechaInicio;

    @Column(name = "descripcion")
    private String descripcion;

    @JoinColumn(name = "id_cliente")
    @ManyToOne(fetch = FetchType.EAGER)
    private ClienteEntity idClienteFK;

    public PrestamosEntity(){

    }
    public PrestamosEntity(long idPrestamo, Date fechaInicio, String descripcion, ClienteEntity idClienteFK) {
        this.idPrestamo = idPrestamo;
        this.fechaInicio = fechaInicio;
        this.descripcion = descripcion;
        this.idClienteFK = idClienteFK;
    }

    public long getIdPrestamo() {        return idPrestamo;    }
    public void setIdPrestamo(long idPrestamo) {        this.idPrestamo = idPrestamo;    }

    public Date getFechaInicio() {        return fechaInicio;    }
    public void setFechaInicio(Date fechaInicio) {        this.fechaInicio = fechaInicio;    }

    public String getDescripcion() {        return descripcion;    }
    public void setDescripcion(String descripcion) {        this.descripcion = descripcion;    }

    public ClienteEntity getIdClienteFK() {        return idClienteFK;    }
    public void setIdClienteFK(ClienteEntity idClienteFK) {        this.idClienteFK = idClienteFK;    }
}
