export class Book {
    id!:string;
    name!:string;
    image!:string;
    description!:string;
    publish_year!:Date;
    publish_company!:string;
    author!:string;
    price!:number;
    status!:boolean;
    categoryID!:string;

    constructor(id:string,name:string,image:string,description:string,publish_year:Date,publish_company:string,author:string,price:number,status:boolean,categoryID:string){
        this.id=id;
        this.name=name;
        this.image=image;
        this.description=description;
        this.publish_year=publish_year;
        this.publish_company=publish_company;
        this.author=this.author;
        this.price=price;
        this.status=status;
        this.categoryID=categoryID;
    }
}
