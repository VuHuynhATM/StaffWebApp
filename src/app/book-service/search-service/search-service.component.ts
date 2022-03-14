import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { User } from 'src/app/model/user';
import { Service } from 'src/app/model/service';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/model/category';

@Component({
  selector: 'app-search-service',
  templateUrl: './search-service.component.html',
  styleUrls: ['./search-service.component.css']
})
export class SearchServiceComponent implements OnInit {

  listService!: Service[];
  user!: User;
  listbook!: Book[];
  listCategory!: Category[];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.listCategory = new Array<Category>();
    setTimeout(() => {
      this.getCategory();
    }, 100);
    this.listService = [];
    this.user = new User('1', 'Se1', 'Huynh Tuan Vu', '0123456789', 'vu@fpt.edu.vn', 'HCM', new Date('10/22/2000'), 'ST', 'Student', '');
    this.listbook = [
      new Book('1', 'ht', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'ht', 'ht', 11000, true, '1'),
      new Book('2', 'ht', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'ht', 'ht', 11000, true, '1'),
      new Book('3', 'ht', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'ht', 'ht', 11000, true, '1'),
      new Book('4', 'ht', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'ht', 'ht', 11000, true, '1'),
      new Book('5', 'ht', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'ht', 'ht', 11000, true, '1'),
    ];
    this.listService.push(new Service(this.listbook, this.user, new Date('3/11/2022'), new Date('3/18/2022'), true));
    this.user = new User('1', 'Se1', 'Than Thanh Duy', '0123456789', 'vu@fpt.edu.vn', 'HCM', new Date('10/22/2000'), 'ST', 'Student', '');
    this.listbook = [
      new Book('1', 'ht', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/9/7/9780143126560.jpg', 'ht', new Date('2/2/1999'), 'ht', 'ht', 11000, true, '1'),
      new Book('2', 'ht', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'ht', 'ht', 11000, true, '1'),
      new Book('3', 'ht', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'ht', 'ht', 11000, true, '1'),
      new Book('4', 'ht', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'ht', 'ht', 11000, true, '1'),
      new Book('5', 'ht', 'https://cdn0.fahasa.com/media/catalog/product/cache/1/small_image/600x600/9df78eab33525d08d6e5fb8d27136e95/i/m/image_181251.jpg', 'ht', new Date('2/2/1999'), 'ht', 'ht', 11000, true, '1'),
    ];
    this.listService.push(new Service(this.listbook, this.user, new Date('3/11/2022'), new Date('3/18/2022'), true));
  }

  getCategory() {
    this.categoryService.getCategory().subscribe(data => {
      this.listCategory = JSON.parse(data + "");
      localStorage.setItem('listCategory', JSON.stringify(this.listCategory));
    })
  }
}
