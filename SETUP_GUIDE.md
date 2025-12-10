# 🚀 빠른 시작 가이드

이 문서는 구매하신 AI 음원 가사 및 썸네일 제작 패키지를 빠르게 설정하고 시작하는 방법을 안내합니다.

## 📋 체크리스트

배포 전 반드시 완료해야 할 사항들입니다:

- [ ] Node.js 설치 (v18.0.0 이상)
- [ ] 프로젝트 의존성 설치 (`npm install`)
- [ ] Google Gemini API 키 발급
- [ ] 도메인 정보 변경
- [ ] 관리자 계정 변경
- [ ] 빌드 테스트 완료
- [ ] 배포 완료

## ⚙️ 1단계: 개발 환경 설정

### Node.js 설치

[Node.js 공식 웹사이트](https://nodejs.org/)에서 LTS 버전을 다운로드하여 설치하세요.

버전 확인:
```bash
node --version
npm --version
```

### 의존성 설치

프로젝트 폴더에서 다음 명령어를 실행하세요:

```bash
npm install
```

## 🔑 2단계: Google Gemini API 키 발급

1. [Google AI Studio](https://aistudio.google.com/app/apikey)에 접속
2. Google 계정으로 로그인
3. "Create API Key" 버튼 클릭
4. API 키 복사 (나중에 웹사이트에서 입력)

**중요**: API 키는 환경 변수로 설정할 필요가 없습니다. 사용자가 웹사이트에서 직접 입력합니다.

## 📝 3단계: 개인정보 변경 (필수)

### 3.1. 도메인 변경

다음 파일들에서 `https://your-domain.com/`을 실제 도메인으로 변경하세요:

**파일: `index.html`**
```html
<!-- 변경 전 -->
<link rel="canonical" href="https://your-domain.com/" />
<meta property="og:url" content="https://your-domain.com/" />

<!-- 변경 후 -->
<link rel="canonical" href="https://your-actual-domain.com/" />
<meta property="og:url" content="https://your-actual-domain.com/" />
```

**파일: `public/sitemap.xml`**
```xml
<!-- 모든 <loc> 태그 내의 URL 변경 -->
<loc>https://your-actual-domain.com/</loc>
<loc>https://your-actual-domain.com/thumbnail</loc>
<!-- 등등... -->
```

### 3.2. 관리자 계정 변경

**파일: `constants.ts`**

```typescript
// 22번째 줄 근처
export const ADMIN_CREDENTIALS = {
  username: "admin",                    // ← 원하는 관리자 ID로 변경
  password: "change-this-password",     // ← 안전한 비밀번호로 변경
};
```

**보안 팁**: 비밀번호는 최소 12자 이상, 대소문자, 숫자, 특수문자를 포함하세요.

### 3.3. 사이트 제목 및 메타 정보 (선택)

`index.html`에서 웹사이트 제목, 설명 등을 원하는 대로 수정할 수 있습니다.

## 🧪 4단계: 로컬 테스트

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하여 다음을 확인하세요:

- [ ] 메인 페이지가 정상적으로 로드됨
- [ ] API 키 입력 후 가사 생성 테스트
- [ ] 썸네일 생성 테스트
- [ ] 모든 페이지 네비게이션 확인
- [ ] 관리자 페이지 로그인 테스트 (`/admin`)

### 프로덕션 빌드 테스트

```bash
npm run build
npm run preview
```

빌드가 성공적으로 완료되는지 확인하세요.

## 🚀 5단계: 배포

### Vercel 배포 (권장)

**가장 쉽고 빠른 방법입니다!**

1. [Vercel](https://vercel.com) 계정 생성
2. 프로젝트를 GitHub, GitLab, 또는 Bitbucket에 업로드
3. Vercel 대시보드에서 "New Project" 클릭
4. 저장소 선택 및 연결
5. 자동 배포 완료! (약 2-3분 소요)

**설정**: `vercel.json` 파일이 이미 포함되어 있어 추가 설정이 필요 없습니다.

### Netlify 배포

1. [Netlify](https://www.netlify.com) 계정 생성
2. `npm run build`로 빌드
3. `dist` 폴더를 Netlify에 드래그 앤 드롭
4. 배포 완료!

### 커스텀 서버 배포

1. `npm run build`로 빌드
2. `dist` 폴더의 내용을 웹 서버에 업로드
3. Nginx, Apache 등에서 SPA 라우팅 설정:

**Nginx 예시:**
```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

## 🎨 6단계: 커스터마이징 (선택)

### 로고 및 파비콘 변경

1. `public/` 폴더의 파비콘 파일들을 교체
2. `index.html`에서 사이트 제목 변경

### 색상 테마 변경

TailwindCSS를 사용하므로, 각 컴포넌트의 클래스명을 수정하여 색상을 변경할 수 있습니다.

예: `from-pink-600`을 `from-blue-600`으로 변경

### 광고 추가 (선택)

수익화를 원하는 경우:

1. [Google AdSense](https://www.google.com/adsense/) 계정 생성
2. 광고 코드 발급
3. 원본 프로젝트의 광고 컴포넌트 참고하여 구현
   - `components/ContentAd.tsx`
   - `components/FloatingBanner.tsx`
   - `components/SidebarAds.tsx`

## 📊 7단계: 모니터링 및 분석

### Google Analytics 추가 (선택)

1. [Google Analytics](https://analytics.google.com/) 계정 생성
2. 추적 ID 발급
3. `index.html`에 Google Analytics 스크립트 추가:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## ⚠️ 문제 해결

### 빌드 실패

```bash
# 캐시 삭제 후 재설치
rm -rf node_modules package-lock.json
npm install
npm run build
```

### API 키 오류

- Gemini API 키가 유효한지 확인
- API 사용량 한도를 확인 (무료 티어 제한)
- 브라우저 콘솔에서 에러 메시지 확인

### 이미지 생성 실패

- API 키가 Imagen 권한을 가지고 있는지 확인
- 프롬프트가 너무 길지 않은지 확인
- 네트워크 연결 상태 확인

### 페이지 라우팅 오류 (404)

- SPA 라우팅이 서버에서 올바르게 설정되었는지 확인
- `vercel.json` 또는 서버 설정에서 리다이렉트 규칙 확인

## 📞 추가 지원

설정 중 문제가 발생하면:

1. `README.md` 파일 전체를 다시 읽어보세요
2. 브라우저 개발자 도구 콘솔에서 에러 메시지 확인
3. Node.js와 npm 버전이 최신인지 확인

## 🎉 완료!

축하합니다! 이제 여러분만의 AI 음악 가사 및 썸네일 제작 서비스가 준비되었습니다.

성공적인 유튜브 채널 운영을 응원합니다! 🎵🎨

---

**다음 단계**: 
- SEO 최적화를 위해 메타 태그 수정
- 소셜 미디어에 서비스 홍보
- 사용자 피드백 수집 및 개선
