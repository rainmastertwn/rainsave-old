//document ready
$(document).ready(function(){

  console.log(document.querySelector('body'));

  document.querySelector("body").classList.add('bg-light');


    //footer responsive border
    var screenWidth = screen.width;
    var footerContactBox = document.getElementById("footerContactBox");
    if (screenWidth < 576) {
      footerContactBox.classList.remove("border-end");
    }
});
//document ready end

const app = Vue.createApp({
  data() {
    return {
      address: '台北市北投區清江路247巷8號1樓',
      tel_number: '(02)2898-6776',
      fax_number: '(02)2898-6132',
      email: 'RS@rainsave.com.tw',
      sections: [
        {
          id: "caseVideo",
          title1: "案例分享",
          title2: "各種保水型積磚，滲透型積磚施工案例分享",
          videos: [
            { video_src: "../images/case01/case01_1.png", video_title: "Timelapse 1", video_url: "../video/fire.mp4" },
            { video_src: "../images/case01/case01_2.png", video_title: "Timelapse 2", video_url: "../video/road.mp4" },
            { video_src: "../images/case01/case01_3.png", video_title: "Timelapse 3", video_url: "../video/road.mp4" },
            { video_src: "../images/case01/case01_4.png", video_title: "Timelapse 4", video_url: "../video/fire.mp4" },
            { video_src: "../images/case01/case01_4.png", video_title: "Timelapse 4", video_url: "../video/fire.mp4" }
          ]
        },
        {
          id: "timelapseVideo",
          title1: "縮時攝影",
          title2: "各種滲透型積磚，儲水型積磚縮時攝影分享",
          videos: [
            { video_src: "../images/case02/case02_1.png", video_title: "Timelapse 1", video_url: "../video/road.mp4" },
            { video_src: "../images/case02/case02_2.png", video_title: "Timelapse 2", video_url: "../video/fire.mp4" },
            { video_src: "../images/case02/case02_1.png", video_title: "Timelapse 3", video_url: "../video/road.mp4" },
            { video_src: "../images/case02/case02_1.png", video_title: "Timelapse 4", video_url: "../video/fire.mp4" },
            { video_src: "../images/case02/case02_2.png", video_title: "Timelapse 2", video_url: "../video/fire.mp4" },
            { video_src: "../images/case02/case02_1.png", video_title: "Timelapse 3", video_url: "../video/road.mp4" },
            { video_src: "../images/case02/case02_1.png", video_title: "Timelapse 4", video_url: "../video/fire.mp4" },
          ]
        },
        {
          id: "relatedVideo",
          title1: "相關影音",
          title2: "雨水積磚抗壓強度，雨水積磚施工，雨水積磚如何再利用等影片分享",
          videos: [
            { video_src: "../images/case02/case02_3.png", video_title: "Timelapse 1", video_url: "../video/fire.mp4" },
            { video_src: "../images/case02/case02_4.png", video_title: "Timelapse 2", video_url: "../video/road.mp4" },
            { video_src: "../images/case02/case02_5.png", video_title: "Timelapse 3", video_url: "../video/fire.mp4" },
            { video_src: "../images/case02/case02_2.png", video_title: "Timelapse 4", video_url: "../video/road.mp4" }
          ]
        },
        {
          id: "productVideo",
          title1: "產品說明",
          title2: "雨水積磚主體及雨水積磚側板及其組合後的應用方式介紹影片",
          videos: [
            { video_src: "../images/case02/case02_3.png", video_title: "Timelapse 1", video_url: "../video/fire.mp4" },
            { video_src: "../images/case02/case02_4.png", video_title: "Timelapse 2", video_url: "../video/road.mp4" },
          ]
        },
        {
          id: "installationVideo",
          title1: "安裝方式",
          title2: "雨水積磚主體及雨水積磚側板組合方式詳細影片介紹",
          videos: [
            { video_src: "../images/case02/case02_3.png", video_title: "Timelapse 1", video_url: "../video/fire.mp4" },
            { video_src: "../images/case02/case02_4.png", video_title: "Timelapse 2", video_url: "../video/road.mp4" },
            { video_src: "../images/case02/case02_5.png", video_title: "Timelapse 3", video_url: "../video/fire.mp4" },
          ]
        },
        {
          id: "implementVideo",
          title1: "關於施工",
          title2: "雨水積磚的不織布鋪設固定方法，HDPE不透水布的熱熔焊接方式等影片介紹",
          videos: [
            { video_src: "../images/case02/case02_5.png", video_title: "Timelapse 1", video_url: "../video/road.mp4" },
            { video_src: "../images/case02/case02_2.png", video_title: "Timelapse 2", video_url: "../video/fire.mp4" },
            { video_src: "../images/case02/case02_3.png", video_title: "Timelapse 3", video_url: "../video/road.mp4" },
            { video_src: "../images/case02/case02_4.png", video_title: "Timelapse 4", video_url: "../video/fire.mp4" },
            { video_src: "../images/case02/case02_3.png", video_title: "Timelapse 3", video_url: "../video/road.mp4" },
            { video_src: "../images/case02/case02_4.png", video_title: "Timelapse 4", video_url: "../video/fire.mp4" },
          ]
        },
        {
          id: "warningVideo",
          title1: "注意事項",
          title2: "雨水積磚使用應注意之重要事項",
          videos: [
            { video_src: "../images/case02/case02_4.png", video_title: "Warning 1", video_url: "../video/road.mp4" },
            { video_src: "../images/case02/case02_2.png", video_title: "Warning 2", video_url: "../video/road.mp4" },
          ]
        }
      ],
      modalVideo: {} // Stores the selected video for the modal
    };
  },
  methods: {

    openVideoModal(video) {
      this.modalVideo = video; // Set the selected video for the modal
    },
    groupVideos(videos, groupSize) {
      const groups = [];
      for (let i = 0; i < videos.length; i += groupSize) {
        groups.push(videos.slice(i, i + groupSize));
      }
      return groups;
    },
    clearModalVideo() {
      this.modalVideo = {
        video_title: "",
        video_url: ""
      };
    }
  }
});



