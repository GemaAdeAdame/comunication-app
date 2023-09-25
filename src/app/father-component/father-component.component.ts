import { Component } from '@angular/core';

@Component({
  selector: 'app-father-component',
  templateUrl: './father-component.component.html',
  styleUrls: ['./father-component.component.scss']
})
export class FatherComponentComponent  {
  // Se declara e inicia en el componente padre para luego comunicarlo al componente hijo
  public inputText: string = '';
	// Variable donde almacenamos el valor del hijo
  public sonMessage: string = '';

  // Con cada tecla apretada se activa esta funcion.
  public keyUp(letra: string) {
    this.inputText = letra;
  }

  // Recibe el mensaje del hijo	
  public setMessage(message: string): void {
    this.sonMessage = message;
  }
}