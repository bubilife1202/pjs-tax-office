# 박종수 세무회계사무소 웹사이트

강릉에서 가장 든든한 세무 파트너, 박종수 세무회계사무소의 공식 웹사이트입니다.

## 🌟 주요 특징

- **깔끔한 Single Page 디자인**: 방문자가 한눈에 모든 정보를 확인할 수 있는 원페이지 구성
- **모바일 최적화**: 스마트폰에서도 완벽하게 작동하는 반응형 디자인
- **신뢰감 있는 디자인**: 네이비/화이트/그레이 색상으로 전문성 강조
- **간편한 상담 신청**: 전화 연결 버튼과 문의 폼으로 쉬운 상담 신청
- **SEO 최적화**: 강릉 지역 검색에 최적화된 메타 태그

## 📋 섹션 구성

1. **Hero**: 메인 카피와 CTA (전화 연결)
2. **주요 업무**: 기장 대행, 세무 신고, 재산세 상담, 창업 지원
3. **사무소 소개**: 대표 세무사 프로필 및 운영 철학
4. **오시는 길**: 위치 정보, 지도, 문의 폼

## 🛠️ 기술 스택

- **HTML5**: 시맨틱 마크업
- **CSS3**: 반응형 디자인, 애니메이션
- **JavaScript**: 인터랙션 및 사용자 경험 개선
- **Netlify Forms**: 서버 없이 문의 폼 처리
- **네이버 지도 iframe**: API 키 없이 간편하게 지도 표시

## 📦 프로젝트 구조

```
pjs-tax-office/
├── index.html          # 메인 HTML 파일
├── styles.css          # 스타일시트
├── script.js           # JavaScript 기능
├── netlify.toml        # Netlify 배포 설정
├── .gitignore          # Git 제외 파일
└── README.md           # 프로젝트 문서
```

## 🚀 배포 방법

### Netlify를 통한 배포

1. **GitHub에 푸시**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin claude/tax-firm-website-01UxNsQua7tkdAvv3j1wqisz
   ```

2. **Netlify 연결**
   - [Netlify](https://www.netlify.com/)에 로그인
   - "New site from Git" 클릭
   - GitHub 저장소 선택 (bubilife1202/pjs-tax-office)
   - 브랜치 선택: `claude/tax-firm-website-01UxNsQua7tkdAvv3j1wqisz`
   - 배포 설정은 자동으로 `netlify.toml`에서 읽어옴
   - "Deploy site" 클릭

3. **도메인 설정 (선택사항)**
   - Netlify 대시보드에서 "Domain settings"
   - 커스텀 도메인 추가 가능

### 문의 폼 설정

Netlify Forms는 자동으로 활성화됩니다:
- 폼 제출 시 Netlify 대시보드에서 확인 가능
- 이메일 알림 설정: Site settings → Forms → Form notifications

## 🗺️ 지도 설정

현재 네이버 지도는 **iframe 방식**으로 구현되어 있어 별도의 API 키 발급이나 설정이 필요 없습니다.

- **장점**: API 키 불필요, 무료, 바로 사용 가능
- **기능**: 네이버 지도의 모든 기능(확대/축소, 길찾기 등) 자동 제공
- **수정 방법**: `index.html`의 iframe src URL을 변경하여 다른 위치로 변경 가능

더 정확한 위치를 표시하고 싶다면:
1. [네이버 지도](https://map.naver.com/)에서 원하는 위치 검색
2. "공유" 버튼 클릭 → "HTML 태그" 복사
3. `index.html`의 iframe 태그 교체

## 📝 커스터마이징 가이드

### 색상 변경
`styles.css`의 `:root` 섹션에서 CSS 변수 수정:
```css
:root {
    --navy-primary: #1a2332;    /* 메인 네이비 */
    --accent-blue: #3498db;      /* 강조 색상 */
    /* ... */
}
```

### 콘텐츠 수정
`index.html`에서 텍스트 직접 수정:
- 대표 세무사 프로필: 130번째 줄 근처
- 주요 업무 내용: 70-120번째 줄 근처
- 연락처 정보: 140번째 줄 근처

### 이미지 추가 (선택사항)
Hero 섹션에 배경 이미지 추가:
```css
.hero {
    background: linear-gradient(rgba(26, 35, 50, 0.9), rgba(44, 62, 80, 0.9)),
                url('images/hero-bg.jpg');
    background-size: cover;
    background-position: center;
}
```

## 📊 SEO 최적화

현재 적용된 SEO 요소:
- ✅ 메타 description: 강릉 세무사 키워드 포함
- ✅ 메타 keywords: 지역 + 업무 키워드
- ✅ Semantic HTML5 태그 사용
- ✅ 모바일 친화적 반응형 디자인
- ✅ 빠른 로딩 속도 (순수 HTML/CSS/JS)

추가 개선 방안:
- Google Search Console 등록
- Google Analytics 추가
- 네이버 웹마스터 도구 등록
- Open Graph 메타 태그 추가 (SNS 공유용)

## 🔧 유지보수

### 정기 점검 항목
- [ ] 전화번호 클릭 시 정상 작동 확인
- [ ] 문의 폼 제출 테스트
- [ ] 모바일 디스플레이 확인
- [ ] 네이버 지도 정상 표시 확인
- [ ] 모든 링크 작동 확인

### 업데이트 방법
1. 파일 수정
2. Git 커밋 및 푸시
3. Netlify 자동 재배포 (약 1-2분 소요)

## 📞 연락처

- **사무소명**: 박종수 세무회계사무소
- **주소**: 강원특별자치도 강릉시 강릉대로 116, 3층
- **전화**: 0507-1409-2268
- **영업시간**: 평일 09:00 ~ 18:00 (주말 및 공휴일 휴무)

## 📄 라이선스

© 2024 박종수 세무회계사무소. All rights reserved.

---

**개발 문의**: 프로젝트 관련 기술 지원이 필요하신 경우 Issues 탭을 이용해주세요.
