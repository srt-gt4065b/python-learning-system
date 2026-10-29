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
- `i18n.js` — 화면 문구 다국어(한국어·English·中文), 언어 선택 메뉴
- `questions-i18n.js` — 문제·힌트·예시의 영어/중국어 번역 (문제 ID 기준)
- `topic-guide.js` — 주제 선택 화면의 단계(그룹)와 주제별 정의·필요성·연습 전략 (3개 언어). 새 주제를 만들면 여기에도 추가

## 다국어
- 학생 화면(학습·연습 모드·리더보드) 우측 상단 🌐 메뉴에서 언어 선택, 브라우저 언어로 자동 선택
- 문제 번역 우선순위: Firebase 문제의 `question_en`·`hint_en`·`example_en`(zh 동일) → `questions-i18n.js` → 한국어 원문
- 새 문제의 번역은 문제 관리 화면의 '🌐 번역' 칸이나 CSV 선택 열로 입력

## 데이터 (Firebase Realtime Database — 기존 구조 그대로)
- `questions/{category}/{id}` — 문제
- `students/{학번}` — score, solved, streak, level, lastUpdated (+ 새 필드 `bestStreak`, `solvedIds`)
