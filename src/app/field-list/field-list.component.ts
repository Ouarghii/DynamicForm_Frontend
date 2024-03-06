import { Component, Input, OnInit } from '@angular/core';
import { Field } from '../field';
import { FieldService } from '../field.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateEditFieldComponent } from '../create-edit-field/create-edit-field.component';

@Component({
  selector: 'app-field-list',
  templateUrl: './field-list.component.html',
  styleUrls: ['./field-list.component.scss']
})
export class FieldListComponent implements OnInit {
  fields: Field[] = [];
  errorMessage: string = '';

  constructor(private fieldService: FieldService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchFields();
  }

  fetchFields(): void {
    console.log(this.fields[0])
    this.fieldService.getFields().subscribe(
      fields => {
        this.fields = fields;
        console.log('Fetched fields:', this.fields);
      },
      error => {
        this.errorMessage = error;
      }
    );
  }

  openCreateFieldPopup(): void {
    const dialogRef = this.dialog.open(CreateEditFieldComponent, {
      width: '400px',
      data: { isEditMode: false }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createField(result);
      }
    });
  }

  editField(field: Field): void {
    const dialogRef = this.dialog.open(CreateEditFieldComponent, {
      width: '400px',
      data: { isEditMode: true, field }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.updateField(result, field.fieldName);
      }
    });
  }

  deleteField(id: number): void {
    if (confirm('Are you sure you want to delete this field?')) {
      this.fieldService.deleteField(id).subscribe(
        () => {
          this.fields = this.fields.filter(field => field.id !== id);
        },
        error => {
          console.error('Error deleting field:', error);
        }
      );
    }
}



private createField(field: Field): void {
  // Create a new object without the id property
  const { id, ...fieldWithoutId } = field;
  
  this.fieldService.createField(fieldWithoutId).subscribe(
    createdField => {
      this.fields.push(createdField);
    },
    error => {
      console.error('Error creating field:', error);
    }
  );
}



  private updateField(field: Field, fieldName: string): void {
    this.fieldService.updateField(field, fieldName).subscribe(
      updatedField => {
        const index = this.fields.findIndex(f => f.fieldName === fieldName);
        if (index !== -1) {
          this.fields[index] = updatedField;
        }
      },
      error => {
        console.error('Error updating field:', error);
      }
    );
  }
}
