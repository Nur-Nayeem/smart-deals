import React from "react";

const BidsTable = ({ bids, title, image, price_max, price_min }) => {
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
          </tr>
        </thead>
        <tbody>
          {bids.map((bid, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src={image}
                        alt="Product"
                        onError={(e) => {
                          e.currentTarget.src =
                            "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png";
                        }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{title}</div>
                    <div className="text-sm opacity-50">
                      <span>
                        {price_min} - {price_max}
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidsTable;
