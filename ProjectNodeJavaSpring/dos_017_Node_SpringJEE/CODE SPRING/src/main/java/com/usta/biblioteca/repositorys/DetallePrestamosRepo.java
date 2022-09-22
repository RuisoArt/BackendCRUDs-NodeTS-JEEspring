package com.usta.biblioteca.repositorys;

import com.usta.biblioteca.entitys.detalle_prestamos.DetallePrestamosEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DetallePrestamosRepo extends JpaRepository<DetallePrestamosEntity, Long> {
    @Query("SELECT COUNT(depres) FROM DetallePrestamosEntity depres")
    public Integer contarDetallePrestamos();
}
