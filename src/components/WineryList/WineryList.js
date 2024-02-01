import React from 'react'
import { useState, useEffect } from 'react';

export default function WineryList({wineries}) {
    
  return (
    <div>
        <ul className='wineries'>
      {
        wineries.map((item, i) => {
          return (
            <li className='winneries__item' key={`item-${i}`}>
              <div className='winneries__item-text'>
                <p>{ item.title}</p>
                <p> {item.address}</p>
              </div>
              <Link to={/details/{item.id}} ><img className='winneries__img' src={item.image} /> </Link>
            </li>
          );
        })
      }
      </ul>
    </div>
  )
}
