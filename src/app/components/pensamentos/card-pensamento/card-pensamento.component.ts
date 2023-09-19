import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-card-pensamento',
  templateUrl: './card-pensamento.component.html',
  styleUrls: ['./card-pensamento.component.css']
})
export class CardPensamentoComponent implements OnInit {
// Vai receber informações do componente pai
// Decorei propriedade com o @Input
  @Input() pensamento: Pensamento = {
    id:10,
    conteudo: 'I love react',
    autoria:'Paloma',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

    // retorna uma string
    larguraPensamento(): string{
      if(this.pensamento.conteudo.length >= 256){
        return 'pensamento-g'
      }
      return 'pensamento-p'
    }
}
