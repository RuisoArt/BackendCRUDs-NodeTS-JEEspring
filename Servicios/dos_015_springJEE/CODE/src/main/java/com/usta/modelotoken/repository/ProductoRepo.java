package com.usta.modelotoken.repository;

import com.usta.modelotoken.model.ProductoEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductoRepo extends JpaRepository<ProductoEntity, Long> {
    @Query("SELECT COUNT(pro) FROM ProductoEntity pro")
    public Integer contarProductos();
}
