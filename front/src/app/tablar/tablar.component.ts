import { Component, OnInit, ViewChild } from '@angular/core';
import {LiveAnnouncer} from '@angular/cdk/a11y';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { JobsService } from '../services/jobs.service';
export interface PeriodicElement {
    nombre_de_trabajo: string;
    promedio_de_salario: number;
  }
  
 
@Component({
  selector: 'app-tablar',
  templateUrl: './tablar.component.html',
  styleUrls: ['./tablar.component.css'],
  standalone: true,
  imports: [MatTableModule, MatSortModule],
})
export class TablarComponent implements OnInit{
  displayedColumns: string[] = ['name', 'weight'];
  datos = new MatTableDataSource();

  constructor(private _liveAnnouncer: LiveAnnouncer, private jobservice :JobsService) { }

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.datos.sort = this.sort;
  }
  ngOnInit(): void {
    this.jobservice.getAll().subscribe(
      data=>{
         this.datos = new MatTableDataSource(data.data.getAll);
      }
    );
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

