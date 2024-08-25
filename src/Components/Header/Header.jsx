import React, { useState, useEffect } from "react";
import "./Header.css";
import { TiContacts } from "react-icons/ti";
import { LuLogIn } from "react-icons/lu";
import { MdOutlinePersonSearch } from "react-icons/md";
import { RxAvatar } from "react-icons/rx";

export const Header = () => {
  const [text, setText] = useState("");
  const fullText = "CONTACT MANAGEMENT FORM";
  const [text2, setText2] = useState("");
  const fullText2 = "- by github.com/ArsalanTauseef";

  useEffect(() => {
    let index = 0;
    let index2 = 0;
    const typeWriter = () => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
        setTimeout(typeWriter, 100);
      }
    };
    typeWriter();
    const typeWriterEffectTwo = () => {
      if (index2 <= fullText2.length) {
        setText2(fullText2.slice(0, index2));
        index2++;
        setTimeout(typeWriterEffectTwo, 100);
      }
    };
    typeWriterEffectTwo();
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <header>
      <nav>
        <div className="leftPanel">
          <TiContacts style={{ fontSize: "70px" }} />
          <div style={{ display: "flex", flexDirection: "column", height:"83px", justifyContent:'center'}}>
            <div>{text}</div>
            <div style={{ fontSize: "13px" }}>
                <a target="_blank" style={{textDecoration:'none', color:'black'}} href="https://github.com/ArsalanTauseef?tab=repositories">{text2}</a>
            </div>
          </div>
        </div>
        <div className="rightPanel">
          <div>
            <LuLogIn />
          </div>
          <div>
            <RxAvatar />
          </div>
          <div className="rightPanelInput">
            <input type="text" />
            <MdOutlinePersonSearch />
          </div>
        </div>
      </nav>
    </header>
  );
};
