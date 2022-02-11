export class Category {
    id!:string;
    name!:string;
    status!:boolean;

    constructor(id:string,name:string,status:boolean){
        this.id=id;
        this.name=name;
        this.status=status;
    }
}

