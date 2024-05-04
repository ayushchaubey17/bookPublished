import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

export default function BlogImage() {
  return (
  <div className="flex justify-center   ">
          <ImageList className='w-10/12 sm:w-1/2  '>
      {itemData.map((item) => (
        <ImageListItem  key={item.img}>
            <div className="overflow-hidden"> <img className='hover:rotate-2 h-60  w-96 overflow-hidden hover:origin-center transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500  duration-300 ' 
            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x `}
            src={`${item.img}?w=248&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          /></div>
          <ImageListItemBar
            title={item.title}
            subtitle={<span>by: {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </div>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/3/doctype-hi-res.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJvb2slMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D',
    title: 'The Invisible Life of Addie LaRue',
    author: 'V.E. Schawab',
  },
  {
    img: 'https://images.unsplash.com/photo-1508394522741-82ac9c15ba69?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJvb2slMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3Dd',
    title: 'The Final Girl Support Group',
    author: 'Grady Hendrix',
  },
  {
    img: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGlicmFyeSUyMGJvb2t8ZW58MHx8MHx8fDA%3D',
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpYnJhcnklMjBib29rfGVufDB8fDB8fHww',
    title: 'A Psalm for the Wild-Built',
    author: 'Becky Chambers',
  },
  {
    img: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpYnJhcnklMjBib29rfGVufDB8fDB8fHww',
    title: 'The Bone Shard Emperor',
    author: 'Andera Stewart',
  },
  {
    img: 'https://images.unsplash.com/photo-1600431521340-491eca880813?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGxpYnJhcnklMjBib29rfGVufDB8fDB8fHww',
    title: 'The Jasmine Throne',
    author: 'Tasha Suri',
  },
  {
    img: 'https://images.unsplash.com/photo-1631528312327-ff94760f7bc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeSUyMGJvb2t8ZW58MHx8MHx8fDA%3D',
    title: 'Harry Potter and the Philosophers Stone',
    author: 'J.K. Rowling',
  },
  {
    img: 'https://tse1.mm.bing.net/th?id=OIP.n3sAXxDyR0gM6xT1ZwmXdQHaE8&pid=Api&P=0&h=220',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
  },
  {
    img: 'https://tse4.mm.bing.net/th?id=OIP.K0-6kdzB4K1dH6p0oBdUBAHaEo&pid=Api&P=0&h=220',
    title: 'The Alchemist',
    author: 'Paulo Coelho',
  },
  {
    img: 'https://tse2.explicit.bing.net/th?id=OIP.subUVqpUekSKPnSSrdPexgHaE8&pid=Api&P=0&h=220',
    title: 'The Da Vinci Code',
    author: 'Dan Brown',
  },
  {
    img: 'https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlicmFyeSUyMGJvb2t8ZW58MHx8MHx8fDA%3D',
    title: 'To Kill a Monckingbirf',
    author: 'Harper Lee',
  },
  {
    img: 'https://tse3.mm.bing.net/th?id=OIP.gYZtbBUR8Ey7vDW_POj6QAHaDp&pid=Api&P=0&h=220',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
];