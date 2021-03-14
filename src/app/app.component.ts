import {
  Component,
  OnInit,
  Renderer2,
  HostListener,
  Inject
} from '@angular/core';
import { Location } from '@angular/common';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    public location: Location,
    @Inject(DOCUMENT) document
  ) {}
  @HostListener('window:scroll', ['$event'])
  // Aqui altera a cor da Navbar
  onWindowScroll(e) {
    if (window.pageYOffset > 100) {
      const element = document.getElementById('navbar-top');
      if (element) {
        element.classList.remove('navbar-transparent');
        element.classList.add('bg-rainbow');
      }
    } else {
      const element = document.getElementById('navbar-top');
      if (element) {
        element.classList.add('navbar-transparent');
        element.classList.remove('bg-rainbow');
      }
    }
  }
  ngOnInit() {
    this.onWindowScroll(event);
  }
}
