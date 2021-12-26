import React, { useState, useEffect } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreLogo from "../assets/owner/more.png";
import "./Main.css";
const Main = ({ punkListData, selectedPunk }) => {
 const [activePunk, setActivePunk] = useState(punkListData[selectedPunk]);
 console.log(activePunk)
  console.log(punkListData[selectedPunk])
//   console.log(punkListData[0]);
// console.log(activePunk)
  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [selectedPunk]);
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk?.image_original_url} />
          </div>
        </div>

        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">{activePunk?.name}</div>
          <span className="itemNumber">.#{activePunk?.token_id}</span>
        </div>

        <div className="owner">
          <div className="ownerImageContainer">
            <img
              className="ownerImage"
              src={activePunk?.owner?.profile_img_url}
              alt=""
            />
          </div>

          <div className="ownerNameAndHandle">
            <div>76666888888888888888888888888</div>
            <div className="ownerHandle">@clever programmer</div>
          </div>

          <div className="logoContainer">
            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>

            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>

            <div className="ownerLink">
              <img src={moreLogo} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
