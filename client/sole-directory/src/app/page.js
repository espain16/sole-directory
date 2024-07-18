"use client";
import React from "react";
import { useState } from "react";
import Modal from "./components/Modal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModalOnClick() {
    setIsModalOpen(true);
    console.log("Your modal when you style it shall go here ");
  }

  function closeModalOnClick() {
    setIsModalOpen(false);
    console.log("not sure how I want to handle this just yet");
  }

  return (
    <main>
      <div>
        <h1> Welcome username here</h1>
        <div>
          <button onClick={openModalOnClick}> + </button>
          <p> Add your fist shoe</p>
        </div>
      </div>
      {isModalOpen && <Modal closeModalOnClick={closeModalOnClick} />}
    </main>
  );
}
