import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import MyBidsTable from "../components/MyBidsTable";

const MyBids = () => {
  const { user, loading } = use(AuthContext);
  const [myBids, setMyBids] = useState([]);
  const { email } = user;
  useEffect(() => {
    fetch(`http://localhost:4000/bids?email=${email}`)
      .then((res) => res.json())
      .then((data) => setMyBids(data));
  }, [email]);
  if (loading) return <h2>loading...</h2>;
  if (myBids.length < 1) {
    return (
      <h2 className="text-center text-3xl font-bold text-secondary my-4">
        No Bids Found
      </h2>
    );
  }
  return (
    <div>
      <h2 className="text-center text-3xl font-bold text-secondary my-4">
        My Bids: <span className="text-primary">{myBids.length}</span>
      </h2>
      <div>
        <MyBidsTable
          myBids={myBids}
          setMyBids={setMyBids}
          title={"product 1"}
          price_max={40}
          price_min={30}
        />
      </div>
    </div>
  );
};

export default MyBids;
