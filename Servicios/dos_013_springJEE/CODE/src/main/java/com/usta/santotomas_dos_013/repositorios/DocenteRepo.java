package com.usta.santotomas_dos_013.repositorios;

import com.usta.santotomas_dos_013.model.DocenteEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface DocenteRepo extends JpaRepository<DocenteEntity, Long> {
    @Query("SELECT COUNT(doc) FROM DocenteEntity doc")
    public Integer contarDocentes();
}
