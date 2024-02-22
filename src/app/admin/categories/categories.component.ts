import { RouterLink } from '@angular/router';
import { CategoryType } from '../types/category';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';
import { CategoryService } from '../../category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
  standalone: true,
  imports: [RouterLink, CommonModule],
})
export class CategoriesComponent implements OnInit {
  categories!: CategoryType[];
  constructor(private categoryService: CategoryService) {}

  ngOnInit() {
    this.getListCategory();
  }

  getListCategory() {
    this.categoryService
      .getCategories()
      .subscribe((data) => (this.categories = data));
  }

  onDelete(id: string) {
    if (id) {
      Swal.fire({
        title: 'Xóa danh mục?',
        text: 'Bạn chắc chắn muốn xóa danh mục này?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Xóa',
        cancelButtonText: 'Hủy',
      }).then((result) => {
        if (result.isConfirmed) {
          this.categoryService.deleteCategory(id).subscribe(
            () => {
              Swal.fire('Đã xóa!', 'Xóa danh mục thành công', 'success');
              this.getListCategory();
            },
            (error) => {
              console.error('Error deleting category:', error);
              Swal.fire('Lỗi', 'Đã xảy ra lỗi khi xóa danh mục', 'error');
            }
          );
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          Swal.fire('Đã hủy', 'Bạn đã hủy thao tác thành công', 'error');
        }
      });
    }
  }
}

