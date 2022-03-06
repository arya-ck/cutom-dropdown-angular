import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-select',
  templateUrl: './my-select.component.html',
  styleUrls: ['./my-select.component.css']
})
export class MySelectComponent implements OnInit {
  @Input() options: string[] = [];
  isOpen = false;
  selectedOption: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  toggleOpen(){
    this.isOpen = !this.isOpen;
  }

  selectItem(option: string){
    this.selectedOption = option;
  }

  @HostListener('document:click', ['$event'])
  closeOptions(event: any){
    if(event.target.className != 'select-options' && event.target.className != 'selected-item'){
      console.log('inside');
      this.isOpen = false;
    } else {
      console.log('outside');      
    }
  }

  clearSelected(){
    this.selectedOption = undefined;
  }
}
