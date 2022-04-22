package com.usta.usuariospring.model;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "imagenes")

public class ImagenEntity implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column (name = "cod_imagen")
    private Long codImagen;

    @JoinColumn(name = "cod_usuario", referencedColumnName = "cod_usuario")
    @ManyToOne(fetch = FetchType.EAGER)
    private UsuarioEntity codUsuarioFK;

    @Column(name = "nombrepublico_imagen")
    private String nombrepublicoImagen;

    @Column(name = "nombreprivado_imagen")
    private String nombreprivadoImagen;

    @Column(name = "tipo_imagen")
    private String tipoImagen;

    @Column(name = "tamaño_imagen")
    private String tamañoImagen;

    @Column(name = "favorita_imagen")
    private int favoritaImagen;

    public ImagenEntity(){

    }

    public ImagenEntity(Long codImagen, UsuarioEntity codUsuarioFK, String nombrepublicoImagen,
                        String nombreprivadoImagen, String tipoImagen, String tamañoImagen, int favoritaImagen) {
        this.codImagen = codImagen;
        this.codUsuarioFK = codUsuarioFK;
        this.nombrepublicoImagen = nombrepublicoImagen;
        this.nombreprivadoImagen = nombreprivadoImagen;
        this.tipoImagen = tipoImagen;
        this.tamañoImagen = tamañoImagen;
        this.favoritaImagen = favoritaImagen;
    }

    public Long getCodImagen() {        return codImagen;    }
    public void setCodImagen(Long codImagen) {        this.codImagen = codImagen;    }

    public UsuarioEntity getCodUsuarioFK() {        return codUsuarioFK;    }
    public void setCodUsuarioFK(UsuarioEntity codUsuarioFK) {        this.codUsuarioFK = codUsuarioFK;    }

    public String getNombrepublicoImagen() {        return nombrepublicoImagen;    }
    public void setNombrepublicoImagen(String nombrepublicoImagen) {        this.nombrepublicoImagen = nombrepublicoImagen;    }

    public String getNombreprivadoImagen() {        return nombreprivadoImagen;    }
    public void setNombreprivadoImagen(String nombreprivadoImagen) {        this.nombreprivadoImagen = nombreprivadoImagen;    }

    public String getTipoImagen() {        return tipoImagen;    }
    public void setTipoImagen(String tipoImagen) {        this.tipoImagen = tipoImagen;    }

    public String getTamañoImagen() {        return tamañoImagen;    }
    public void setTamañoImagen(String tamañoImagen) {        this.tamañoImagen = tamañoImagen;    }

    public int getFavoritaImagen() {        return favoritaImagen;    }
    public void setFavoritaImagen(int favoritaImagen) {        this.favoritaImagen = favoritaImagen;    }
}
