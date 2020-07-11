import { Component, OnInit } from '@angular/core';
import { Cpu } from '../../cpu';
import { CpuService } from '../../service/cpu.service';

@Component({
  selector: 'app-cpu-list',
  templateUrl: './cpu-list.component.html',
  styleUrls: ['./cpu-list.component.css']
})
export class CpuListComponent implements OnInit {

  cpus: Cpu[];

  constructor(private cpuService: CpuService) { }

  ngOnInit(){
    this.cpuService.findAll().subscribe(data => {
        this.cpus = data;
      });
  }

}
