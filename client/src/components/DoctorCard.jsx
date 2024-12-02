import "../styles/doctorcard.css";
import React, { useState } from "react";
import BookAppointment from "../components/BookAppointment";
import { toast } from "react-hot-toast";

const DoctorCard = ({ ele }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const handleModal = () => {
    if (token === "") {
      return toast.error("You must log in first");
    }
    setModalOpen(true);
  };
  const { img, naam, specialization, experience, fees, mobile } = ele;

  return (
    <div className={`card`}>
      <div className={`card-img flex-center`}>
        <img
          src={img
          }
          alt="profile"
        />
      </div>
      <h3 className="card-name">
        {naam}
      </h3>
      {/* <p className="specialization">
        <strong>Specialization: </strong>
        {specialization}
       </p> */}
      {/*<p className="experience">
        <strong>Experience: </strong>
        {ele?.experience}yrs
      </p>
      <p className="fees">
        <strong>Fees per consultation: </strong>$ {ele?.fees}
      </p>
      <p className="phone">
        <strong>Phone: </strong>
        {ele?.userId?.mobile}
      </p>  */}
      <button
        className="btn appointment-btn"
        onClick={handleModal}
      >
        Book Your Slot
      </button>
      {modalOpen && (
        <BookAppointment
          setModalOpen={setModalOpen}
          ele={ele}
        />
      )}
    </div>
  );
};

export default DoctorCard;



// import "../styles/doctorcard.css";
// import React, { useState } from "react";
// import BookAppointment from "../components/BookAppointment";
// import { toast } from "react-hot-toast";

// const DoctorCard = ({ ele }) => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");

//   const handleModal = () => {
//     if (token === "") {
//       return toast.error("You must log in first");
//     }
//     setModalOpen(true);
//   };

  
//   const { img, naam, specialization, experience, fees, mobile } = ele;

//   return (
//     <div className={`card`}>
//       <div className={`card-img flex-center`}>
//         <img src={img} alt="profile" />
//       </div>
//       <h3 className="card-name">{naam}</h3>
//       <p className="specialization">
//         <strong>Specialization: </strong>{specialization}
//       </p>
//       <button
//         className="btn appointment-btn"
//         onClick={handleModal}
//       >
//         Book Slot
//       </button>
//       {modalOpen && (
//         <BookAppointment setModalOpen={setModalOpen} ele={ele} />
//       )}
//     </div>
//   );
// };

// export default DoctorCard;


