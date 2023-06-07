import React from "react";
import Title from "./Title";
import bio from "../data/bio";

function Bio() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      <div className="w-full md:w-7/12">
        <Title>Bio</Title>

        {bio.map((bio) => (
          <a
            href="#"
            class=" m-1 block max-w-6xl p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {bio.title}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              {bio.description}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Bio;
