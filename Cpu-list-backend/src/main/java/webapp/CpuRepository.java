package webapp;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CpuRepository extends CrudRepository<Cpu, Long> {
}
