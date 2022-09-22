package com.usta.usuariospring.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "accesos")

public class AccesoEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_usuario")
    private Long codUsuario;

    /*
    @JoinColumn(name = "cod_usuario", referencedColumnName = "cod_usuario")
    @ManyToOne(fetch = FetchType.EAGER)
    private UsuarioEntity codUsuarioFK;
     */

    @Column(name = "correo_acceso")
    private String correoAcceso;

    @Column(name = "clave_acceso")
    private String claveAcceso;

    public AccesoEntity(){

    }

    public AccesoEntity(Long codUsuario, String correoAcceso, String claveAcceso) {
        this.codUsuario = codUsuario;
        this.correoAcceso = correoAcceso;
        this.claveAcceso = claveAcceso;
    }

    public Long getCodUsuario() {        return codUsuario;    }
    public void setCodUsuario(Long codUsuario) {        this.codUsuario = codUsuario;    }

    public String getCorreoAcceso() {        return correoAcceso;    }
    public void setCorreoAcceso(String correoAcceso) {        this.correoAcceso = correoAcceso;    }

    public String getClaveAcceso() {        return claveAcceso;    }
    public void setClaveAcceso(String claveAcceso) {        this.claveAcceso = claveAcceso;    }
}
