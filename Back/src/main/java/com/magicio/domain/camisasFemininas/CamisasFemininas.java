package com.magicio.domain.camisasFemininas;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.magicio.core.entity.AbstractCamisa;

@Entity
@Table(name = "camisas_femininas")
@Getter
@Setter
public class CamisasFemininas extends AbstractCamisa {
    private static final long serialVersionUID = 1L;
}