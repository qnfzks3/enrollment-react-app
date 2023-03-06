import React, {useEffect} from 'react';
import '../EnrolList.css';
import {DetailsList} from '@fluentui/react/lib/DetailsList';

//과정 등록 학생 리스트 컬럼 정의(이름 , 성 , 과정 , 이매일 )


const columns = [
    {
        key: 'edit',
        name: '수정',
        fieldName: "edit",
        minWidth: 50,
        isResizable: false
    },
    
    {
        key:'fname',name: 'First Name',
        fieldName:'fname',
        minWidth: 90, isResizable:false
    },
    {
        key:'lname',name: 'Last Name',
        fieldName:'lname',
        minWidth: 90, isResizable:false
    },
    {
        key:'program',name: '과정종류',
        fieldName:'program',
        minWidth: 90, isResizable:false
    },
    {
        key:'email',name: '이매일',
        fieldName:'email',
        minWidth: 90, isResizable:false            //isResizable 을 true 로 바꾸면 너비를 마우스로 조절할수있다.


    },
    {
        key: 'delete',
        name: '삭제',
        fieldName: "delete",
        minWidth: 50,
        isResizable: false

    },
];

//칼럼 정의시 사용했던 fieldName(필드 네임)을 기준으로 값 초기화
let items = [];


const EnrolList=(props)=>{
    //과정 등록 학생 데이터가 추가 될 때 마다  UI를 재렌더링 하기 위해 
    // useEffect 리액트 훅 사용
    // useEffect : 컴퍼넌트 생명주기에 따라 dom 렌더링 처리
    // props 객체에 값이 존재 할 때 마다 detailsList 에 렌더링해서 화면에 표시
    
  useEffect(()=>{ //데이터를 보낼때마다 어떻게 될까?
       const curItemKey=props.studDetails.key;
       if (curItemKey){
           items=[...items, props.studDetails];
           props.setStudDetails({});
       }
       // 삭제 기능 수행
      if (props.action === 'delete'){
          //삭제 대상 아이템을 키로 가져옴    -- items 는 등록된 학생들의 정보
          const deleteItem = items.filter(
              (item)=>item.key === props.selectedItemKey
          )[0];
          //삭제대상 아이템만 제외하고 다시 items 객체 생성
          items = items.filter((item)=>item !==deleteItem);
      }
   },[props]);  // props 값이 생길때 마다  명령을 계속 한다.

  return(
      <div className="enrolList">
        <DetailsList items={items} columns={columns} />
      </div>
  )


};




export default EnrolList;