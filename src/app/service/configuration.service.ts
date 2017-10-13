import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from "rxjs/Observable";
import { Configuration } from '../model/configuration.model';

// Service zum Auslesen von Konfigurationseinstellungen
@Injectable()
export class ConfigurationService {
  // Konfigurationsobjekt der Anwendung
  private configuration: Configuration;

  // Subscription für das Auslesen der Konfiguration
  private configSubscription: any;

  // Erstellt ein neues Objekt vom Typ ConfigurationService
  constructor(private http: HttpClient) {
  }

  // Lädt die Konfiguration aus der entsprechenden Ressource,
  // wobei der Express-Server anhand einer serverseitigen
  // Umgebungsvariablen entscheidet, den Inhalt welcher
  // konkreten Datei er zurückgibt
  load(): Promise<Configuration> {
    this.configuration = null;

    return this.http
      .get('/config')
      .toPromise()
      .then((data: any) => {
        console.info(data);
        return this.configuration = data
      })
      .catch((err: any) => {
        console.warn(err);
        Promise.resolve();
      });
  }

  // Gibt das Konfigurationsobjekt der Anwendung zurück
  public getConfiguration(): Configuration {
    return this.configuration;
  }
}