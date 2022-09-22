package com.usta.biblioteca.repositorys;

import com.usta.biblioteca.entitys.autores_libro.AutoresLibroEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AutoresLibroRepo extends JpaRepository<AutoresLibroEntity, Long> {
    @Query("SELECT COUNT(aulib) FROM AutoresLibroEntity aulib")
    public Integer contarAutoresLibros();
}
