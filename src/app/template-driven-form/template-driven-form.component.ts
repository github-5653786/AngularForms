import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {


  ngOnInit(): void {
  }
  showIcon: boolean;
  showIcons: boolean;
  constructor() {
    this.showIcon = false;
    this.showIcons = true;
  }
  onSubmit() {
    window.location.reload();
  }

  iconHide() {
    let a = (document.getElementById("Password") as HTMLInputElement);
    if (a.type === 'password') {
      a.type = 'text';
      this.showIcon = true;
      this.showIcons = false;

    } else {
      a.type = 'password';
      this.showIcon = false;
      this.showIcons = true;

    }
  }

}
