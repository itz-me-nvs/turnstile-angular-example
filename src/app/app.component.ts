import { Component } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgxTurnstileFormsModule, NgxTurnstileModule } from 'ngx-turnstile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxTurnstileModule, NgxTurnstileFormsModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [],
})
export class AppComponent {

  constructor() {}

  title = 'cloudflare-bot'
  siteKey = "3x00000000000000000000FF" // Forces an interactive challenge
  siteKeyDark = "1x00000000000000000000AA" // Always passes
  // siteKey = "2x00000000000000000000AB" // Always blocks

  turnstileForm: FormGroup = new FormGroup({});

  sendCaptchaResponse(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
  }

  onCaptchaError(error: string) {
    console.log(`Captcha error: ${error}`);
  }
}
