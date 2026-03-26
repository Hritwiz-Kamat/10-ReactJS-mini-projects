import React from "react";

// props is an JS object | props is shortform for 'properties'
// function Card(props) {
function Card({
  place = "Hanok Village, Seoul, Korea",
  author = "Jakob Jin",
  src_url = "https://images.pexels.com/photos/6896970/pexels-photo-6896970.jpeg",
  alt_text = "The Village Of Bukchon Hanok In Korea",
}) {
  // console.log(props);

  return (
    // <div>
    //     <img src="https://images.pexels.com/photos/6896970/pexels-photo-6896970.jpeg" alt="The Village Of Bukchon Hanok In Korea" />
    //     <h1 className='text-2xl bg-green-500 p-3 rounded'>A card for photos</h1>
    //     <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim, quas?</p>
    // </div>

    <div>
      <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
        <div>
          <img
            className="size-48 shadow-xl rounded-md"
            src={src_url}
            alt={alt_text}
          />
        </div>
        <div className="flex items-center md:items-start">
          <span className="font-medium text-sky-500">Place: {place}</span>
        </div>
        <div className="flex items-center md:items-start">
          <span className="font-medium text-sky-500">Author: {author}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
