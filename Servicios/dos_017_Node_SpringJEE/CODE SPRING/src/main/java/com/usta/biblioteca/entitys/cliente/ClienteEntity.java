package com.usta.biblioteca.entitys.cliente;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "clientes")

public class ClienteEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente")
    private long idCliente;

    @Column(name = "identificacion")
    private String identificacion;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "direccion")
    private String direccion;

    @Column(name = "telefono")
    private String telefono;

    public ClienteEntity(){

    }
    public ClienteEntity(long idCliente, String identificacion, String nombre, String apellido, String direccion, String telefono) {
        this.idCliente = idCliente;
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    public long getIdCliente() {        return idCliente;    }
    public void setIdCliente(long idCliente) {        this.idCliente = idCliente;    }

    public String getIdentificacion() {        return identificacion;    }
    public void setIdentificacion(String identificacion) {        this.identificacion = identificacion;    }

    public String getNombre() {        return nombre;    }
    public void setNombre(String nombre) {        this.nombre = nombre;    }

    public String getApellido() {        return apellido;    }
    public void setApellido(String apellido) {        this.apellido = apellido;    }

    public String getDireccion() {        return direccion;    }
    public void setDireccion(String direccion) {        this.direccion = direccion;    }

    public String getTelefono() {        return telefono;    }
    public void setTelefono(String telefono) {        this.telefono = telefono;    }
}
