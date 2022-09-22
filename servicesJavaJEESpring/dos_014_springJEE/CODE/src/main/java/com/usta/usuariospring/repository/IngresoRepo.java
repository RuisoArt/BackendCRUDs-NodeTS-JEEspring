package com.usta.usuariospring.repository;

import com.usta.usuariospring.model.IngresoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface IngresoRepo extends JpaRepository <IngresoEntity, Long> {
    @Query("SELECT COUNT(ingr) FROM IngresoEntity ingr")
    public Integer contarIngresos();
}
