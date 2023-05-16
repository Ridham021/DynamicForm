package com.example.dynamicformbackend.forms.service.impl;

import com.example.dynamicformbackend.forms.model.Form;
import com.example.dynamicformbackend.forms.repository.FormRepository;
import com.example.dynamicformbackend.forms.service.FormService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;


@Service
public class FormServiceImpl implements FormService {

    @Autowired
    FormRepository formRepository;
    @Override
    public List<Form> getAllForm() {
        List<Form> forms =  formRepository.findAll();
        if(!forms.isEmpty()){
            return forms;
        }
        else {
            throw new NoSuchElementException("No forms present");
        }
    }

    @Override
    public Form getFormById(int formId) {

        Optional<Form> f = formRepository.findById(formId);
        if(f.isPresent()){
            return f.get();
        }
        else {
            throw new NoSuchElementException("form with id "+formId+" not present");
        }
    }


    @Override
    public Form addForm(Form form) {

            Form f=formRepository.save(form);

            if(f != null){
                return formRepository.getFormByName(f.getName());
            }
            else {
                throw new RuntimeException("some error has occured");
            }





    }

}
