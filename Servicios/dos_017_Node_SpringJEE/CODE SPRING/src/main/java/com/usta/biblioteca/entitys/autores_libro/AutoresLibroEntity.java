package com.usta.biblioteca.entitys.autores_libro;

import com.usta.biblioteca.entitys.libro.LibroEntity;
import com.usta.biblioteca.entitys.autor.AutorEntity;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "autores_libro")

public class AutoresLibroEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_autor_libro")
    private long idAutorLibro;

    @JoinColumn(name = "id_autor")
    @ManyToOne(fetch = FetchType.EAGER)
    private AutorEntity idAutorFK;

    @JoinColumn(name = "id_libro")
    @ManyToOne(fetch = FetchType.EAGER)
    private LibroEntity idLibroFK;

    public AutoresLibroEntity(){

    }
    public AutoresLibroEntity(long idAutorLibro, AutorEntity idAutorFK, LibroEntity idLibroFK) {
        this.idAutorLibro = idAutorLibro;
        this.idAutorFK = idAutorFK;
        this.idLibroFK = idLibroFK;
    }

    public long getIdAutorLibro() {        return idAutorLibro;    }
    public void setIdAutorLibro(long idAutorLibro) {        this.idAutorLibro = idAutorLibro;    }

    public AutorEntity getIdAutorFK() {        return idAutorFK;    }
    public void setIdAutorFK(AutorEntity idAutorFK) {        this.idAutorFK = idAutorFK;    }

    public LibroEntity getIdLibroFK() {        return idLibroFK;    }
    public void setIdLibroFK(LibroEntity idLibroFK) {        this.idLibroFK = idLibroFK;    }
}
