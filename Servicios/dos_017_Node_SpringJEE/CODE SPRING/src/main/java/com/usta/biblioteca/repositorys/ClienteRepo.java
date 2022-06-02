package com.usta.biblioteca.repositorys;

import com.usta.biblioteca.entitys.cliente.ClienteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ClienteRepo extends JpaRepository<ClienteEntity, Long> {
    @Query("SELECT COUNT(cli) FROM ClienteEntity cli")
    public Integer contarClientes();

    @Query("SELECT cli.idCliente, cli.identificacion, cli.nombre, cli.apellido, cli.direccion, cli.telefono, pres.idPrestamo, pres.descripcion " +
            "FROM ClienteEntity cli " +
            "INNER JOIN PrestamosEntity pres " +
            "ON cli.idCliente = pres.idClienteFK.idCliente " +
            "WHERE pres.idPrestamo = ?1")
    public String mostrarClientesXPrestamo(Long id);
}
