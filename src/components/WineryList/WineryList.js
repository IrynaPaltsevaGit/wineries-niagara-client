import React from "react";
import { useState, useEffect } from "react";

export default function WineryList({ wineries }) {
  return (
    <main className="main">
      <div className="container">
        <ul >
          {wineries.map((item, i) => {
            return (
              <li className="article" key={`item-${i}`}>
                <div className="article__text" data-number={i+1}>
                  <p className="article__title">{item.title}</p>
                  <p className="article__subtitle"> {item.address}</p>
                  <a href="#" class="article__readmore">
                    read more
                  </a>
                </div>
                <img className="article__image" src={item.image} />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
