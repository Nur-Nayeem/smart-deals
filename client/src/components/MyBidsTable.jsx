import React from "react";
import Swal from "sweetalert2";

const MyBidsTable = ({ myBids, setMyBids }) => {
  const handleBidDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:4000/bids/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            const filterdBid = myBids.filter((bid) => bid._id !== id);
            setMyBids(filterdBid);
          })
          .catch((err) => {
            console.log(err.message);
          });
        Swal.fire({
          title: "Deleted!",
          text: "Your Bid has been deleted.",
          icon: "success",
        });
      }
    });
  };

  return (
    <div className="overflow-x-auto bg-base-100 rounded-lg">
      <table className="table">
        <thead>
          <tr>
            <th>SL No</th>
            <th>Product</th>
            <th>Buyer</th>
            <th>Bid Price</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {myBids.map((bid, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png"
                        alt="Product"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{bid?.productTitle}</div>
                    <div className="text-sm opacity-50">
                      <span>
                        {bid?.price_min} - {bid?.price_max}
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td>
                {bid.buyer_name}
                <br />
                {bid.buyer_email}
              </td>
              <td>{bid.bid_price}</td>
              <td>
                <span className="">{bid.status}</span>
              </td>
              <td>
                <button
                  onClick={() => handleBidDelete(bid._id)}
                  className="btn bg-base-100 rounded-lg border-red-600 text-rose-600"
                >
                  Remove Bid
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyBidsTable;
