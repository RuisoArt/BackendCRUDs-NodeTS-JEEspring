package com.usta.usuariospring.repository;

import com.usta.usuariospring.model.AlertasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AlertasRepo extends JpaRepository<AlertasEntity, Long> {
    @Query("SELECT COUNT(ale) FROM AlertasEntity ale")
    public Integer contarAlertas();
}
