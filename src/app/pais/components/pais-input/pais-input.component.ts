import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input()
  placeholder: string = ""

  termino: string = ""
  debounce: Subject<string> = new Subject();


  ngOnInit(): void {
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(valor => {
      this.onDebounce.emit(valor);

    })
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada() {

    this.debounce.next(this.termino);

  }
}
