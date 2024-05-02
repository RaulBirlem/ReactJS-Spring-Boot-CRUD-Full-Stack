package com.example.backend.controller;

import com.example.backend.model.Funcionario;
import com.example.backend.repository.FuncionarioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/v1/")
public class FuncionarioController {

    @Autowired
    private FuncionarioRepository funcionarioRepository;

    //buscar funcionarios

    @GetMapping("/funcionarios")
    public List<Funcionario> getAllFuncionarios() {
        return funcionarioRepository.findAll();
    }

}
