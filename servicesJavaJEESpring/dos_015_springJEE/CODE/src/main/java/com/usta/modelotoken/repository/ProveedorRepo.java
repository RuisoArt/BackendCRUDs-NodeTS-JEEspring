package com.usta.modelotoken.repository;

import com.usta.modelotoken.model.ProveedorEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProveedorRepo extends JpaRepository<ProveedorEntity, Long> {
    @Query("SELECT COUNT(prov) FROM ProveedorEntity prov")
    public Integer contarProveedores();
}
