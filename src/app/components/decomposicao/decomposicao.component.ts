import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Decomposicao } from 'src/app/models/decomposicao';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-decomposicao',
  templateUrl: 'decomposicao.component.html',
  styles: [
  ]
})
export class DecomposicaoComponent implements OnInit {
  public form!: FormGroup;
  public error: string;

  constructor(private formBuilder: FormBuilder,
    private apiService: ApiService) {
    this.error = '';
  }

  ngOnInit(): void {
    this.createForm();
  }

  public obterDecomposicao() {
    if (this.form.valid) {
      this.apiService.ObterDecomposicao(this.form.controls['valor'].value).subscribe({
        next: decomposicao => {
          this.preecherFormulario(decomposicao);
        }, error: err => {
          this.error = err.error;
        }
      })
    }
    else {
      this.error = 'O número a ser decomposto deve ser superior a 0'
      this.preecherFormulario(new Decomposicao());
    }
  }

  public resetar() {
    this.error = '';
    this.preecherFormulario(new Decomposicao());
  }

  private createForm() {
    this.form = this.formBuilder.group({
      valor: [0, Validators.min(1)],
      divisores: [''],
      numerosPrimos: ['']
    })
  }

  private preecherFormulario(decomposicao: Decomposicao) {
    this.form.patchValue({
      valor: decomposicao.valor,
      divisores: decomposicao.divisores.join(', '),
      numerosPrimos: decomposicao.numerosPrimos.join(', ')
    })
  }
}
