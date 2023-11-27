import { NgModule } from "@angular/core";
import { StarComponent } from "./star/star.component";
import { FormsModule } from "@angular/forms"
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule } from "@angular/router";
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

@NgModule({
    declarations: [StarComponent],
    imports: [FormsModule,
        NgbModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatToolbarModule,
        RouterModule,
        MatIconModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatRadioModule
    ],
    exports: [
        StarComponent,
        FormsModule,
        NgbModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatInputModule,
        MatToolbarModule,
        RouterModule,
        MatIconModule,
        MatSidenavModule,
        MatCheckboxModule,
        MatRadioModule
    ]
})
export class SharedModule { }