// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Field } from '../field'; // Import the Field interface

// @Component({
//   selector: 'app-dynamic-form',
//   templateUrl: './dynamic-form.component.html',
//   styleUrls: ['./dynamic-form.component.scss']
// })
// export class DynamicFormComponent implements OnInit {
//   form: FormGroup;
//   fields: Field[];

//   constructor(
//     private fb: FormBuilder,
//     private http: HttpClient
//   ) {
//     this.form = this.fb.group({});
//     this.fields = [];
//   }

//   ngOnInit(): void {
//     this.fetchFields();
//   }

//   fetchFields(): void {
//     this.http.get<Field[]>('http://localhost:5260/api/field').subscribe(
//       fields => {
//         this.fields = fields;
//         this.createFormControls();
//       },
//       error => {
//         console.error('Error fetching fields:', error);
//       }
//     );
//   }

//   createFormControls(): void {
//     this.form = this.fb.group({});
//     this.fields.forEach(field => {
//       const validators = field.required ? [Validators.required] : null;
//       this.form.addControl(field.fieldName, this.fb.control('', validators));
//     });
//   }

//   onSubmit(): void {
//     if (this.form.invalid) {
//       // Form is invalid, display error messages or prevent form submission
//       console.log('Form is invalid');
//       return;
//     }
    
//     const formData = {
//       JsonValue: JSON.stringify(this.form.value) // Wrap form value in JSON.stringify to match the expected structure
//     };
//     console.log('Form Data:', formData);
    
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json'
//       })
//     };
  
//     this.http.post<any>('http://localhost:5260/api/form', formData, httpOptions).subscribe(
//       (response) => {
//         console.log('Form data saved successfully. Form ID:', response); // Response should contain the saved form ID
//         // Do something with the formId, such as displaying it to the user or using it in further operations
//         this.form.reset();
//       },
//       error => {
//         console.error('Error saving form data:', error);
//       }
//     );
//   }
  
  
// }
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormModel } from '../form-model'; // Import the FormModel interface

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss']
})
export class DynamicFormComponent implements OnInit {
  form: FormGroup;
  fields: any[]; // Update this type according to the response from the server

  constructor(
    private fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({});
    this.fields = [];
  }

  ngOnInit(): void {
    this.fetchFields();
  }

  fetchFields(): void {
    this.http.get<any[]>('http://localhost:5260/api/field').subscribe(
      fields => {
        this.fields = fields;
        this.createFormControls();
      },
      error => {
        console.error('Error fetching fields:', error);
      }
    );
  }

  createFormControls(): void {
    this.form = this.fb.group({});
    this.fields.forEach(field => {
      const validators = field.required ? [Validators.required] : null;
      this.form.addControl(field.fieldName, this.fb.control('', validators));
    });
  }

  onSubmit(): void {
    if (this.form.invalid) {
      console.log('Form is invalid');
      return;
    }
    
    const formData: FormModel = {
      jsonValue: JSON.stringify(this.form.value) // Wrap form value in JSON.stringify to match the expected structure
    };
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
    this.http.post<any>('http://localhost:5260/api/form', formData, httpOptions).subscribe(
      (response) => {
        console.log('Form data saved successfully. Form ID:', response); // Response should contain the saved form ID
        this.form.reset();
      },
      error => {
        console.error('Error saving form data:', error);
      }
    );
  }
}
