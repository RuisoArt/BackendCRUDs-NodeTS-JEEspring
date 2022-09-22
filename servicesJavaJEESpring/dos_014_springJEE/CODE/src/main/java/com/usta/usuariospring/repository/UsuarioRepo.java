package com.usta.usuariospring.repository;

import com.usta.usuariospring.model.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UsuarioRepo extends JpaRepository<UsuarioEntity, Long> {
    @Query("SELECT COUNT(usu) FROM UsuarioEntity usu")
    public Integer contarUsuarios();
}
