package webapp;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CpuController {


    private final CpuRepository cpuRepository;
    private final SocketRepository socketRepository;

    public CpuController(CpuRepository cpuRepository, SocketRepository socketRepository) {
        this.cpuRepository = cpuRepository;
        this.socketRepository = socketRepository;
    }

    @GetMapping("/cpus")
    public List<Cpu> getCpu()
    {
        return (List<Cpu>) cpuRepository.findAll();
    }

    @GetMapping("/sockets")
    public List<Socket> getSocket(){
        return (List<Socket>) socketRepository.findAll();
    }

    @GetMapping("/cpus/{id}")
    public ResponseEntity<Cpu> getCpuById(@PathVariable("id") long id)
    {
        Optional<Cpu> cpuData = cpuRepository.findById(id);

        if(cpuData.isPresent())
        {
            return new ResponseEntity<>(cpuData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/cpus/{id}/edit")
    public ResponseEntity<Cpu> updateCpu(@PathVariable("id") long id, @RequestBody Cpu cpu)
    {
        Optional<Cpu> cpuData = cpuRepository.findById(id);

        if(cpuData.isPresent())
        {
            Cpu _cpu = cpuData.get();

            _cpu.setBrand(cpu.getBrand());
            _cpu.setModel(cpu.getModel());
            _cpu.setSocket(cpu.getSocket());
            _cpu.setClockspeed(cpu.getClockspeed());
            _cpu.setNumberOfCores(cpu.getNumberOfCores());
            _cpu.setNumberOfThreads(cpu.getNumberOfThreads());
            _cpu.setTdp(cpu.getTdp());
            _cpu.setPrice(cpu.getPrice());

            return new ResponseEntity<>(cpuRepository.save(_cpu), HttpStatus.OK);
        } else
        {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
