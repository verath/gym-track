import { EventEmitter, Component, Input, OnChanges, SimpleChanges, Output } from '@angular/core';

@Component({
  selector: 'app-title-toolbar',
  templateUrl: './title-toolbar.component.html',
  styleUrls: ['./title-toolbar.component.css']
})
export class TitleToolbarComponent implements OnChanges {

  @Input() title = 'Gym Track';

  showBack = false;
  @Output() private back = new EventEmitter<void>();

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.showBack = this.back.observers.length > 0;
  }

  onBack() {
    this.back.emit();
  }

}
