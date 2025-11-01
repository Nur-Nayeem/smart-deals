import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import BidsTable from "../components/bidsComponents/BidsTable";

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
  return (
    <div>
      <BidsTable bids={myBids} />
    </div>
  );
};

export default MyBids;
