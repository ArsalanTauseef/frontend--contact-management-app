import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate ,
} from "react-router-dom";
import { MidSection } from "./Components/Mid-Section/Mid-Section.jsx";
import { ContactList } from "./Components/Mid-Section/Content-Pages/Contacts-List/ContactList.jsx";
import { FavouriteContacts } from "./Components/Mid-Section/Content-Pages/Favourite-Contacts/FavouriteContacts.jsx";
import { BlockedContacts } from "./Components/Mid-Section/Content-Pages/Blocked-Contacts/BlockedContacts.jsx";
import { Settings } from "./Components/Mid-Section/Content-Pages/Settings/Settings.jsx";



const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/home" />} />
      <Route path="home" element={<MidSection />} />
      <Route path="contactlist" element={<ContactList />} />
      <Route path="favouritecontacts" element={<FavouriteContacts />} />
      <Route path="blockedcontacts" element={<BlockedContacts />} />
      <Route path="settings" element={<Settings />} />
    </Route>
  ])
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
