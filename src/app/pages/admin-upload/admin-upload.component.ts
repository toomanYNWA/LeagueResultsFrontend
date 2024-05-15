import { Component, OnInit } from '@angular/core';
import { AdminUploadService } from './admin-upload.service';
import {ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-upload',
  templateUrl: './admin-upload.component.html',
  styleUrls: ['./admin-upload.component.css']
})
export class AdminUploadComponent implements OnInit {
  message: string="";
  constructor(private adminUploadService :AdminUploadService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  onTableSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.adminUploadService.uploadFile(file)
        .subscribe(
          response => {
            console.log('File uploaded successfully:', response);
            this.toastr.success("", "Table uploaded successfully!");
          },
          error => {
            console.error('Error uploading file:', error);
            this.toastr.error("","Uploading failed!");
            // Handle the error
          }
        );
    }
  }
  onPlayersSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.adminUploadService.uploadFilePlayers(file)
        .subscribe(
          response => {
            console.log('File uploaded successfully:', response);
            this.toastr.success("", "Players uploaded successfully!");
            // Handle the response from the backend
          },
          error => {
            console.error('Error uploading file:', error);
            this.toastr.error("","Uploading failed!");
          }
        );
    }
  }
  onContractsSelected(event: any) {
    const file: File = event.target.files[0];

    if (file) {
      this.adminUploadService.uploadFileContracts(file)
        .subscribe(
          response => {
            console.log('File uploaded successfully:', response);
            this.toastr.success("", "Contracts uploaded successfully!");
            // Handle the response from the backend
          },
          error => {
            console.error('Error uploading file:', error);
            this.toastr.error("","Uploading failed!");
          }
        );
    }
  }
  onFixturesSelected(event:any){
    const file: File = event.target.files[0];

    if (file) {
      this.adminUploadService.uploadFileFixtures(file)
        .subscribe(
          response => {
            console.log('File uploaded successfully:', response);
            this.toastr.success("","Fixtures uploaded successfully!");
            // Handle the response from the backend
          },
          error => {
            console.error('Error uploading file:', error);
            this.toastr.error("","Uploading failed!");
          }
        );
    }
  }
  onStatsSelected(event:any){
    const file: File = event.target.files[0];

    if (file) {
      this.adminUploadService.uploadFileStats(file)
        .subscribe(
          response => {
            console.log('File uploaded successfully:', response);
            this.toastr.success("","Stats uploaded successfully!");
            // Handle the response from the backend
          },
          error => {
            console.error('Error uploading file:', error);
            this.toastr.error("","Uploading failed!");
          }
        );
    }
  }

}
