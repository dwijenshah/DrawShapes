import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Shapes from './shapes.model';
import { Subscriber, BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class ShapesService {
  public parsingCompletedObserver = new BehaviorSubject<Shapes.IShape>(null);

  constructor(private http: Http) {
    
  }

  public parse(command: string): void {
    let options = { headers: { 'content-type': 'text/plain' } } as any;
    this.http.post('api/ShapesParser/parse', command, options).subscribe(response => {
      let result = Shapes.Shape.parseResponse(response.json());
      this.parsingCompletedObserver.next(result);
    }, error => console.error(error));
  }
  
}
