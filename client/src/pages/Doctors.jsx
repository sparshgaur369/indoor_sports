// import React, { useEffect, useState } from "react";
// import DoctorCard from "../components/DoctorCard";
// import Footer from "../components/Footer";
// import Navbar from "../components/Navbar";
// import "../styles/doctors.css";
// import fetchData from "../helper/apiCall";
// import Loading from "../components/Loading";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading } from "../redux/reducers/rootSlice";
// import Empty from "../components/Empty";

// const Doctors = () => {
//   const [doctors, setDoctors] = useState([]);
//   const dispatch = useDispatch();
//   const { loading } = useSelector((state) => state.root);

//   const fetchAllDocs = async () => {
//     dispatch(setLoading(true));
//     const data = await fetchData(`/doctor/getalldoctors`);
//     setDoctors(data);
//     dispatch(setLoading(false));
//   };

//   useEffect(() => {
//     fetchAllDocs();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       {loading && <Loading />}
//       {!loading && (
//         <section className="container doctors">
//           <h2 className="page-heading">Sports Available</h2>
//           {doctors.length > 0 ? (
//             <div className="doctors-card-container">
//               {doctors.map((ele) => {
//                 return (
//                   <DoctorCard
//                     ele={ele}
//                     key={ele._id}
//                   />
//                 );
//               })}
//             </div>
//           ) : (
//             <Empty />
//           )}
//         </section>
//       )}
//       <Footer />
//     </>
//   );
// };

// export default Doctors;



import React, { useEffect, useState } from "react";
import DoctorCard from "../components/DoctorCard";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/doctors.css";
import fetchData from "../helper/apiCall";
import Loading from "../components/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../redux/reducers/rootSlice";
import Empty from "../components/Empty";
// import chessImage from '../images/chess.jpg';


const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.root);

  // Mock doctor data
  const mockDoctors = [
    {
      _id: "1",
      img:'../images/chess.jpg',
      naam: "Chess",
      
    },
    {
      _id: "2",
      img: '../images/tt.jpg',
      naam: "Carrom",
      
    },
    {
      _id: "3",
      img: '../images/pool.jpg',
      naam: "Pool",
      
    },
    {
      _id: "4",
      img: '../images/darts.jpg',
      naam: "Darts",
      
    },
    {
      _id: "5",
      img: '../images/fooseball.jpg',
      naam: "Fooseball",
      
    },
    {
      _id: "6",
      img: '../images/tt.jpg',
      naam: "Table Tennis",
      
    },
    // Add more doctors as needed
  ];

  // Replace fetch logic with mock data
  const fetchAllDocs = async () => {
    dispatch(setLoading(true));
    // Simulate a delay or API call
    setTimeout(() => {
      setDoctors(mockDoctors);
      dispatch(setLoading(false));
    }, 1000);
  };

  useEffect(() => {
    fetchAllDocs();
  }, []);

  return (
    <>
      <Navbar />
      {loading && <Loading />}
      {!loading && (
        <section className="container doctors">
          <h2 className="page-heading">Sports Available</h2>
          {doctors.length > 0 ? (
            <div className="doctors-card-container">
              {doctors.map((ele) => {
                return (
                  <DoctorCard
                    ele={ele}
                    key={ele._id}
                  />
                );
              })}
            </div>
          ) : (
            <Empty />
          )}
        </section>
      )}
      <Footer />
    </>
  );
};

export default Doctors;






