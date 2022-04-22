package com.usta.usuariospring.repository;

import com.usta.usuariospring.model.AccesoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AccesoRepo extends JpaRepository <AccesoEntity, Long> {
    @Query("SELECT COUNT(acc) FROM AccesoEntity acc")
    public Integer contarAccesos();
}
