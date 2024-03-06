// report.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  submittedData: any; // Change this type according to your data structure

  constructor() { }

  ngOnInit(): void {
    // Fetch submitted data from JSON file or backend and assign it to submittedData
    this.submittedData = {};
  }
}

