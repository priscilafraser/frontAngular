import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContatoService } from '../contato.service';

@Component({
  selector: 'app-edicao',
  templateUrl: './edicao.component.html',
  styleUrls: ['./edicao.component.css']
})
export class EdicaoComponent implements OnInit {

  idcontato:number = 0
  contato: any = {}

  constructor(private route:ActivatedRoute, private service:ContatoService) { }

  ngOnInit(): void {

    const routeParams = this.route.snapshot.paramMap;
    this.idcontato= Number(routeParams.get('idcontato'))

    this.service.getContatosId(this.idcontato).subscribe(data=> {
      this.contato = data
      console.log(this.contato)
    }
    )
    
  }

  msg: string= ''

  efetivarAlteracao(): void {
    this.service.alterarContato(this.contato).subscribe(data=> this.msg = 'contato alterado com sucesso')
  }



}
