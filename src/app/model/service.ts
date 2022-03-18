import { Book } from "./book";
import { User } from "./user";

export class Service {
    id!:string;
    listRental!:Book[];
    user!:User;
    dateRental!:Date;
    dateReturn!:Date;
    status!:boolean;

    constructor(id:string,listRental:Book[],user:User,dateRental:Date,dateReturn:Date,status:boolean){
        this.id=id;
        this.listRental=listRental;
        this.user=user;
        this.dateRental=dateRental;
        this.dateReturn=dateReturn;
        this.status=status;
    }
}
