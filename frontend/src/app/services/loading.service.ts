import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private isLoadingSubject = new BehaviorSubject<boolean>(false);

  constructor() { }

  showLoading(){
    this.isLoadingSubject.next(true); //anybody who's listening to this subject will notify is true
  }

  hideLoading(){
    this.isLoadingSubject.next(false)
  }

  get isLoading(){
    return this.isLoadingSubject.asObservable();
  }
}
