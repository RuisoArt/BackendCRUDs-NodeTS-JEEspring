package com.usta.santotomas_dos_013.repositorios;

import com.usta.santotomas_dos_013.model.AsignaturaEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AsignaturaRepo extends JpaRepository<AsignaturaEntity, Long> {
    @Query("SELECT COUNT(asig) FROM AsignaturaEntity asig")
    public Integer contarAsignaturas();

}
