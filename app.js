let superheroData = [
  {
  name: 'Green Lantern',
  phone_number: '123-456-9910',
  comics_affiliation: 'DC',
  image_url: 'https://upload.wikimedia.org/wikipedia/en/8/80/Green_Lantern_Rebirth_6.jpg',
  },
  {
    name: 'Hulk',
    phone_number: '987-765-2254',
    comics_affiliation:'Marvel',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png?1488570766965',
  },
  {
    name: 'The Joker',
    phone_number: '690-098-1347',
    comics_affiliation: 'DC',
    image_url: 'http://cdn1-www.comingsoon.net/assets/uploads/2016/07/killingjoke.jpg',
  },
  {
    name: 'The Wolverine',
    phone_number: '990-747-8374',
    comics_affiliation: 'Marvel',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/c/c8/Marvelwolverine.jpg',
  },
  {
    name: 'Catwomen',
    phone_number: '478-987-0022',
    comics_affiliation: 'DC',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/7/71/Adam_Hughe%27s_Catwoman.jpg',
  },
  {
    name: 'Storm',
    phone_number: '467-987-0023',
    comics_affiliation: 'Marvel',
    image_url: 'https://upload.wikimedia.org/wikipedia/en/f/f9/X-Men_Storm_Main.png',
  },
]


angular
.module("superheroApp", [])
.controller("superheroCtrl", [ superheroController ])

function superheroController () {
  this.superhero = superheroData
}
