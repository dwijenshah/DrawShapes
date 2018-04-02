import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Shapes from './shapes.model';
import { Subscriber, BehaviorSubject } from 'rxjs/Rx';
import {Response} from '../core/core.model';

@Injectable()
export class ShapesService {
  public parsingCompletedObserver = new BehaviorSubject<Response<any>>(null);

  constructor(private http: Http) {
    
  }

  public parse(command: string): void {
    let options = { headers: { 'content-type': 'text/plain' } } as any;
    this.http.post('api/ShapesParser/parse', command, options).subscribe(response => {
      let responseObj = response.json() as Response<Shapes.ShapeAttributes>;
      if (responseObj.errorMessages == null || responseObj.errorMessages.length === 0) {
        let result = Shapes.Shape.parseResponse(responseObj.data);
        this.parsingCompletedObserver.next(new Response<Shapes.IShape>(result));
      } else {
        this.parsingCompletedObserver.next(responseObj);
      }
    }, error => console.error(error));
  }
  
}
