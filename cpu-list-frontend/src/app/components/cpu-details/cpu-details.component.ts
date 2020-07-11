import { Component, OnInit } from '@angular/core';
import { CpuService } from '../../service/cpu.service';
import { Cpu } from '../../cpu';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cpu-details',
  templateUrl: './cpu-details.component.html',
  styleUrls: ['./cpu-details.component.css']
})
export class CpuDetailsComponent implements OnInit {

  cpu: Cpu;


  constructor(
    private cpuService: CpuService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void{
    this.getCpu();
  }

  getCpu(): void
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.cpuService.getCpu(id).subscribe( data => this.cpu = data);
  }
}
