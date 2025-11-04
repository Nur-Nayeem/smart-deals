import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../Context/Context";
import MyBidsTable from "../components/MyBidsTable";

const MyBids = () => {
  const { user, loading } = use(AuthContext);
  const [myBids, setMyBids] = useState([]);
  const { email } = user;

  // const accessToken = user.accessToken; //firebase

  // const jwtTokenSendFromLocalStorage = localStorage.getItem("token"); //using local storage is not a good use

  ////use this for firebasse acces token and jwt raw token with localstorage for example:
  // useEffect(() => {
  //   fetch(`http://localhost:4000/bids?email=${email}`, {
  //     headers: {
  //       authorization: `Bearer ${jwtTokenSendFromLocalStorage}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setMyBids(data))
  //     .catch((err) => {
  //       console.log("error", err);
  //     });
  // }, [email, jwtTokenSendFromLocalStorage]);

  //in http only cookie methdo
  useEffect(() => {
    fetch(`http://localhost:4000/bids?email=${email}`, {
      credentials: "include", //use credentials ="include"
    })
      .then((res) => res.json())
      .then((data) => setMyBids(data))
      .catch((err) => {
        console.log("error", err);
      });
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
