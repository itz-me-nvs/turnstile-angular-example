// app.module.ts
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgxTurnstileModule } from "ngx-turnstile";

@NgModule({
  imports: [NgxTurnstileModule, CommonModule],
  exports: [NgxTurnstileModule]
})
export class SharedModule {}