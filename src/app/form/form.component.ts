import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms'

import { FormdataserviceService } from '../formdataservice.service';
import { formtype } from '../formtype';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  def_data:formtype={
    name:'',
    email:'',
    feedback:'',
    comment:'',
  };
  defaultval:formtype=this.def_data;
  form : FormGroup;
  constructor(private formservice:FormdataserviceService) { 

  }

  ngOnInit(): void {
    this.form = new FormGroup({
      name:new FormControl(),
      email:new FormControl(),
      feedback:new FormControl(),
      comment:new FormControl()
    });
    this.formservice.get_defaultdata().subscribe(data => {
      this.def_data=data;
      this.form.setValue({
        name:this.def_data.name,
        email:this.def_data.email,
        feedback:this.def_data.feedback,
        comment:this.def_data.comment
      })
    });
  }

  onsubmit():void{
    this.formservice.post_data(this.form.value).subscribe(data=>{
      console.log(data);
      // if(data!==this.defaultval){
        
      //   alert("form submitted successfully");
      // }
      // else{
      //   alert('post request failed!!.Try again.Look If you are submitting invalid fields!')
      // }
    });
  }


}
