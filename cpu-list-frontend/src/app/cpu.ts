import { Socket } from "./socket";

export class Cpu {
    id: number;
    brand: string;
    model: string;
    socket: Socket;
    clockspeed: number;
    numberOfCores: number;
    numberOfThreads: number;
    tdp: number;
    price: number;
}
