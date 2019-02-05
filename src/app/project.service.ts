import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { MatSidenav } from '@angular/material';


const endpoint = 'http://localhost:3000/Tasks';
const endpoint1='http://localhost:3000/login';
const endpoint2='http://localhost:3000/invoice';
const endpoint3='http://localhost:3000/milestonesd';
const endpoint4='http://localhost:3000/updateinvoice';
const endpoint5='http://localhost:3000/sendmail';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  private sidenav: MatSidenav;
  constructor(private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getProjectDetails(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  public toggle(): void {
    this.sidenav.toggle();
   }
   public setSidenav(sidenav: MatSidenav) {
    this.sidenav = sidenav;
}
getMilestone(id): Observable<any> {
  return this.http.get(endpoint+'/'+id).pipe(
    map(this.extractData));
}
getLoginDetails(id):Observable<any>{
  return this.http.get(endpoint1+'/'+id).pipe(
    map(this.extractData));
  
}
getInvoiceDetails(id,id1):Observable<any>{
 return this.http.get(endpoint2+'/'+id+'/'+id1).pipe(
   map(this.extractData));
 
}
getInvoicedate(id):Observable<any>
{
  return this.http.get(endpoint2+'/'+id).pipe(
    map(this.extractData))
  
}
getInvoicestartdate(id,id1):Observable<any>{
  console.log("Hello");
  console.log(id1);
return this.http.get(endpoint3+'/'+id+'/'+id1).pipe(
  map(this.extractData));
}
gethours(id,id1,id2):Observable<any>{
  console.log(id+'hello'+id1);
  return this.http.get(endpoint3+'/'+id+'/'+id1+'/'+id2).pipe(
    map(this.extractData)
  );
}
insertInvoiceDetails(id,id1,id2):Observable<any>{
  return this.http.get(endpoint4+'/'+id+'/'+id1).pipe(
    map(this.extractData)
  );  
}
mailsend():Observable<any>{
  return this.http.get(endpoint5).pipe
  (map(this.extractData)
);
}
getReports(id):Observable<any>{
  return this.http.get(endpoint4+'/'+id).pipe(
    map(this.extractData)
  )
}

}
