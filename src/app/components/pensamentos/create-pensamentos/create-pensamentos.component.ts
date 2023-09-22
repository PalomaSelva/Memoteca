import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pensamentos',
  templateUrl: './create-pensamentos.component.html',
  styleUrls: ['./create-pensamentos.component.css']
})
export class CreatePensamentosComponent implements OnInit {

//  a (!) é usada para indicar ao compilador TypeScript que você tem certeza de que uma variável não será nula ou indefinida em tempo de execução
  formulario!: FormGroup

  constructor(
    private service:PensamentoService,
    private router: Router,
    private formBuilder:FormBuilder) { }


  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      conteudo:['Formulário reativo', Validators.compose([
        Validators.required,
        Validators.pattern(/(.|\s)*\S(.|\s)*/),
      ])],
      autoria: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(15),
      ])],
      modelo: ['modelo1']
    })
  }
  criarPensamento(){
    console.log(this.formulario.get('autoria')?.errors)
    if(this.formulario.valid){
      this.service.criar(this.formulario.value).subscribe(()=>{
        this.router.navigate(['/list'])
      })
    }
  }
  cancelar(){
    alert("Ação cancelada")
  }

}
