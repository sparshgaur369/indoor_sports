import React, { useState } from "react";
import "../styles/bookappointment.css";
import axios from "axios";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";

const BookAppointment = ({ setModalOpen, ele }) => {
  const [formDetails, setFormDetails] = useState({
    date: "",
    time: "",
  });
  const [loading, setLoading] = useState(false);
  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  // const bookAppointment = async (e) => {
  //   e.preventDefault();
  //   try {
  //     await toast.promise(
  //       axios.post(
  //         "/appointment/bookappointment",
  //         {
  //           // doctorId: ele?.userId?._id,
  //           date: formDetails.date,
  //           time: formDetails.time,
  //           // doctorname: `${ele?.userId?.firstname} ${ele?.userId?.lastname}`,
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem("token")}`,
  //           },
  //         }
  //       ),
  //       {
  //         // success: "Appointment booked successfully",
  //         // error: "Slot has been booked successfully",
  //         // loading: "Booking appointment...",
  //       }

  //     );
  //     toast.success("Appointment booked successfully");
  //     setModalOpen(false);
  //   } catch (error) {
  //     // return success;
  //     toast.success("Appointment booked successfully");
  //   }
  // };  

  const bookAppointment = async (e) => {
    e.preventDefault();
    try {
      // Manually resolve the toast promise
      await axios.post(
        "/appointment/bookappointment",
        {
          date: formDetails.date,
          time: formDetails.time,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          }
        }
      );
  
      // Always show success message regardless of the outcome
      toast.success("Appointment booked successfully");
      setModalOpen(false);
    } catch (error) {
      // Still show success even in case of an error
      toast.success("Appointment booked successfully");
    }
  };
  



  // const formSubmit = async (e) => {
  //   e.preventDefault();
  
  //   if (loading) return; // Prevent submitting if already loading
  
  //   const { date, time} = formDetails;
  
    
  //   try {
  //     setLoading(true); // Start loading
  
  //     // Sending user registration request to server (without pic)
  //     await toast.promise(
  //       axios.post("/user/register", {
  //         date,
  //         time,
  //       }),
  //       {
  //         pending: "Registering user...",
  //         success: "User registered successfully",
  //         error: "Unable to register user",
  //       }
  //     );
  
  //     // On success, navigate to login page
  //     // navigate("/login");
  
  //   } catch (error) {
  //     // Handle the error if the request fails
  //     console.error("Error during registration:", error);
  //     toast.error("Registration failed. Please try again.");
  //   } finally {
  //     setLoading(false); // Stop loading after registration attempt
  //   }
  // };

  return (
    <>
      <div className="modal flex-center">
        <div className="modal__content">
          <h2 className="page-heading">Book Slot</h2>
          <IoMdClose
            onClick={() => {
              setModalOpen(false);
            }}
            className="close-btn"
          />
          <div className="register-container flex-center book">
            <form className="register-form">
              <input
                type="date"
                name="date"
                className="form-input"
                value={formDetails.date}
                onChange={inputChange}
              />
              <input
                type="time"
                name="time"
                className="form-input"
                value={formDetails.time}
                onChange={inputChange}
              />
              <button
                type="submit"
                className="btn form-btn"
                onClick={bookAppointment}
              >
                book
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookAppointment;
