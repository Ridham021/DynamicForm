package com.example.dynamicformbackend.forms.service.impl;

import com.example.dynamicformbackend.forms.model.Field;
import com.example.dynamicformbackend.forms.repository.FieldRepository;
import com.example.dynamicformbackend.forms.service.FieldService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FieldServiceImpl implements FieldService {

    @Autowired
    private FieldRepository fieldRepository;
    @Override
    public List<Field> getAllFields() {
        return fieldRepository.findAll();
    }
}
