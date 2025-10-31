import React from "react";

const BidCard = () => {
  return (
    <>
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
              placeholder="Your name"
            />
          </div>
          <div className="space-y-1.5 w-full">
            <label>Your name</label>
            <br />
            <input
              className="bg-base-200 p-2.5 rounded-lg outline-2 outline-gray-200 focus:outline-primary w-full"
              type="email"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <label>Buyer Image URL</label>
          <br />
          <input
            className="w-full bg-base-200 p-2.5 rounded-lg outline-2 outline-gray-200 focus:outline-primary"
            type="text"
            placeholder="https://...your_img_url"
          />
        </div>
        <div className="space-y-1.5">
          <label>Place your Price</label>
          <br />
          <input
            className="w-full bg-base-200 p-2.5 rounded-lg outline-2 outline-gray-200 focus:outline-primary"
            type="text"
            placeholder="e.g. Artisan Roasters"
          />
        </div>
        <div className="space-y-1.5">
          <label>Contact Info</label>
          <br />
          <input
            className="w-full bg-base-200 p-2.5 rounded-lg outline-2 outline-gray-200 focus:outline-primary"
            type="text"
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
          <button className="btn btn-primary">Submit Bid</button>
        </div>
      </div>
    </>
  );
};

export default BidCard;
