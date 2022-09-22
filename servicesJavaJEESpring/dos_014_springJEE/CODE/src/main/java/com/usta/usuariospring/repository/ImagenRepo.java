package com.usta.usuariospring.repository;

import com.usta.usuariospring.model.ImagenEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ImagenRepo extends JpaRepository <ImagenEntity , Long> {
    @Query("SELECT COUNT(ima) FROM ImagenEntity ima")
    public Integer contarImagenes();
}
