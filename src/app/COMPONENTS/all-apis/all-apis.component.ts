import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-all-apis',
  templateUrl: './all-apis.component.html',
  styleUrls: ['./all-apis.component.scss']
})
export class AllApisComponent implements OnInit {

  apis: any;
  subscription: Subscription = new Subscription();

  constructor(public httpSer: HttpService) {
  }

  ngOnInit(): void {
    this.subscription.add(this.httpSer.getAllApis().subscribe((data) => {
      this.apis = data.entries;
      this.httpSer.dispatcherApi.next(this.apis);
    }));

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
