import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  length = 0;
  includeUpperCaseLetters = false;
  includeLowerCaseLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = '';

  onChangeLength(value: string){
    const parsedValue = parseInt(value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
  }

  onChangeUseUppercaseLetters(){
    this.includeUpperCaseLetters = !this.includeUpperCaseLetters;
  }

  onChangeUseLowercaseLetters(){
    this.includeLowerCaseLetters = !this.includeLowerCaseLetters;
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols;
  }


  onButtonClicked(){
    const UpperCaseLetters = 'ABCADEFGHIJKLMNOPQRSTUVWXYZ';
    const LowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()-+=';

    let validChars = '';
    if(this.includeUpperCaseLetters){
      validChars += UpperCaseLetters;
    }
    if(this.includeLowerCaseLetters){
      validChars += LowerCaseLetters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    /* if(validChars.length === 0){
      return '';
    } */

    let generatedPassword = '';
    for(let i = 0; i < this.length; i++){
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  
  
}
