import { useSelector } from "react-redux";
import Seat from "./Seat";

export default function HomePage() {
  const props = useSelector((state) => state.bookingTicketReducer);

  // Hàm render danh sách ghế
  const renderListSeat = () => {
    const { listSeat } = props;
    if (listSeat && listSeat.length > 0) {
      return listSeat.map((item) => {
        if (item.hang) {
          return (
            <div className="flex my-5" key={item.hang}>
              <div>
                <h1 className="font-bold rowNumber">{item.hang}</h1>
              </div>
              <div>
                {item.danhSachGhe.map((seat) => {
                  return <Seat key={seat.soGhe} seat={seat} />;
                })}
              </div>
            </div>
          );
        } else {
          return (
            <div key={item.hang || `no-hang-${item.soGhe}`} className="flex">
              <div>
                <h1 style={{ opacity: 0 }}>0</h1>
              </div>
              <div>
                {item.danhSachGhe.map((seat) => {
                  return (
                    <span
                      key={seat.soGhe}
                      style={{
                        marginRight: "2.25rem",
                        marginLeft: "1.75rem",
                        paddingLeft: "0.20rem",
                        paddingRight: "0.10rem",
                      }}
                      className="rowNumber"
                    >
                      {seat.soGhe}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        }
      });
    }
  };
  const totalPrice = () =>
    props.listSeatSelected.reduce((total, seat) => (total += seat.gia), 0);

  return (
    <div className="container mx-auto relative">
      <div className="">
      <div className="flex relative z-10">
        <div className="text-center">
          <h1 className="mb-10 text-5xl">Đặt vé xem phim</h1>
          <p className="screen">Màn hình</p>
          {renderListSeat()}
        </div>
        <div className="text-center">
          <h1 className="text-4xl">Danh sách ghế bạn chọn</h1>
          <ul>
            {props.listSeatSelected.map((seat) => (
              <li key={seat.soGhe}>
                Ghế {seat.soGhe} - Giá {seat.gia}
              </li>
            ))}
          </ul>
          <p>Tạm tính: {totalPrice()} VNĐ</p>
        </div>
      </div>
      </div>
    </div>
  );
}
