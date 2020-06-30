import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  template: `
    <div class="container">
      <div class="section">
        <div class="row">
          <div class="col s12 center">
            <div class="carousel">
              <a class="carousel-item" href="#one!"
                ><img src="./../../../assets/img/1.jpeg"
              /></a>
              <a class="carousel-item" href="#two!"
                ><img src="./../../../assets/img/2.jpeg"
              /></a>
              <a class="carousel-item" href="#three!"
                ><img src="./../../../assets/img/3.jpeg"
              /></a>
              <a class="carousel-item" href="#four!"
                ><img src="./../../../assets/img/4.jpeg"
              /></a>
              <a class="carousel-item" href="#five!"
                ><img src="./../../../assets/img/5.jpeg"
              /></a>
            </div>

            <h3><i class="mdi-content-send brown-text"></i></h3>
            <h4>Contact Us</h4>
            <p class="left-align light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque id nunc nec volutpat. Etiam pellentesque tristique
              arcu, non consequat magna fermentum ac. Cras ut ultricies eros.
              Maecenas eros justo, ullamcorper a sapien id, viverra ultrices
              eros. Morbi sem neque, posuere et pretium eget, bibendum
              sollicitudin lacus. Aliquam eleifend sollicitudin diam, eu mattis
              nisl maximus sed. Nulla imperdiet semper molestie. Morbi massa
              odio, condimentum sed ipsum ac, gravida ultrices erat. Nullam eget
              dignissim mauris, non tristique erat. Vestibulum ante ipsum primis
              in faucibus orci luctus et ultrices posuere cubilia Curae;
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class ContactUsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
