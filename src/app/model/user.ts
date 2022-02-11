export class User {
    id!:string;
    mssv!:string;
    name!:string;
    phone!:string;
    email!:string;
    address!:string;
    birthDay!:Date;
    status!:boolean;
    
    constructor(id:string,mssv:string,name:string,phone:string,email:string,address:string,birthDay:Date,status:boolean){
        this.id=id;
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.mssv=mssv;
        this.address=address;
        this.birthDay=birthDay;
        this.status=status;
    }

}
