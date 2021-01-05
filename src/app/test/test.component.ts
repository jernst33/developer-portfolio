import { Component, OnInit } from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) { }

  ngOnInit(): void {
    this.addMetaTags();
  }
  addMetaTags() {
    this.title.setTitle('Home Page');
    this.meta.addTags([
      { name: 'title', content: 'Home Page' },
    { name: 'description', content: 'This is Home Page Description'},
    { name: 'twitter:card', content: 'Home Page'},
    { name: 'og:url', content: 'home' },
      { name: 'og:title', content: 'Home Page' },
      { name: 'og:description', content: 'This is Home Page Description' },
      { name: 'og:image', content: '/assets/images/home-meta.jpg' }
    ]);
  }
}
