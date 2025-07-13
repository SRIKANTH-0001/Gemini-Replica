import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/context.jsx";


const Main =()=>{

    const {
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput,
        input,} =useContext(Context);

    return (<>
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {resultData.length === 0  && !loading 
                ?(<>
                 <div className="greet">
                    <p><span>Hello, Dev.</span></p>
                    <p>How can I help you Today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Do you wanna know somthing about vacation suggestions</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Know something about what's going on</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Wanna Recipe suggestion</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Wanna Hear any cracking jokes</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                </>)
             : (
                <div className="result-section">
                  <div className="result-title">
                       <img src={assets.user_icon} alt="" />
                       <p>{recentPrompt || "No prompt available"}</p>
                      </div>
                  <div className="result-data">
                    <img src={assets.gemini_icon} alt="" /> 
                  
                    {loading
                    ? (<div className='loader'>
                      <hr />
                      <hr />
                      <hr />
                    </div>
                    ): (<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    )}
                  </div>
                 
                </div>
              )}

               
                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder="Enter a Prompt here" value={input}  disabled={loading} />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                          {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}  
                        </div>
                    </div>
                    <p className="bottom-info">Gemini may display inaccurate info, including about people ,so double check it's responses.Your privacy and Gemini Apps </p>
                </div>
            </div>
        </div>

    </>)
}

export default Main