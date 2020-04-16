import { Component } from '@angular/core';
import { NewServiceService } from './new-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<div>
  <h1>Angular routes</h1>
  <nav>
  <a routerLink="">Главная</a>
  <a routerLink="/about">О нас</a>
  <a routerLink="/news">Новости</a>
  <a routerLink="/price">Цена</a>
  </nav>
  <router-outlet></router-outlet>
  </div>


  User name: <input type="text" [(ngModel)]="userName">
<button (click) = "search()">Search</button>
<div *ngIf="response">
  <img src="{{response.avatar_url}}" alt="">
  <p>Имя: {{response.login}}</p>
  <p>Имя: {{response.public_repos}}</p>
  <p>Имя: {{response.bio}}</p>
</div>`
})
export class AppComponent {
   userName: string = "";
  response: any;

  constructor(private http: HttpClient){

  }
  search(){
  this.http.get('https://api.github.com/users/' + this.userName)
  .subscribe((response)=> {
  this.response = response;
  console.log(this.response);
  })
  }
}
