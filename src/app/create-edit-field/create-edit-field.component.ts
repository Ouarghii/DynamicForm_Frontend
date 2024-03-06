import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Field } from '../field';

@Component({
  selector: 'app-create-edit-field',
  templateUrl: './create-edit-field.component.html',
  styleUrls: ['./create-edit-field.component.scss']
})
export class CreateEditFieldComponent {
  fieldForm: FormGroup=new FormGroup({});

  constructor(
    public dialogRef: MatDialogRef<CreateEditFieldComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.createForm();
    if (data.isEditMode) {
      this.setFormValues(data.field);
    }
  }

  createForm(): void {
    this.fieldForm = this.fb.group({
      fieldName: ['', Validators.required],
      type: ['', Validators.required],
      description: [''],
      required: [false]
    });
  }

  setFormValues(field: Field): void {
    this.fieldForm.patchValue({
      fieldName: field.fieldName,
      type: field.type,
      description: field.description,
      required: field.required
    });
  }

  onSave(): void {
    if (this.fieldForm.valid) {
      this.dialogRef.close(this.fieldForm.value);
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
