package com.usta.biblioteca.services;

import com.usta.biblioteca.entitys.detalle_prestamos.DetallePrestamosEntity;
import com.usta.biblioteca.repositorys.DetallePrestamosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DetallePrestamosService {
    @Autowired
    private DetallePrestamosRepo detallePrestamosRepo;

    public List<DetallePrestamosEntity> dameDetallePrestamos(){
        return detallePrestamosRepo.findAll();
    }
    public Optional<DetallePrestamosEntity> buscarDetallePrestamos(Long id){
        return detallePrestamosRepo.findById(id);
    }
    public Integer enumerarDetallePrestamos(){
        return detallePrestamosRepo.contarDetallePrestamos();
    }

    public DetallePrestamosEntity creameDePres(DetallePrestamosEntity detallePrestamosEntity){
        return detallePrestamosRepo.save(detallePrestamosEntity);
    }
    public DetallePrestamosEntity actualizarDetallePrestamos(DetallePrestamosEntity detallePrestamosEntity){
        return detallePrestamosRepo.save(detallePrestamosEntity);
    }
    public void eliminarDetallePrestamos(Long id){
        detallePrestamosRepo.deleteById(id);
    }

}
