import { CurrencyPipe, DatePipe, NgFor, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CoursesService } from './courses.service';
import { SummaryPipe } from './summary.pipe';

@Component({
  selector: 'courses',
  standalone: true,
  imports: [
    NgFor,
    FormsModule,
    UpperCasePipe,
    CurrencyPipe,
    DatePipe,
    SummaryPipe,
  ],
  template: `
    {{ course.title | uppercase }} <br />
    {{ course.rating }} <br />
    {{ course.students }} <br />
    {{ course.price | currency }} <br />
    {{ course.releaseDate | date }} <br />
    {{ course.describe | summary : 100 }} <br />
  `,
  providers: [CoursesService],
})
export class CoursesComponent {
  course = {
    title: 'The Complete Angular Course',
    rating: 4.945,
    students: 30123,
    price: 190.95,
    describe: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
    releaseDate: new Date(2016, 3, 1),
  };
}
