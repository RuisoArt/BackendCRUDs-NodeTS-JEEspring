package com.usta.biblioteca.repositorys;

import com.usta.biblioteca.entitys.autor.AutorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AutorRepo extends JpaRepository<AutorEntity, Long> {
    @Query("SELECT COUNT(au) FROM AutorEntity au")
    public Integer contarAutores();
}
