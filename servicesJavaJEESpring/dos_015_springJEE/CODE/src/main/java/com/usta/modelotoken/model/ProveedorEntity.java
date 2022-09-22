package com.usta.modelotoken.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "proveedor")

public class ProveedorEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_proveedor")
    private long idProveedor;

    @Column(name = "nombre_proveedor")
    private String nombreProveedor;

    @Column(name = "nit_proveedor")
    private String nitProveedor;

    @Column(name = "direccion")
    private String direccion;

    public ProveedorEntity(){

    }

    public ProveedorEntity(long idProveedor, String nombreProveedor, String nitProveedor, String direccion) {
        this.idProveedor = idProveedor;
        this.nombreProveedor = nombreProveedor;
        this.nitProveedor = nitProveedor;
        this.direccion = direccion;
    }

    public long getIdProveedor() {        return idProveedor;    }
    public void setIdProveedor(long idProveedor) {        this.idProveedor = idProveedor;    }

    public String getNombreProveedor() {        return nombreProveedor;    }
    public void setNombreProveedor(String nombreProveedor) {        this.nombreProveedor = nombreProveedor;    }

    public String getNitProveedor() {        return nitProveedor;    }
    public void setNitProveedor(String nitProveedor) {        this.nitProveedor = nitProveedor;    }

    public String getDireccion() {        return direccion;    }
    public void setDireccion(String direccion) {        this.direccion = direccion;    }

}
