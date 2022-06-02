package com.usta.crudspring.repositorios;

import com.usta.crudspring.model.DocenteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DocenteRepositorio extends JpaRepository <DocenteEntity , Long> {

}
