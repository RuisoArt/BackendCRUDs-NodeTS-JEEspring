package com.usta.modelotoken.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "cliente")

public class ClienteEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_cliente")
    private long idCliente;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellidos")
    private String apellidos;

    @Column(name = "identificacion")
    private String identificacion;

    @Column(name = "telefono")
    private int telefono;

    public ClienteEntity(){

    }

    public ClienteEntity(long idCliente, String nombre, String apellidos, String identificacion, int telefono) {
        this.idCliente = idCliente;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.identificacion = identificacion;
        this.telefono = telefono;
    }

    public long getIdCliente() {        return idCliente;    }
    public void setIdCliente(long idCliente) {        this.idCliente = idCliente;    }

    public String getNombre() {        return nombre;    }
    public void setNombre(String nombre) {        this.nombre = nombre;    }

    public String getApellidos() {        return apellidos;    }
    public void setApellidos(String apellidos) {        this.apellidos = apellidos;    }

    public String getIdentificacion() {        return identificacion;    }
    public void setIdentificacion(String identificacion) {        this.identificacion = identificacion;    }

    public int getTelefono() {        return telefono;    }
    public void setTelefono(int telefono) {        this.telefono = telefono;    }
}
