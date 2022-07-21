import { Component } from '@angular/core';

interface IContato {
  id:number
  nome:string
  email:string
} 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-crud';

  nome:string = 'Pri Miranda';
  idade:number = 35
  contato:IContato = {
    id:1,
    nome:'Pri',
    email: 'pri@gmail.com'
  }
}
