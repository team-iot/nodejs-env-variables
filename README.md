## Express-App mit Slot-spezifischer Konfigurationsdatei

* Applikation: Angular 4 CLI ohne eigenes Server-Backend
* Hosting: Azure Web App mit Deployment Slots "test" und "final"
* Konfiguration: unterschiedliche Konfigurationsdateien in Abhängigkeit von Umgebungsvariable pro Slot (config.dev-test.json und config.dev-final.json)

## Lösung

* Angular-App wird als Express-App (NodeJS) ausgeführt, siehe server.js
* Konfigurationsdateien liegen im assets-Ordner im dist-Verzeichnis
* load-Methode im Angular-Service "ConfigurationService" wird in app.module.ts einmal beim Start der Anwendung ausgeführt
* ConfigurationService ruft per http.get die Ressource "/config" auf und parst die Antwort in ein Configuration-Objekt
* Konfiguration der "/config"-Route in server.js sorgt für dynamisches Zusammensetzen des Dateipfades zur gewünschten Konfigurationsdatei
* ConfigurationService gibt Configuration-Objekt über getConfiguration-Methode an beliebige Komponenten oder Services zurück
