package webapp;

import javax.persistence.*;

@Entity
public class Cpu {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String brand;
    private String model;

    @ManyToOne
    private Socket socket;
    private double clockspeed;
    private int numberOfCores;
    private int numberOfThreads;
    private int tdp;
    private double price;

    public Cpu(){}

    public Cpu(String brand, String model, Socket socket, double clockspeed, int numberOfCores, int numberOfThreads, int tdp, double price) {
        this.brand = brand;
        this.model = model;
        this.socket = socket;
        this.clockspeed = clockspeed;
        this.numberOfCores = numberOfCores;
        this.numberOfThreads = numberOfThreads;
        this.tdp = tdp;
        this.price = price;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Socket getSocket() {
        return socket;
    }

    public void setSocket(Socket socket) {
        this.socket = socket;
    }

    public double getClockspeed() {
        return clockspeed;
    }

    public void setClockspeed(double clockspeed) {
        this.clockspeed = clockspeed;
    }

    public int getNumberOfCores() {
        return numberOfCores;
    }

    public void setNumberOfCores(int numberOfCores) {
        this.numberOfCores = numberOfCores;
    }

    public int getNumberOfThreads() {
        return numberOfThreads;
    }

    public void setNumberOfThreads(int numberOfThreads) {
        this.numberOfThreads = numberOfThreads;
    }

    public int getTdp() {
        return tdp;
    }

    public void setTdp(int tdp) {
        this.tdp = tdp;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
