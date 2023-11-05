import React, { useEffect, useState } from "react";
import { Albums } from "./Albums";
import axios from "axios";

export const FetchingData = () => {
  const [albums, setAlbums] = useState([]);

  console.log(albums);
  useEffect(() => {
    //const tarea = fetch("https://jsonplaceholder.typicode.com/albums");

    //tarea
    //.then((res) => res.json())
    //.then((res) => setAlbums(res))
    //.catch((error) => console.log("error:", error));

    const tarea = axios.get("https://jsonplaceholder.typicode.com/albums");
    tarea
      .then((res) => setAlbums(res.data))
      .catch((error) => console.log("error:", error));
  }, []);

  const crear = () => {
    //fetch("https://jsonplaceholder.typicode.com/albums", {
    //method: "POST",
    //body: JSON.stringify({
    //userId: 1,
    //title: "nuevo album peso pluma",
    //}),
    //headers: {
    //  authorization: "16estrellas",
    //},

    axios.post("https://jsonplaceholder.typicode.com/albums", {
      userId: 2,
      title: "Album modificado",
    });
  };

  return <Albums albums={albums} crear={crear} />;
};
