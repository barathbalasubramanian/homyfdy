import Cookies from 'js-cookie';
import React, { useState } from "react";
import { createBooking } from "../../../firebase/booking";
import { getUserDetails_, updateUser } from "../../../firebase/user";

function CustomForm({ SetBookingForm, property }) {
  const [formData, setFormData] = useState({
    name: "",
    datetime: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const closeLogin = () => {
    SetBookingForm(true);
  };

  const handleConfirmClick = async () => {
    if (!formData.datetime || !formData.name) {
      alert("Please fill in both Date & Time and Type (Virtual or On Site).");
      return; // Stop the function if validation fails
    }
  
    const name = Cookies.get("name");
    const email = Cookies.get("email");
    const userDoc = await getUserDetails_(name, email);
    var BookingId;
    try {
      const id = await createBooking({
        ...formData,
        username: name,
        propertyname: property.propertyType,
        email: email,
        number: userDoc.data.number,
        id: userDoc.id,
      });
      BookingId = id;
      SetBookingForm(true);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  
    const currentVisit = {
      propertyId: property.id,
      timestamp: new Date().toISOString(),
      BookingId: BookingId,
      bookedTimeDate: formData["datetime"],
    };
  
    let updatedData;
    if (userDoc.data.bookings) {
      const existingVisitIndex = userDoc.data.bookings.findIndex(
        (visit) => visit.propertyId === property.id
      );
      if (existingVisitIndex !== -1) {
        userDoc.data.bookings[existingVisitIndex].timestamp =
          currentVisit.timestamp;
        userDoc.data.bookings[existingVisitIndex].BookingId =
          currentVisit.BookingId;
        userDoc.data.bookings[existingVisitIndex].bookedTimeDate =
          currentVisit.bookedTimeDate;
      } else {
        userDoc.data.bookings.push(currentVisit);
      }
  
      updatedData = { bookings: userDoc.data.bookings };
    } else {
      updatedData = { bookings: [currentVisit] };
    }
    await updateUser(userDoc.id, updatedData);
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        backdropFilter: "blur(10px)",
        zIndex: 1000,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="login-con">
        <div className="max-md:hidden">
          <img
            src="/assets/login.svg"
            alt="Login"
            loading="lazy"
            style={{ width: "30em", height: "30em", objectFit: "contain" }}
          />
        </div>
        <div className="p-8 w-[60%] flex flex-col gap-4">
          <div className="flex w-full flex-col gap-4 p-8 rounded-md shadow-lg">
            <div className="w-full text-3xl" style={{ color: "green" }}>
              HOMYFYD
            </div>
            <div>
              <label
                htmlFor="datetime"
                className="block text-sm font-medium text-gray-700"
              >
                Date & Time
              </label>
              <input
                type="datetime-local"
                name="datetime"
                value={formData.datetime}
                onChange={handleChange}
                required
                className="mt-1 p-2 block text-black outline-none border-none w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Type ( Virtual Or On Site)
              </label>
              <select
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 p-2 block text-black outline-none border-none w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select type</option>
                <option value="Virtual">Virtual</option>
                <option value="On site">On Site</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message ( Optional )
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows="3"
                className="mt-1 p-2 max-h-24 text-black block outline-none border-none w-full border border-gray-300 sm:text-sm"
              />
            </div>
            <button
              onClick={handleConfirmClick}
              className="mt-4 p-2 bg-green-600 text-white rounded-md shadow-sm hover:bg-green-700"
            >
              Confirm
            </button>
          </div>

          <div
            onClick={closeLogin}
            className="cursor-pointer absolute top-0 right-0 max-md:right-5"
          >
            <img src="assets/cancel.svg" alt="" className="w-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomForm;
