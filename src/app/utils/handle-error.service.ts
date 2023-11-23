import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HandleErrorService {
  handleError(error: any): Observable<never> {
    console.error('Ocorreu um erro:', error);
    throw new Error('Erro na solicitação HTTP');
  }
}
