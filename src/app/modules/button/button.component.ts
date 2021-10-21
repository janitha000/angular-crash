import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class EButtonComponent implements OnInit {

  @Input() btnLabel: string = "default";
  @Input()  btnStyle! : any;
  @Input() btnType : string = 'Text';

  @Output() onBtnClick$ : EventEmitter<any>= new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  getBtnStyle() {
    if(!this.btnStyle){
      return {backgroundColor: '#f92672'}
    }
    else {
      return this.btnStyle;
    }
  }

  onTextBtnClick($event : any){
    this.onBtnClick$.emit($event)
  }

}
