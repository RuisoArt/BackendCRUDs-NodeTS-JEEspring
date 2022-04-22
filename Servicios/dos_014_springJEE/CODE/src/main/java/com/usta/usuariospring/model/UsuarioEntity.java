package com.usta.usuariospring.model;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "usuarios")

public class UsuarioEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_usuario")
    private Long codUsuario;

    @JoinColumn(name = "cod_rol", referencedColumnName = "cod_rol")
    @ManyToOne(fetch = FetchType.EAGER)
    private RolEntity codRolFK;

    @Column(name = "documento_usuario")
    private String documentoUsuario;

    @Column(name = "tipodocumento_usuario")
    private int tipodocumentoUsuario;

    @Column(name = "nombres_usuario")
    private String nombresUsuario;

    @Column(name = "apellidos_usuario")
    private String apellidosUsuario;

    @Column(name = "telefono_usuario")
    private String telefonoUsuario;

    @Column(name = "estado_usuario")
    private int estadoUsuario;

    public UsuarioEntity(){

    }

    public UsuarioEntity(Long codUsuario, RolEntity codRolFK, String documentoUsuario, int tipodocumentoUsuario,
                         String nombresUsuario, String apellidosUsuario, String telefonoUsuario, int estadoUsuario) {
        this.codUsuario = codUsuario;
        this.codRolFK = codRolFK;
        this.documentoUsuario = documentoUsuario;
        this.tipodocumentoUsuario = tipodocumentoUsuario;
        this.nombresUsuario = nombresUsuario;
        this.apellidosUsuario = apellidosUsuario;
        this.telefonoUsuario = telefonoUsuario;
        this.estadoUsuario = estadoUsuario;
    }

    public Long getCodUsuario() {        return codUsuario;    }
    public void setCodUsuario(Long codUsuario) {        this.codUsuario = codUsuario;    }

    public RolEntity getCodRolFK() {        return codRolFK;    }
    public void setCodRolFK(RolEntity codRolFK) {        this.codRolFK = codRolFK;    }

    public String getDocumentoUsuario() {        return documentoUsuario;    }
    public void setDocumentoUsuario(String documentoUsuario) {        this.documentoUsuario = documentoUsuario;    }

    public int getTipodocumentoUsuario() {        return tipodocumentoUsuario;    }
    public void setTipodocumentoUsuario(int tipodocumentoUsuario) {        this.tipodocumentoUsuario = tipodocumentoUsuario;    }

    public String getNombresUsuario() {        return nombresUsuario;    }
    public void setNombresUsuario(String nombresUsuario) {        this.nombresUsuario = nombresUsuario;    }

    public String getApellidosUsuario() {        return apellidosUsuario;    }
    public void setApellidosUsuario(String apellidosUsuario) {        this.apellidosUsuario = apellidosUsuario;    }

    public String getTelefonoUsuario() {        return telefonoUsuario;    }
    public void setTelefonoUsuario(String telefonoUsuario) {        this.telefonoUsuario = telefonoUsuario;    }

    public int getEstadoUsuario() {        return estadoUsuario;    }
    public void setEstadoUsuario(int estadoUsuario) {        this.estadoUsuario = estadoUsuario;    }
}
