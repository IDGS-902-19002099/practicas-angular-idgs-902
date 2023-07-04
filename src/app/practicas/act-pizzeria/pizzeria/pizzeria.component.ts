import { Component } from '@angular/core';

@Component({
  selector: 'app-pizzeria',
  templateUrl: './pizzeria.component.html',
  styleUrls: ['./pizzeria.component.css']
})
export class PizzeriaComponent {
  nombre!:string;
  direccion!:string;
  telefono!:string;
  numPizzas!:number;

  Jamon:string="";
  Pina:string="";
  Champinones:string="";

  tamano!:string;
  precioTamaño!:number;
  precioIngredientes:number=0;
  subtotal!:number;
  total!: number;
  sumaIngredientes!:number;
  ingredienteSeleccionado: string[] = [];

  tamanos=[
    'Chica',
    'Mediana',
    'Grande'
  ];


  
  ingredientes=[
    'Jamon',
    'Piña',
    'Champiñones'
  ];

  ventadeldia=[{
    'nombre':'',
    'total':0
  }]


  ventas=[{
    'id':1,
    'nombre': '',
    'direccion': '',
    'telefono':'',
    'numPizzas': 0,
    'tamano':'',
    'ingrediente':[] as string[],
    'subtotal':0
  }];

  quitar( idSeleccionado: number){
    this.ventas = this.ventas.filter((venta) => venta.id !== idSeleccionado);
  }

  checkCambio(ingrediente: string) {
    const indice = this.ingredienteSeleccionado.indexOf(ingrediente);

    if (indice > -1) {
      this.ingredienteSeleccionado.splice(indice, 1)
    } else {
      this.ingredienteSeleccionado.push(ingrediente);
    }
  }
 
  calcularTotalIngrediente() {
    this.sumaIngredientes = 0;
    for (const ingrediente of this.ingredienteSeleccionado){
      // Realiza la lógica para obtener el valor numérico correspondiente a cada ingrediente
      // y añádelo a la suma
      if (ingrediente === 'Jamon') {
        this.precioIngredientes += 10;
      } else if (ingrediente === 'Piña') {
        this.precioIngredientes += 10;
      } else if (ingrediente === 'Champiñones') {
        this.precioIngredientes += 10;
      }
    }
  }

  agregar(){
    this.calcularTotalIngrediente();
    switch(this.tamano){
      case 'Chica': this.precioTamaño = 40;  this.tamano = 'Chica';break;
      case 'Mediana': this.precioTamaño = 80; this.tamano = 'Mediana'; break;
      case 'Grande': this.precioTamaño = 120; this.tamano = 'Grande'; break;
    };


    // if (this.Jamon == 'Jamon'){
    //   this.precioIngredientes = this.precioIngredientes + 10;
    // }
    // if (this.Pina == 'Pina'){
    //   this.precioIngredientes = this.precioIngredientes + 10;
    //   this.Pina= 'Piña';
    // }
    // if (this.Champinones == 'Champinones'){
    //   this.precioIngredientes = this.precioIngredientes + 10;
    // }
    this.precioIngredientes=
    this.subtotal = (this.precioIngredientes + this.precioTamaño) * this.numPizzas;

    
  const ultimoRegistro = this.ventas[this.ventas.length - 1];
  const ultimoID = ultimoRegistro.id;

    this.ventas.push({
      'id':ultimoID + 1,
      'nombre': this.nombre,
      'direccion': this.direccion,
      'telefono': this.telefono,
      'numPizzas': this.numPizzas,
      'tamano': this.tamano,
      'ingrediente': this.ingredienteSeleccionado,
      'subtotal': this.subtotal
  });
  this.subtotal= 0;
  this.precioIngredientes = 0;

}


terminar() {
  this.total = 0;

  for (let i = 0; i < this.ventas.length; i++) {
    this.total = this.total + this.ventas[i].subtotal;
  }

  this.ventadeldia.push({
    'nombre': this.nombre,
    'total': this.total
  });
  //this.ventas.splice(0, this.ventas.length);
}



}
