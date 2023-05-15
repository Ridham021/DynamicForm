package com.example.dynamicformbackend.forms.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "field")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Field {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "field_key")
    private String fieldKey;

    @Column(name="label")
    private String label;

    @Column(name="options")
    private String options;

    @Column(name="validations")
    private String validations;

    @Column(name = "field_order")
    private int field_order;

    @ManyToOne
    @JoinColumn(name="form_id")
    @JsonIgnore
    private Form form;

    @ManyToOne
    @JoinColumn(name= "field_type_id")
//    @JsonIgnore
    private FieldType fieldType;




}
