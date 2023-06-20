import React, { useState} from 'react';

const NotePage = () => {
    const [title, setTitle] = useState("");
    const [check, setCheck] = useState(false);
    const saveData = () => {
        const userObj = {title: title};
        window.localStorage.setItem("setTitle", JSON.stringify(userObj));
    }
    const callData = (e) => {
        setTitle(e.target.value);
        setCheck(false);
    }
    return (
        <div>
            <input
                name="title"
                value={title}
                onChange={onchange}
                placeholder="제목을 입력해주세요."
            />
            <button onClick={saveData}>저장하기</button>
            <button onChange={callData}>불러오기</button>
            {check ? <p>{window.localStorage.getItem("title")}</p> : <></>}
        </div>
    );
};

export default NotePage;