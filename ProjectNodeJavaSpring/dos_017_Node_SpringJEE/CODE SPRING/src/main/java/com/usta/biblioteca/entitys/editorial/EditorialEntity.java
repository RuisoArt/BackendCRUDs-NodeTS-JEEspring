package com.usta.biblioteca.entitys.editorial;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "editoriales")

public class EditorialEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_editorial")
    private long idEditorial;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "pais")
    private String pais;

    @Column(name = "telefono")
    private String telefono;

    public EditorialEntity(){

    }
    public EditorialEntity(long idEditorial, String nombre, String pais, String telefono) {
        this.idEditorial = idEditorial;
        this.nombre = nombre;
        this.pais = pais;
        this.telefono = telefono;
    }

    public long getIdEditorial() {        return idEditorial;    }
    public void setIdEditorial(long idEditorial) {        this.idEditorial = idEditorial;    }

    public String getNombre() {        return nombre;    }
    public void setNombre(String nombre) {        this.nombre = nombre;    }

    public String getPais() {        return pais;    }
    public void setPais(String pais) {        this.pais = pais;    }

    public String getTelefono() {        return telefono;    }
    public void setTelefono(String telefono) {        this.telefono = telefono;    }
}
