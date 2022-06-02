package com.usta.biblioteca.repositorys;

import com.usta.biblioteca.entitys.prestamos.PrestamosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PrestamosRepo extends JpaRepository<PrestamosEntity, Long> {
    @Query("SELECT COUNT(pres) FROM PrestamosEntity pres")
    public Integer contarPrestamos();
}
