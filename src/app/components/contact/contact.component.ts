import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { LocalServiceService } from 'src/app/shared/service/local-service.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent  {




imageUrl: string = '';

constructor(private imageService: LocalServiceService) { }

fetchImage(): void {
  this.imageService.getImage().subscribe(
    blob => {
      this.imageUrl = URL.createObjectURL(blob);
    },
    error => {
      console.error('Error fetching image', error);
    }
  );
}
}
