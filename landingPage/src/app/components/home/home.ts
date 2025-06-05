import { Component } from '@angular/core';
import { Header } from '../header/header';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, NgOptimizedImage],
  providers: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
 