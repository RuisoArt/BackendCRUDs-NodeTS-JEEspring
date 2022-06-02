package com.usta.biblioteca.entitys.detalle_prestamos;

import com.usta.biblioteca.entitys.libro.LibroEntity;
import com.usta.biblioteca.entitys.prestamos.PrestamosEntity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "detalle_prestamos")

public class DetallePrestamosEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_detalle_prestamos")
    private long idDetallePrestamos;

    @Column(name = "fecha_devolucion")
    private Date fechaDevolucion;

    @Column(name = "dias_mora")
    private Integer diasMora;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "fecha_entrega")
    private Date fechaEntrega;

    @JoinColumn(name = "id_prestamo")
    @ManyToOne(fetch = FetchType.EAGER)
    private PrestamosEntity idPrestamoFK;

    @JoinColumn(name = "id_libro")
    @ManyToOne(fetch = FetchType.EAGER)
    private LibroEntity idLibroFK;

    public DetallePrestamosEntity(){

    }

    public DetallePrestamosEntity(long idDetallePrestamos, Date fechaDevolucion, Integer diasMora, String descripcion, Date fechaEntrega, PrestamosEntity idPrestamoFK, LibroEntity idLibroFK) {
        this.idDetallePrestamos = idDetallePrestamos;
        this.fechaDevolucion = fechaDevolucion;
        this.diasMora = diasMora;
        this.descripcion = descripcion;
        this.fechaEntrega = fechaEntrega;
        this.idPrestamoFK = idPrestamoFK;
        this.idLibroFK = idLibroFK;
    }

    public long getIdDetallePrestamos() {        return idDetallePrestamos;    }
    public void setIdDetallePrestamos(long idDetallePrestamos) {        this.idDetallePrestamos = idDetallePrestamos;    }

    public Date getFechaDevolucion() {        return fechaDevolucion;    }
    public void setFechaDevolucion(Date fechaDevolucion) {        this.fechaDevolucion = fechaDevolucion;    }

    public Integer getDiasMora() {        return diasMora;    }
    public void setDiasMora(Integer diasMora) {        this.diasMora = diasMora;    }

    public String getDescripcion() {        return descripcion;    }
    public void setDescripcion(String descripcion) {        this.descripcion = descripcion;    }

    public Date getFechaEntrega() {        return fechaEntrega;    }
    public void setFechaEntrega(Date fechaEntrega) {        this.fechaEntrega = fechaEntrega;    }

    public PrestamosEntity getIdPrestamoFK() {        return idPrestamoFK;    }
    public void setIdPrestamoFK(PrestamosEntity idPrestamoFK) {        this.idPrestamoFK = idPrestamoFK;    }

    public LibroEntity getIdLibro() {        return idLibroFK;    }
    public void setIdLibro(LibroEntity idLibro) {        this.idLibroFK = idLibro;    }
}
