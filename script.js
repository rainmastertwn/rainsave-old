//document ready
$(document).ready(function(){

  console.log(document.querySelector('body'));

  document.querySelector("body").classList.add('bg-light');


    //homepage carousel automatic turning page time  
    const myCarouselElement = document.querySelector('#carouselknowledgeControls')
    const carousel = new bootstrap.Carousel(myCarouselElement, {
      interval: 10000,
      touch: true
    })


    //footer responsive border
    var screenWidth = screen.width;
    var footerContactBox = document.getElementById("footerContactBox");
    if (screenWidth < 576) {
      footerContactBox.classList.remove("border-end");
    }
});
//document ready end

// homepage carousel

    
// Create a function to wrap items in carousel-items and rows
function wrapItemsInCarousel(itemNum, carouselID) {
    // Select all items
    const items = document.querySelectorAll( '#'+ carouselID +' .c-item');

    // Create a container for rows
    const container = document.querySelector('.carousel-inner');

    // Initialize a counter for carousel items
    let carouselCount = 0;
    
    // Create carousel items and wrap rows in each carousel item
    let carouselItem;
    items.forEach((item, index) => {
        // Start a new carousel item for every third item or the first item
        if (index % itemNum === 0 || index === 0) {
            carouselCount++;
            carouselItem = document.createElement('div');
            carouselItem.className = 'carousel-item';
            // Add 'active' class to the first carousel item
            if (carouselCount === 1) {
                carouselItem.classList.add('active');
            }
            container.appendChild(carouselItem);
        }
        // Create a row for every third item or the first item
        if (index % itemNum === 0 || index === 0) {
            const row = document.createElement('div');
            row.className = 'row';
            carouselItem.appendChild(row);
        }
        // Append the item to the current row
        carouselItem.lastChild.appendChild(item);
    });
    
    // Replace the original items container with the new container
    //document.getElementById('items').replaceWith(container);
}

wrapItemsInCarousel(3,"carouselknowledgeControls");
// wrapItemsInCarousel(4,"caseVideo");
// homepage carousel end

//animation controll
function thumb_ani_home(){
  bodymovin.loadAnimation({
    container: document.getElementById('thumb_ani_home'),
    path: '/images/animation/thumb_animation_homepage.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "thumb animation",
  });
}

function move360(){
  bodymovin.loadAnimation({
    container: document.getElementById('move360'),
    path: '/images/animation/360_bg_blue.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "360 animation",
  });
}

function move360_2(){
  bodymovin.loadAnimation({
    container: document.getElementById('move360_2'),
    path: '/images/animation/360_bg_blue.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "360 animation",
  });
}

function home_ani(){
  thumb_ani_home();
  move360();
  move360_2();
}

function thumb_ani(){
  bodymovin.loadAnimation({
    container: document.getElementById('yellowthumb01'),
    path: '/images/animation/thumb_animation.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "yellow thumb Animation",
  }); 
  bodymovin.loadAnimation({
    container: document.getElementById('yellowthumb02'),
    path: '/images/animation/thumb_animation.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "yellow thumb Animation",
  }); 
}

function downloadIMG(){
  for(let i=1; i<=11; i++){
    bodymovin.loadAnimation({
      container: document.getElementById('downloadIMG'+ i),
      path: '/images/animation/download_cload.json',
      renderer: 'svg',
      loop: true,
      autoplay: true,
      name: "download animation",
    });
  }
}

//animation controll end

function loadYT(frameID, link){
  var oldAnchor = document.querySelector(frameID + ' button');
  if (oldAnchor) {
    oldAnchor.remove();
  }

  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + link;
  iframe.allowFullscreen = true;
  iframe.classList.add('shadow');
  document.querySelector(frameID).classList.add('ratio');
  document.querySelector(frameID).classList.add('ratio-16x9');
  document.querySelector(frameID).append(iframe);
}

function loadSketchfab(wrapperID,sflink){
  var oldAnchor = document.querySelector(wrapperID + ' button');
  if (oldAnchor){
    oldAnchor.remove();
  }

  var sketchfab_container = document.querySelector(wrapperID);
  sketchfab_container.innerHTML = '<iframe width="100%" height="500px" title="儲集框架主體-雨水管理大師" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/' + sflink + '/embed?camera=0"> </iframe>';

}


//打開modal時，同時帶入相對應的yt連結，modalID為將打開的modal ID, link為應帶入的yt影片ID
function openYTModal(modalID, link){
  $(modalID).modal('toggle');
  var oldIframe = document.querySelector(modalID + ' iframe');
  if (oldIframe) {
    oldIframe.remove();
  }
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + link;
  iframe.allowFullscreen = true;
  iframe.classList.add('shadow');
  document.querySelector(modalID + ' .modal-yt-container').append(iframe);
  
}

