package com.usta.biblioteca.repositorys;

import com.usta.biblioteca.entitys.editorial.EditorialEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EditorialRepo extends JpaRepository<EditorialEntity, Long> {
    @Query("SELECT COUNT(edi) FROM EditorialEntity edi")
    public Integer contarEditoriales();

    @Query("SELECT ed.idEditorial, ed.nombre, ed.pais, ed.telefono, li.idLibro, li.titulo " +
            "FROM EditorialEntity ed " +
            "INNER JOIN LibroEntity li " +
            "ON ed.idEditorial = li.idEditorialFK.idEditorial " +
            "WHERE li.idLibro = ?1")
    public String mostrarEditorialXLibro(Long id);
}
