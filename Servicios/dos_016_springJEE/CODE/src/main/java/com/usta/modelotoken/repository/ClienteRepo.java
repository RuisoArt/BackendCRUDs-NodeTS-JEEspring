package com.usta.modelotoken.repository;

import com.usta.modelotoken.entity.ClienteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ClienteRepo extends JpaRepository<ClienteEntity, Long> {
    @Query("SELECT COUNT(cli) FROM ClienteEntity cli")
    public Integer contarClientes();
}
