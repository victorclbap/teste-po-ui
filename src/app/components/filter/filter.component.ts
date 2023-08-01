
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PoNotificationService } from '@po-ui/ng-components';
import { Subject, takeUntil } from 'rxjs';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  @Output() dataSearched = new EventEmitter<Hero[]>();
  @Output() clearSearch = new EventEmitter<Hero[]>();

  formFilter!: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private heroesService: HeroesService,
    private notificationService: PoNotificationService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.formFilter = this.fb.group({
      input: [null, Validators.required],
    });
  }

  submitForm() {
    if (!this.formFilter.valid) {
      return this.notificationService.warning('Form Invalid!');
    }

    this.loading = true;

    this.heroesService
      .getHeros()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (res: Hero[]) => {
          this.dataSearched.emit(res);
        },
        error: (err: any) => {
          console.log(err);
        },
        complete: () => {
          this.loading = false;
        },
      });
  }

  clear() {
    this.clearSearch.emit();
    this.formFilter.get('input')!.reset();
  }
}
