package com.usta.modelotoken.rest;

import com.usta.modelotoken.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/usuario/")
public class UsuarioRest {
    @Autowired
    private UserService usuarioService;
}
