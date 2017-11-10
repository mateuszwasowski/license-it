import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BackendSimpleCommunicationService} from '../../shared/backend-communication/backend-simple-communication.service';
import {Observable, Subject} from 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {
  groupForm: FormGroup;
  isValid$: Observable<boolean>;

  constructor(private backendService: BackendSimpleCommunicationService, private router: Router) {}

  ngOnInit() {
    this.groupForm = new FormGroup({
      name: new FormControl()
    });
    this.isValid$ = new Observable((observer) => {
      observer.next(true);
    });
  }

  addGroup() {
    if (this.groupForm.valid) {
      const subject = new Subject();

      this.backendService.addGroup(this.groupForm.controls.name.value).subscribe((data) => {
        subject.next(true);
        this.router.navigate(['/group']);
      }, () => subject.next(false));
      this.isValid$ = subject.asObservable().first();
    }
  }
}
