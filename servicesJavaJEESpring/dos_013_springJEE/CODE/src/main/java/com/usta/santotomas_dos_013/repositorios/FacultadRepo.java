package com.usta.santotomas_dos_013.repositorios;

import com.usta.santotomas_dos_013.model.FacultadEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface FacultadRepo extends JpaRepository<FacultadEntity, Long> {
    @Query("SELECT COUNT(fac) FROM FacultadEntity fac")
    public Integer contarFacultades();
}
