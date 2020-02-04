import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'passwordPipe'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): any {
    if(activar){
      let pwd:string = "";
      for(let i=0; i<value.length;i ++){
        pwd += "*";
      }
      return pwd;
    }else{
      return value;
    }
  }
}
