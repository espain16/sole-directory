"use client";

function AddShoeModal({ closeModalOnClick }) {
  function saveShoeData() {
    console.log("save your new shoe data now 👟");
  }

  return (
    <div className="modal">
      <span>
        <h2>Modal coming soon</h2>
        <button className="close-button" onClick={closeModalOnClick}>
          &times;
        </button>
      </span>
      <section className="new-shoe-details">
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
      <div className="modal-overlay"></div>
    </div>
  );
}

export default AddShoeModal;
