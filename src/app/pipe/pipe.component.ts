import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {

  produto = {
    descricao: 'feijao preto',
    preco: 7.89,
    validade: new Date(2022,6,15, 13,30),  // 6 é julho porque os meses vao de 0 a 11!
    dataHoje: new Date()
  }

  constructor() { }

  
}
