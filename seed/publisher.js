const db = require('../db')
const { Publisher } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))


const main = async () => {
    const publishers = [
        {
            name: "Hyperion",
            year_founded: 1991,
            address: "77 West 66th Street, New York, NY 10023",
            image: 'https://static.wikia.nocookie.net/disney/images/0/0e/Disney_Hyperion_logo.jpg/revision/latest?cb=20210829235026',
        },
        {
            name: "HarperCollins",
            year_founded: 1817,
            address: "195 Broadway, New York, NY 10007",
            image: 'https://i.shgcdn.com/b34ef6c1-eb43-4941-802d-73edabcf325e/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        },
        {
            name: "St. Martins Press",
            year_founded: 1952,
            address: "175 Fifth Avenue, New York, NY 10010",
            image: 'https://static.macmillan.com/static/smp/smpg-2022-virtual-conference/img/smp.svg',
        },
        {
            name: "Scribner",
            year_founded: 1846,
            address: "1230 Avenue of the Americas, New York, NY 10020",
            image: 'https://www.scribner.com/wp-content/uploads/2017/06/scribner-logo.png',
        },
        {
            name: "Penguin Books",
            year_founded: 1935,
            address: "80 Strand, London WC2R 0RL, England",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZAAocbe_yo06rbrlAdDHurWEXHWPUDD4STQ&s',
        },
        {
            name: "Vintage Books",
            year_founded: 1954,
            address: "1745 Broadway, 12th Fl., New York, NY US",
            image: 'https://upload.wikimedia.org/wikipedia/en/a/ae/Vintage_Books_logo.png',
        },
        {
            name: "Scholastic",
            year_founded: 1920,
            address: "555 Broadway, New York, NY 10012",
            image: 'https://shop.scholastic.com/on/demandware.static/-/Sites-schl-egift-storefront-catalog/default/dwee06f21d/images/large/scholasticlogo.png',
        },
        {
            name: "Europa Editions",
            year_founded: 2005,
            address: "214 West 29th Street, New York, NY 10001",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMe6X-OcKCcTwpZIlYBbBeuT-8qKKdxeH8UA&s',
        },
        {
            name: "Tor",
            year_founded: 1980,
            address: "120 Broadway, New York, NY 10271",
            image: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Tor_Books_2016.svg/1200px-Tor_Books_2016.svg.png',
        },
        {
            name: "Mariner Books",
            year_founded: 1997,
            address: "215 Park Avenue South, New York, NY 10003",
            image: 'https://i.shgcdn.com/99876b18-b4f0-4d3b-9dc6-b01104c431b2/-/format/auto/-/preview/3000x3000/-/quality/lighter/',
        },
        {
            name: "W.W. Norton & Company",
            year_founded: 1923,
            address: "500 Fifth Avenue, New York, NY 10110",
            image: 'https://pbs.twimg.com/profile_images/1742225536607272960/-78rOEN-_400x400.jpg',
        },
        {
            name: "Hackett",
            year_founded: 1972,
            address: "3333 Massachusetts Avenue, Indianapolis, IN 46218",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCofE-AABDTss2ccxQzFFK-gPUA6MXQoYVg&s',
        },
        {
            name: "Oxford",
            year_founded: 1586,
            address: "Great Clarendon Street, Oxford OX2 6DP, England",
            image: 'https://www.eifl.net/sites/default/files/styles/inner_page_logo/public/ouplogo.jpg?itok=9uoCRZKA',
        },
        {
            name: "Barnes and Noble",
            year_founded: 1886,
            address: "33 East 17th Street, New York, NY 10003",
            image: 'https://www.jjhebertonline.com/wp-content/uploads/2023/04/IMG_0569.png',
        },
        {
            name: "Bantam",
            year_founded: 1945,
            address: "1540 Broadway, New York, NY 10036",
            image: 'https://uspto.report/TM/73309220/mark.png',
        },
        {
            name: "Modern Library",
            year_founded: 1917,
            address: "1745 Broadway, New York, NY 10019",
            image: 'https://www.randomhousebooks.com/wp-content/uploads/2022/02/modern-library.png',
        },
        {
            name: "Anchor",
            year_founded: 1953,
            address: "440 West Colfax Street Unit 1132, Palatine, IL 60078",
            image: 'https://www.penguinrandomhouse.ca/sites/default/files/2018-06/anchor_canada.png',
        },
        {
            name: "Riverhead Books",
            year_founded: 1994,
            address: "1745 Broadway, New York City, New York 10019",
            image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Riverhead_Books_logo.png',
        },
        {
            name: "Farrar, Straus, and Giroux",
            year_founded: 1946,
            address: "18 West 18th Street, New York, NY 10011",
            image: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGCK9ZVKyh1E-ZsCDVanIV63juAw9BvoOaTZTxwIrFPuGXjTcQWkQe1T1cueMow5HmQhZDdknsLvzTtPKnj76r3cHrqXHz4AmEgGJ7ImzFmDuP0A2jetI_plmGSBfOAF3fVScRHRtyPnub/s1600/farrar-straus-giroux-logo-jpgborder.jpg',
        },
        {
            name: "Hachette",
            year_founded: 2006,
            address: "1290 Avenue of the Americas, New York, NY 10104",
            image: 'https://www.hachettebookgroup.com/wp-content/uploads/2023/04/HBGSites_Hachette-Books_Header-Logo.png',
        },
        {
            name: "Harvard Business Review",
            year_founded: 1994,
            address: "60 Harvard Way, Boston, Massachusetts 02163",
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57ApNKX85noQj-Y_XUKvTg4GMOGsb6qZURA&s',
        },
        {
            name: "Rodale Books",
            year_founded: 1930,
            address: "733 3rd Avenue, 15th Floor, New York, NY 10014",
            image: 'https://www.randomhousebooks.com/wp-content/uploads/2022/01/RodaleLogo2022-253x300.png',
        },
        {
            name: "Melville House",
            year_founded: 2001,
            address: "46 John Street, Brooklyn, NY 11201",
            image: 'https://s3-media0.fl.yelpcdn.com/bphoto/UWwtyLM8HJAvyJfMpn7CXw/348s.jpg',
        },
     
        
        
    

    ]

    await Publisher.insertMany(publishers)
    console.log("Created some publishers!")
}
const run = async () => {
    await main()
    db.close()
}

run()