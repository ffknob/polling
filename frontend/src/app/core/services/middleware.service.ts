import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {

    private protocol: string;
    private host: string;
    private port: number;

    constructor(private http: HttpClient) {
        this.protocol = environment.middleware.protocol || 'http';
        this.host = environment.middleware.host || 'localhost';
        this.port = environment.middleware.port || 3000;
    }

    getMiddlewareString() {
        return `${this.protocol}://${this.host}:${this.port}`;
    }

    getProtocol() {
        return this.protocol;
    }

    getHost() {
        return this.host;
    }

    getPort() {
        return this.port;
    }

    fetch(endpoint) {
        return this.http
            .get('http://localhost:3000/polls');
    }
}
