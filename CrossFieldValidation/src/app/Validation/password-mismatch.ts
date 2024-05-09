import { AbstractControl } from "@angular/forms";
export function checkPas(control:AbstractControl):any{
let pas1=control.get('pas1')?.value;
let pas2=control.get('pas2')?.value;
if(pas1==pas2){
    return {'mismatchError':false}
}else{
    return {'mismatchError':true}
}
}