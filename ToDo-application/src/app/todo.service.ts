import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class todoService {
  
  // | this string is getvalues or null
findAll():string[] | null {
  if (localStorage.getItem('todoList')  !=null) {
    return JSON.parse(localStorage.getItem('todoList')!);
  }
  return null;
}
//to add items
add(title:string): void{ 
  if(localStorage.getItem('todoList')== null) {
    let list: string[] =[];
    list.push(title);
    localStorage.setItem('todoList' , JSON.stringify(list));
  }else{
    let list: string[] =  JSON.parse(localStorage.getItem('todoList')!);
    list.push(title);
    localStorage.setItem('todoList' , JSON.stringify(list));

    
  }  
  } //to remove items
  delete(index:number): void{
    let list: string[] = JSON.parse(localStorage.getItem('todoList')!);
    list.splice(index, 1);
    localStorage.setItem('todoList' , JSON.stringify(list));
  }
  
}
