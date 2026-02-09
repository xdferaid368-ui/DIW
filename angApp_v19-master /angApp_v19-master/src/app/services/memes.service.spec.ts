import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Meme {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
}

@Injectable({
  providedIn: 'root'
})
export class MemesService {

  private API_URL = 'https://api.imgflip.com/get_memes';

  constructor(private http: HttpClient) { }

  getMemes(): Observable<Meme[]> {
    return new Observable(observer => {
      this.http.get<any>(this.API_URL).subscribe(response => {
        if(response.success) {
          observer.next(response.data.memes);
        } else {
          observer.error('Error al cargar memes');
        }
        observer.complete();
      }, error => observer.error(error));
    });
  }
}
