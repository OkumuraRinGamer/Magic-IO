package com.magicio.domain.camisasMasculinas;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.Entity;
import javax.persistence.Table;
import com.magicio.core.entity.AbstractCamisa;

@Entity
@Table(name = "camisas_masculinas")
@Getter
@Setter
public class CamisasMasculinas extends AbstractCamisa {
    private static final long serialVersionUID = 1L;
}