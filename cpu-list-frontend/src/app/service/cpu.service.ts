import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Cpu } from '../cpu';
import { Observable } from 'rxjs';
import { Socket } from '../socket';


@Injectable()
export class CpuService {

  private cpusUrl: string;
  private socketUrl: string;

  constructor(private http: HttpClient) {
    this.cpusUrl = 'http://localhost:8080/cpus';
    this.socketUrl = 'http://localhost:8080/sockets';
  }

  public findAll(): Observable<Cpu[]>
  {
    return this.http.get<Cpu[]>(this.cpusUrl);
  }

  public findAllSockets(): Observable<Socket[]>
  {
    return this.http.get<Socket[]>(this.socketUrl);
  }

  public getCpu(id: number): Observable<Cpu>
  {
    return this.http.get<Cpu>(`${this.cpusUrl}/${id}`);
  }

  public updateCpu(cpu: Cpu)
  {

    const option = {
      headers: new HttpHeaders({"Content-Type": "application/json"})
    };

    const url = `${this.cpusUrl}/${cpu.id}/edit`;
    return this.http.put(url, cpu, option).toPromise();
  }

}
