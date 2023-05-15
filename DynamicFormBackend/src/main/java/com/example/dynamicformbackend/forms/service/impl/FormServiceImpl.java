package com.example.dynamicformbackend.forms.service.impl;

import com.example.dynamicformbackend.forms.model.Form;
import com.example.dynamicformbackend.forms.repository.FormRepository;
import com.example.dynamicformbackend.forms.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class FormServiceImpl implements FormService {

    @Autowired
    FormRepository formRepository;
    @Override
    public List<Form> getAllForm() {
        return formRepository.findAll();
    }

    @Override
    public Form addForm(Form form) {
        Form f=formRepository.save(form);
        return formRepository.getFormByName(f.getName());
    }

}
