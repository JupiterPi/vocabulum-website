import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-socials',
  templateUrl: './socials.component.html',
  styleUrls: ['./socials.component.css']
})
export class SocialsComponent {
  @Input() showName = true;
  @Input() showMail = true;
}
