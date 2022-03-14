import { Book } from "./book";
import { User } from "./user";

export class Service {
    listRental!:Book[];
    user!:User;
    dateRental!:Date;
    dateReturn!:Date;
    status!:boolean;

    constructor(listRental:Book[],user:User,dateRental:Date,dateReturn:Date,status:boolean){
        this.listRental=listRental;
        this.user=user;
        this.dateRental=dateRental;
        this.dateReturn=dateReturn;
        this.status=status;
    }
}
