import "./seat.scss"
import { useState } from "react";
import { setBookingSeat } from "./duck/reducer";
import { useDispatch } from "react-redux";

export default function Seat(props) {
  const dispatch = useDispatch()
  const {seat} = props
  const [isSelect, setIsSelect] = useState(false)

  const handleSelectSeat = () => {
    setIsSelect(!isSelect);
    dispatch(setBookingSeat(seat))
  }
  return (
    <button
    disabled={seat.daDat}
     onClick={handleSelectSeat}
     className={` ${isSelect ? `gheDangChon` : ""} mx-5 ghe ${seat.daDat ? "gheDuocChon" : ""}`
     }>
      {seat.soGhe}
    </button>
  );
}
