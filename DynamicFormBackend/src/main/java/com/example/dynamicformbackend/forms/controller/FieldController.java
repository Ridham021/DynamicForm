package com.example.dynamicformbackend.forms.controller;

import com.example.dynamicformbackend.forms.model.Field;
import com.example.dynamicformbackend.forms.service.FieldService;
import com.example.dynamicformbackend.utils.responsebody.ResponseBodyObj;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<ResponseBodyObj<List<Field>>> getAllFields(){

        ResponseBodyObj<List<Field>> res = new ResponseBodyObj<>(HttpStatus.OK,"data fetched successfully",fieldService.getAllFields());

        return ResponseEntity.ok(res);
    }
}
