import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemesService, Meme } from '../../services/memes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  // styleUrls: ['./listado.component.css'], // opcional
  standalone: true,
  imports: [CommonModule]
})
export class ListadoComponent {
  memes: Meme[] = [];
  loading = true;

  constructor(private memesService: MemesService) {
    this.memesService.getMemes().subscribe({
      next: (data) => {
        this.memes = data;
        this.loading = false;
      },
      error: (err) => {
        console.error(err);
        this.loading = false;
      }
    });
  }
}
