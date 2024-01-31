import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-empty-route',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './empty-route.component.html',
  styleUrl: './empty-route.component.scss',
})
export class EmptyRouteComponent {}
