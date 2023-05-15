package com.example.dynamicformbackend.forms.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;


@Entity
@Table(name="field_type")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class FieldType {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "type")
    private String type;

    @OneToMany(mappedBy = "fieldType")
    @JsonIgnore
    private List<Field> fields;



}
