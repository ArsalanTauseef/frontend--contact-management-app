import React, { useState } from "react";
import "./Mid-Section.css";
import { useOutletContext, useNavigate } from "react-router-dom";

export const MidSection = () => {
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
    shouldFetch,
    setFetchData,
  } = useOutletContext();
  const navigate = useNavigate()

  const addContact = (event) => {
    event.preventDefault();
    const data = {
      name: {
        firstname: name.firstname.charAt(0).toUpperCase() + name.firstname.slice(1).toLowerCase(),
        lastname: name.lastname.charAt(0).toUpperCase() + name.lastname.slice(1).toLowerCase(),
      },
      email,
      gender,
      age,
      contactNum,
      profileIMG,
      address,
      bio,
    };

    const url = editId
      ? `http://localhost:4000/api/updatecontact/${editId}`
      : "http://localhost:4000/api/addcontact/";
    const method = editId ? "PATCH" : "POST";
    fetch(url, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      if (result.ok) {
        setName({
          firstname: "",
          lastname: "",
        });
        setFetchData(true);
        setContactNum("");
        setEmail("");
        setAddress("");
        setAge("");
        setBio("");
        setGender("");
        setProfImg("");
        setEditId(null);
        navigate('/contactlist')
      }
    });
  };

  return (
    <main className="mainMidSection">
      <form action="#" className="formForMid">
        <div>
          <label>First Name:</label>
          <input
            type="text"
            value={name.firstname}
            onChange={(e) => {
              setName({
                ...name,
                firstname: e.target.value,
              });
              console.log(name.firstname);
            }}
          />
        </div>

        <div>
          <label>Last Name</label>
          <input
            type="text"
            value={name.lastname}
            onChange={(e) =>
              setName({
                ...name,
                lastname: e.target.value,
              })
            }
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label>Gender</label>
          <input
            type="text"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          />
        </div>

        <div>
          <label>Age</label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div>
          <label>Contact Number</label>
          <input
            type="text"
            value={contactNum}
            onChange={(e) => setContactNum(e.target.value)}
          />
        </div>

        <div>
          <label>Profile Image (URL)</label>
          <input
            type="text"
            value={profileIMG}
            onChange={(e) => setProfImg(e.target.value)}
          />
        </div>

        <div>
          <label>Address</label>
          <textarea
            name=""
            id=""
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
              // console.log(address);
            }}
          ></textarea>
        </div>

        <div>
          <label>Bio</label>
          <textarea
            name=""
            id=""
            value={bio}
            onChange={(e) => {
              setBio(e.target.value);
              // console.log(bio);
            }}
          ></textarea>
        </div>
        
        <div id="targetBtn">
        <button
          onClick={(event) => {
            addContact(event);
          }}
        >
          {editId ? "UPDATE" : "SUBMIT"}
        </button>
        </div>
      </form>
    </main>
  );
};