//用Vue動態改所有頁面的重複資料-Header和Footer的基本資料+存放實績案例簡介資料+存放知識分享概要
// const vm = Vue.createApp({
//   data () {
//     return {
//       address: '台北市北投區清江路247巷8號1樓',
//       tel_number: '(02)2898-6776',
//       fax_number: '(02)2898-6132',
//       email: 'RS@rainsave.com.tw',
//       message: '',
//       //實績案例資料用V-for渲染(page08)
//     }
//   }
// });

// header和footer都會用到的公司基本資訊
 const $headerFooterCommon= {
  address: '台北市北投區清江路247巷8號1樓',
  tel_number: '(02)2898-6776',
  fax_number: '(02)2898-6132',
  email: 'RS@rainsave.com.tw',
  active: 'home'
 };


app.component('my-header', {
  template: `
  <nav class="navbar navbar-expand-md fixed-top top_1 bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/index.html">
      <img class="d-inline-block align-text-top" src="/images/rainsave_icon01.svg" alt="Rain SAVE 儲集框架" width="60"/>
      <div class="brand d-inline-block align-text-top"> 
        <h3 class="rainsave">Rain SAVE 儲集框架</h3>
        <img class="company_name" src="/images/zhengzaiwang_logo.png" alt="正在旺企業有限公司" width="180"/>
      </div>
    </a>
    <button class="navbar-toggler nav_hide border-0 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu" aria-controls="mainmenu" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon m-0"></span></button>
    <div class="d-none d-md-block" id="">
      <div class="company_info ms-auto">
        <div class="line"></div>
        <div class="addr">地址：{{ address }}</div>
        <div class="tel_fax">電話：{{ tel_number }} / 傳真：{{ fax_number }}</div>
        <div class="email">E-mail：{{ email }}</div>
      </div>
    </div>
  </div>
</nav>
<header id="rainsave_page01">
  <nav class="navbar navbar-expand-md fixed-top z-3">
    <div class="collapse navbar-collapse" id="mainmenu">
      <ul class="nav ms-auto mb-0 pt-1">
        <li class="nav-item"><a class="nav-link bg-secondary-subtle" href="/pages/page01.html">產品大樣與特點</a></li>
        <li class="nav-item"><a class="nav-link bg-secondary-subtle" href="/pages/page07.html">地震淺變性</a></li>
        <li class="nav-item"><a class="nav-link bg-secondary-subtle" href="/pages/page06.html">使用須知</a></li>
        <li class="nav-item"><a class="nav-link bg-secondary-subtle" href="/pages/page05.html">需求計算與資源下載</a></li>
        <li class="nav-item"><a class="nav-link bg-secondary-subtle" href="/pages/page08.html">實績案例</a></li>
        <li class="nav-item"><a class="nav-link bg-secondary-subtle" href="/pages/rainsave-tube.html">影音頻道</a></li>
      </ul>
      <div class="d-md-none company_info p-3 bg-secondary-subtle">
        <div class="addr">地址：{{ address }}</div>
        <div class="tel_fax">電話：{{ tel_number }} / 傳真：{{ fax_number }}</div>
        <div class="email">E-mail：{{ email }}</div>
      </div>
    </div>
  </nav>
</header>`,
  data () {
    return $headerFooterCommon; 
  },
  methods: {
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.active = item;
		}
	}

})

