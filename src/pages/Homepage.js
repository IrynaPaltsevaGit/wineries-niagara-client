import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import WineryList from '../components/WineryList/WineryList';
import Header from '../components/Header/Header';


export default function Homepage({wineries}) {

    useEffect(() => {
        console.log("Homepage");
      }, []);

  return (
    <>
    <WineryList wineries = {wineries}/>
    </>
    );
};


