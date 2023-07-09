import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SeshAction} from "../../model/action/SeshAction";

@Component({
  selector: 'app-controller-lobby',
  templateUrl: './controller-lobby.component.html',
  styleUrls: ['./controller-lobby.component.css']
})
export class ControllerLobbyComponent {
  @Input() seshCode?: string;
  @Input() isVip = false;
  @Input() needToAskForVip = true;
  @Input() playerId = "";
  @Output() startSesh: EventEmitter<any> = new EventEmitter<any>();
  @Output() makeVip: EventEmitter<SeshAction> = new EventEmitter<SeshAction>();



  emitStartSesh() {

    this.startSesh.emit();
  }

  emmitMakeVIPEvent() {

    const action:SeshAction = {type:"makeVip", body: this.playerId}
    this.makeVip.emit(action);
  }

  declineVip() {

    const action:SeshAction = {type:"makeVip", body: false}
    this.makeVip.emit(action);
  }


}
