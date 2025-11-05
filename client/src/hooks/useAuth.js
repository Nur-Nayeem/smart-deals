import { use } from "react";
import { AuthContext } from "../Context/Context";

const useAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};
export default useAuth;
