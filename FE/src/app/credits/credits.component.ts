import { Component } from '@angular/core';
import { devTeam } from '../shared/app-data/dev-team-info';

@Component({
  selector: 'app-credits',
  templateUrl: './credits.component.html',
  styleUrls: ['./credits.component.css']
})
export class CreditsComponent {
  public devTeamData = devTeam;

}
