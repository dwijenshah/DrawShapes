import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as Shapes from './shapes.model';
import { BehaviorSubject } from 'rxjs/Rx';
import {Response} from '../core/core.model';

//ShapesService is responsible for asynchronous parsing of all commands on the server and then returning the observable to wait for the response.
@Injectable()
export class ShapesService {
  public parsingCompletedObserver = new BehaviorSubject<Response<any>>(null);

  constructor(private http: Http) {
    
  }

  //Following method sends natural language command to server for parsing into shape attributes
    //and once the response is returned fires an observable which the consumer of this service can use to process response.
  public parse(command: string): void {
    let options = { headers: { 'content-type': 'text/plain' } } as any;
    this.http.post('api/ShapesParser/parse', command, options).subscribe(response => {
      let responseObj = response.json() as Response<Shapes.ShapeAttributes>;
      if (responseObj.errorMessages == null || responseObj.errorMessages.length === 0) {
        //if the response is valid then translate shape attributes into a Shape object, which can then be rendered by the consumer.
        let result = Shapes.Shape.parseResponse(responseObj.data);
        this.parsingCompletedObserver.next(new Response<Shapes.IShape>(result));  //fire observable for further processing of shape object.
      } else {
        this.parsingCompletedObserver.next(responseObj);  //fire observable for further processing of validation messages (like showing them on UI).
      }
    }, error => console.error(error));
  }
  
}
