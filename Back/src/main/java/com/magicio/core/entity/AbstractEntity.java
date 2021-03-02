package com.magicio.core.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.persistence.SequenceGenerator;

import lombok.Getter;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
public class AbstractEntity implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "entityTable_id_seq")
    @SequenceGenerator(name = "entityTable_id_seq", sequenceName = "entityTable_id_seq", allocationSize = 1)
    @Column(name = "id", nullable = false)
    long id;
}
