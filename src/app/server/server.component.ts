import { Component } from '@angular/core';
import { ReturnStatement } from '@angular/compiler';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId: number = 5;
    serverStatus: string = 'offline';

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'online':'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }
    getColor(){
        return this.serverStatus === 'online' ? 'green':'red';
    }
}