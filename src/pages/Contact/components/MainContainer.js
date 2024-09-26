import Cookies  from "js-cookie";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import VisitsPropertyCard from "./VisitsPropertyCard";
import Style from './container.module.css'
import { updateUserDocument } from "../../../firebase/userprofile";
import { getHouse } from "../../../firebase/house";
import { updateUser } from "../../../firebase/user";

function MainContainer({likes, booksCnt, viewCnt, name, email, number, city, id}) {

  console.log(name,number,email)
  const [selected, setSelected] = useState("Dashboard");
  const [selected_, setSelected_] = useState("Completed");
  const [activeStatus, setActiveStatus] = useState("Watched");

  const [likedProperties, setlikedProperties] = useState([]);
  const [viewedProperties, setviewedProperties] = useState([]);
  const [bookedProperties, setbookedProperties] = useState([]);
  const [upcomingProperties, setupcomingProperties] = useState([]);
  const [completedProperties, setcompletedProperties] = useState([]);
  const [likedPropertyData, setLikedPropertyData] = useState([]);
  const [bookedPropertyData, setbookedPropertyData] = useState([]);
  const [viewedPropertyData, setviewedPropertyData] = useState([]);
  const [CompletedPropertyData,setCompletedPropertyData] = useState([]);
  const [UpcomingPropertyData,setUpcomingPropertyData] = useState([]);

  useEffect(() => {
    const getPropertiesWithTwoLikes = () => {
        for (let [key, value] of Object.entries(viewCnt)) {
            setviewedProperties(prevProperties => [
              ...prevProperties,
              value['propertyId']
            ]);
        }
        for (let [key, value] of Object.entries(likes)) {
            setlikedProperties(prevProperties => [
              ...prevProperties,
              value['propertyId']
            ]);
        }
        for (let [key, value] of Object.entries(booksCnt)) {
            const bookedTimeDate = new Date(value.bookedTimeDate);
            const currentDateTime = new Date();
            if (bookedTimeDate > currentDateTime) {
                setupcomingProperties(prevProperties => [
                    ...prevProperties,
                    value['propertyId']
                  ]);
            } else {
                setcompletedProperties(prevProperties => [
                    ...prevProperties,
                    value['propertyId']
                  ]);
            }
            setbookedProperties(prevProperties => [
              ...prevProperties,
              value['propertyId']
            ]);
        }
    };
    getPropertiesWithTwoLikes();
  }, [likes,booksCnt,viewCnt]);

  useEffect(() => {
    const fetchPropertyData = async () => {
      if (likedProperties.length) {
        const fetchPromises = likedProperties.map(propertyId => getHouse(propertyId));
        try {
          const data = await Promise.all(fetchPromises);
          console.log(data)
          setLikedPropertyData(data);
        } catch (error) {
          console.error('Error fetching property data:', error);
        }
      }
      if (bookedProperties.length) {
        const fetchPromises = bookedProperties.map(propertyId => getHouse(propertyId));
        try {
          const data = await Promise.all(fetchPromises);
          setbookedPropertyData(data);
        } catch (error) {
          console.error('Error fetching property data:', error);
        }
      }
      if (viewedProperties.length) {
        const fetchPromises = viewedProperties.map(propertyId => getHouse(propertyId));
        try {
          const data = await Promise.all(fetchPromises);
          console.log(data)
          setviewedPropertyData(data);
        } catch (error) {
          console.error('Error fetching property data:', error);
        }
      }
      if (upcomingProperties.length) {
        const fetchPromises = upcomingProperties.map(propertyId => getHouse(propertyId));
        try {
          const data = await Promise.all(fetchPromises);
          console.log(data,"upcoming")
          setUpcomingPropertyData(data);
        } catch (error) {
          console.error('Error fetching property data:', error);
        }
      }
      if (completedProperties.length) {
        const fetchPromises = completedProperties.map(propertyId => getHouse(propertyId));
        try {
          const data = await Promise.all(fetchPromises);
          console.log(data,"completed")
          setCompletedPropertyData(data);
        } catch (error) {
          console.error('Error fetching property data:', error);
        }
      }
    };

    fetchPropertyData();
  }, [likedProperties,bookedProperties,viewedProperties,upcomingProperties,completedProperties]); 

  const menuItems = [
    { label: "Watched", count: viewCnt.length || 0 },
    { label: "Favourite", count: likes.length || 0},
    { label: "Site Visits", count: completedProperties.length || 0 },
    { label: "Bookings", count: booksCnt.length || 0},
  ];

  
  const [formData, setFormData] = useState({
    name: name || "",
    email: email || "",
    number: number || "",
    pincode: "",
    city: city || "",
  });

  useEffect(() => {
    setFormData({
      name: name || "",
      email: email || "",
      number: number || "",
      pincode: "",
      city: city || "",
    });
  }, [name, email, number, city]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = async() => {
    console.log(formData);
    try {
      console.log(id)
      await updateUser(id, formData);
      alert('User document updated successfully.');
      Cookies.set('name', formData.name, { expires: 7 });
      Cookies.set('number', formData.number, { expires: 7 });
      Cookies.set('email', formData.email, { expires: 7 });
      Cookies.set('city', formData.city, { expires: 7 });

    } catch (error) {
      console.error('Error updating user document:', error);
      alert('Failed to update user document.');
    }
  };

  return (
    <div className={`w-full px-16 py-10 gap-8 flex relative max-md:px-6 ${Style.con}`} style={{ backgroundColor: "#F7F6F5" }}>
        <div className="w-full flex gap-8 max-md:flex-col max-md:gap-0">
            <div className="w-1/4 flex justify-center p-4 bg-white max-md:w-full" style={{ borderRadius: "10px" }}>
                <SideBar selected={selected} setSelected={setSelected} />
            </div>
            <div className="w-3/4 px-16 py-8 overflow-scroll text-black flex flex-col max-md:w-full max-md:px-4 max-md:items-center gap-4 bg-white" style={{ borderRadius: "10px" }}>
                {selected === "Contact Details" ? (
                    <div className="w-full px-16 py-8 max-md:px-4 overflow-scroll text-black flex flex-col gap-4 bg-white" style={{ borderRadius: "10px" }}
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
                            <div className="text-3xl mb-2 max-md:text-2xl" style={{ color: "#1FC827" }}>
                                My Homyfyd journey
                            </div>
                            <div className="flex gap-4 mt-8 items-center max-md:flex-wrap max-md:justify-center max-md:mt-2">
                                <div className="p-6 px-8 text-center gra rounded-md" onClick={()=>{setSelected("My Visits");setActiveStatus("Watched")}}> 
                                    <div className=""><img src="/assets/viewed.svg" alt="Viewed" /></div>
                                    <div className="pt-2" style={{fontSize:"14px"}}>
                                        <div>Viewed</div>
                                        <div>{viewCnt.length} Properties</div>
                                    </div>
                                </div>
                                <div className="p-6 px-8 text-center gra rounded-md" onClick={()=>{setSelected("My Visits");setActiveStatus("Favourite")}}> 
                                    <div><img src="/assets/fav.svg" alt="Viewed" /></div>
                                    <div className="pt-2" style={{fontSize:"14px"}}>
                                        <div>Favourite</div>
                                        <div>{likes.length} Properties</div>
                                    </div>
                                </div>
                                <div className="p-6 px-8 text-center gra rounded-md" onClick={()=>{setSelected("My Visits");setActiveStatus("Site Visits")}}> 
                                    <div><img src="/assets/public.svg" alt="Viewed" /></div>
                                    <div className="pt-2" style={{fontSize:"14px"}}>
                                        <div>Site Visits</div>
                                        <div>{completedProperties.length} Properties</div>
                                    </div>
                                </div>
                                <div className="p-6 px-8 text-center gra rounded-md" onClick={()=>{setSelected("My Visits");setActiveStatus("Bookings")}}> 
                                    <div><img src="/assets/click.svg" alt="Viewed" /></div>
                                    <div className="pt-2" style={{fontSize:"14px"}}>
                                        <div>Bookings</div>
                                        <div>{booksCnt.length} Properties</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : <></>
                }
                {
                    selected === 'My Properties' ? (
                        <div className="w-full overflow-scroll text-black flex flex-col gap-4 bg-white" style={{ borderRadius: "10px" }}>
                        <div className="text-3xl mb-2 max-md:text-2xl" style={{ color: "#1FC827" }}>
                            My Visits
                        </div>
                        <div className="flex gap-6 mb-6 max-md:flex-wrap">
                            <div
                            className={`cursor-pointer flex items-center w-fit gap-3 px-6 py-2 ${selected_ === "Completed" ? "text-white" : "text-black"}`}
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
                            className={`cursor-pointer flex items-center w-fit gap-3 px-6 py-2 ${selected_ === "Upcoming" ? "text-white" : "text-black"}`}
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
                            {selected_ === "Completed" ? (
                            CompletedPropertyData.length > 0 ? (
                                CompletedPropertyData.map(property => (
                                <VisitsPropertyCard key={property.id} property={property} />
                                ))
                            ) : (
                                <p>No completed properties found.</p>
                            )
                            ) : (
                            UpcomingPropertyData.length > 0 ? (
                                UpcomingPropertyData.map(property => (
                                <VisitsPropertyCard key={property.id} property={property} />
                                ))
                            ) : (
                                <p>No upcoming properties found.</p>
                            )
                            )}
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
                            <div className="flex gap-6 mb-6 w-full max-md:flex-wrap">
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
                                {
                                    activeStatus === 'Bookings' ? (
                                        bookedPropertyData.length > 0 ? (
                                            bookedPropertyData.map(property => (
                                            <VisitsPropertyCard key={property.id} property={property} />
                                            ))
                                        ) : (
                                            <p>No properties found.</p>
                                        )
                                    ) : activeStatus === 'Favourite' ? (
                                        likedPropertyData.length > 0 ? (
                                            likedPropertyData.map(property => (
                                            <VisitsPropertyCard key={property.id} property={property} />
                                            ))
                                        ) : (
                                            <p>No properties found.</p>
                                        )
                                    ) : activeStatus === 'Watched' ? (
                                        viewedPropertyData.length > 0 ? (
                                            viewedPropertyData.map(property => (
                                            <VisitsPropertyCard key={property.id} property={property} />
                                                ))
                                            ) : (
                                                <p>No properties found.</p>
                                            )
                                    )  : activeStatus === 'Site Visits' ? (
                                        CompletedPropertyData.length > 0 ? (
                                            CompletedPropertyData.map(property => (
                                            <VisitsPropertyCard key={property.id} property={property} />
                                                ))
                                            ) : (
                                                <p>No properties found.</p>
                                            )
                                    ): (
                                        <p>Select a category to see properties.</p>
                                    )}
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
