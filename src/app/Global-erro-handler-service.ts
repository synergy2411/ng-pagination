import { Injectable, ErrorHandler } from "@angular/core";

@Injectable()
export class GlobalErrorHandle implements ErrorHandler{
    handleError(err){
        console.error("This is Error", err);
        //throw err;
    }
}