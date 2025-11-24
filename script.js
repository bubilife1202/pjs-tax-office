// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });

        // 메뉴 항목 클릭 시 메뉴 닫기
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            });
        });

        // 외부 클릭 시 메뉴 닫기
        document.addEventListener('click', (e) => {
            if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    }

    // ===== Smooth Scrolling =====
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // #만 있는 경우 무시
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const targetId = href.substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection) {
                e.preventDefault();
                const navHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== Navbar Scroll Effect =====
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.08)';
        }

        lastScroll = currentScroll;
    });

    // ===== Form Validation =====
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const phone = document.getElementById('phone').value;
            const phoneRegex = /^[0-9-]+$/;

            if (!phoneRegex.test(phone)) {
                e.preventDefault();
                alert('올바른 전화번호 형식을 입력해주세요. (숫자와 -만 사용 가능)');
                return false;
            }

            // 폼 제출 후 성공 메시지 (Netlify가 처리)
            // Netlify Forms가 자동으로 리다이렉트하므로 여기서는 추가 처리 불필요
        });
    }

    // ===== 네이버 지도 초기화 =====
    // 네이버 지도 API 사용을 위해서는 ncpClientId가 필요합니다
    // index.html의 스크립트 태그에서 YOUR_CLIENT_ID를 실제 클라이언트 ID로 교체해야 합니다

    function initMap() {
        if (typeof naver !== 'undefined' && naver.maps) {
            const mapOptions = {
                center: new naver.maps.LatLng(37.7556, 128.8961), // 강릉대로 116 좌표 (대략적)
                zoom: 17,
                zoomControl: true,
                zoomControlOptions: {
                    style: naver.maps.ZoomControlStyle.SMALL,
                    position: naver.maps.Position.TOP_RIGHT
                }
            };

            const map = new naver.maps.Map('map', mapOptions);

            // 마커 추가
            const marker = new naver.maps.Marker({
                position: new naver.maps.LatLng(37.7556, 128.8961),
                map: map,
                title: '박종수 세무회계사무소'
            });

            // 정보창 추가
            const infoWindow = new naver.maps.InfoWindow({
                content: '<div style="padding:10px;font-size:14px;"><strong>박종수 세무회계사무소</strong><br>강원 강릉시 강릉대로 116, 3층</div>'
            });

            // 마커 클릭 시 정보창 표시
            naver.maps.Event.addListener(marker, 'click', function() {
                if (infoWindow.getMap()) {
                    infoWindow.close();
                } else {
                    infoWindow.open(map, marker);
                }
            });

            // 초기 정보창 표시
            infoWindow.open(map, marker);
        } else {
            // 네이버 지도 API가 로드되지 않은 경우 대체 컨텐츠 표시
            const mapElement = document.getElementById('map');
            if (mapElement) {
                mapElement.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#6c757d;text-align:center;padding:20px;">지도를 불러오는 중입니다...<br><small>네이버 지도 API 키가 필요합니다.</small></div>';
            }
        }
    }

    // 페이지 로드 후 지도 초기화
    if (document.getElementById('map')) {
        // 네이버 지도 스크립트가 로드될 때까지 대기
        setTimeout(initMap, 500);
    }

    // ===== Scroll Reveal Animation =====
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 애니메이션을 적용할 요소들
    const animatedElements = document.querySelectorAll('.service-card, .info-box, .about-text');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ===== 전화번호 클릭 추적 (선택사항) =====
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('전화 연결 시도:', this.getAttribute('href'));
            // Google Analytics나 다른 분석 도구가 있다면 여기서 이벤트 추적
        });
    });
});

// ===== 스크롤 시 상단으로 버튼 (선택사항) =====
window.addEventListener('scroll', function() {
    // 향후 "맨 위로" 버튼 추가 시 사용 가능
});
