import { Component, OnInit } from '@angular/core';
import { Item } from '../Item';
import { ItemsService } from '../service/items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

	public items =[];

   constructor(private itemsService: ItemsService) { }
   // constructor (private itemsService : ItemsService, private router : Router){}

  ngOnInit() {
    this.itemsService.getItems()
    .subscribe(data => this.items = data);
    // this.items = this.itemsService.getItems();
  }
    deleteItem(item: Item): void {
    this.itemsService.deleteItem(item.id)
      .subscribe( data => {
        this.items = this.items.filter(u => u !== item);
      });
  }
  
  // getItems(): void {
  //   this.items = this.itemsService.getItems();
  // }
 	printedOption: string;
	selectedOption: string;
 	selectedCategory: string;
 	selectedTopic: string;

  options = [
    { name: "easy", value: 1 },
    { name: "medium", value: 2 },
    { name: "hard", value: 3 }
  ]

  categories = [{name: "vocabulary"},{name: "speaking"},{name: "writing"}]
  topics = [{name: "animal"},{name: "furniture"},{name: "vehicle"}]

  //untuk mencetak option yang dipilih
  print() {
    this.printedOption = this.selectedOption;
  }


//   add(selectedOption: string, selectedCategory: string, selectedTopic: string, title: string, answer: string, xp: number, image: string, sound: string): void {
//   title = title.trim();
//   if (!title) { return; }
//   this.itemService.addItem({ title } as Item)
//     .subscribe(item => {
//       this.items.push(item);
//     });
// }
}