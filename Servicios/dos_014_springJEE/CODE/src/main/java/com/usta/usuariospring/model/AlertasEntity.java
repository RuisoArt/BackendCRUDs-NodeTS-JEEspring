package com.usta.usuariospring.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "alertas")

public class AlertasEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_alerta")
    private Long codAlerta;

    @JoinColumn(name = "cod_usuario", referencedColumnName = "cod_usuario")
    @ManyToOne(fetch = FetchType.EAGER)
    private UsuarioEntity codUsuarioFK;

    @Column(name = "dias_alerta")
    private int diasAlerta;

    @Column(name = "meses_alerta")
    private int mesesAlerta;

    @Column(name = "titulo_alerta")
    private String tituloAlerta;

    @Column(name = "detalle_alerta")
    private String detalleAlerta;

    @Column(name = "estado_alerta")
    private int estadoAlerta;

    public AlertasEntity(){

    }

    public AlertasEntity(Long codAlerta, UsuarioEntity codUsuarioFK, int diasAlerta, int mesesAlerta,
                         String tituloAlerta, String detalleAlerta, int estadoAlerta) {
        this.codAlerta = codAlerta;
        this.codUsuarioFK = codUsuarioFK;
        this.diasAlerta = diasAlerta;
        this.mesesAlerta = mesesAlerta;
        this.tituloAlerta = tituloAlerta;
        this.detalleAlerta = detalleAlerta;
        this.estadoAlerta = estadoAlerta;
    }

    public Long getCodAlerta() {        return codAlerta;    }
    public void setCodAlerta(Long codAlerta) {        this.codAlerta = codAlerta;    }

    public UsuarioEntity getCodUsuarioFK() {        return codUsuarioFK;    }
    public void setCodUsuarioFK(UsuarioEntity codUsuarioFK) {        this.codUsuarioFK = codUsuarioFK;    }

    public int getDiasAlerta() {        return diasAlerta;    }
    public void setDiasAlerta(int diasAlerta) {        this.diasAlerta = diasAlerta;    }

    public int getMesesAlerta() {        return mesesAlerta;    }
    public void setMesesAlerta(int mesesAlerta) {        this.mesesAlerta = mesesAlerta;    }

    public String getTituloAlerta() {        return tituloAlerta;    }
    public void setTituloAlerta(String tituloAlerta) {        this.tituloAlerta = tituloAlerta;    }

    public String getDetalleAlerta() {        return detalleAlerta;    }
    public void setDetalleAlerta(String detalleAlerta) {        this.detalleAlerta = detalleAlerta;    }

    public int getEstadoAlerta() {        return estadoAlerta;    }
    public void setEstadoAlerta(int estadoAlerta) {        this.estadoAlerta = estadoAlerta;    }
}
