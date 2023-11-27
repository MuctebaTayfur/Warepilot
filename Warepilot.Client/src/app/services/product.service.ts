import { Injectable } from "@angular/core";
import { IProduct } from "../models/product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, tap, throwError, Subscription, pipe, map, take } from "rxjs";
@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl = '/assets/products/products.json';
    constructor(private http:HttpClient) {}
    getProducts():Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.productUrl).pipe(
            tap(data=>console.log("All",JSON.stringify(data))),
            catchError(this.handleError));
    }
   
    private handleError(err: HttpErrorResponse){
        let errMessage='';

        if(err.error instanceof ErrorEvent){
            errMessage=`an error ocured ${err.error.message}`;
        }
        else{
            errMessage=`server returned code :${err.status}, error message is: ${err.message}`;
        }
        console.log(errMessage);

        return throwError(()=>errMessage);


    }
}

