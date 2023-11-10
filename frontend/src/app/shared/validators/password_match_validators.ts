import { AbstractControl } from "@angular/forms"

export const PasswordsMatchValidator = (passwordControlName:string,
    confirmPasswordControlName:string) =>{
        const validator = (form:AbstractControl) =>{
            const passwordControl = form.get(passwordControlName);
            const confirmPassWordContorl = form.get(confirmPasswordControlName);

            if(!passwordControl || !confirmPassWordContorl) return;
            if(passwordControl.value !== confirmPassWordContorl.value){
                confirmPassWordContorl.setErrors({notMatch:true});
            }else{
                const errors = confirmPassWordContorl.errors;
                if(!errors)return;
                delete errors.notMatch;
                confirmPassWordContorl.setErrors(errors);

            }
        }
        return validator;
    }