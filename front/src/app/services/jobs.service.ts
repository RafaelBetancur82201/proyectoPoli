import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GraphQl } from '../models/graphQl';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  zohoUrl="http://lb-loginPrueba-1638423704.us-east-1.elb.amazonaws.com/jobs/"
  constructor(private httpClient: HttpClient) { }
  getAll():Observable<any>{
    var query = new GraphQl("query MyQuery {\n  getAll {\n    nombre_de_trabajo\n    promedio_de_salario\n  }\n}","MyQuery");
    return this.httpClient.post(this.zohoUrl+'getAll',query)
  }
}
