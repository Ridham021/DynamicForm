package com.example.dynamicformbackend.forms.service;

import com.example.dynamicformbackend.forms.model.Form;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface FormService {

    public List<Form> getAllForm();

    public Form addForm(Form form);


}
