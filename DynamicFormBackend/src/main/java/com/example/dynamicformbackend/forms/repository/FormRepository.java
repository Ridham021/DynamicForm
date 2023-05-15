package com.example.dynamicformbackend.forms.repository;

import com.example.dynamicformbackend.forms.model.Form;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FormRepository extends JpaRepository<Form,Integer> {

    public Form getFormByName(String name);
}
