package com.usta.modelotoken.repository;

import com.usta.modelotoken.model.DetallePedidoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DetallePedidoRepo extends JpaRepository<DetallePedidoEntity, Long> {
    @Query("SELECT COUNT(delped) FROM DetallePedidoEntity delped")
    public Integer contarDetallesXPedido();
}
