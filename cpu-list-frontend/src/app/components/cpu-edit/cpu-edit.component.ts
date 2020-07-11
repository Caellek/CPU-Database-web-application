import { Component, OnInit} from '@angular/core';
import { Cpu } from '../../cpu';
import { CpuService } from '../../service/cpu.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Socket } from '../../socket';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-cpu-edit',
  templateUrl: './cpu-edit.component.html',
  styleUrls: ['./cpu-edit.component.css']
})
export class CpuEditComponent implements OnInit {

  cpu: Cpu;
  sockets: Socket[];
  id = +this.route.snapshot.paramMap.get('id');

  constructor(
    private cpuService: CpuService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCpu();
    this.getSockets();
  }

  getCpu(): void
  {
    this.cpuService.getCpu(this.id).subscribe( data =>
      this.cpu = data );
  }

  getSockets(): void
  {
    this.cpuService.findAllSockets().subscribe( data =>
      this.sockets = data);
  }

  updateCpu(): void
  {
    console.log(this.cpu);
    this.cpuService.updateCpu(this.cpu);

    this.router.navigate([`/cpus/${this.id}`]);
    
  }

}
