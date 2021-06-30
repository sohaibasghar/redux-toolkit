import { useSelector, useDispatch } from "react-redux";

import { useEffect } from "react";
import { getAllUser } from "../../slices/UserSlice";
export default function Users() {
  const users = useSelector((state) => state.users.userData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <div>
      <ul>
        {users?.length > 0 &&
          users.map((user, index) => <li key={index}>{user.name}</li>)}
      </ul>
    </div>
  );
}
