import { Component } from '@angular/core';

const stringValue = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et commodo nisi. Praesent nisl enim, lobortis at libero a, facilisis volutpat sem. Vestibulum sollicitudin blandit faucibus. Etiam efficitur consequat facilisis. Duis aliquet bibendum tortor et dapibus. Maecenas sed sapien eget quam pretium porta. Praesent in imperdiet elit, quis aliquam ligula.";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  list: string[] = [];
  title = 'sticky-footer-example';

  addContent(): void {
    this.list.push(stringValue);
  }

  clear(): void {
    this.list = [];
  }
}
