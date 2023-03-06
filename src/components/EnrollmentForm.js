import { React, useState } from 'react';
import '../App.css';
import {MdEdit,MdDelete} from 'react-icons/md'  //아이콘 가져오기

const EnrollmentForm = (props) => {
    // 폼에 입력한 이름/성/이메일을 기억하기 하기 위해 state형 변수 선언
    // onChange 이벤트 발생시 입력한 이름/성/이메일을
    // firstName, lastName, email변수에 저장
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    // state형 변수에 저장된 이름/성을 환영메세지로 출력하기 위해 선언
    const [welcomeMessage, setWelcomeMessage] = useState("");
    const [msgStyle, setMsgStyle] = useState("redOne");
    //등록/수정 버튼 정의
    const [btnValue,setbtnValue]=useState("등록하기");
    const [studKey,setStudKey]=useState(0);

    //취소하기 버튼시 클릭
    //폼에 입력된 데이터 제거, 버튼의 글자 바꿈
    const handleCancel=(e)=>{   // 취소해야하니 포에 입력된 값들 제거
        handleFormInput('','','');
        
        setbtnValue('등록하기');
        e.preventDefault();
    };

    const handleEdit =(key, program)=>{
        //수정할 학생 정보를 폼에 표시
        handleFormInput(firstName,lastName,email);

        // 참가 프로그램 라디오 버튼에 표시
        props.setReSelectProgram(program);

        setStudKey(key);
        setbtnValue('수정하기');

    };


    // '등록하기' 버튼 클릭시 이름/성을 환영메세지로 만들어
    // 폼 아래쪽에 나타냄
    const handleSubmit = (e) => {
        let msg = `더 이상 참가할 수 없어요!`;
        setMsgStyle('redOne');
        if (props.currentSeat - 1 >= 0) {
            // props로 전달받은 setUpdateSeats 함수를 이용해서
            // 상위 컴퍼넌트의 seats 변수를 조작함
            props.setUpdateSeats(props.currentSeat - 1);  // 참여가능 인원수 감소
            setMsgStyle('message');
            msg = `환영합니다, ${firstName} ${lastName} 님!!` +
                `${email}로 등록관련 정보를 발송해드렸습니다`;

            //등록완료된 학생정보 키  생성
            const rndKey=Math.floor(1000+Math.random()*9000);

            // 학생정보 등록 시 rndKey를  
            // 학생정보 수정 시 studKey를 사용하도록 함
            const key = btnValue === '등록하기' ? rndKey : studKey;
            
            //생성한 키와 등록 완료된 학생 정보를 props에 저장
            let stud = { // 여기가 등록 버튼 누르면 아래 출력하게 하는곳
                key: key , fname:firstName,lname:lastName, program: props.chosenProgram ,email: email,
                edit: <MdEdit className="actionIcon" onClick={()=>handleEdit(key,props.chosenProgram)} />,

                //삭제 아이콘 클릭 시 삭제 대상 학생정보의 키를 넘김
                delete: <MdDelete className="actionIcon"
                onClick={()=>props.handleItemSelection('delete',key)} /> //key값과 종료  -< app.js에서 만들어준다.

            }
            props.setStudDetails(stud)
        }
        setWelcomeMessage(msg);
        e.preventDefault();  // submit 기능 전파 중지
    };

    const handleInputChange = (setInput, e) => {
        setInput(e.target.value);
    };

    const handleFormInput=(fname,lname,email)=>{
        setFirstName(fname);
        setLastName(lname);
        setEmail(email);

    };

    return(
        <div>
            <div className="enrolContainer">
                <form className="enrolForm" >
                    <ul className="ulEnrol">
                        <li>
                            <label htmlFor="FirstName"></label>
                            <input type="text" id="FirstName"
                                   name="firstName" className="inputFields"
                                   placeholder="First Name" value={firstName}
                                   onChange={e => handleInputChange(setFirstName, e)} />
                        </li>
                        <li>
                            <label htmlFor="LastName"></label>
                            <input type="text" id="LastName"
                                   name="lastName" className="inputFields"
                                   placeholder="Last Name" value={lastName}
                                   onChange={e => handleInputChange(setLastName, e)} />
                        </li>
                        <li>
                            <label htmlFor="Email"></label>
                            <input type="text" id="Email"
                                   name="email" className="inputFields"
                                   placeholder="Email" value={email}
                                   onChange={e => handleInputChange(setEmail, e)} />
                        </li>
                        <li id="center-btn">
                            <button type="submit" id="btnEnrol" className="btn"
                                    name="enrol" onClick={handleSubmit}>
                                {btnValue}</button>
                            <button type="submit" id="btnCancel" className="btn"
                                    name="cancel" onClick={handleCancel}>
                                취소하기</button>

                        </li>
                        <li>
                            <label id="studentMsg" className={msgStyle}>
                                {welcomeMessage}
                            </label>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    );
};

export default EnrollmentForm;



