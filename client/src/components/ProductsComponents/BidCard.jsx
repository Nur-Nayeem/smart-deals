import React from "react";
import { use } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthContext/AuthContext";
import { useRef } from "react";

const BidCard = ({ modalRef, product }) => {
  const { user } = use(AuthContext);
  const imageurlRef = useRef();
  const priceRef = useRef();
  const contactlRef = useRef();

  const resetField = () => {
    imageurlRef.current.value = "";
    priceRef.current.value = "";
    contactlRef.current.value = "";
  };

  const handleBidsSubmission = () => {
    const imageurl = imageurlRef.current.value.trim();
    const price = priceRef.current.value.trim();
    const contact = contactlRef.current.value.trim();
    const bidObject = {
      productId: product._id,
      buyer_name: user?.displayName,
      buyer_email: user?.email,
      buyer_image: imageurl,
      bid_price: price,
      buyer_contact: contact,
    };
    console.log(bidObject);

    fetch("http://localhost:4000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bidObject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          console.log("submitted bid");
          resetField();
          modalRef.current.close();
          Swal.fire({
            title: "Bid Submitted Succefully!",
            icon: "success",
            draggable: true,
          });
        }
      });
  };

  return (
    <>
      {/* make bid modal */}
      <dialog ref={modalRef} className="modal modal-middle">
        <div className="modal-box max-w-2xl space-y-5">
          <h3 className="font-bold text-2xl text-center my-5">
            Give Seller Your Offered Price
          </h3>
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="space-y-1.5 w-full">
              <label>Buyer Name</label>
              <br />
              <input
                className="bg-base-200 p-2.5 rounded-lg 
              outline-2 outline-gray-200 focus:outline-primary w-full"
                type="text"
                defaultValue={user?.displayName}
                placeholder="Your name"
              />
            </div>
            <div className="space-y-1.5 w-full">
              <label>Your Email</label>
              <br />
              <input
                className="bg-base-200 p-2.5 rounded-lg outline-2 outline-gray-200 focus:outline-primary w-full"
                type="email"
                defaultValue={user?.email}
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label>Buyer Image URL</label>
            <br />
            <input
              className="w-full bg-base-200 p-2.5 rounded-lg outline-2 outline-gray-200 focus:outline-primary"
              type="url"
              ref={imageurlRef}
              placeholder="https://...your_img_url"
            />
          </div>
          <div className="space-y-1.5">
            <label>Place your Price</label>
            <br />
            <input
              className="w-full bg-base-200 p-2.5 rounded-lg outline-2 outline-gray-200 focus:outline-primary"
              type="number"
              ref={priceRef}
              placeholder="e.g. Artisan Roasters"
            />
          </div>
          <div className="space-y-1.5">
            <label>Contact Info</label>
            <br />
            <input
              className="w-full bg-base-200 p-2.5 rounded-lg outline-2 outline-gray-200 focus:outline-primary"
              type="text"
              ref={contactlRef}
              placeholder="e.g. +8801-7234-65"
            />
          </div>
          <div className="modal-action space-x-2.5 my-10">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn bg-base-100 border-[#9F62F2] text-primary">
                Close
              </button>
            </form>
            <button onClick={handleBidsSubmission} className="btn btn-primary">
              Submit Bid
            </button>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default BidCard;
