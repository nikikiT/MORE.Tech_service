import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {HelperUtilService} from "../../../shared/services/helper-util.service";
import {publish} from "rxjs";

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

@Input('rating') public rating: number = 3;
@Input('starCount') public starCount: number = 5;
@Input('color') public color: string = 'accent';
@Input("withSelect") public withSelect: boolean = true;
@Input("sizeStar") public sizeStar: number = 20;
@Output() private ratingUpdated = new EventEmitter();

public ratingArr:number[] = [];

  @Input()
  disabled: boolean = false;

  constructor(private helpers: HelperUtilService) {
  }


  ngOnInit() {
    for (let index = 0; index < this.starCount; index++) {
      this.ratingArr.push(index);
    }
  }
  onClick(rating:number) {
    if(!this.withSelect) return false;
    this.ratingUpdated.emit(rating);
    return false;
  }

}
export enum StarRatingColor {
  primary = "primary",
  accent = "accent",
  warn = "warn"
}

