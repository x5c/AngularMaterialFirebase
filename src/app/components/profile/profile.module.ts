// Modules 3rd party
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule,
         MatToolbarModule, MatCardModule, MatDialogModule,MatListModule,MatDividerModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
// Components
import { ProfileComponent } from './profile.component';
import { ProfileSettingsComponent } from './profile-settings.component';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileSettingsComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule, MatCheckboxModule, MatMenuModule, MatInputModule,
    MatToolbarModule, MatCardModule, MatDialogModule,MatListModule,MatDividerModule,
    FormsModule,
    FlexLayoutModule 
  ],
  exports: [
    ProfileComponent,
    ProfileSettingsComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class ProfileModule {
}
