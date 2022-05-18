package com.usta.modelotoken.entity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "usuario")
public class UsuarioEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_usuario")
    private long idUsuario;

    @Column(name = "username")
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "estado")
    private Boolean estado;


    public UsuarioEntity(){}
    public UsuarioEntity(long idUsuario, String username, String password, Boolean estado) {
        this.idUsuario = idUsuario;
        this.username = username;
        this.password = password;
        this.estado = estado;
    }

    public long getIdUsuario() {        return idUsuario;}
    public void setIdUsuario(long idUsuario) {        this.idUsuario = idUsuario;    }

    public String getUsername() {        return username;    }
    public void setUsername(String username) {        this.username = username;    }

    public String getPassword() {        return password;    }
    public void setPassword(String password) {        this.password = password;    }

    public Boolean getEstado() {        return estado;    }
    public void setEstado(Boolean estado) {        this.estado = estado;    }
}
