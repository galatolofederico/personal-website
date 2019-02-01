import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {Observer} from 'rxjs/Rx'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  bio: Observer<string>;
  profiles: Array<Profile>;
  
  constructor(private data: DataService) {
    library.add(fab)
  }

  ngOnInit() {
    this.profiles = this.data.getProfiles();
    this.bio = this.data.getBio()
  }

}
