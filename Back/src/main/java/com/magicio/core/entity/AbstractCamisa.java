package com.magicio.core.entity;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
public class AbstractCamisa extends AbstractEntity {
    private static final long serialVersionUID = 1L;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "marca")
    private String marca;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "cor")
    private String cor;

    @NotEmpty
    @NotBlank
    @Size(max = 3)
    @Column(name = "tamanho")
    private String tamanho;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "preco")
    private String preco;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "urlImage")
    private String urlImage;
}
