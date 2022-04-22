package com.usta.santotomas_dos_013.repositorios;

import com.usta.santotomas_dos_013.model.SeccionalEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface SeccionalRepo extends JpaRepository<SeccionalEntity , Long> {

    @Query("SELECT COUNT(sec) FROM SeccionalEntity sec")
    public Integer contarSeccionales();
}
