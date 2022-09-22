package com.usta.modelotoken.repository;

import com.usta.modelotoken.entity.PedidoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PedidoRepo extends JpaRepository<PedidoEntity, Long> {
    @Query("SELECT COUNT(ped) FROM PedidoEntity ped")
    public Integer contarPedidos();
}
