package com.example.dynamicformbackend.forms.controller;

import com.example.dynamicformbackend.forms.model.Form;
import com.example.dynamicformbackend.forms.service.FormService;
import com.example.dynamicformbackend.utils.responsebody.ResponseBodyObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/form")
@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
public class FormController {

    @Autowired
    private FormService formService;

    @GetMapping("")
    public ResponseEntity<ResponseBodyObj<List<Form>>> getAllForms(){

        ResponseBodyObj <List<Form>> forms = new ResponseBodyObj<>(HttpStatus.OK,"forms fetched successfully",formService.getAllForm());
        return ResponseEntity.ok(forms);
    }

    @GetMapping("/{formId}")
    public ResponseEntity<ResponseBodyObj<Form>> getFormById(@PathVariable int formId){
        ResponseBodyObj<Form> f = new ResponseBodyObj<>(HttpStatus.OK,"form with id "+formId+" fetched successfully",formService.getFormById(formId));
        return ResponseEntity.ok(f);
    }



    @PostMapping("")
    public ResponseEntity<ResponseBodyObj<Form>> addForm(@RequestBody Form form){

        ResponseBodyObj<Form> res =new ResponseBodyObj<>(HttpStatus.OK,"form created successfully",formService.addForm(form));

           return new ResponseEntity<>(res,HttpStatus.OK);
    }

}
