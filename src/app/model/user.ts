export class User {
    Id!:string;
    C_mssv!:string;
    Name!:string;
    Phone!:string;
    Email!:string;
    Address!:string;
    Birthday!:Date;
    Role_id!:string;
    Role_name!:string;
    Password!:string;
    Token!:string;
    
    constructor(id:string,mssv:string,name:string,phone:string,email:string,address:string,birthDay:Date,Role_id:string,role_name:string,token:string){
        this.Id=id;
        this.Name=name;
        this.Email=email;
        this.Phone=phone;
        this.C_mssv=mssv;
        this.Address=address;
        this.Birthday=birthDay;
        this.Role_id=Role_id;
        this.Role_name=role_name;
        this.Token=token;
    }

}
