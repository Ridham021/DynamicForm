package com.example.dynamicformbackend.forms.controller;

import com.example.dynamicformbackend.forms.model.Field;
import com.example.dynamicformbackend.forms.service.FieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/fields")
public class FieldController {

    @Autowired
    private FieldService fieldService;

    @GetMapping("")
    public List<Field> getAllFields(){
        return fieldService.getAllFields();
    }
}
