import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../contato.service';

export interface IContato {
  nome:string
  idade:number
  email:string
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  constructor(private service:ContatoService) { }

  
  
  contatos: IContato[] = []
  msg:string = ''

  saveContato(data:any): void {
    let contato: IContato =  {nome:'', idade:0, email:''}
    contato.nome = data.nome
    contato.idade = data.idade
    contato.email = data.email

    this.contatos.push(contato)
    console.log(this.contatos)
    this.service.save(data).subscribe(data => this.msg = 'Contato salvo com sucesso')
  }

}
