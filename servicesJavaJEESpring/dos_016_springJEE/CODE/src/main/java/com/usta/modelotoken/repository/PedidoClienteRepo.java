package com.usta.modelotoken.repository;

import com.usta.modelotoken.entity.PedidoClienteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PedidoClienteRepo extends JpaRepository<PedidoClienteEntity, Long> {
    @Query("SELECT COUNT(pedcli) FROM PedidoClienteEntity pedcli")
    public Integer contarPedidosXCliente();
}
