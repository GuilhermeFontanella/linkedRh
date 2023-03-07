import { Component, OnInit } from '@angular/core';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label: 'Cargo',
        icon: PrimeIcons.BRIEFCASE,
        items: []
      },
      {
        label: 'Remuneração',
        icon: PrimeIcons.DOLLAR,
        items: []
      },
      {
        label: 'Colaborador',
        icon: PrimeIcons.ID_CARD,
        items: []
      },
      {
        label: 'Desempenho',
        icon: PrimeIcons.FILE,
        items: []
      },
      {
        label: 'Treinamento',
        icon: PrimeIcons.BOOK,
        items: []
      },
      {
        label: 'Formulário',
        icon: PrimeIcons.FILE_EDIT,
        items: []
      },
      {
        label: 'R.H',
        icon: PrimeIcons.USER,
        items: []
      },
    ]
  }

}
