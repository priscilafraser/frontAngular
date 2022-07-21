import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent {

  contatos: any = []
  constructor(private service:ContatoService) { }

 

  consultarTodos(): void {
    this.service.getContatos().subscribe(data=>this.contatos = data)
    //subscribe pq é assincrono, se inscreve no observable
  }

  salvarForm(data:any): void {
    this.service.save(data).subscribe(data=>this.contatos = data)
    //subscribe pq é assincrono, se inscreve no observable
  }

}
