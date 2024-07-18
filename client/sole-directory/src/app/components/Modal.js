"use client";
// rename this to addshoemodal

function Modal({ closeModalOnClick }) {
  console.log("still will go here soon ");

  function saveShoeData() {
    console.log("save your new shoe data now 👟");
  }

  return (
    <div>
      <span>
        <h2>Modal coming soon</h2>
        <button className="close-button" onClick={closeModalOnClick}>
          &times;
        </button>
      </span>
      <section>
        <label>
          Shoe Name:
          <input name="shoeName" type="text" />
        </label>
        <label>
          Shoe Color:
          <input name="shoeColor" type="text" />
        </label>
        <label>
          Quantity:
          <input name="quantity" type="text" />
        </label>
        <button onClick={saveShoeData}>Save</button>
      </section>
    </div>
  );
}

export default Modal;
