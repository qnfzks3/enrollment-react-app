import React from "react";
import {useState} from "react";
import '../App.css';


const EnrollmentForm = ()=>{
    const [firstName,setFirstName] =useState("");
    const [lastName,setLastName] =useState("");
    const [welcomeMessage,setWelcomeMessage] =useState("");

    const handleSubmit = (e) => {
        setWelcomeMessage(`환영합니다. ${firstName} ${lastName} 님!!` );
        e.preventDefault(); //submit 기능 중지

    };

    return(
        <div>
            <form className="enrolForm" onSubmit={handleSubmit}>
                <h1>대학생 상세 정보 등록 양식</h1>
                <div><label>First Name</label>
                <input type="text" name="fname" onBlur={(e)=>setFirstName(e.target.value)} />
                </div>


                <div><label>last Name</label> <input type="text" name="lname"
                                                     onBlur={(e)=>setLastName(e.target.value)} /></div>
                <div><button type="submit">등록하기</button></div>

            </form>

            <label id="studentMsg" className="message">
            {welcomeMessage}</label>
        </div>
    );
};
/*onBlur가 발생하면 대상에 대한 정보를 받아와 e 값을 퍼스트 네임에 넣어주어라  e는 event 발생시의 약어*/

export default EnrollmentForm;




