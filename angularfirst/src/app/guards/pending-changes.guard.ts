import { Observable } from "rxjs/Observable";
import { CanDeactivate } from '@angular/router';

export interface ComponentCanDeactivate {
    canDeactivate: () => boolean | Observable<boolean> //dönüş değeri boolean veya observable<boolean> olarabilir
}

export class PendingChangesGuard implements CanDeactivate<ComponentCanDeactivate> {
    canDeactivate(component: ComponentCanDeactivate): boolean | Observable<boolean> {
        if (component.canDeactivate()) {
            return true;
        }else{
            confirm("Değişiklikleri kaydetmediniz. Çıkmaktan emin misiniz?")
        }
    }
}