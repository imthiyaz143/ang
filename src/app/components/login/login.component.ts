import { Component, OnInit ,OnChanges, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() inputValue: string = '';
  data: string = 'Initial Data';

  constructor() {
    console.log('Constructor: Component is being created');
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialized');
    // Initial data setup or loading
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges: Input property changed', changes);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Custom change detection');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Component’s view and child views initialized');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: Component’s view and child views checked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Cleanup before component is destroyed');
  }

 
}
