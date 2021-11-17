<div id="top"></div>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://user-images.githubusercontent.com/41707077/142101954-c4d096ec-7233-4c8c-a710-b9cf308fa79b.png">
    <img src="https://user-images.githubusercontent.com/41707077/142101954-c4d096ec-7233-4c8c-a710-b9cf308fa79b.png" alt="Logo" width="120" height="120">
  </a>
  <h1 align="center">캠퍼스 플로깅</h1>

  <p align="center">
    대학생의 플로깅 문화를 장려하는 안드로이드 앱
    <br />
    <br />
    <a href="https://github.com/glging/server">서버 파트</a>
    ·
    <a href="https://github.com/glging/client">모바일 파트</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>목차</summary>
  <ol>
    <li>
      <a href="#소개">소개</a>
      <ul>
        <li><a href="#기술-스택">기술 스택</a></li>
      </ul>
    </li>
    <li>
      <a href="#설계">설계</a>
      <ul>
        <li><a href="#아키텍처">아키텍처</a></li>
        <li><a href="#UI-UX-설계">UI/UX 설계</a></li>
        <li><a href="#시퀀스-다이어그램">시퀀스 다이어그램</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## 소개


**캠퍼스 플로깅**은 대학생의 플로깅을 장려하는 플로깅 플랫폼이다. 이는 플로깅 중의 기록, 플로깅이 끝난 후 주운 쓰레기의 정산, 지속적인 동기부여를 가능하게 할 뱃지와 챌린지, 그리고 랭킹 기능을 포함한다. 또한, 플로깅 거리를 재학 중인(또는 졸업한) 학교의 둘레를 의미하는 *학교*라는 새로운 단위로 제공하여 재미 요소를 더했으며, 1학교 달성시 1개의 배지를 부여한다.

현재 단국대 학생을 한정하여 개발을 완료했다.

### 기술 스택

* Android
* Node.js(Express)
* SQLite
* MySQL

<p align="right"><a href="#top">▲맨 위로</a></p>


## 설계
### 아키텍처
![architecture](https://user-images.githubusercontent.com/41707077/142095536-fe4a4467-6e52-4ee6-aec4-e2567fab7261.PNG)

### UI UX 설계
카카오 오븐으로 설계한 UI/UX 설계이다.
![ui](https://user-images.githubusercontent.com/41707077/142130293-c0070751-4520-41a0-b905-040ebdba0800.png)


### 시퀀스 다이어그램
회원가입 또는 로그인 후, 학교 인증을 진행해야 플로깅 서비스를 시작할 수 있다. 다음은 요구사항을 정의 시,  앱과 서버의 역할을 나누기 위해 논의한 내용을 표현한 시퀀스 다이어그램이다.
![sequence](https://user-images.githubusercontent.com/41707077/142095886-5a3b6a83-0d64-49bd-bc70-4f04e83a32e2.png)

<p align="right"><a href="#top">▲맨 위로</a></p>

## Contact
| 역할 | 이름 | 역할 | 이메일 |
| ---- | -------| --- | --- |
| 팀장 | [정윤아](https://github.com/yuna1212) | 서버 개발 | cya3559@naver.com
| 팀원 | [강금실](https://github.com/Kang-Gumsil) | 안드로이드 앱 개발 | kanggumsil@naver.com
| 팀원 | 주세연 | 기획 및 UI/UX 설계 | choosy1024@naver.com

<p align="right"><a href="#top">▲맨 위로</a></p>
