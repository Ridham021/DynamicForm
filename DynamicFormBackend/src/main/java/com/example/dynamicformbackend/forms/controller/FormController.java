package com.example.dynamicformbackend.forms.controller;

import com.example.dynamicformbackend.forms.model.Form;
import com.example.dynamicformbackend.forms.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/form")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class FormController {

    @Autowired
    private FormService formService;

    @GetMapping("")
    public List<Form> getAllForms(){
        List<Form> f2 = formService.getAllForm();
        return formService.getAllForm();
    }

    @PostMapping("")
    public Form addForm(@RequestBody Form form){


           return formService.addForm(form);
    }

}
