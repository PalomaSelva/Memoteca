import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-pensamentos',
  templateUrl: './create-pensamentos.component.html',
  styleUrls: ['./create-pensamentos.component.css']
})
export class CreatePensamentosComponent implements OnInit {

  constructor(private service:PensamentoService, private router: Router) { }

  pensamento: Pensamento  = {
    conteudo: '',
    autoria:'',
    modelo:''
  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(()=>{
      this.router.navigate(['/list'])
    })

  }
  cancelar(){
    alert("Ação cancelada")
  }
  ngOnInit(): void {
  }

}
