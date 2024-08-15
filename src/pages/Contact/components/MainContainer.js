import React, { useState } from "react";
import SideBar from "./SideBar";
import VisitsPropertyCard from "./VisitsPropertyCard";

function MainContainer() {
  const [selected, setSelected] = useState("Dashboard");
  const [selected_, setSelected_] = useState("Completed");
  const [activeStatus, setActiveStatus] = useState("Watched");

  const menuItems = [
    { label: "Watched", count: 1 },
    { label: "Favourite", count: 0 },
    { label: "Site Visits", count: 0 },
    { label: "Bookings", count: 0 },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    pincode: "",
    city: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = () => {
    console.log(formData);
  };

  return (
    <div className="w-full px-16 py-10 gap-8 flex relative" style={{ height: "80vh", backgroundColor: "#F7F6F5" }}>
        <div className="w-full flex gap-8">
            <div className="w-1/4 flex justify-center p-4 bg-white" style={{ borderRadius: "10px" }}>
                <SideBar selected={selected} setSelected={setSelected} />
            </div>
            <div className="w-3/4 px-16 py-8 overflow-scroll text-black flex flex-col gap-4 bg-white" style={{ borderRadius: "10px" }}>
                {selected === "Contact Details" ? (
                    <div className="w-full px-16 py-8 overflow-scroll text-black flex flex-col gap-4 bg-white" style={{ borderRadius: "10px" }}
                    >
                    <div className="text-3xl " style={{ color: "#1FC827" }}>
                        HOMYFYD
                    </div>
                    <div className="flex flex-col items-start">
                        <label
                        htmlFor="name"
                        className="text-sm"
                        style={{ color: "#6E6E6E" }}
                        >
                        Name
                        </label>
                        <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        className="input-div-con"
                        style={{ color: "grey" }}
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label
                        htmlFor="email"
                        className="text-sm text-black"
                        style={{ color: "#6E6E6E" }}
                        >
                        Email ID
                        </label>
                        <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Your Email ID"
                        className="input-div-con"
                        style={{ color: "grey" }}
                        />
                    </div>
                    <div className="flex flex-col items-start">
                        <label
                        htmlFor="number"
                        className="text-sm text-black"
                        style={{ color: "#6E6E6E" }}
                        >
                        Mobile Number
                        </label>
                        <input
                        type="number"
                        name="number"
                        value={formData.number}
                        onChange={handleChange}
                        required
                        placeholder="Your Phone Number"
                        className="input-div-con"
                        style={{ color: "grey" }}
                        />
                    </div>
                    <div className="flex gap-6 w-full">
                        <div className="flex flex-col items-start w-full">
                        <label
                            htmlFor="number"
                            className="text-sm text-black"
                            style={{ color: "#6E6E6E" }}
                        >
                            Pincode
                        </label>
                        <input
                            type="number"
                            name="pincode"
                            value={formData.pincode}
                            onChange={handleChange}
                            required
                            placeholder="Pincode"
                            className="input-div-con"
                            style={{ color: "grey" }}
                        />
                        </div>
                        <div className="flex flex-col items-start w-full">
                        <label
                            htmlFor="number"
                            className="text-sm text-black"
                            style={{ color: "#6E6E6E" }}
                        >
                            City
                        </label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            placeholder="City"
                            className="input-div-con"
                            style={{ color: "grey" }}
                        />
                        </div>
                    </div>
                    <div className="text-white mt-4 w-full flex items-end justify-end">
                        <div
                        className="cursor-pointer self-end w-fit px-2 py-1"
                        style={{ backgroundColor: "var(--green)", borderRadius: "5px" }}
                        onClick={handleClick}
                        >
                        Save
                        </div>
                    </div>
                    </div>
                ) : (
                    <></>
                )}
                {
                    selected === 'Dashboard' ? (
                        <div className="w-full overflow-scroll text-black flex flex-col gap-4 bg-white" style={{ borderRadius: "10px" }}>
                            
                        </div>
                    ) : <></>
                }
                {
                    selected === 'My Properties' ? (
                        <div className="w-full overflow-scroll text-black flex flex-col gap-4 bg-white" style={{ borderRadius: "10px" }}>
                            <div className="text-3xl mb-2" style={{ color: "#1FC827" }}>
                                My Visits
                            </div>
                            <div className="flex gap-6 mb-6">
                                <div
                                    className={`cursor-pointer flex items-center w-fit gap-3 px-6 py-2 ${
                                    selected === "Completed" ? "text-white" : "text-black"
                                    }`}
                                    style={{
                                    color: selected_ === "Completed" ? "white" : "#5F5F5F",
                                    fontSize: "13px",
                                    backgroundColor: selected_ === "Completed" ? "var(--green)" : "#E3E3E3",
                                    borderRadius: "5px",
                                    }}
                                    onClick={() => setSelected_("Completed")}
                                >
                                    Completed
                                </div>
                                <div
                                    className={`cursor-pointer flex items-center w-fit gap-3 px-6 py-2 ${
                                    selected === "Upcoming" ? "text-white" : "text-black"
                                    }`}
                                    style={{
                                    color: selected_ === "Upcoming" ? "white" : "#5F5F5F",
                                    fontSize: "13px",
                                    backgroundColor: selected_ === "Upcoming" ? "var(--green)" : "#E3E3E3",
                                    borderRadius: "5px",
                                    }}
                                    onClick={() => setSelected_("Upcoming")}
                                >
                                    Upcoming
                                </div>
                                </div>
                            <div className="flex flex-col gap-4">
                                <VisitsPropertyCard/>
                                <VisitsPropertyCard/>
                            </div>
                        </div>
                    ) : <></>
                }
                {
                    selected === 'My Visits' ? (
                        <div className="w-full overflow-scroll text-black flex flex-col gap-4 bg-white" style={{ borderRadius: "10px" }}>
                            <div className="text-3xl mb-2" style={{ color: "#1FC827" }}>
                                My Visits
                            </div>
                            <div className="flex gap-6 mb-6 w-full">
                                {menuItems.map((item) => (
                                <div
                                    key={item.label}
                                    className={`cursor-pointer text-nowrap flex items-center gap-3 px-6 py-2 ${
                                    activeStatus === item.label ? "text-white" : "text-black"
                                    }`}
                                    style={{
                                    color: activeStatus === item.label ? "white" : "#5F5F5F",
                                    fontSize: "13px",
                                    backgroundColor: activeStatus === item.label ? "var(--green)" : "#E3E3E3",
                                    borderRadius: "5px",
                                    }}
                                    onClick={() => setActiveStatus(item.label)}
                                >
                                    {item.label} ({item.count})
                                </div>
                                ))}
                            </div>
                            <div className="flex flex-col gap-4">
                                <VisitsPropertyCard/>
                                <VisitsPropertyCard/>
                            </div>
                        </div>
                    ) : <></>
                }
            </div>
        </div>
    </div>
  );
}

export default MainContainer;