app.component('my-footer', {
  template: `<footer id="company_info1" class="mt-5">
  <div class="container mt-5">
    <div class="row g-0">
      <div class="col-lg-6 d-flex flex-wrap align-items-center g-3">
        <div class="pe-4">
          <picture>
            <source srcset="/images/footer_labicon/UL.avif" type="image/avif" />
            <img src="/images/footer_labicon/UL.png" height='40' alt='UL檢測'>
          </picture>
        </div>
        <div class="pe-4">
          <picture>
            <source srcset="/images/footer_labicon/TAF.avif" type="image/avif" />
            <img src="/images/footer_labicon/TAF.png" height='40' alt='TAF檢測'>
          </picture>
        </div>
        <div class="pe-4">
          <picture>
            <source srcset="/images/footer_labicon/zt.avif" type="image/avif" />
            <img src="/images/footer_labicon/ZT.jpg" height='40' alt='日鼎檢測'>
          </picture>
        </div>
        <div class="pe-4">
          <picture>
            <source srcset="/images/footer_labicon/ttt.avif" type="image/avif" />
            <img src="/images/footer_labicon/TTT.png" height='40' alt='鴻儀科技'>
          </picture>
        </div>
        <div class="">
          <picture>
            <source srcset="/images/footer_labicon/SGS.avif" type="image/avif" />
            <img src="/images/footer_labicon/SGS.jpg" height='40' alt='SGS檢測'>
          </picture>
        </div>
      </div>
      <div class="col-sm-12 col-lg-6">
        <div class="row g-0">
          <div id="footerContactBox" class="col-sm-7 border-end border-primary border-5 mt-5 mt-lg-0 pe-sm-3">
            <p class="mb-2 fs-5 text-primary fw-bold">正在旺企業有限公司</p>
            <p class="company_intro_small fs-5 lh-sm">電話：{{ tel_number }}</p>
            <p class="company_intro_small fs-5 lh-sm">傳真：{{ fax_number }}</p>
            <p class="company_intro_small fs-5 lh-sm">地址：{{ address }}</p>
            <p class="company_intro_small fs-5 lh-sm text-break">E-mail：{{ email }}</p>
          </div>
          <div class="col-sm-5 d-flex mt-5 mt-lg-0">
            <div class="align-self-center ps-sm-3">
              <p class="">
                <a class="fs-5 text-decoration-none fw-bold" href="https://www.facebook.com/rainmaster.tw" target="_blank">我們的社群&nbsp;<i class="bi bi-facebook"></i></a>
              </p>
              <p class="mt-2">
                <a class="fs-5 text-decoration-none fw-bold" href="https://www.youtube.com/channel/UCfrM6xyJ74HVgmu4kqDTdWQ/featured" target="_blank">我們的頻道&nbsp;<i class="bi bi-youtube"></i></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-5 text-center position-relative">
    <img width="300" class="mx-auto position-absolute top-50 start-50 translate-middle z-2 bg-light p-2" src="/images/zhengzaiwang_logo.png" alt="正在旺企業有限公司">
    <hr class="bg-primary border-0 opacity-100" style="height:2px;">
    <p class="text-nowrap m-0 text-primary text-center fs-6 fw-light position-absolute top-100 start-50 translate-middle" style="padding-top: 65px;">© 2024 正在旺企業-{{ message }}. All Rights Reserved.</p> 
  </div>
  <div class="bg-primary mt-5">
    <div class="row infoboxes">
      <div class="col-sm-12 text-center">
        <a class="info2" href="/pages/page01.html">產品大樣與特點</a>
        <a class="info2" href="/pages/page07.html">地震淺變性</a>
        <a class="info2" href="/pages/page06.html">使用須知</a>
        <a class="info2" href="/pages/page05.html">需求計算與資源下載</a>
        <a class="info2" href="/pages/page08.html">實績案例</a>
      </div>
    </div>
  </div>
</footer>`,
  data () {
    return $headerFooterCommon; 
  },
  methods: {
		makeActive: function(item){
			// When a model is changed, the view will be automatically updated.
			this.active = item;
		}
	}

})

app.mount("html");


//導覽列分頁籤滾動後加白邊框或陰影
$(window).scroll(function(){
  if ($(window).scrollTop() > 0){
    $('.nav-link').css('box-shadow','0 2px 10px 0 white')
  } else {
    $('.nav-link').css('box-shadow','0 2px 10px 0 rgba(0, 0, 0, 0.3)')
  }
})