//關閉modal時，同時關閉yt影片，parentID為modal ID, link為應關閉的yt影片ID，
function stopYT(parentID, link){
  $(parentID).modal('hide');
  var iframe = document.querySelector(parentID + ' iframe');
  if (iframe) {
    iframe.src = 'https://www.youtube.com/embed/' + link;
    iframe.allowFullscreen = true;
    iframe.classList.add('shadow');
  }
}

//用Vue動態改所有頁面的重複資料-Header和Footer的基本資料+存放實績案例簡介資料+存放知識分享概要
const vm = Vue.createApp({
  data () {
    return {
      address: '台北市北投區清江路247巷8號1樓',
      tel_number: '(02)2898-6776',
      fax_number: '(02)2898-6132',
      email: 'RS@rainsave.com.tw',
      message: '',
      //實績案例資料用V-for渲染(page08)
      infilcases: [
        {
          picture_avif_src:'/images/homepage/case/caseInfiltrate_shilin.avif',
          picture_src: '/images/homepage/case/caseInfiltrate_shilin.png',
          title: '士林北藝中心',
          intro: '此案位於捷運劍潭站旁，係為公共工程案。總計施作153m³，上方覆土約25~45cm，為基地保水滲透型。',
          case_href: './page-cases/case01.html',
        },
        {
          picture_avif_src:'/images/homepage/case/caseInfiltrate_rixin.avif',
          picture_src: '/images/homepage/case/caseInfiltrate_rixin.png',
          title: '台北市日新國小',
          intro: '此案位於捷運台北車站旁，係為公共工程案。總計施作230m³，上方覆土約30~40cm，為基地保水滲透型。',
          case_href: './page-cases/case02.html',
        },
        {
          picture_avif_src:'/images/homepage/case/caseInfiltrate_guishan.avif',
          picture_src: '/images/homepage/case/caseInfiltrate_guishan.png',
          title: '龜山區市地重劃',
          intro: '此案位於桃園市龜山區，係為公共工程案。總計施作86m³，上方覆土約40~60cm，為基地保水滲透型。',
          case_href: './page-cases/case03.html',
        },
        {
          picture_avif_src:'/images/homepage/case/caseInfiltrate_econ.avif',
          picture_src: '/images/homepage/case/caseInfiltrate_econ.jpg',
          title: '高雄經濟部金屬中心',
          intro: '此案位於高雄楠梓，為張瑪龍建築師事務所設計。為公共工程，總計施作52.5m³，上方覆土約30~50cm，為基地保水滲透型。', 
          case_href: './page-cases/case04.html',
        },
        {
          picture_avif_src:'/images/case09/qingjiang01.avif',
          picture_src: '/images/case09/qingjiang01.png',
          title: '北投區 韋昌画清江社區',
          intro: '此案位於台北市北投區清江路91巷。總計施作3m³，上方覆土約30~60cm，為基地保水滲透型。', 
          case_href: './page-cases/case09.html',
        },
        {
          picture_avif_src:'/images/case10/nanping01.avif',
          picture_src: '/images/case10/nanping01.png',
          title: '宜蘭市 南屏國民小學',
          intro: '此案位於宜蘭南屏國小，係為公共工程案。總計施作87m³，上方覆土約30~60cm，為基地保水滲透型。 ', 
          case_href: './page-cases/case10.html',
        },
        {
          picture_avif_src:'/images/case11/luzhu01.avif',
          picture_src: '/images/case11/luzhu01.png',
          title: '桃園市蘆竹區 安利鋼鐵廠',
          intro: '此案位於桃園市蘆竹區長榮路191號旁。總計施作135m3，上方覆土約30~60cm，為基地保水滲透型。', 
          case_href: './page-cases/case11.html',
        },
        {
          picture_avif_src:'/images/case12/daan01.avif',
          picture_src: '/images/case12/daan01.png',
          title: '台北市大安區 大安富御社區',
          intro: '此案位於台北市大安區臥龍街300號。總計施作27m3，上方覆土約30~60cm，為基地保水滲透型。  ', 
          case_href: './page-cases/case12.html',
        },
        {
          picture_avif_src:'/images/case14/guanyin01.avif',
          picture_src: '/images/case14/guanyin01.png',
          title: '桃園市觀音區 鴻錦十映社區',
          intro: '此案位於桃園市觀音區保生九街。總計施作28.5m3，上方覆土約50cm，為基地保水滲透型。', 
          case_href: './page-cases/case14.html',
        },
        {
          picture_avif_src:'/images/case15/beitun01.avif',
          picture_src: '/images/case15/beitun01.png',
          title: '台中市北屯區 登陽釀時光社區',
          intro: '此案位於台中市北屯區南興路與敦富七街口。總計施作43.75m³，上方覆土約45~60cm，為基地保水滲透型。', 
          case_href: './page-cases/case15.html',
        },
        {
          picture_avif_src:'/images/case16/kinmen01.avif',
          picture_src: '/images/case16/kinmen01.png',
          title: '金門縣金寧鄉 榜林社區活動中心',
          intro: '此案位於金門縣金寧鄉榜林社區活動中心，係為公共工程案。總計施作57m3，上方覆土約45~60cm，為基地保水滲透型。', 
          case_href: './page-cases/case16.html',
        },
        {
          picture_avif_src:'/images/case17/wanhua_01.avif',
          picture_src: '/images/case17/wanhua_01.png',
          title: '台北市萬華區 民凱萬錦社區',
          intro: '此案位於台北市萬華區民和街100號。總計施作10m³，上方覆土約45~60cm，為基地保水滲透型。', 
          case_href: './page-cases/case17.html',
        },
        {
          picture_avif_src:'/images/case18/daguan_01.avif',
          picture_src: '/images/case18/daguan_01.png',
          title: '桃園市桃園區 大觀雲滙社區',
          intro: '此案位於桃園市桃園區大興西路三段與大吉街口。總計施作16.9m3，上方覆土45~60cm，為基地保水滲透型。', 
          case_href: './page-cases/case18.html',
        },
        {
          picture_avif_src:'/images/case20/dunbei_01.avif',
          picture_src: '/images/case20/dunbei_01.png',
          title: '台北市松山區 敦北文華社區',
          intro: '此案位於台北市松山區南京東路四段52巷21號。總計施作2m³，上方覆土45~60cm，為基地保水滲透型。', 
          case_href: './page-cases/case20.html',
        },
        {
          picture_avif_src:'/images/case21/xinzhu_xiangshan_01.avif',
          picture_src: '/images/case21/xinzhu_xiangshan_01.png',
          title: '新竹市香山區 弘塑科技股份有限公司',
          intro: '此案位於新竹市香山區中華路六段 89 號。總計施作 38m³，上方覆土約 45~60cm，為基地保水滲透型。', 
          case_href: './page-cases/case21.html',
        },
        {
          picture_avif_src:'/images/case22/farglory_qingchuan_01.avif',
          picture_src: '/images/case22/farglory_qingchuan_01.png',
          title: '台北市文山區 遠雄晴川社區',
          intro: '此案位於台北市文山區木柵路三段 169 巷 10 號。總計施作 9m³，上方覆土 45~60cm，為基地保水滲透型。', 
          case_href: './page-cases/case22.html',
        },
        {
          picture_avif_src:'/images/case23/zhenghua_park_01.avif',
          picture_src: '/images/case23/zhenghua_park_01.png',
          title: '台北市北投區 振華公園',
          intro: '此案位於台北市北投區振華公園，係為公共工程案。總計施作180m³，上方覆土約45~60cm，為基地保水滲透型。', 
          case_href: './page-cases/case23.html',
        },
        {
          picture_avif_src:'/images/case24/hukou_kindergarten_01.avif',
          picture_src: '/images/case24/hukou_kindergarten_01.png',
          title: '新竹縣湖口鄉 湖口文小非營利幼兒園',
          intro: '此案位於新竹縣湖口鄉中正村的達生七街與達生八街交叉路口，係為公共工程案。總計施作15m³，上方覆土45~60cm，為基地保水滲透型。', 
          case_href: './page-cases/case24.html',
        },
      ],
      savecases: [
        {
          picture_avif_src:'/images/homepage/case/caseSave_nantou.avif',
          picture_src: '/images/homepage/case/caseSave_nantou.jpg',
          title: '南投貓羅溪',
          intro: '此案位於南投921地震紀念公園旁，係為公共工程案。總計施作100m³，上方覆土約45~60cm，為儲水再利用型。',
          case_href: './page-cases/case08.html',

        },
        {
          picture_avif_src:'/images/homepage/case/caseSave_oceanU.avif',
          picture_src: '/images/homepage/case/caseSave_oceanU.jpg',
          title: '基隆海洋大學',
          intro: '此案位於國立臺灣海洋大學內，係為公共工程案。總計施作50m³，上方覆土約45~55cm，為儲水型(雨水主要提供各棟大樓廁所使用)。',
          case_href: './page-cases/case05.html',

        },
        {
          picture_avif_src:'/images/homepage/case/caseSave_keelung.avif',
          picture_src: '/images/homepage/case/caseSave_keelung.jpg',
          title: '基隆海科典藏館',
          intro: '此案位於國立海洋科技博物館，係為公共工程案。總計施作75m³，上方覆土約45~115cm，為儲水型(為提供下方大客車停車場廁所使用)。',
          case_href: './page-cases/case06.html',

        },
        {
          picture_avif_src:'/images/homepage/case/caseSave_xiangshan.avif',
          picture_src: '/images/homepage/case/caseSave_xiangshan.jpg',
          title: '象山中強公園',
          intro: '此案位於捷運象山站旁，係為公共工程案。總計施作252m³，上方覆土約50~55cm，為儲水再利用型。',
          case_href: './page-cases/case07.html',
        },
        {
          picture_avif_src:'/images/case13/zhongli_park05.avif',
          picture_src: '/images/case13/zhongli_park05.PNG',
          title: '桃園市中壢區 中壢運動公園',
          intro: '此案位於中壢運動公園，係為公共工程案。總計施作210m³，上方覆土約45~60cm，為儲水再利用型。',
          case_href: './page-cases/case13.html',
        },
        {
          picture_avif_src:'/images/case19/xinzhu_05.avif',
          picture_src: '/images/case19/xinzhu_05.PNG',
          title: '新竹市東區 新竹國民小學',
          intro: '此案位於新竹國民小學，係為公共工程案。總計施作22.5m³，上方覆土約45~60cm，為儲水再利用型。',
          case_href: './page-cases/case19.html',
        },
        // {
        //   picture_src: '',
        //   title: '',
        //   intro: '',
        //   case_href: '',

        // },
      ],
      //個別案例頁左側欄位(page-cases)
      casetitles: [
        {
          title: '士林北藝中心', 
          case_href: './case01.html'
        },
        {
          title: '台北市日新國小',
          case_href: './case02.html'
        },
        {
          title: '龜山區市地重劃',
          case_href: './case03.html'
        },
        {
          title: '高雄經濟部金屬中心',
          case_href: './case04.html'
        },
        {
          title: '北投區 韋昌画清江社區',
          case_href: './case09.html'
        },
        {
          title: '宜蘭市 南屏國民小學',
          case_href: './case10.html'
        },
        {
          title: '南投貓羅溪',
          case_href: './case08.html'
        },
        {
          title: '基隆海洋大學',
          case_href: './case05.html'
        },
        {
          title: '基隆海科典藏館',
          case_href: './case06.html'
        },
        {
          title: '象山中強公園',
          case_href: './case07.html'
        },
        {
          title: '桃園市蘆竹區 安利鋼鐵廠',
          case_href: './case11.html'
        },
        {
          title: '台北市大安區 大安富御社區',
          case_href: './case12.html'
        },
        {
          title: '桃園市中壢區 中壢運動公園',
          case_href: './case13.html'
        },
        {
          title: '桃園市觀音區 鴻錦十映社區',
          case_href: './case14.html'
        },
        {
          title: '台中市北屯區 登陽釀時光社區',
          case_href: './case15.html'
        },
        {
          title: '金門縣金寧鄉 榜林社區活動中心',
          case_href: './case16.html'
        },
        {
          title: '台北市萬華區 民凱萬錦社區',
          case_href: './case17.html'
        },
        {
          title: '桃園市桃園區 大觀雲滙社區',
          case_href: './case18.html'
        },
        {
          title: '新竹市東區 新竹國民小學',
          case_href: './case19.html'
        },
        {
          title: '台北市松山區 敦北文華社區',
          case_href: './case20.html'
        },
        {
          title: '新竹市香山區 弘塑科技股份有限公司',
          case_href: './case21.html'
        },
        {
          title: '台北市文山區 遠雄晴川社區',
          case_href: './case22.html'
        },
        {
          title: '台北市北投區 振華公園',
          case_href: './case23.html'
        },
        {
          title: '新竹縣湖口鄉 湖口文小非營利幼兒園',
          case_href: './case24.html'
        },
       
      ],
      //知識分享左側導覽列用V-for渲染(page-articles)
      knowledge: [
        {
          picture_src: '/images/homepage/articleimg_01.png',
          title: '如何在儲集框架、混凝土水箱、PP(FRP)桶槽型水箱中做選擇?',
          intro: '施作10立方~1000立方的滯洪儲水、滲透水設施建議使用正在旺所生產的RAIN SAVE 儲集框架產品，具備...',
          case_href: 'article01.html',
        },
        {
          picture_src: '/images/homepage/articleimg_02.jpg',
          title: '為何使用 Rain SAVE 儲集框架?(抗壓強度探討)',
          intro: '主要分為儲集框架主體與儲集框架側板組合而成，部分產品因其結構設計問題須使用相關配件才可以達到25T之抗壓功能...',
          case_href: 'article02.html',
        },
        {
          picture_src: '/images/homepage/articleimg_03.jpg',
          title: '為何使用 Rain SAVE 儲集框架?(進水速度與地震帶上的適應性探討)',
          intro: '若考量雨水流速(進水速度)，長短板型式及框架型式因內部結構空間較大，是較理想的選擇；而若是考慮到產品於亞洲地震帶...',
          case_href: 'article03.html',
        },
        {
          picture_src: '/images/article04/important_effect.jpg',
          title: 'Rain SAVE儲集框架在都市水資源管理中的重要作用',
          intro: 'Rain SAVE儲集框架，又稱雨水積磚，主要利用地下空間儲集雨水來達到基地保水及雨水再利用的目的，鋪設地工材料...',
          case_href: 'article04.html',
        },
        {
          picture_src: '/images/article05/#',
          title: '使用Rain SAVE儲集框架有哪些優點？哪些缺點？',
          intro: 'Rain SAVE儲集框架作為水資源管理以及環境保護的重要角色，由於其具備的優點近年來被廣泛使用...',
          case_href: 'article05.html',
        },
        {
          picture_src: '/images/article06/#',
          title: 'Rain SAVE儲集框架對環境有哪些好處？儲集框架的5大功用',
          intro: 'Rain SAVE儲集框架的應用，不僅能夠解決城市面臨的水資源浪費問題，還能夠有效地減少熱島效應... ',
          case_href: 'article06_five_benefits_for_the_environment.html',
        },
        {
          picture_src: '/images/article07/#',
          title: 'Rain SAVE儲集框架是怎麼運作的？會經過哪些流程？',
          intro: 'Rain SAVE儲集框架不僅能夠收集雨水，並且通過過濾和淨化，將其轉化為可再利用的資源...',
          case_href: 'article07_rainsave_process.html',
        },
        {
          picture_src: '/images/article08/#',
          title: 'Rain SAVE儲集框架可以安裝在哪些地方呢？',
          intro: 'Rain SAVE儲集框架因其靈活的安裝方式且上方土地可有效利用的優點，使它能夠應用於各種不同的場景...',
          case_href: 'article08_rainsave_suitable_places.html',
        },
        {
          picture_src: '/images/article09/#',
          title: 'Rain SAVE儲集框架是什麼材質？使用這個材質的原因？',
          intro: 'Rain SAVE儲集框架使用的材質為聚丙烯（Polypropylene，簡稱PP），是一種輕質而堅固的材料...',
          case_href: 'article09_rainsave_material.html',
        },
        {
          picture_src: '/images/article10/#',
          title: '安裝Rain SAVE儲集框架前需要考量什麼呢？儲集框架的設計注意事項 ',
          intro: '在進行Rain SAVE儲集框架的安裝之前， 需要考量合適的配置位置、足夠的空間及槽體...',
          case_href: 'article10_rainsave_things_to_consider.html',
        },
        {
          picture_src: '/images/article11/#',
          title: 'Rain SAVE儲集框架如何維護？儲集框架的管理方式',
          intro: '為維持Rain SAVE儲集框架滲透功能，需定期進行設施的維護管理，大致分為巡檢及維護兩大項目...',
          case_href: 'article11_rainsave_maintenance.html',
        },
        {
          picture_src: '/images/article12/#',
          title: 'Rain SAVE 儲集框架是否容易淤積? 若淤積該如何清理?',
          intro: '施作一槽儲集框架通常會搭配設置一座清潔檢視井（依案件需求有所不同），可透過檢視井大...',
          case_href: 'article12_rainsave_dredging.html',
        },
        {
          picture_src: '/images/article13/#',
          title: 'Rain SAVE 儲集框架能否成為海綿城市的一環？',
          intro: '隨著城市化的加速，水災和水資源短缺問題日益嚴重。海綿城市理念的出現，使得越來越多的都市...',
          case_href: 'article13_rainsave_sponge_city.html',
        },
        {
          picture_src: '/images/article14/#',
          title: '城市熱島效應帶來的影響，Rain SAVE 儲集框架如何應對？',
          intro: '城市熱島效應是指由於人類活動，導致城市及其周邊地區的氣溫上升的現象，同時也會帶來...',
          case_href: 'article14_urban_heat_island.html',
        },
        {
          picture_src: '/images/article15/#',
          title: 'Rain SAVE雨水積磚如何響應SDGs永續發展目標？',
          intro: '聯合國於2015年宣布了「2030永續發展目標」，旨在到2030年解決貧困、不平等、環境變遷等全球挑戰...',
          case_href: 'article15_SDGs.html',
        },
      ],

    }
  }
});

