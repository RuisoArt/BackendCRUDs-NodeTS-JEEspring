package com.usta.modelotoken.repository;

import com.usta.modelotoken.entity.UsuarioEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface Usuariorepo extends JpaRepository<UsuarioEntity, Long> {
    @Query("SELECT u FROM UsuarioEntity AS u WHERE u.username=?1")
    public UsuarioEntity findByUsername(String username);
}
