import {Injectable} from "@angular/core";


import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";
import "rxjs/add/observable/throw";
import {HelperUtilService} from "./helper-util.service";

import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class MarketApiService {
    readonly appData: any;

    constructor(

        private helper: HelperUtilService,
        private http: HttpClient
    ) {

    }


}
