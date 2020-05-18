import { Component, OnInit } from '@angular/core';
import { CentreService } from 'src/app/services/centre.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Centre } from 'src/app/models/centre';

@Component({
  selector: 'app-addcentre',
  templateUrl: './addcentre.component.html',
  styleUrls: ['./addcentre.component.css']
})
export class AddcentreComponent implements OnInit {

  centre: Centre;

  constructor(
    private route: ActivatedRoute, private router: Router, private centreService: CentreService) {
    this.centre = new Centre();
  }

  ngOnInit(): void{}

  onSubmit() {
    this.centreService.save(this.centre).subscribe(result => this.gotoCentreList());
  }

  gotoCentreList() {
    this.router.navigate(['/centres']);
  }

}
