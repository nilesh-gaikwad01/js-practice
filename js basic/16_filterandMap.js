
// Filter and Map in Javascript


// Filter 

let mynums = [1,2,3,4,5,6,7,8,9,10];

// const newNo = mynums.filter((num) => num>4 );

// console.log(newNo)

// Note: Condition is must inside the filter call back.

const Newarr = [];

mynums.forEach((num) => {
    if (num > 4 ) {

        Newarr.push(num);
    }
})

console.log(Newarr);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const newBooks = books.filter((bk) => bk.genre === 'History')

//   console.log(newBooks);
  
  const Onebook = books.filter((bk) => {
    return bk.publish >=2000
    

})

//   console.log(Onebook);

