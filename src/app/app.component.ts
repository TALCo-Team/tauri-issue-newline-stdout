import { ChangeDetectorRef, Component } from "@angular/core";
import { TauriService } from "src/services/tauri.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  programOutput = "";
  correctOutput = "";
  programPath = "./../test_exe/program"
  tauriService = new TauriService();

  constructor(private ref: ChangeDetectorRef){}

  runProgramError(event: SubmitEvent): void {
    event.preventDefault();

    this.programOutput = "";

    console.log("Starting program...");

    this.tauriService?.execProgram(this.programPath, (output)=>{
      this.programOutput += output;
      this.ref.detectChanges();
    })
  }

  runProgramCorrect(event: SubmitEvent): void {
    event.preventDefault();

    this.correctOutput = "";

    console.log("Starting program...");

    this.tauriService?.execProgram(this.programPath, (output)=>{
      this.correctOutput += output + "\n";
      this.ref.detectChanges();
    })
  }
}
