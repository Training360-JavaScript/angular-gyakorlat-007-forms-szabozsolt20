import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss']
})
export class EventEditorComponent implements OnInit {

  event$: Observable<Event>=this.ar.params.pipe(
    switchMap(params => this.eventService.get(params['id']))
  );

  constructor(
    private ar: ActivatedRoute,
    private eventService: EventService
  ) { }

  onUpdate(form: NgForm): Observable<Event> {
    return this.eventService.update(form.value);
  }

  ngOnInit(): void {

  }
}
