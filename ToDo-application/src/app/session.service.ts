import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  // | this string is getvalues or null
  findAll():string[] | null {
    if (sessionStorage.getItem('todoList')  !=null) {
      return JSON.parse(sessionStorage.getItem('todoList')!);
    }
    return null;
  }
  //to add items
  add(title:string): void{ 
    if(sessionStorage.getItem('todoList')== null) {
      let list: string[] =[];
      list.push(title);
      sessionStorage.setItem('todoList' , JSON.stringify(list));
    }else{
      let list: string[] =  JSON.parse(sessionStorage.getItem('todoList')!);
      list.push(title);
      sessionStorage.setItem('todoList' , JSON.stringify(list));
  
      
    }  
    } //to remove items
    delete(index:number): void{
      let list: string[] = JSON.parse(sessionStorage.getItem('todoList')!);
      list.splice(index, 1);
      sessionStorage.setItem('todoList' , JSON.stringify(list));
    }
    
  }
  
  