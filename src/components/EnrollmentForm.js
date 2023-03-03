import React from "react";
import {useState} from "react";
import '../App.css';


const EnrollmentForm = (props)=>{
    //폼에 입력한 내용을 기억하기 위해 state형 변수 선언
    //onBlur 이벤트 발생 시 입력한 이름/성 을 firstName , lastName 변수에 저장
    const [firstName,setFirstName] =useState("");
    const [lastName,setLastName] =useState("");

    //state형 변수에 저장된 이름/성을 환영메세지로 출력하기 위해 선언
    const [welcomeMessage,setWelcomeMessage] =useState("");

    //등록하기 버튼 클릭 시 이름/성을 환영 메세지로 만들어 폼 아래쪽에 나타냄
    const handleSubmit = (e) => {
        setWelcomeMessage(`환영합니다. ${firstName} ${lastName} 님!!` );
        //props로 전달 받은 setUpdateSeats 함수를 이용해서 상위 컴퍼넌트의 변수 값을 조작함

        props.setUpdateSeats(props.currentSeat -1); //참여가능 인원수 감소
        e.preventDefault(); //submit 기능 중지 - 전송 중지

    };
    /*이벤트가 발생하면 이라는 의미 e -> event 발생시 를 의미*/       /*등록하기 버튼 누르면 onSubmit 이 변경된다.*/
    return(
        <div>
            <form className="enrolForm" onSubmit={handleSubmit}>
                <h1> {props.chosenProgram}대학생 상세 정보 등록 양식</h1>
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




