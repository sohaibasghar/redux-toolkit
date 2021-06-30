import { useSelector, useDispatch } from "react-redux";
import {
  increament,
  decreament,
  increamentByNumber
} from "../../slices/CounterSlice";
import { useEffect } from "react";
import { getAllUser } from "../../slices/UserSlice";
export default function Counter() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUser());
  }, []);

  const handleIncreament = () => {
    dispatch(increament());
  };
  const handleDecreament = () => {
    dispatch(decreament());
  };

  const handleIncreamentByNum = () => {
    dispatch(increamentByNumber(5));
  };

  return (
    <div className="App">
      <h1>count:{count}</h1>
      <button onClick={handleIncreament}>Increament</button>
      <button onClick={handleDecreament}>Decreament</button>
      <button onClick={handleIncreamentByNum}>Add 5</button>
    </div>
  );
}
