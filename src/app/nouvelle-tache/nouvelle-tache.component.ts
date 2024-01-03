import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';




@Component({
  selector: 'app-nouvelle-tache',
  templateUrl: './nouvelle-tache.component.html',
  styleUrl: './nouvelle-tache.component.css'
})
export class NouvelleTacheComponent {
  nouvelleTache: string = '';

  constructor(private router: Router) {}



  onSubmit() {
    // Logique à exécuter lors de la soumission du formulaire
    console.log('Formulaire de nouvelle tâche soumis avec succès!', this.nouvelleTache);

    // Navigation vers la page d'accueil après la soumission
    this.router.navigate(['/']);
  }
}
