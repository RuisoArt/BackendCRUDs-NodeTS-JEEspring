package com.usta.biblioteca.entitys.autor;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "autores")

public class AutorEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_autor")
    private long idAutor;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "apellido")
    private String apellido;

    @Column(name = "nacionalidad")
    private String nacionalidad;

    @Column(name = "descripcion")
    private String descripcion;

    public AutorEntity(){

    }
    public AutorEntity(long idAutor, String nombre, String apellido, String nacionalidad, String descripcion) {
        this.idAutor = idAutor;
        this.nombre = nombre;
        this.apellido = apellido;
        this.nacionalidad = nacionalidad;
        this.descripcion = descripcion;
    }

    public long getIdAutor() {        return idAutor;    }
    public void setIdAutor(long idAutor) {        this.idAutor = idAutor;    }

    public String getNombre() {        return nombre;    }
    public void setNombre(String nombre) {        this.nombre = nombre;    }

    public String getApellido() {        return apellido;    }
    public void setApellido(String apellido) {        this.apellido = apellido;    }

    public String getNacionalidad() {        return nacionalidad;    }
    public void setNacionalidad(String nacionalidad) {        this.nacionalidad = nacionalidad;    }

    public String getDescripcion() {        return descripcion;    }
    public void setDescripcion(String descripcion) {        this.descripcion = descripcion;    }
}
