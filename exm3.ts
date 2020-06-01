import { threadId } from "worker_threads";

class ParentClass
{
    protected j:number;
    constructor(k:number)
    {
        this.j = k;
    }
}
class ChildClass extends ParentClass
{
    l:number;
    constructor(m:number, k:number)
    {
        super(k);
        this.l = m;
    }
    value(){
        return("value from parent is " +this.j+ " and the value from child is "+this.l);

    }
}
let newObj = new ChildClass(12,23);
console.log(newObj.value());