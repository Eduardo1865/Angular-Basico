import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  //booleano = false;
  name = "Eduardo";
  idButton = "dsdsds";
  deveMostrarTitulo = false;
  listItems = ["fsafsaf","sadasd","kasjdk"]
  //atualizaBooleano(valor: boolean){
  //  this.booleano = valor
  //}
  submit(){
    console.log("Teste")
  }
}
