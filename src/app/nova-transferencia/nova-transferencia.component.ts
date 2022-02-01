import { Component, EventEmitter, Output } from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number = 10;
  destino: number = 10;

  constructor(private service: TransferenciaService) {  }

  transferir() {
    console.log('Solicitada nova transferência');
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);
      this.limpaCampos();
    },
    (error) => console.error(error)
    );
  }

  limpaCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}
