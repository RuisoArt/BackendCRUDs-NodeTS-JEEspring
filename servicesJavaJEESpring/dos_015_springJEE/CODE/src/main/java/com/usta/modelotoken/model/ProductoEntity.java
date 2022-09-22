package com.usta.modelotoken.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name="producto")

public class ProductoEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_producto")
    private long idProducto;

    @Column(name = "nombre_producto")
    private String nombreProducto;

    @Column(name = "cantidad_disponible")
    private int cantidadDisponible;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "precio")
    private int precio;

    @Column(name = "iva")
    private float iva;

    @JoinColumn(name = "id_proveedor" , referencedColumnName = "id_proveedor")
    @ManyToOne(fetch = FetchType.EAGER)
    private ProveedorEntity idProveedorFK;

    public ProductoEntity(){

    }

    public ProductoEntity(long idProducto, String nombreProducto, int cantidadDisponible, String descripcion, int precio, float iva, ProveedorEntity idProveedorFK) {
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.cantidadDisponible = cantidadDisponible;
        this.descripcion = descripcion;
        this.precio = precio;
        this.iva = iva;
        this.idProveedorFK = idProveedorFK;
    }

    public long getIdProducto() {        return idProducto;    }
    public void setIdProducto(long idProducto) {        this.idProducto = idProducto;    }

    public String getNombreProducto() {        return nombreProducto;    }
    public void setNombreProducto(String nombreProducto) {        this.nombreProducto = nombreProducto;    }

    public int getCantidadDisponible() {        return cantidadDisponible;    }
    public void setCantidadDisponible(int cantidadDisponible) {        this.cantidadDisponible = cantidadDisponible;    }

    public String getDescripcion() {        return descripcion;    }
    public void setDescripcion(String descripcion) {        this.descripcion = descripcion;    }

    public int getPrecio() {        return precio;    }
    public void setPrecio(int precio) {        this.precio = precio;    }

    public float getIva() {        return iva;    }
    public void setIva(float iva) {        this.iva = iva;    }

    public ProveedorEntity getIdProveedorFK() {        return idProveedorFK;    }
    public void setIdProveedorFK(ProveedorEntity idProveedorFK) {        this.idProveedorFK = idProveedorFK;    }
}
