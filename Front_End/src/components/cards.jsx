import React from 'react'
function cards({ item }) {
  console.log(item);

if (!item) {
  return null;
}

  return (
  <>
  <div className='mt-6 sm:mx-1 my-3 p-3'>
  <div className="card card-compact bg-base-100 w-92 shadow-xl">
  <figure>
    <img
      src={item.image}
      alt='Free Offers'
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{item.name}
    <div className="badge badge-secondary">Now Free</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
    <div class="badge badge-outline hover:bg-yellow-400 hover:text-black">{item.price}$</div>
    <div class="cursor-pointer py-1 px-2 hover:bg-blue-700 rounded-full border-[2px] hover:text-black ">Buy Now</div>
    </div>
  </div>
</div>
  </div>
  </>
  )
}

export default cards

