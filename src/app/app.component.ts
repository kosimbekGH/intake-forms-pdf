import {Component} from '@angular/core';
import {Pr2GhodadraPdfService} from "./services/pr2-ghodadra-pdf.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private pr2GholdadraPdfService: Pr2GhodadraPdfService
  ) {}

  openPdf(){
    this.pr2GholdadraPdfService.generatePdf();
  }
}
