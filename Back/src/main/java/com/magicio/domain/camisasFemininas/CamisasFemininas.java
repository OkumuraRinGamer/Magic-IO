package com.magicio.domain.camisasFemininas;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Entity
@Table(name = "camisas_femininas")
@Getter
@Setter
public class CamisasFemininas implements Serializable {
    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    long id;

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
    @Size(max = 1)
    @Column(name = "tamanho")
    private String tamanho;

    @NotEmpty
    @NotBlank
    @Size(max = 120)
    @Column(name = "preco")
    private String preco;
}
