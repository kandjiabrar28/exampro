import { Component, OnInit } from '@angular/core';
import { CentreService } from 'src/app/services/centre.service';
import { Centre } from 'src/app/models/centre';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-editcentre',
  templateUrl: './editcentre.component.html',
  styleUrls: ['./editcentre.component.css']
})
export class EditcentreComponent implements OnInit {

  centres: Observable<Centre[]>;
  constructor(private centreService: CentreService) {
  }


  ngOnInit(): void {
    this.reloadData();
  }
  reloadData(){
    this.centres = this.centreService.getCentresList();
  }
  deleteCentre(id: number) {
    this.centreService.deleteCentre(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }


}
