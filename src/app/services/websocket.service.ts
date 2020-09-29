import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  public socketStatus:boolean = false;

  //Cuando se crea el objeto(instancia) al ya estar configurado el socket, se conecta automaticamente.
  constructor(private socket: Socket) { 
    this.checkStatus();
  }

  checkStatus(){
    this.socket.on('connect', ()=>{
      this.socketStatus = true;
    })

    this.socket.on('disconnect', ()=>{
      this.socketStatus = false;
    })
  }

  //METODO REUTLIZABLE PARA EMITIR
  emit(evento:string, payload?:any, callback?: Function){
    this.socket.emit(evento, payload, callback);
  }

  listen(evento: string){
    return this.socket.fromEvent(evento);          //escucho un evento - Retorno un observable

  }
}
