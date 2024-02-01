import React from "react";
import { useState, useEffect } from "react";

export default function WineryList({ wineries }) {
  return (
    <main className="main">
      <div className="container">
        <ul className="article">
          {wineries.map((item, i) => {
            return (
              <li className="winneries__item" key={`item-${i}`}>
                <div className="article__text" data-number="01">
                  <p className="article_title">{item.title}</p>
                  <p className="article_subtitle"> {item.address}</p>
                  <a href="#" class="article_readmore">
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
