import React, { useEffect, useState } from "react";
import "./styleContacts.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { useOutletContext, useNavigate } from "react-router-dom";

export const ContactList = () => {
  const {
    name,
    setName,
    contactNum,
    setContactNum,
    email,
    setEmail,
    address,
    setAddress,
    gender,
    setGender,
    age,
    setAge,
    profileIMG,
    setProfImg,
    bio,
    setBio,
    editId,
    setEditId,
    apiData,
    setApiData,
    shouldFetch,
    setFetchData,
  } = useOutletContext();

  const [expandedId, setExpandedId] = useState(null);
  const navigate = useNavigate();

  // Fetch contacts from the API
  const fetchData = () => {
    fetch("http://localhost:4000/api/mycontacts")
      .then((res) => res.json())
      .then((data) => {
        setApiData(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  useEffect(() => {
    if (shouldFetch) {
      fetchData();
      setFetchData(false);
    }
  }, [shouldFetch]);

  // Handle contact editing
  const handleEdit = (item) => {
    console.log("Editing item:", item);
    setName({
      firstname: item.name.firstname,
      lastname: item.name.lastname,
    });
    setAddress(item.address);
    setAge(item.age);
    setBio(item.bio);
    setContactNum(item.contactNum);
    setEmail(item.email);
    setGender(item.gender);
    setProfImg(item.profileIMG);
    setEditId(item.id);
    navigate("/");
  };

  // Handle contact deletion
  const handleDelete = (id) => {
    console.log("front end ID", id);
    fetch(`http://localhost:4000/api/deletecontact/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          // Update the state to reflect the deletion
          setApiData(
            apiData.filter((item) => {
              item.id !== id;
              console.log("filtered front end ID", id);
            })
          );
          setFetchData(true);
          console.log("Contact deleted successfully");
        } else {
          console.error("Failed to delete the contact");
        }
      })
      .catch((error) => console.error("Error deleting contact:", error));
  };

  // Toggle the expanded state for a contact's details
  const toggleBody = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="styleContactsList">
      <div className="listContainer">
        {apiData.map((item) => (
          <div key={item.id} className="listObject">
            <div id="objectHeader">
              <div id="objectName">
                <img
                  src={
                    item.profileIMG ? item.profileIMG : "https://feji.us/mi6be7"
                  }
                  alt="Profile"
                />
                <h3>
                  {item.name.firstname} {item.name.lastname}
                </h3>
              </div>
              <IoIosArrowDropdown onClick={() => toggleBody(item.id)} />
            </div>
            <div
              id="objectBody"
              style={{
                height: expandedId === item.id ? "fit-content" : "0px",
                overflow: expandedId === item.id ? "visible" : "hidden",
                padding: expandedId === item.id ? "25px" : "0px",
                transition: "height 0.3s ease",
              }}
            >
              <span>
                <h3>Email: </h3>
                <p>{item.email}</p>
              </span>

              <span>
                <h3>Contact Number: </h3>
                <p>{item.contactNum}</p>
              </span>
              <span>
                <h3>Id: </h3>
                <p>{item.id}</p>
              </span>

              <span>
                <h3>Age: </h3>
                <p>{item.age}</p>
              </span>

              <span>
                <h3>Gender: </h3>
                <p>{item.gender}</p>
              </span>

              <span>
                <h3>Address: </h3>
                <p>{item.address}</p>
              </span>

              <span>
                <h3>Biography: </h3>
                <p>{item.bio}</p>
              </span>
              <span>
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