// header和footer都會用到的公司基本資訊
 const $headerFooterCommon= {
  address: '台北市北投區清江路247巷8號1樓',
  tel_number: '(02)2898-6776',
  fax_number: '(02)2898-6132',
  email: 'RS@rainsave.com.tw',
  active: 'home'
 };


vm.component('my-header', {
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

vm.component('my-footer', {
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

vm.mount('html');



//導覽列分頁籤滾動後加白邊框或陰影
$(window).scroll(function(){
  if ($(window).scrollTop() > 0){
    $('.nav-link').css('box-shadow','0 2px 10px 0 white')
  } else {
    $('.nav-link').css('box-shadow','0 2px 10px 0 rgba(0, 0, 0, 0.3)')
  }
})

//3D模型操作提示框去除
$('.remind_box').mouseover(function(){
  $(this).fadeOut(200)
})

//需求計算-試算機
document.getElementById('calcId').onclick = () => {
  //button 使用getElementById (後面不用加點，直接套 id 名稱) 加上一個 onclick 事件，並執行 function 內容

  //定義變數的內容
  //命名變數為抓取 input 裡面的數值
  //將要在 id 所得到的值用 parseFloat 語法轉換成數字-- 因為input的type設成text了，下次直接改用number應該可以(不行，會變成數量增減框)
  let volume = parseFloat(document.getElementById('lengthId').value) * parseFloat(document.getElementById('widthId').value) *parseFloat(document.getElementById('depthId').value);
  let bodyNum = parseFloat(document.getElementById('lengthId').value) * parseFloat(document.getElementById('widthId').value) *parseFloat(document.getElementById('depthId').value) *16 ;
  let boardNum = (parseFloat(document.getElementById('lengthId').value)+parseFloat(document.getElementById('widthId').value)) * parseFloat(document.getElementById('depthId').value) *8 ;
  let infilNum = (parseFloat(document.getElementById('lengthId').value)+parseFloat(document.getElementById('widthId').value)) * parseFloat(document.getElementById('depthId').value) *2 + parseFloat(document.getElementById('lengthId').value) * parseFloat(document.getElementById('widthId').value) *2 ;
  let saveNum = (parseFloat(document.getElementById('lengthId').value)+parseFloat(document.getElementById('widthId').value)) * parseFloat(document.getElementById('depthId').value) *2 + parseFloat(document.getElementById('lengthId').value) * parseFloat(document.getElementById('widthId').value) ;
  let concretNum = (parseFloat(document.getElementById('lengthId').value)+1)*(parseFloat(document.getElementById('widthId').value)+1)*0.1 ;
  let netNum = parseFloat(document.getElementById('lengthId').value) * parseFloat(document.getElementById('widthId').value);
  let tatolPrice_infil = bodyNum*400 + boardNum*400 + concretNum*2400 + infilNum*100 + netNum*200 + (bodyNum + boardNum)*20 ;
  let tatolPrice_save = bodyNum*400 + boardNum*400 + concretNum*2400 + infilNum*100 + netNum*200 + saveNum*300 + (bodyNum + boardNum)*20 ;
  let boardNum_T2 = boardNum/4/volume ;
  let concretNum_T2 = concretNum/volume ;
  let infilNum_T2 = infilNum/volume ;
  let netNum_T2 = netNum/volume ;
  let saveNum_T2 = saveNum/volume ;
  let installprice_T2 = (bodyNum + boardNum)*20/volume ;
  let tatolPrice_infil_2 = 16*400 + parseFloat(boardNum_T2.toFixed(2))*1600 + parseFloat(concretNum_T2.toFixed(2))*2400 + parseFloat(infilNum_T2.toFixed(2))*100 + parseFloat(netNum_T2.toFixed(2))*200 + parseFloat(installprice_T2.toFixed(2));
  let tatolPrice_save_2 = 16*400 + parseFloat(boardNum_T2.toFixed(2))*1600 + parseFloat(concretNum_T2.toFixed(2))*2400 + parseFloat(infilNum_T2.toFixed(2))*100 + parseFloat(netNum_T2.toFixed(2))*200 + parseFloat(saveNum_T2.toFixed(2))*300 + parseFloat(installprice_T2.toFixed(2));
  
//數量計算結果
  document.getElementById('resultbodyId').textContent = bodyNum ;
  document.getElementById('resultboardId').textContent = boardNum ;
  document.getElementById('resultInfilId').textContent = infilNum ;
  document.getElementById('resultSaveId').textContent = saveNum ;
  document.getElementById('table_bodyNumId').textContent = bodyNum ;
  document.getElementById('table_boardNumId').textContent = boardNum ;
  document.getElementById('table_bodyNumId_2').textContent = bodyNum ;
  document.getElementById('table_boardNumId_2').textContent = boardNum ;
  document.getElementById('table_boardNumId_3').textContent = parseFloat(boardNum_T2.toFixed(2)) ;
  document.getElementById('table_boardNumId_4').textContent = parseFloat(boardNum_T2.toFixed(2)) ;
  document.getElementById('table_concretNumId').textContent = parseFloat(concretNum.toFixed(2)) ;
  document.getElementById('table_concretNumId_2').textContent = parseFloat(concretNum.toFixed(2)) ;
  document.getElementById('table_concretNumId_3').textContent = parseFloat(concretNum_T2.toFixed(2)) ;
  document.getElementById('table_concretNumId_4').textContent = parseFloat(concretNum_T2.toFixed(2)) ;
  document.getElementById('table_infilcloNumId').textContent = infilNum ;
  document.getElementById('table_infilcloNumId_2').textContent = infilNum ;
  document.getElementById('table_infilcloNumId_3').textContent = parseFloat(infilNum_T2.toFixed(2)) ;
  document.getElementById('table_infilcloNumId_4').textContent = parseFloat(infilNum_T2.toFixed(2)) ;
  document.getElementById('table_netNumId').textContent = netNum ;
  document.getElementById('table_netNumId_2').textContent = netNum ;
  document.getElementById('table_netNumId_3').textContent = parseFloat(netNum_T2.toFixed(2)) ;
  document.getElementById('table_netNumId_4').textContent = parseFloat(netNum_T2.toFixed(2)) ;
  document.getElementById('table_uninfilNumId_2').textContent = saveNum ;
  document.getElementById('table_uninfilNumId_4').textContent = parseFloat(saveNum_T2.toFixed(2)) ;

//複價計算結果
  document.getElementById('table_bodySpriceId').textContent = bodyNum*400 ;
  document.getElementById('table_bodySpriceId_2').textContent = bodyNum*400 ;
  document.getElementById('table_bodySpriceId_3').textContent = 16*400 ;
  document.getElementById('table_bodySpriceId_4').textContent = 16*400 ;
  document.getElementById('table_boardSpriceId').textContent = boardNum*400 ;
  document.getElementById('table_boardSpriceId_2').textContent = boardNum*400 ;
  document.getElementById('table_boardSpriceId_3').textContent = parseFloat(boardNum_T2.toFixed(2))*1600 ;
  document.getElementById('table_boardSpriceId_4').textContent = parseFloat(boardNum_T2.toFixed(2))*1600 ;
  //mind: 小數有問題!
  document.getElementById('table_concretSpriceId').textContent = (parseFloat(concretNum.toFixed(2))*2400).toFixed(0) ;
  document.getElementById('table_concretSpriceId_2').textContent = (parseFloat(concretNum.toFixed(2))*2400).toFixed(0) ;
  document.getElementById('table_concretSpriceId_3').textContent = (parseFloat(concretNum_T2.toFixed(2))*2400).toFixed(0) ;
  document.getElementById('table_concretSpriceId_4').textContent = (parseFloat(concretNum_T2.toFixed(2))*2400).toFixed(0) ;
  document.getElementById('table_infilcloSpriceId').textContent = infilNum*100 ;
  document.getElementById('table_infilcloSpriceId_2').textContent = infilNum*100 ;
  document.getElementById('table_infilcloSpriceId_3').textContent = (parseFloat(infilNum_T2)*100).toFixed(2) ;
  document.getElementById('table_infilcloSpriceId_4').textContent = (parseFloat(infilNum_T2)*100).toFixed(2) ;
  document.getElementById('table_netSpriceId').textContent = netNum*200 ;
  document.getElementById('table_netSpriceId_2').textContent = netNum*200 ;
  document.getElementById('table_netSpriceId_3').textContent = parseFloat(netNum_T2.toFixed(2))*200 ;
  document.getElementById('table_netSpriceId_4').textContent = parseFloat(netNum_T2.toFixed(2))*200 ;
  document.getElementById('table_uninfilSpriceId_2').textContent = saveNum*300 ;
  document.getElementById('table_uninfilSpriceId_4').textContent = parseFloat(saveNum_T2.toFixed(2))*300 ;
  // document.getElementById('table_installSpriceId').textContent = (bodyNum + boardNum)*20 ;
  // document.getElementById('table_installSpriceId_2').textContent = (bodyNum + boardNum)*20 ;
  // document.getElementById('table_installSpriceId_3').textContent = parseFloat(installprice_T2.toFixed(2)) ;
  // document.getElementById('table_installSpriceId_4').textContent = parseFloat(installprice_T2.toFixed(2)) ;
//總價計算結果
  document.getElementById('table_totalpriceId').textContent = Math.round(tatolPrice_infil) ;
  document.getElementById('table_totalpriceId_1').textContent = Math.round(tatolPrice_infil) ;
  document.getElementById('table_totalpriceId_2').textContent = Math.round(tatolPrice_save) ;
  document.getElementById('table_totalpriceId_2_1').textContent = Math.round(tatolPrice_save) ;
  document.getElementById('table_totalpriceId_3').textContent = Math.round(tatolPrice_infil_2) ;
  document.getElementById('table_totalpriceId_3_1').textContent = Math.round(tatolPrice_infil_2) ;
  document.getElementById('table_totalpriceId_4').textContent = Math.round(tatolPrice_save_2) ;
  document.getElementById('table_totalpriceId_4_1').textContent = Math.round(tatolPrice_save_2) ;

}
//一鍵全部清除
document.getElementById('clearId').onclick = () => {
  document.getElementById('lengthId').value = "" ;
  document.getElementById('widthId').value = "" ;
  document.getElementById('depthId').value = "" ;
  document.getElementById('resultbodyId').textContent = "" ;
  document.getElementById('resultboardId').textContent = "" ;
  document.getElementById('resultInfilId').textContent = "" ;
  document.getElementById('resultSaveId').textContent = "" ;
  document.getElementById('table_bodyNumId').textContent = "" ;
  document.getElementById('table_boardNumId').textContent = "" ;
  document.getElementById('table_bodyNumId_2').textContent = "" ;
  document.getElementById('table_boardNumId_2').textContent = "" ;
  document.getElementById('table_boardNumId_3').textContent = "" ;
  document.getElementById('table_boardNumId_4').textContent = "" ;
  document.getElementById('table_concretNumId').textContent = "" ;
  document.getElementById('table_concretNumId_2').textContent = "" ;
  document.getElementById('table_concretNumId_3').textContent = "" ;
  document.getElementById('table_concretNumId_4').textContent = "" ;
  document.getElementById('table_infilcloNumId').textContent = "" ;
  document.getElementById('table_infilcloNumId_2').textContent = "" ;
  document.getElementById('table_infilcloNumId_3').textContent = "" ;
  document.getElementById('table_infilcloNumId_4').textContent = "" ;
  document.getElementById('table_netNumId').textContent = "" ;
  document.getElementById('table_netNumId_2').textContent = "" ;
  document.getElementById('table_netNumId_3').textContent = "" ;
  document.getElementById('table_netNumId_4').textContent = "" ;
  document.getElementById('table_uninfilNumId_2').textContent = "" ;
  document.getElementById('table_uninfilNumId_4').textContent = "" ;
  document.getElementById('table_installNumId').textContent = "" ;
  document.getElementById('table_installNumId_2').textContent = "" ;
  document.getElementById('table_bodySpriceId').textContent = "" ;
  document.getElementById('table_bodySpriceId_2').textContent = "" ;
  document.getElementById('table_bodySpriceId_3').textContent = "" ;
  document.getElementById('table_bodySpriceId_4').textContent = "" ;
  document.getElementById('table_boardSpriceId').textContent = "" ;
  document.getElementById('table_boardSpriceId_2').textContent = "" ;
  document.getElementById('table_boardSpriceId_3').textContent = "" ;
  document.getElementById('table_boardSpriceId_4').textContent = "" ;
  document.getElementById('table_concretSpriceId').textContent = "" ;
  document.getElementById('table_concretSpriceId_2').textContent = "" ;
  document.getElementById('table_concretSpriceId_3').textContent = "" ;
  document.getElementById('table_concretSpriceId_4').textContent = "" ;
  document.getElementById('table_infilcloSpriceId').textContent = "" ;
  document.getElementById('table_infilcloSpriceId_2').textContent = "" ;
  document.getElementById('table_infilcloSpriceId_3').textContent = "" ;
  document.getElementById('table_infilcloSpriceId_4').textContent = "" ;
  document.getElementById('table_netSpriceId').textContent = "" ;
  document.getElementById('table_netSpriceId_2').textContent = "" ;
  document.getElementById('table_netSpriceId_3').textContent = "" ;
  document.getElementById('table_netSpriceId_4').textContent = "" ;
  document.getElementById('table_uninfilSpriceId_2').textContent = "" ;
  document.getElementById('table_uninfilSpriceId_4').textContent = "" ;
  // document.getElementById('table_installSpriceId').textContent = "" ;
  // document.getElementById('table_installSpriceId_2').textContent = "" ;
  // document.getElementById('table_installSpriceId_3').textContent = "" ;
  // document.getElementById('table_installSpriceId_4').textContent = "" ;
  // document.getElementById('table_installpriceId_3').textContent = "" ;
  // document.getElementById('table_installpriceId_4').textContent = "" ;
  document.getElementById('table_totalpriceId').textContent = "" ;
  document.getElementById('table_totalpriceId_1').textContent = "" ;
  document.getElementById('table_totalpriceId_2').textContent = "" ;
  document.getElementById('table_totalpriceId_2_1').textContent = "" ;
  document.getElementById('table_totalpriceId_3').textContent = "" ;
  document.getElementById('table_totalpriceId_3_1').textContent = "" ;
  document.getElementById('table_totalpriceId_4').textContent = "" ;
  document.getElementById('table_totalpriceId_4_1').textContent = "" ;
}

