import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { User } from 'src/app/model/user';
import { Service } from 'src/app/model/service';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-search-service',
  templateUrl: './search-service.component.html',
  styleUrls: ['./search-service.component.css'],
  providers: [MessageService]
})
export class SearchServiceComponent implements OnInit {

  listService!: Service[];
  user!: User;
  listbook!: Book[];
  listCategory!: Category[];

  constructor(private categoryService: CategoryService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.listCategory = new Array<Category>();
    setTimeout(() => {
      this.getCategory();
    }, 100);
    this.listService = [];
    this.user = new User('1', 'Se1', 'Huynh Tuan Vu', '0123456789', 'vu@fpt.edu.vn', 'HCM', new Date('10/22/2000'), 'ST', 'Student', '');
    this.listbook = [
      new Book('1', 'Panorama francophone 2 Coursebook: French ab initio for the IB Diploma (French Edition)', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_241525.jpg', 'Panorama francophone 2 Coursebook: French ab initio for the IB Diploma (French Edition)', new Date('2/2/1999'), 'Cambridge University Press', 'Daniele Bourdais, Sue Finnie, Gen', 1000000, true, '1'),
      new Book('2', 'French ab Initio for the IB Diploma (French Edition)', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_241524.jpg', 'Panorama francophone 1 Teachers Resource With Cambridge Elevate: French ab Initio for the IB Diploma (French Edition)', new Date('2/2/1999'), 'Cambridge University Press', 'Irène Hawkes', 11000, true, '2'),
      new Book('3', 'Panorama francophone 2 Workbook', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_244228.jpg', 'ht', new Date('2/2/1999'), 'Grantham Book Services', 'Chloe Burroughs', 110000, true, '1'),
      new Book('4', 'Explore on Your Own What Are They Good For?', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'Macmillan Publishers', 'Tony Cotton', 110000, true, '3'),
      new Book('5', 'Max Maths Primary A Singapore Approach Grade 3 Student Book', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_134132.jpg', 'ht', new Date('2/2/1999'), 'Barrons Educational Series', 'Patrick Honner, Young Kim', 110000, true, '4'),
    ];
    this.listService.push(new Service('1', this.listbook, this.user, new Date('3/11/2022'), new Date('3/18/2022'), true));
    this.user = new User('1', 'Se1', 'Than Thanh Duy', '0123456789', 'vu@fpt.edu.vn', 'HCM', new Date('10/22/2000'), 'ST', 'Student', '');
    this.listbook = [
      new Book('1', 'Panorama francophone 2 Coursebook: French ab initio for the IB Diploma (French Edition)', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_241525.jpg', 'Panorama francophone 2 Coursebook: French ab initio for the IB Diploma (French Edition)', new Date('2/2/1999'), 'Cambridge University Press', 'Daniele Bourdais, Sue Finnie, Gen', 1000000, true, '1'),
      new Book('2', 'French ab Initio for the IB Diploma (French Edition)', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_241524.jpg', 'Panorama francophone 1 Teachers Resource With Cambridge Elevate: French ab Initio for the IB Diploma (French Edition)', new Date('2/2/1999'), 'Cambridge University Press', 'Irène Hawkes', 11000, true, '2'),
      new Book('3', 'Panorama francophone 2 Workbook', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_244228.jpg', 'ht', new Date('2/2/1999'), 'Grantham Book Services', 'Chloe Burroughs', 110000, true, '1'),
      new Book('4', 'Explore on Your Own What Are They Good For?', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'Macmillan Publishers', 'Tony Cotton', 110000, true, '3'),
      new Book('5', 'Max Maths Primary A Singapore Approach Grade 3 Student Book', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_134132.jpg', 'ht', new Date('2/2/1999'), 'Barrons Educational Series', 'Patrick Honner, Young Kim', 110000, true, '4'),
    ];
    this.listService.push(new Service('2', this.listbook, this.user, new Date('3/11/2022'), new Date('3/18/2022'), true));
    this.user = new User('1', 'Se1', 'Nguyen Van A', '0123456789', 'vu@fpt.edu.vn', 'HCM', new Date('10/22/2000'), 'ST', 'Student', '');
    this.listbook = [
      new Book('1', 'Panorama francophone 2 Coursebook: French ab initio for the IB Diploma (French Edition)', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_241525.jpg', 'Panorama francophone 2 Coursebook: French ab initio for the IB Diploma (French Edition)', new Date('2/2/1999'), 'Cambridge University Press', 'Daniele Bourdais, Sue Finnie, Gen', 1000000, true, '1'),
      new Book('2', 'French ab Initio for the IB Diploma (French Edition)', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_241524.jpg', 'Panorama francophone 1 Teachers Resource With Cambridge Elevate: French ab Initio for the IB Diploma (French Edition)', new Date('2/2/1999'), 'Cambridge University Press', 'Irène Hawkes', 11000, true, '2'),
      new Book('3', 'Panorama francophone 2 Workbook', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_244228.jpg', 'ht', new Date('2/2/1999'), 'Grantham Book Services', 'Chloe Burroughs', 110000, true, '1'),
      new Book('4', 'Explore on Your Own What Are They Good For?', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'Macmillan Publishers', 'Tony Cotton', 110000, true, '3'),
      new Book('5', 'Max Maths Primary A Singapore Approach Grade 3 Student Book', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_134132.jpg', 'ht', new Date('2/2/1999'), 'Barrons Educational Series', 'Patrick Honner, Young Kim', 110000, true, '4'),
    ];
    this.listService.push(new Service('3', this.listbook, this.user, new Date('3/11/2022'), new Date('5/24/2022'), true));
    this.user = new User('1', 'Se1', 'Chi Pheo', '0123456789', 'vu@fpt.edu.vn', 'HCM', new Date('10/22/2000'), 'ST', 'Student', '');
    this.listbook = [
      new Book('1', 'Panorama francophone 2 Coursebook: French ab initio for the IB Diploma (French Edition)', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_241525.jpg', 'Panorama francophone 2 Coursebook: French ab initio for the IB Diploma (French Edition)', new Date('2/2/1999'), 'Cambridge University Press', 'Daniele Bourdais, Sue Finnie, Gen', 1000000, true, '1'),
      new Book('2', 'French ab Initio for the IB Diploma (French Edition)', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_241524.jpg', 'Panorama francophone 1 Teachers Resource With Cambridge Elevate: French ab Initio for the IB Diploma (French Edition)', new Date('2/2/1999'), 'Cambridge University Press', 'Irène Hawkes', 11000, true, '2'),
      new Book('3', 'Panorama francophone 2 Workbook', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_244228.jpg', 'ht', new Date('2/2/1999'), 'Grantham Book Services', 'Chloe Burroughs', 110000, true, '1'),
      new Book('4', 'Explore on Your Own What Are They Good For?', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'Macmillan Publishers', 'Tony Cotton', 110000, true, '3'),
      new Book('5', 'Max Maths Primary A Singapore Approach Grade 3 Student Book', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_134132.jpg', 'ht', new Date('2/2/1999'), 'Barrons Educational Series', 'Patrick Honner, Young Kim', 110000, true, '4'),
    ];
    this.listService.push(new Service('4', this.listbook, this.user, new Date('3/11/2022'), new Date('4/18/2022'), true));
    this.user = new User('1', 'Se1', 'Le Van Luyen', '0123456789', 'vu@fpt.edu.vn', 'HCM', new Date('10/22/2000'), 'ST', 'Student', '');
    this.listbook = [
      new Book('1', 'Panorama francophone 2 Coursebook: French ab initio for the IB Diploma (French Edition)', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_241525.jpg', 'Panorama francophone 2 Coursebook: French ab initio for the IB Diploma (French Edition)', new Date('2/2/1999'), 'Cambridge University Press', 'Daniele Bourdais, Sue Finnie, Gen', 1000000, true, '1'),
      new Book('2', 'French ab Initio for the IB Diploma (French Edition)', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_241524.jpg', 'Panorama francophone 1 Teachers Resource With Cambridge Elevate: French ab Initio for the IB Diploma (French Edition)', new Date('2/2/1999'), 'Cambridge University Press', 'Irène Hawkes', 11000, true, '2'),
      new Book('3', 'Panorama francophone 2 Workbook', 'https://cdn0.fahasa.com/media/catalog/product/cache/2/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_244228.jpg', 'ht', new Date('2/2/1999'), 'Grantham Book Services', 'Chloe Burroughs', 110000, true, '1'),
      new Book('4', 'Explore on Your Own What Are They Good For?', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'Macmillan Publishers', 'Tony Cotton', 110000, true, '3'),
      new Book('5', 'Max Maths Primary A Singapore Approach Grade 3 Student Book', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/400x400/9df78eab33525d08d6e5fb8d27136e95/i/m/image_134132.jpg', 'ht', new Date('2/2/1999'), 'Barrons Educational Series', 'Patrick Honner, Young Kim', 110000, true, '4'),
    ];
    this.listService.push(new Service('5', this.listbook, this.user, new Date('3/11/2022'), new Date('3/18/2022'), true));
  }

  getCategory() {
    this.categoryService.getCategory().subscribe(data => {
      this.listCategory = JSON.parse(data + "");
      localStorage.setItem('listCategory', JSON.stringify(this.listCategory));
    })
  }
  update(id: string) {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Update service success' });
  }
}
