import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ControlPanelComponent } from './control-panel/control-panel.component';
import { DicePanelComponent } from './dice-panel/dice-panel.component';
import { DiceFirstFaceComponent } from './dices/dice-first-face/dice-first-face.component';
import { DiceSecondFaceComponent } from './dices/dice-second-face/dice-second-face.component';
import { DiceThirdFaceComponent } from './dices/dice-third-face/dice-third-face.component';
import { DiceFourthFaceComponent } from './dices/dice-fourth-face/dice-fourth-face.component';
import { DiceFifthFaceComponent } from './dices/dice-fifth-face/dice-fifth-face.component';
import { DiceSixthFaceComponent } from './dices/dice-sixth-face/dice-sixth-face.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlPanelComponent,
    DicePanelComponent,
    DiceFirstFaceComponent,
    DiceSecondFaceComponent,
    DiceThirdFaceComponent,
    DiceFourthFaceComponent,
    DiceFifthFaceComponent,
    DiceSixthFaceComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
