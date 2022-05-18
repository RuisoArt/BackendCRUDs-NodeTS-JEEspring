package com.usta.modelotoken.service;

import com.usta.modelotoken.entity.ProductoEntity;
import com.usta.modelotoken.repository.ProductoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ProductoService {

    @Autowired
    private ProductoRepo productoRepo;

    //Metodo 1
    public List<ProductoEntity> dameProductos(){
        return productoRepo.findAll();
    }

    //Metodo 2
    public ProductoEntity creameProducto(ProductoEntity productoEntity){
        return productoRepo.save(productoEntity);
    }

    //Metodo 3
    public Optional<ProductoEntity> buscarID(Long id){
        return productoRepo.findById(id);
    }

    //Metodo 4
    public void elimarProducto(Long id){
        productoRepo.deleteById(id);
    }

    //Metodo 5
    public ProductoEntity actualizarProducto(ProductoEntity productoEntity){
        return productoRepo.save(productoEntity);
    }

    //Metodo 6
    public Integer enumerarProducto(){
        return productoRepo.contarProductos();
    }

}
