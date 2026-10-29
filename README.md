# python-learning-system
우송대학교 AI경영학과 Python 인터랙티브 학습 시스템 (v2)

브라우저에서 바로 Python 코드를 실행하고 자동 채점받는 게임형 학습 사이트입니다.

## 페이지
| 파일 | 대상 | 설명 |
|---|---|---|
| `index.html` | 학생 | 이름·학번으로 입장 → 문제 풀이, 점수·레벨·연속 정답 기록 |
| `index_no_login.html` | 누구나 | 연습 모드 (기록은 브라우저에만 저장) |
| `dashboard.html` | 학생 | 실시간 리더보드 (상위 15명, 내 순위) |
| `professor-dashboard.html` | 교수 | 학생 현황, 점수 분포, 어려운 문제, CSV 내보내기 |
| `question-admin.html` | 교수 | 문제 추가·수정·활성화·삭제, CSV 일괄 업로드, 정답 코드로 예상 출력 만들기 |

## 공용 파일
- `style.css` — 디자인 시스템 (라이트/다크 테마)
- `common.js` — Firebase 설정, 공통 함수
- `learn.js`, `learn.css` — 학습 화면
- `py-worker.js` — Python 실행기 (Pyodide 0.27, 별도 스레드 · 15초 시간 제한)

## 데이터 (Firebase Realtime Database — 기존 구조 그대로)
- `questions/{category}/{id}` — 문제
- `students/{학번}` — score, solved, streak, level, lastUpdated (+ 새 필드 `bestStreak`, `solvedIds`)
