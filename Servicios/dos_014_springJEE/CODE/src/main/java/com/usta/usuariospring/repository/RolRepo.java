package com.usta.usuariospring.repository;

import com.usta.usuariospring.model.RolEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RolRepo extends JpaRepository <RolEntity, Long> {
    @Query("SELECT COUNT(rol) FROM RolEntity rol")
    public Integer contarRoles();
}
