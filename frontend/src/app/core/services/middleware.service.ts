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
    private apiVersion: string;

    constructor(private http: HttpClient) {
        this.protocol = environment.middleware.protocol || 'http';
        this.host = environment.middleware.host || 'localhost';
        this.port = environment.middleware.port || 3000;
        this.apiVersion = environment.middleware.apiVersion || 'v1';
    }

    getMiddlewareString() {
        return `${this.protocol}://${this.host}:${this.port}/api/${this.apiVersion}`;
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

    getApiVersion() {
        return this.apiVersion;
    }

    fetch(endpoint) {
        const url = this.getMiddlewareString() + endpoint;
        return this.http
            .get(url);
    }

    get(endpoint) {
        const url = this.getMiddlewareString() + endpoint;
        return this.http
            .get(url);
    }

    post(endpoint, data) {
        const url = this.getMiddlewareString() + endpoint;
        return this.http
            .post(url, data);
    }

    put(endpoint, data) {
        const url = this.getMiddlewareString() + endpoint;
        return this.http
            .put(url, data);
    }

    delete(endpoint) {
        const url = this.getMiddlewareString() + endpoint;
        return this.http
            .delete(url);
    }
}
