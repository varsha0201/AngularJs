import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!'
  serverName = "";
  userName = "";
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];
  constructor() { 
    setTimeout(() => { this.allowNewServer = true},2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is ' +this.serverName
  }

  onUpdateServerName(even:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
