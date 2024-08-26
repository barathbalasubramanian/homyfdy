import Cookies from 'js-cookie';
import React, { useState } from "react";
import { createBooking } from "../../../firebase/booking";
import { getUserDetails } from "../../../firebase/user";

function CustomForm({SetBookingForm,property}) {
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
    SetBookingForm(true)
  }

  const handleConfirmClick = async() => {
    console.log(formData);
    const name = Cookies.get("name")
    const email = Cookies.get("email")
    const id = await getUserDetails(name,email);
    try {
        await createBooking({
            ...formData,
            propertyname: property.propertyType,
            id:id
        });
        SetBookingForm(true)
    } catch (error) {
        console.log(error)
        alert(error)
    }
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
            <div className='w-full text-3xl' style={{ color: "green" }}>HOMYFYD</div>
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
                className="mt-1 p-2 block text-black outline-none border-none w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Type ( Virtual Or On site)
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Virtual  or On site"

                className="mt-1 p-2 block text-black outline-none border-none w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
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
            style={{
              width: "14px",
              height: "14px",
              borderRadius: "50%",
              backgroundColor: "crimson",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default CustomForm;
