// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable, throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';
// import { Field } from './field';

// @Injectable({
//   providedIn: 'root'
// })
// export class FieldService {
//   private apiUrl = 'http://localhost:5260/api/field'; // Replace with your API URL

//   constructor(private http: HttpClient) { }

//   getFields(): Observable<Field[]> {
//     return this.http.get<Field[]>(this.apiUrl).pipe(
//       catchError(error => {
//         console.error('Error fetching fields:', error);
//         return throwError('Something went wrong while fetching fields. Please try again later.');
//       })
//     );
//   }

//   createField(field: Field): Observable<Field> {
//     return this.http.post<Field>(this.apiUrl, field).pipe(
//       catchError(error => {
//         console.error('Error creating field:', error);
//         return throwError('Something went wrong while creating the field. Please try again later.');
//       })
//     );
//   }

//   updateField(field: Field, fieldName: string): Observable<Field> {
//     const url = `${this.apiUrl}/${fieldName}`; // Update the URL to use fieldName instead of id
//     return this.http.put<Field>(url, field).pipe(
//       catchError(error => {
//         console.error('Error updating field:', error);
//         return throwError('Something went wrong while updating the field. Please try again later.');
//       })
//     );
// }


//   deleteField(id: number): Observable<void> {
//     const url = `${this.apiUrl}/${id}`;
//     return this.http.delete<void>(url).pipe(
//       catchError(error => {
//         console.error('Error deleting field:', error);
//         return throwError('Something went wrong while deleting the field. Please try again later.');
//       })
//     );
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Field } from './field';

@Injectable({
  providedIn: 'root'
})
export class FieldService {
  private apiUrl = 'http://localhost:5260/api/field'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getFields(): Observable<Field[]> {
    return this.http.get<Field[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching fields:', error);
        return throwError('Something went wrong while fetching fields. Please try again later.');
      })
    );
  }

  createField(field: Field): Observable<Field> {
    return this.http.post<Field>(this.apiUrl, field).pipe(
      catchError(error => {
        console.error('Error creating field:', error);
        return throwError('Something went wrong while creating the field. Please try again later.');
      })
    );
  }

  updateField(field: Field, fieldName: string): Observable<Field> {
    const url = `${this.apiUrl}/${fieldName}`; // Update the URL to use fieldName instead of id
    return this.http.put<Field>(url, field).pipe(
      catchError(error => {
        console.error('Error updating field:', error);
        return throwError('Something went wrong while updating the field. Please try again later.');
      })
    );
  }

  deleteField(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url).pipe(
      catchError(error => {
        console.error('Error deleting field:', error);
        return throwError('Something went wrong while deleting the field. Please try again later.');
      })
    );
}

}
