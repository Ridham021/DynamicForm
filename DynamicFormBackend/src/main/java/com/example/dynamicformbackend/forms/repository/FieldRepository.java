package com.example.dynamicformbackend.forms.repository;

import com.example.dynamicformbackend.forms.model.Field;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FieldRepository extends JpaRepository<Field, Integer> {


}
