import { Route, Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import swal from 'sweetalert';
@Component({
  selector: 'app-category',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule, HttpClientModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})

export class CategoryComponent  {
  cateFormAdd: FormGroup;

  constructor(private formbuilder: FormBuilder, private http: HttpClient, private router: Router) {
    this.cateFormAdd = this.formbuilder.group({
      name: ['',[Validators.required]]
    })
  }

  handleAddCategory(category: any):Observable<any> {
     return this.http.post<any>('http://localhost:3000/categories',category)
  }

  onSubmit() {
    this.handleAddCategory(this.cateFormAdd.value).subscribe(
      data => {
        swal('Them moi thanh cong')
        .then(() => this.router.navigate(['/dashboard/categories']))
  })


  }}