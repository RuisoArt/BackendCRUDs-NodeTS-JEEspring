package com.usta.biblioteca.entitys.libro;

import com.usta.biblioteca.entitys.editorial.EditorialEntity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Table(name = "libros")

public class LibroEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_libro")
    private long idLibro;

    @Column(name = "titulo")
    private String titulo;

    @Column(name = "fecha_publicacion")
    private Date fechaPublicacion;

    @Column(name = "codigo")
    private Integer codigo;

    @Column(name="isbn")
    private Character isbn;

    @JoinColumn(name = "id_editorial")
    @ManyToOne(fetch = FetchType.EAGER)
    private EditorialEntity idEditorialFK;

    public LibroEntity(){

    }
    public LibroEntity(long idLibro, String titulo, Date fechaPublicacion, Integer codigo, Character isbn, EditorialEntity idEditorialFK) {
        this.idLibro = idLibro;
        this.titulo = titulo;
        this.fechaPublicacion = fechaPublicacion;
        this.codigo = codigo;
        this.isbn = isbn;
        this.idEditorialFK = idEditorialFK;
    }

    public long getIdLibro() {        return idLibro;    }
    public void setIdLibro(long idLibro) {        this.idLibro = idLibro;    }

    public String getTitulo() {        return titulo;    }
    public void setTitulo(String titulo) {        this.titulo = titulo;    }

    public Date getFechaPublicacion() {        return fechaPublicacion;    }
    public void setFechaPublicacion(Date fechaPublicacion) {        this.fechaPublicacion = fechaPublicacion;    }

    public Integer getCodigo() {        return codigo;    }
    public void setCodigo(Integer codigo) {        this.codigo = codigo;    }

    public Character getIsbn() {        return isbn;    }
    public void setIsbn(Character isbn) {        this.isbn = isbn;    }

    public EditorialEntity getIdEditorialFK() {        return idEditorialFK;    }
    public void setIdEditorialFK(EditorialEntity idEditorialFK) {        this.idEditorialFK = idEditorialFK;    }
}
