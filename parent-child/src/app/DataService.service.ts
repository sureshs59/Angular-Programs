import { Inject, Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

// Create a Service Returning an Observable
@Injectable({ providedIn: 'root'})
export class DataService {
  private data: any;

    constructor() {
    }

//    Suppose you have a service with an Observable (e.g., fetching data from an API):
    getData(): Observable<string[]> {
        // Return mock observable data (could be HTTPClient)
        return of(['angular', 'react', 'vue']);
    }
}