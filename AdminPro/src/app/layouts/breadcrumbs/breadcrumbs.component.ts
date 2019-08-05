import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  pageTitle: string;
  url: string;

  constructor( private router: Router, private title: Title, private meta: Meta ) {
    this.getDataRoute().subscribe(
      event => {
      console.log('Titulo ', event);
      this.pageTitle = event;
      this.title.setTitle('AdminPro - ' + event);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: event
      };
      this.meta.updateTag( metaTag );
    });
  }

  ngOnInit() {
  }

  getDataRoute() {
    return this.router.events.pipe(
      filter( ( evt ) => evt instanceof ActivationEnd ),
      filter( (evt: ActivationEnd) => evt.snapshot.data.title !== undefined ),
      map( (evt: ActivationEnd) => evt.snapshot.data.title )
    );
  }
}
