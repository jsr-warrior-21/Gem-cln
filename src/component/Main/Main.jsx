import React, { useContext } from "react";
import "./Main.css";

import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showRes,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p >Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showRes ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div className="card">
                <p>
                  Beautifull places of the Utter Pradesh for your road trip.
                </p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div className="card">
                <p>What is the React Js?</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div className="card">
                <p>How to increase the focus level?</p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div className="card">
                <p>
                  Provide the best optimal solution for this coding Problem?
                </p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            
            <div className="result-data">
          
          <img src={assets.gemini_icon} alt="" />
        
        {loading?
        <div className="loader">
          <hr />
          <hr />
          <hr />
        </div>
        :
          <p dangerouslySetInnerHTML={{__html:resultData}}></p>
        
        }




            </div>

          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              type="text"
              placeholder="Search anything..."
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
               
               

              <img
                onClick={() => {
                  onSent();
                }}
                src={assets.send_icon}
                alt=""
              />
            </div>
          </div>

          <p className="bottom-info">
            Gemini may generate inaccurate information about people, places, or
            facts so recheck the information before taking any action.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
