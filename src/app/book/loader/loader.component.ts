import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {LoaderService} from '../../services/loader.service';
import {LoaderState} from './loader';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  show = false;

  private subscription: Subscription;

  constructor(private loaderService: LoaderService) {
    this.subscription = this.loaderService.loaderState
      .subscribe((state: LoaderState) => {
        this.show = state.show;
      });
  }

  ngOnInit() {
  }

  onDestroy() {
    this.subscription.unsubscribe();
  }
}
