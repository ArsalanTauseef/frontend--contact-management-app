import "./App.css";
import { LeftSection } from "./Components/Left-Section/Left-Section";
import { Header } from "./Components/Header/Header";
import { Outlet } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
  });
  const [contactNum, setContactNum] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [profileIMG, setProfImg] = useState("");
  const [bio, setBio] = useState("");
  const [editId, setEditId] = useState(null);
  const [apiData, setApiData] = useState([]);
  const [shouldFetch, setFetchData] = useState(true);


  const stateProps = {
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
  };

  return (
    <div className="wrapper">
      <Header />
      <main className="mainWrapper">
        <LeftSection />
        <Outlet context={stateProps} />
      </main>
    </div>
  );
}

export default App;
