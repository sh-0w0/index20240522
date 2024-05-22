let users = ["김상협"];

let currentUser = prompt("currentUser을 입력해 주세요!");

let isNew = true;
for (let existingUser of users) {
    if (existingUser === currentUser) {
        isNew = false;
        break;
    }
}

if (isnew) { //사용자에 따라 다른 메시지 출력
    alert(`${currentUser}님 처음 접속 하신 것을 환영합니다.`);
} else {
    alert(`${currentUser}님 다시 접속 하신 것을 환영합니다.`);
}

while (true) { //무한 반복
    let command = prompt("무엇을 도와드릴까요? (press: Q to exit)");
    if (command === "Q" || command == "q") break;
}

//조건문, 반복문 기본 구조
