import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(
    private wsServices: WebsocketService
  ) { }

  sendMessaget(message: string){
    const payload = {
      de : 'Christian',
      cuerpo: message
    };

    this.wsServices.emit('mensaje', payload);
  }


  getMessages(){
    return this.wsServices.listen('nuevo-message');                 //Vuelve a retornar el observable
  }

}
