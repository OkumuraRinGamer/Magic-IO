package com.magicio.domain.camisasMasculinas;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CamisasMasculinasRepository extends JpaRepository<CamisasMasculinas, Long> {
}
