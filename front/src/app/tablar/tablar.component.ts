import { Component, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-tablar',
  templateUrl: './tablar.component.html',
  styleUrls: ['./tablar.component.css'],
  standalone: true,
  imports: [MatTableModule, MatSortModule],
})
export class TablarComponent {
  displayedColumns: string[] = ['name', 'weight'];
  datos = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) { }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.datos.sort = this.sort;
  }

  /** Announce the change in sort state for assistive technology. */
  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

export interface PeriodicElement {
  nombre_de_trabajo: string;
  promedio_de_salario: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    "nombre_de_trabajo": "Repartidor de alimentos",
    "promedio_de_salario": 800.0
},
{
    "nombre_de_trabajo": "Cuidador de mascotas",
    "promedio_de_salario": 600.0
},
{
    "nombre_de_trabajo": "Limpieza de hogares",
    "promedio_de_salario": 700.0
},
{
    "nombre_de_trabajo": "Conductor de transporte compartido",
    "promedio_de_salario": 900.0
},
{
    "nombre_de_trabajo": "Tutor de idiomas",
    "promedio_de_salario": 1000.0
},
{
    "nombre_de_trabajo": "Cuidador de ancianos",
    "promedio_de_salario": 750.0
},
{
    "nombre_de_trabajo": "DiseÃ±ador grÃ¡fico freelance",
    "promedio_de_salario": 1200.0
},
{
    "nombre_de_trabajo": "Entrenador personal",
    "promedio_de_salario": 850.0
},
{
    "nombre_de_trabajo": "Traductor independiente",
    "promedio_de_salario": 950.0
},
{
    "nombre_de_trabajo": "Asistente virtual",
    "promedio_de_salario": 700.0
},
{
    "nombre_de_trabajo": "Desarrollador web freelance",
    "promedio_de_salario": 1100.0
},
{
    "nombre_de_trabajo": "Barman / Bartender",
    "promedio_de_salario": 750.0
},
{
    "nombre_de_trabajo": "Escritor independiente",
    "promedio_de_salario": 900.0
},
{
    "nombre_de_trabajo": "Maquillador / Maquilladora",
    "promedio_de_salario": 600.0
},
{
    "nombre_de_trabajo": "DiseÃ±ador de moda independiente",
    "promedio_de_salario": 1000.0
},
{
    "nombre_de_trabajo": "Chef privado",
    "promedio_de_salario": 1100.0
},
{
    "nombre_de_trabajo": "FotÃ³grafo freelance",
    "promedio_de_salario": 950.0
},
{
    "nombre_de_trabajo": "Instructor de yoga",
    "promedio_de_salario": 800.0
},
{
    "nombre_de_trabajo": "Community manager freelance",
    "promedio_de_salario": 850.0
},
{
    "nombre_de_trabajo": "Peluquero / Peluquera a domicilio",
    "promedio_de_salario": 700.0
},
{
    "nombre_de_trabajo": "Consultor financiero independiente",
    "promedio_de_salario": 1200.0
},
{
    "nombre_de_trabajo": "Coordinador de eventos",
    "promedio_de_salario": 900.0
},
{
    "nombre_de_trabajo": "Reparador de electrodomÃ©sticos",
    "promedio_de_salario": 800.0
},
{
    "nombre_de_trabajo": "Entregador / Repartidor",
    "promedio_de_salario": 750.0
},
{
    "nombre_de_trabajo": "Constructor / AlbaÃ±il freelance",
    "promedio_de_salario": 1000.0
},
{
    "nombre_de_trabajo": "Ama de llaves",
    "promedio_de_salario": 600.0
},
{
    "nombre_de_trabajo": "GuÃ­a turÃ­stico independiente",
    "promedio_de_salario": 850.0
},
{
    "nombre_de_trabajo": "DiseÃ±ador de interiores freelance",
    "promedio_de_salario": 1100.0
},
{
    "nombre_de_trabajo": "Profesor particular",
    "promedio_de_salario": 900.0
},
{
    "nombre_de_trabajo": "Artista callejero",
    "promedio_de_salario": 500.0
},
{
    "nombre_de_trabajo": "Blogger / Influencer",
    "promedio_de_salario": 800.0
},
{
    "nombre_de_trabajo": "Asesor de imagen personal",
    "promedio_de_salario": 950.0
},
{
    "nombre_de_trabajo": "Especialista en marketing digital",
    "promedio_de_salario": 1050.0
},
{
    "nombre_de_trabajo": "MecÃ¡nico de bicicletas",
    "promedio_de_salario": 700.0
},
{
    "nombre_de_trabajo": "DiseÃ±ador de joyas independiente",
    "promedio_de_salario": 1200.0
},
{
    "nombre_de_trabajo": "Entrenador personal online",
    "promedio_de_salario": 850.0
},
{
    "nombre_de_trabajo": "Desarrollador de aplicaciones mÃ³viles freelance",
    "promedio_de_salario": 1150.0
},
{
    "nombre_de_trabajo": "Cocinero a domicilio",
    "promedio_de_salario": 900.0
},
{
    "nombre_de_trabajo": "Experto en SEO",
    "promedio_de_salario": 1100.0
},
{
    "nombre_de_trabajo": "Nutricionista independiente",
    "promedio_de_salario": 950.0
},
{
    "nombre_de_trabajo": "Organizador de armarios",
    "promedio_de_salario": 650.0
},
{
    "nombre_de_trabajo": "Corrector ortogrÃ¡fico / Editor",
    "promedio_de_salario": 800.0
},
{
    "nombre_de_trabajo": "DiseÃ±ador de logotipos",
    "promedio_de_salario": 1000.0
},
{
    "nombre_de_trabajo": "Instructor de fitness",
    "promedio_de_salario": 900.0
},
{
    "nombre_de_trabajo": "Estilista personal",
    "promedio_de_salario": 750.0
},
{
    "nombre_de_trabajo": "Agente inmobiliario independiente",
    "promedio_de_salario": 1200.0
},
{
    "nombre_de_trabajo": "Cuidador de plantas / Jardinero",
    "promedio_de_salario": 600.0
},
{
    "nombre_de_trabajo": "Escritor de contenido web",
    "promedio_de_salario": 850.0
},
{
    "nombre_de_trabajo": "Asistente personal virtual",
    "promedio_de_salario": 950.0
},
{
    "nombre_de_trabajo": "Asesor de inversiones independiente",
    "promedio_de_salario": 1100.0
},
{
    "nombre_de_trabajo": "GuÃ­a de museo independiente",
    "promedio_de_salario": 700.0
},
{
    "nombre_de_trabajo": "Creador de contenido en redes sociales",
    "promedio_de_salario": 900.0
},
{
    "nombre_de_trabajo": "DiseÃ±ador de pÃ¡ginas web freelance",
    "promedio_de_salario": 1050.0
},
{
    "nombre_de_trabajo": "Especialista en relaciones pÃºblicas",
    "promedio_de_salario": 950.0
},
{
    "nombre_de_trabajo": "DiseÃ±ador de folletos y volantes",
    "promedio_de_salario": 800.0
},
{
    "nombre_de_trabajo": "Asesor de nutriciÃ³n deportiva",
    "promedio_de_salario": 1000.0
},
{
    "nombre_de_trabajo": "Animador de fiestas infantiles",
    "promedio_de_salario": 700.0
},
{
    "nombre_de_trabajo": "Redactor creativo",
    "promedio_de_salario": 850.0
},
{
    "nombre_de_trabajo": "Entrenador vocal",
    "promedio_de_salario": 1100.0
},
{
    "nombre_de_trabajo": "Coordinador de redes sociales",
    "promedio_de_salario": 950.0
},
{
    "nombre_de_trabajo": "Instructor de baile",
    "promedio_de_salario": 750.0
},
{
    "nombre_de_trabajo": "DiseÃ±ador de presentaciones",
    "promedio_de_salario": 900.0
},
{
    "nombre_de_trabajo": "Especialista en e-commerce",
    "promedio_de_salario": 1200.0
},
{
    "nombre_de_trabajo": "Editor de video freelance",
    "promedio_de_salario": 1000.0
},
{
    "nombre_de_trabajo": "Asistente de marketing digital",
    "promedio_de_salario": 850.0
},
{
    "nombre_de_trabajo": "Instructor de arte",
    "promedio_de_salario": 700.0
},
{
    "nombre_de_trabajo": "Especialista en seguridad informÃ¡tica independiente",
    "promedio_de_salario": 1300.0
},
{
    "nombre_de_trabajo": "Corrector de estilo",
    "promedio_de_salario": 750.0
},
{
    "nombre_de_trabajo": "Coordinador de eventos corporativos",
    "promedio_de_salario": 950.0
},
{
    "nombre_de_trabajo": "DiseÃ±ador de ilustraciones",
    "promedio_de_salario": 800.0
},
{
    "nombre_de_trabajo": "Entrenador de mindfulness",
    "promedio_de_salario": 1000.0
},
{
    "nombre_de_trabajo": "Experto en logÃ­stica",
    "promedio_de_salario": 1100.0
},
{
    "nombre_de_trabajo": "Consultor de recursos humanos independiente",
    "promedio_de_salario": 1200.0
},
{
    "nombre_de_trabajo": "Instructor de fotografÃ­a",
    "promedio_de_salario": 850.0
},
{
    "nombre_de_trabajo": "Desarrollador de software freelance",
    "promedio_de_salario": 1300.0
},
{
    "nombre_de_trabajo": "RAPPI",
    "promedio_de_salario": 50.0
},
{
    "nombre_de_trabajo": "Uber",
    "promedio_de_salario": 50.0
},
{
    "nombre_de_trabajo": "machetero",
    "promedio_de_salario": 50.0
},
{
    "nombre_de_trabajo": "machetero1",
    "promedio_de_salario": 50.0
}
];