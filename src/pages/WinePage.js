import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function WinePage() {
  const { wineryId } = useParams();
  const [selectedWinery, setSelectedWinery] = useState([]);

  useEffect(() => {
    if (wineryId) {
      handleSelectedWinery(wineryId);
    }
  }, [wineryId]);

  async function handleSelectedWinery(wineryId) {
    try {
      const wineryDetails = await axios.get(
        `http://localhost:8080/details/${wineryId}`
      );
      setSelectedWinery(wineryDetails.data);
    } catch (error) {
      console.error("Error fetching winery details:", error);
    }
  }

  return (
    <section>
      <h1>{selectedWinery.title}</h1>
      <p>{selectedWinery.about}</p>
      <p>{selectedWinery.adress}</p>
      <p>{selectedWinery.rating}</p>
      <p>{selectedWinery.website}</p>
      <p>{selectedWinery.image}</p>
    </section>
  );
}
