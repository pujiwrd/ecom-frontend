export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  

  constructor(id, name, description = '', price = 0, imageUrl = 'https://d7z22c0gz59ng.cloudfront.net/cms/images/common/genre/mini_4wd/301030.jpg') {
    this.id = id
    this.name = name
    this.description = description
    this.price = price
    // this.imageUrl = imageUrl
  }
}
