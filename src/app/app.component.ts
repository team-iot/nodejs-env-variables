import { Component } from '@angular/core';
import { ConfigurationService } from './service/configuration.service';
import { Configuration } from './model/configuration.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private configuration: Configuration;

  title: string;

  constructor(private configurationService: ConfigurationService) {
    this.configuration = this.configurationService.getConfiguration();
    this.title = this.configuration.url;
  }
}
