import React from "react";
import Header from "../../components/Header";

function NotFound() {

  
  return (
    <div>
        <Header></Header>
        <div className="container" style={{'marginTop':'70px'}}>
            <div className="row justify-content-center text-center">
                <h1 className="timer-style">NotFound</h1>
            </div>
        </div>
    </div>
  );
}

export default NotFound;