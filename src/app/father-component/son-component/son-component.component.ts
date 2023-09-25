import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son-component',
  templateUrl: './son-component.component.html',
  styleUrls: ['./son-component.component.scss']
})
export class SonComponentComponent {
  @Input() public inputText: string = '';

  @Output() public emitMessage = new EventEmitter<string>();

  public message: string = '';

  public sendMessage() {
    this.emitMessage.emit(this.message);
  }
}