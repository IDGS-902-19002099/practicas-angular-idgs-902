import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre!:string;
  cantidadCompradores!:number;
  cantidadBoletos!:number;

  tarjeta1:string='Sí';
  total!:number;
  resultado!:string;
  maxima!: number;

  opciones=[
    'Sí',
    'No'
  ]


  calcularTotal(){
    this.maxima = this.cantidadCompradores * 7;
    if (this.cantidadBoletos <= this.maxima ){
      this.total = this.cantidadBoletos * 12;

      if(this.cantidadBoletos > 5){
        this.total = this.total - (this.total * 0.15);
      }

      else if(this.cantidadBoletos >=3   && this.cantidadBoletos  <=5 ){
        this.total = this.total - (this.total * 0.10);
      }

      switch(this.tarjeta1){
        case 'Sí': this.total = this.total - (this.total * 0.10); break;
        case 'No': this.total = this.total; break;
      }
      
      this.resultado = "Total a pagar es de : " + this.total + " por " + this.cantidadCompradores + " comprador(es) para: " + this.nombre;    
    }
    

    else{
      this.resultado = "Lo siento, usted supera la cantidad máxima de boletos por persona";
    }
  }


}
