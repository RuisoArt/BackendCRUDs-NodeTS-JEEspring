package com.usta.modelotoken.repository;

import com.usta.modelotoken.model.FacturaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FacturaRepo extends JpaRepository<FacturaEntity, Long> {
    @Query("SELECT COUNT(fac) FROM FacturaEntity fac")
    public Integer contarFacturas();
}
