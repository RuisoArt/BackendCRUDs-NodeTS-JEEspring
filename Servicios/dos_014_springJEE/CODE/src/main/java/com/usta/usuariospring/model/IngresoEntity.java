package com.usta.usuariospring.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "ingresos")

public class IngresoEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "cod_ingreso")
    private Long codIngreso;

    @JoinColumn(name = "cod_usuario", referencedColumnName = "cod_usuario")
    @ManyToOne(fetch = FetchType.EAGER)
    private AccesoEntity codUsuarioFK;

    public IngresoEntity() {

    }

    public IngresoEntity(Long codIngreso, AccesoEntity codUsuarioFK) {
        this.codIngreso = codIngreso;
        this.codUsuarioFK = codUsuarioFK;
    }

    public Long getCodIngreso() {        return codIngreso;    }
    public void setCodIngreso(Long codIngreso) {        this.codIngreso = codIngreso;    }

    public AccesoEntity getCodUsuarioFK() {        return codUsuarioFK;    }
    public void setCodUsuarioFK(AccesoEntity codUsuarioFK) {        this.codUsuarioFK = codUsuarioFK;    }
}
