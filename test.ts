// sotooh dastresi
class Person {
    private name: string;
    // private faghat dar sath hamin class

    protected age : number;
    // protected faghat class haei ke az in class ersbari mikonan
    
    public family: string;
    // public omoomi hame mibinan

    protected getAmount() {
        return 125000;
    }
}

class Employ extends Person {
    age = 30;
    public getSalary() {
        return this.getAmount()
    }
}

var p = new Person()

p.family = 'asdasd'

