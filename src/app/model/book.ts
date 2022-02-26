export class Book {
    Id_nfc!:string;
    Name!:string;
    Image!:string;
    Description!:string;
    Publish_year!:Date;
    Publish_company!:string;
    Author!:string;
    Price!:number;
    Status!:boolean;
    Category_id!:string;

    constructor(id:string,Name:string,Image:string,Description:string,Publish_year:Date,Publish_company:string,Author:string,Price:number,Status:boolean,Category_id:string){
        this.Id_nfc=id;
        this.Name=Name;
        this.Image=Image;
        this.Description=Description;
        this.Publish_year=Publish_year;
        this.Publish_company=Publish_company;
        this.Author=Author;
        this.Price=Price;
        this.Status=Status;
        this.Category_id=Category_id;
    }
}
