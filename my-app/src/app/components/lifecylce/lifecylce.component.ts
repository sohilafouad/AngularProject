import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecylce',
  standalone: true,
  imports: [],
  templateUrl: './lifecylce.component.html',
  styleUrl: './lifecylce.component.css'
})
export class LifecylceComponent  implements OnInit, OnChanges,DoCheck,AfterContentInit,AfterViewInit,AfterContentChecked,AfterViewChecked,OnDestroy{
 firstname:string='sohila'
  constructor() {
  console.log("constructor")//1
    
  }

  ngOnInit(): void {
    setTimeout(()=>{
     this.firstname="SOHAILAA";
    },2000
    );
  console.log(' OnInit')//2 bytnfez mra w7da bs lma el component by7slo init
  }

  ngDoCheck(): void {
    console.log("docheck")//detecte any changes bt2sr 3la elstatus 
   }
   ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges")//hyrn lma yb2a feh input decoretor
     }

     ngAfterViewInit(): void {
      console.log("AfterViewInit")//by7sl leha run lma html kolo yt3mlo init
       }

  ngAfterViewChecked(): void {
console.log("AfterViewChecked")
  }


  ngAfterContentInit(): void {
    console.log("AfterContentInit")//by7sl leha run after oninit
  }


  ngAfterContentChecked(): void {
  console.log("AfterContentChecked")//detect any change 7sl fe elcontent
  }
 

  ngOnDestroy(): void {
 console.log("onDestroy")//da a5r 7aga 5als by7sl lma a3ml unsubscribe
  }
}
