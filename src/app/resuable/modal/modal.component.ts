import { Component, Input} from '@angular/core';
import { CommonServiceService } from 'src/app/common-service.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  @Input() title = "";

  constructor(private offcanvasService:CommonServiceService){}

  closeOffcanvas(){
    this.offcanvasService.closeModal();
  }
}
