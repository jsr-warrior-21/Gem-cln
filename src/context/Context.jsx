import React, { createContext, useState } from "react";
import main from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

   
    const delayPara = (index,nextWord) =>{
        setTimeout(function(){
         setResultData(prev=>prev+nextWord)
        },75*index)

    }

    const newChat = () =>{
        setLoading(false);
        setShowRes(false);
    }


  const onSent = async (prompt) => {


    setResultData("");
    setLoading(true);
    setShowRes(true);
 
    let response;

    if(prompt!== undefined){
     
        response = await main(prompt);
        setRecentPrompt(prompt);

    

    }
    else{
        setPrevPrompt(prev=>[...prev,input]);
        setRecentPrompt(input);
        response = await main(input);
    }
  
    let responseArray = response.split("**");
    let newResponse="";
    for(let i=0;i<responseArray.length;i++){
        if(i===0 || i%2!==1){
          newResponse+=responseArray[i];
        }
        else{
            newResponse+="<b>"+responseArray[i]+"</b>";
        }
    }
    
    let newReponse2 = newResponse.split("*").join("</br>");

     let newResArr = newReponse2.split(" ");
     for(let i=0;i<newResArr.length;i++){
        const nextWord = newResArr[i];
        delayPara(i,nextWord+" ");
     }
    setLoading(false);
    setInput("");
  };

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);
  const [showRes, setShowRes] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");

  const contextValue = {
    prevPrompt,
    setPrevPrompt,
    onSent,
    setRecentPrompt,
    recentPrompt,
    showRes,
    loading,
    resultData,
    input,
    setInput,
    newChat
  };

  return (
    <Context.Provider value={contextValue}>{props.children}</Context.Provider>
  );
};

export default ContextProvider;
