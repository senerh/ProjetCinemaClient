import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Configuration } from '../app.constants';
import {Categorie} from "./categorie";

@Injectable()
export class CategoriesService {

    private actionUrl: string;
    private headers: Headers;

    constructor(private _http: Http, private _configuration: Configuration) {

        this.actionUrl = _configuration.ServerWithApiUrl + 'categories/';
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    public GetAll = (): Observable<Categorie[]> => {
        return this._http.get(this.actionUrl)
            .map((response: Response) => <Categorie[]>response.json());
    };

    public Add = (categorie: string): Observable<Categorie> => {

        return this._http.post(this.actionUrl, JSON.stringify(categorie), { headers: this.headers })
            .map((response: Response) => <Categorie>response.json());
    };

}