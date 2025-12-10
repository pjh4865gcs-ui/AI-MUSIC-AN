# 🎵 AI 음원 가사 및 썸네일 제작 - 판매용 패키지

> **유튜브 플레이리스트 채널을 누구나 운영할 수 있게 도와드립니다**

AI를 활용한 **가사 생성**과 **썸네일 생성** 기능을 하나로 통합한 웹 애플리케이션입니다.  
Google Gemini API 키만 있으면 1초 만에 감성적인 가사와 클릭을 부르는 썸네일을 무제한 생성할 수 있습니다.

## ✨ 주요 기능

### 1. 🎤 가사 생성 (AI 음악 가사 1초 완성)

**1초 만에 완성되는 감성 가사**

- ✅ AI를 사용하여 장르, 제목, 테마에 맞는 노래 가사를 자동 생성
- ✅ 다양한 장르 지원: K-발라드, K-인디, K-트로트, 힙합, 댄스, R&B, 락, 시티팝
- ✅ 스크롤 기반의 직관적인 인터페이스로 빠른 작업
- ✅ 원클릭 복사/다운로드 기능
- ✅ 썸네일 제작 페이지로 자동 연결

### 2. 🎨 썸네일 생성 (AI 음악 썸네일 제작)

**클릭을 부르는 고퀄리티 썸네일**

- ✅ 음악 플레이리스트용 썸네일 이미지 AI 생성
- ✅ 다양한 음악 장르, 악기, 분위기, 보컬 스타일 태그 지원
- ✅ 이미지 업로드를 통한 커스터마이징 기능
- ✅ 16:9 비율 자르기 및 업스케일링 기능
- ✅ 가사 제작 페이지로 자동 연결

## 🔧 기술 스택

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite 6
- **Styling**: TailwindCSS
- **AI**: Google Gemini API
- **Routing**: React Router DOM v6

## 📦 설치 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 설정

#### Google Gemini API 키 발급

1. [Google AI Studio](https://aistudio.google.com/app/apikey) 접속
2. Google 계정으로 로그인
3. "Create API Key" 버튼 클릭
4. API 키 복사

**참고**: 사용자가 웹사이트에서 직접 API 키를 입력하므로, 환경 변수 설정은 필요하지 않습니다.

### 3. 개인정보 설정 (필수)

구매 후 반드시 다음 설정을 변경해야 합니다:

#### 3.1. 도메인 변경

- **파일**: `index.html`, `public/sitemap.xml`
- **변경 내용**: `https://your-domain.com/`을 실제 도메인으로 변경

#### 3.2. 관리자 계정 설정

- **파일**: `constants.ts`
- **위치**: `ADMIN_CREDENTIALS`
- **변경 내용**:
  ```typescript
  export const ADMIN_CREDENTIALS = {
    username: "your-admin-username",  // 원하는 관리자 ID로 변경
    password: "your-secure-password",  // 안전한 비밀번호로 변경
  };
  ```

#### 3.3. 광고 설정 (선택)

광고를 추가하려면:
- Google AdSense 계정을 생성하고 광고 코드를 받습니다
- `index.html`에 AdSense 스크립트를 추가합니다
- 필요한 광고 컴포넌트를 생성하여 적절한 위치에 배치합니다

### 4. 개발 서버 실행

```bash
npm run dev
```

서버가 `http://localhost:3000`에서 실행됩니다.

### 5. 프로덕션 빌드

```bash
npm run build
```

빌드된 파일은 `dist` 폴더에 생성됩니다.

## 🚀 배포 방법

### Vercel 배포 (권장)

1. [Vercel](https://vercel.com) 계정 생성
2. GitHub에 프로젝트 업로드
3. Vercel에서 "New Project" 클릭
4. GitHub 저장소 연결
5. 자동으로 빌드 및 배포 완료

`vercel.json` 파일이 이미 포함되어 있어 추가 설정이 필요하지 않습니다.

### 다른 호스팅 서비스

- **Netlify**: `dist` 폴더를 직접 업로드
- **AWS S3 + CloudFront**: 정적 웹사이트 호스팅 설정
- **Firebase Hosting**: `firebase deploy` 명령어 사용

## 📁 프로젝트 구조

```
aimusic/
├── components/          # 재사용 가능한 컴포넌트
│   ├── ApiKeyManager.tsx       # API 키 입력 및 상태 관리
│   ├── Button.tsx              # 버튼 컴포넌트
│   ├── Card.tsx                # 카드 컴포넌트
│   ├── LoadingSpinner.tsx      # 로딩 인디케이터
│   ├── ImageCropper.tsx        # 이미지 크롭 기능
│   └── Step*.tsx               # 가사 생성 단계별 컴포넌트
├── pages/               # 페이지 컴포넌트
│   ├── HomePage.tsx            # 메인 페이지
│   ├── LyricsPage.tsx          # 가사 생성 페이지
│   ├── ThumbnailPage.tsx       # 썸네일 생성 페이지
│   ├── ApiGuidePage.tsx        # API 가이드
│   └── HowToUsePage.tsx        # 사용법 안내
├── services/            # API 서비스
│   └── geminiService.ts        # Gemini API 연동
├── utils/               # 유틸리티 함수
│   └── contentProtection.ts    # 콘텐츠 보호 (우클릭 방지 등)
├── public/              # 정적 파일
├── App.tsx              # 메인 앱 컴포넌트 및 라우팅
├── index.tsx            # 진입점
├── constants.ts         # 상수 정의
└── types.ts             # TypeScript 타입 정의
```

## 🔐 보안 권장사항

1. **관리자 계정**: 반드시 강력한 비밀번호로 변경하세요
2. **API 키**: 사용자의 API 키는 브라우저 localStorage에 저장되므로 서버 측 저장이 필요 없습니다
3. **HTTPS**: 프로덕션 환경에서는 반드시 HTTPS를 사용하세요

## 📝 커스터마이징 가이드

### 장르 추가/수정

`constants.ts` 파일의 `INITIAL_GENRES`와 `PROMPT_DATA`를 수정하여 장르를 추가하거나 변경할 수 있습니다.

### 스타일 변경

TailwindCSS를 사용하므로, 각 컴포넌트의 className을 수정하여 디자인을 변경할 수 있습니다.

### 기능 추가

- 새로운 페이지 추가: `pages/` 폴더에 파일 생성 후 `App.tsx`에 라우트 추가
- 새로운 컴포넌트 추가: `components/` 폴더에 파일 생성

## ⚠️ 주의사항

1. Google Gemini API는 무료 티어와 유료 티어가 있습니다
2. 생성된 이미지는 사용자의 브라우저에 저장되며, 서버에 저장되지 않습니다
3. 본 소프트웨어는 있는 그대로 제공되며, 어떠한 보증도 하지 않습니다

## 📞 지원

설치나 사용 중 문제가 발생하면 다음을 확인하세요:

1. Node.js 버전이 18.0.0 이상인지 확인
2. `npm install`을 다시 실행
3. 브라우저 캐시를 삭제하고 다시 시도
4. 브라우저 콘솔에서 에러 메시지 확인

## 📄 라이선스

본 소프트웨어는 상업적 사용이 가능한 라이선스로 제공됩니다. 구매 후 자유롭게 수정하여 사용할 수 있습니다.

---

**구매해주셔서 감사합니다! 성공적인 유튜브 채널 운영을 응원합니다! 🎵🎨**
