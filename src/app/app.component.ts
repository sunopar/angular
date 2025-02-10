import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getProvider } from '@binance/w3w-ethereum-provider';
console.log("🚀 ~~ W3wEthereumProvider:", getProvider)

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular';
}
