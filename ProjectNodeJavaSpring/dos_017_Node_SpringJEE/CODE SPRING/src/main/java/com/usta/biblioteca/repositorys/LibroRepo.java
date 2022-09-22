package com.usta.biblioteca.repositorys;

import com.usta.biblioteca.entitys.libro.LibroEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface LibroRepo extends JpaRepository<LibroEntity, Long> {
    @Query("SELECT COUNT(li) FROM LibroEntity li")
    public Integer contarLibros();

    @Query("SELECT li.idLibro, li.titulo, li.fechaPublicacion, li.codigo, li.isbn, li.idEditorialFK.nombre, de.idDetallePrestamos, de.idPrestamoFK.descripcion " +
            "FROM LibroEntity li " +
            "INNER JOIN DetallePrestamosEntity de " +
            "ON li.idLibro = de.idLibroFK.idLibro " +
            "WHERE de.idDetallePrestamos = ?1")
    public String mostrarLibrosXPrestamo(Long id);
}
