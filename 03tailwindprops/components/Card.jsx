import React from "react";

function Card({ title = "dear" }) {
  return (
    <div>
      <div class="relative h-[100px] w-[150px] rounded-md">
        <img
          src="https://images.pexels.com/photos/17867773/pexels-photo-17867773/free-photo-of-buck-and-deer-on-grassland.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="AirMax Pro"
          class="z-0 h-[100px] w-[150px] rounded-md object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div class="absolute bottom-4 left-4 text-left">
          <h1 class="text-lg font-semibold text-white">{title}</h1>
          <p class="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button class="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            View Profile →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
