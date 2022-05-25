import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})

export class ListadoComponent {
  heroes: string[] = ['SpiderMan','IronMan','Hulk','Thor','Capitán América'];  
  heroeBorrado: string = '';

  borrarHeroe (){
    /*
    const heroeBorrado =  this.heroes.pop() || '';
    this.heroeBorrado = heroeBorrado;
    */
    this.heroeBorrado = this.heroes.pop() || ''; //Le decimos que si lo que devuelve es undefined que devuelva un string vacío

  }
}

