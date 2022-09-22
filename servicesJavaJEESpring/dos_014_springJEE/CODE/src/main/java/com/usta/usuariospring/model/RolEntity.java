package com.usta.usuariospring.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "roles")

public class RolEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_rol")
    private Long codRol;

    @Column(name = "nombre_rol")
    private String nombreRol;

    @Column(name = "estado_rol")
    private int estadoRol;

    public RolEntity() {

    }

    public RolEntity(Long codRol, String nombreRol, int estadoRol) {
        this.codRol = codRol;
        this.nombreRol = nombreRol;
        this.estadoRol = estadoRol;
    }

    public Long getCodRol() {        return codRol;    }
    public void setCodRol(Long codRol) {        this.codRol = codRol;    }

    public String getNombreRol() {        return nombreRol;    }
    public void setNombreRol(String nombreRol) {        this.nombreRol = nombreRol;    }

    public int getEstadoRol() {        return estadoRol;    }
    public void setEstadoRol(int estadoRol) {        this.estadoRol = estadoRol;    }
}
