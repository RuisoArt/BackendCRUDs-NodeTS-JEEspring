package com.usta.santotomas_dos_013.repositorios;

import com.usta.santotomas_dos_013.model.UniversidadEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface UniversidadRepo extends JpaRepository <UniversidadEntity, Long> {
    /*
    SELECT COUNT(uni)
    FROM universidad uni;
     */
    @Query("SELECT COUNT(uni) FROM UniversidadEntity uni")
    public Integer contarUniversidad();
}
