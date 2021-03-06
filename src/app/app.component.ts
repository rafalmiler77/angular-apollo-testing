import { Component } from '@angular/core';
import { FeatureTogglerService } from './topics/services/feature-toggler.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public featureTogglerService: FeatureTogglerService
  ) { }

  toggleFeature(feature: string) {
    this.featureTogglerService.toggleFeature(feature);
  }

  getStatus(feature: string): boolean {
    return this.featureTogglerService.config[feature];
  }

}
