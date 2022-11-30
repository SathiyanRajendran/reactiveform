import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reactiveform';
  userForm!: FormGroup;
  countryList=[
  {'countryname':'India'},
  {'countryname':'USA'},
  {'countryname':'England'}
  ];
  ngOnInit() {
    this.userForm=new FormGroup({
      'firstname':new FormControl(null,Validators.required),
      'lastname':new FormControl(null),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gender':new FormControl('female'),
      'isMarried':new FormControl(true),
      'address':new FormGroup({
        'country':new FormControl(null),
        'city':new FormControl(null),
        'street':new FormControl(null),
        'pincode':new FormControl(null)
      })
      
    });
    this.userForm.setValue({
        
          firstname:'muthu',
          lastname:'journey',
          email:'abc@gmail.com',
          gender:'male',
          isMarried:true,
              address:{
                country:'USA',
                city:"newyork",
                street:'wall mart',
                pincode:614203
              }
      }) ;
      this.userForm.patchValue({
        firstname:'White Blue'
      })

  }
  onSubmit(){
    console.log(this.userForm);
    //this.userForm?.reset();
  }
  
}
