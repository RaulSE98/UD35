import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Input() nombre: string | undefined;
  @Input() email: string | undefined;
  @Input() mensaje: string | undefined;
  @Input() solucion: number | undefined;

  constructor() {

   }

  ngOnInit(): void {

  }

  OnClickMe(){

  }

}
