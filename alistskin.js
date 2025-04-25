/**
 * @name alistskin Alist云盘美化程序
 * @edition 3.1.1
 * @author dropflower
 * @mtime 20230415
 * @message 前端美化样式由星环[DropFlower]提供，程序由Alist创始者友情提供
 * @community http://alistskin.xhto.cn/
 */
 window.onload = function() {
    
    let flower_htmltrue_count = document.getElementById("root").getElementsByTagName('div').length;
    let flower_settime_htmltrue = "";
    let flower_htmltrue_if = true;
    let flower_html_second = 0;
    let flower_header_append_code = '';
    let flower_debug = false;
    
    var flower_console = ["启明星-云盘美化包","https://alistskin.xhto.cn/"];
    console.log('%c '+flower_console[0]+' %c '+flower_console[1]+' ','padding: 5px 10px; color: #FFF; background-color:#282828; border-radius: 2px 0px 0px 2px;','padding: 5px 10px;color: #FFF; background-image: linear-gradient(to left,#00f2fe,#1890ff); border-radius: 0px 2px 2px 0px;');
    
    let flower_timeout_arr = [0, 100, 200, 300, 500, 700, 1000, 1500, 2000, 3000, 5000, 6000];
    
    function flower_html() {
            if (flower_debug) {
                console.log("延迟加载描述："+flower_html_second);
            }
            
            let flower_header_left = document.getElementById("root").getElementsByClassName("header")[0].getElementsByClassName("header-left")[0];
            flower_header_append_code += flower_header_left.innerHTML; 
    flower_header_append_code += `<div class="flower_header_self">`; 
    flower_header_append_code += `<h3>海纳百川-收集世间万物</h3>`; 
    flower_header_append_code += `<div class="flower_header_self_headimg">`; 
    flower_header_append_code += `<img src="https://q.qlogo.cn/headimg_dl?dst_uin=2747620181&spec=640&img_type=jp">`; 
    flower_header_append_code += `</div>`; 
    flower_header_append_code += `</div>`; 
    flower_header_append_code += `<div class="flower_header_dictum">`; 
    flower_header_append_code += `<p>不理白驹过隙，不信生死有命</p>`; 
    flower_header_append_code += `<h4>柠月如风</h4>`; 
    //flower_header_append_code += `</div>`; 
    //flower_header_append_code += `<div class="flower_header_nav"><ul>`; 
    //flower_header_append_code += `<li><a href="/"  >首页</a></li>`;
    //flower_header_append_code += `<li><a href="https://www.xhto.cn/"  target="_blank" >星核博客</a></li>`; 
    //flower_header_append_code += `</ul></div>`; 
    flower_header_left.innerHTML = flower_header_append_code; 
      
    let flower_footer = document.getElementsByClassName('footer')[0].getElementsByClassName('hope-stack')[0]; 
    var flower_footer_num = '0'; 
    flower_footer.removeChild(flower_footer.getElementsByTagName('a')[flower_footer_num].nextSibling); 
    flower_footer.removeChild(flower_footer.getElementsByTagName('a')[flower_footer_num]); 
    flower_footer_num = '1'; 
      
    let flower_footer_append_html = document.getElementById("root").getElementsByClassName("footer")[0].getElementsByTagName("div")[0]; 
    flower_footer_append_code = ''; 
    //flower_footer_append_code += `<a class="flower_footer_codea" href="http://beian.miit.gov.cn/"  target="_blank" >湘ICP备8888888888号</a>`; 
    //flower_footer_append_code += `<span>|</span>`; 
    flower_footer_append_code += `<a class="flower_footer_codea" href="http://222.186.57.24:5244"  target="_blank" >上传</a>`; 
    flower_footer_append_code += `<span>|</span>`; 
    flower_footer_append_code += `<a class="flower_footer_codea" href="https://baota.ttk2.cn/login"  target="_blank" >宝塔</a>`; 
    flower_footer_append_code += `<span>|</span>`; 
    flower_footer_append_code += flower_footer_append_html.innerHTML; 
    flower_footer_append_html.innerHTML = flower_footer_append_code; 
      
    flower_create_code(document.body, 'div', '', '', 'flower_subunit'); 
    let flower_subunit_code = '';
    // 组件-昼夜界面
    let flower_cookie = localStorage.getItem('hope-ui-color-mode');
    flower_subunit_code += '<div class="flower_subunit_btn">';
    if (flower_cookie == 'light' || !flower_cookie) {
        flower_subunit_code += '<div class="flower_subunit_btn_night" style="display:block;">';
    }else{
        flower_subunit_code += '<div class="flower_subunit_btn_night" style="display:none;">';
    }
    flower_subunit_code += '<svg t="1727437031022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7145" width="200" height="200"><path d="M568.96 170.24c16.64 0 30.72-13.44 30.72-30.72V108.8c0-16.64-13.44-30.72-30.72-30.72-16.64 0-30.72 13.44-30.72 30.72v30.72c0 17.28 13.44 30.72 30.72 30.72zM139.52 538.24H108.8c-16.64 0-30.72 13.44-30.72 30.72 0 16.64 13.44 30.72 30.72 30.72h30.72c16.64 0 30.72-13.44 30.72-30.72 0-17.28-13.44-30.72-30.72-30.72zM234.88 277.76c12.16 12.16 31.36 12.16 43.52 0s12.16-31.36 0-43.52l-21.76-21.76c-12.16-12.16-31.36-12.16-43.52 0-12.16 12.16-12.16 31.36 0 43.52l21.76 21.76zM936.96 200.96c-12.16-12.16-31.36-12.16-43.52 0L806.4 288c-64-54.4-147.2-87.04-237.44-87.04-202.88 0-368 165.12-368 368C200.96 659.2 233.6 742.4 288 806.4l-87.04 87.04c-12.16 12.16-12.16 31.36 0 43.52s31.36 12.16 43.52 0l87.04-87.04c64 54.4 147.2 87.04 237.44 87.04 202.88 0 368-165.12 368-368 0-90.24-32.64-173.44-87.04-237.44l87.04-87.04c11.52-12.16 11.52-31.36 0-43.52zM262.4 568.96C262.4 400 400 262.4 568.96 262.4c73.6 0 140.8 26.24 193.92 69.12l-431.36 431.36C288 709.76 262.4 642.56 262.4 568.96z m613.12 0c0 168.96-137.6 306.56-306.56 306.56-73.6 0-140.8-26.24-193.92-69.12L806.4 375.04c42.88 52.48 69.12 120.32 69.12 193.92z"  p-id="7146"></path></svg>';
    flower_subunit_code += '</div>';
    if (flower_cookie == 'dark') {
        flower_subunit_code += '<div class="flower_subunit_btn_day" style="display:block;">';
    }else{
        flower_subunit_code += '<div class="flower_subunit_btn_day" style="display:none;">';
    }
    flower_subunit_code += '<svg t="1727437031022" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7145" width="200" height="200"><path d="M568.96 170.24c16.64 0 30.72-13.44 30.72-30.72V108.8c0-16.64-13.44-30.72-30.72-30.72-16.64 0-30.72 13.44-30.72 30.72v30.72c0 17.28 13.44 30.72 30.72 30.72zM139.52 538.24H108.8c-16.64 0-30.72 13.44-30.72 30.72 0 16.64 13.44 30.72 30.72 30.72h30.72c16.64 0 30.72-13.44 30.72-30.72 0-17.28-13.44-30.72-30.72-30.72zM234.88 277.76c12.16 12.16 31.36 12.16 43.52 0s12.16-31.36 0-43.52l-21.76-21.76c-12.16-12.16-31.36-12.16-43.52 0-12.16 12.16-12.16 31.36 0 43.52l21.76 21.76zM936.96 200.96c-12.16-12.16-31.36-12.16-43.52 0L806.4 288c-64-54.4-147.2-87.04-237.44-87.04-202.88 0-368 165.12-368 368C200.96 659.2 233.6 742.4 288 806.4l-87.04 87.04c-12.16 12.16-12.16 31.36 0 43.52s31.36 12.16 43.52 0l87.04-87.04c64 54.4 147.2 87.04 237.44 87.04 202.88 0 368-165.12 368-368 0-90.24-32.64-173.44-87.04-237.44l87.04-87.04c11.52-12.16 11.52-31.36 0-43.52zM262.4 568.96C262.4 400 400 262.4 568.96 262.4c73.6 0 140.8 26.24 193.92 69.12l-431.36 431.36C288 709.76 262.4 642.56 262.4 568.96z m613.12 0c0 168.96-137.6 306.56-306.56 306.56-73.6 0-140.8-26.24-193.92-69.12L806.4 375.04c42.88 52.48 69.12 120.32 69.12 193.92z"  p-id="7146"></path></svg>';
    flower_subunit_code += '</div>';
    flower_subunit_code += '</div>';
    // 组件-页面链接复制
    flower_subunit_code += '<div class="flower_copy_url">';
    flower_subunit_code += '<svg t="1681313891486" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4661" width="200" height="200"><path d="M240.426667 512A192 192 0 1 1 512 240.426667l67.84 67.84A42.666667 42.666667 0 0 0 640 248.106667l-67.626667-68.053334a274.56 274.56 0 0 0-91.733333-60.8 280.533333 280.533333 0 0 0-208.853333 0 277.333333 277.333333 0 0 0-152.533334 152.533334 279.253333 279.253333 0 0 0 0 208.853333 274.56 274.56 0 0 0 60.8 91.733333L248.106667 640a42.666667 42.666667 0 0 0 60.16-60.373333zM904.746667 543.36a274.56 274.56 0 0 0-60.8-91.733333L775.893333 384a42.666667 42.666667 0 1 0-60.16 60.373333L783.573333 512A192 192 0 1 1 512 783.573333l-67.84-67.84A42.666667 42.666667 0 1 0 384 775.893333l67.84 68.053334a274.56 274.56 0 0 0 91.733333 60.8 279.253333 279.253333 0 0 0 208.853334 0 277.333333 277.333333 0 0 0 152.533333-152.533334 279.253333 279.253333 0 0 0 0-208.853333z" p-id="4662"></path><path d="M647.68 690.346667A42.666667 42.666667 0 0 0 677.973333 618.666667L406.4 346.026667a42.666667 42.666667 0 1 0-60.373333 60.373333L618.666667 677.973333a42.666667 42.666667 0 0 0 29.013333 12.373334z" p-id="4663"></path></svg>';
    flower_subunit_code += '</div>';let flower_subunit_code_append = document.getElementsByClassName("flower_subunit")[0]; 
    flower_subunit_code_append.innerHTML = flower_subunit_code;
    // 组件-搜索功能
    flower_create_code(document.body, 'div', '', '', 'flower_search');
    let flower_search_code = "";
    flower_search_code += "<div class='flower_svg'>";
    flower_search_code += '<svg t="1727436952041" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1471" width="200" height="200"><path d="M857.6 887.466667c-8.533333 0-17.066667-2.133333-23.466667-8.533334l-113.066666-113.066666c-12.8-12.8-12.8-32 0-44.8s32-12.8 44.8 0l113.066666 113.066666c12.8 12.8 12.8 32 0 44.8-4.266667 6.4-12.8 8.533333-21.333333 8.533334z" fill="#9ba1a6" p-id="1472"></path><path d="M503.466667 876.8c-204.8 0-373.333333-168.533333-373.333334-373.333333S298.666667 130.133333 503.466667 130.133333 876.8 298.666667 876.8 503.466667c0 100.266667-38.4 194.133333-108.8 264.533333s-164.266667 108.8-264.533333 108.8z m0-682.666667c-170.666667 0-309.333333 138.666667-309.333334 309.333334s138.666667 309.333333 309.333334 309.333333c83.2 0 160-32 219.733333-89.6 57.6-57.6 89.6-136.533333 89.6-219.733333 0-170.666667-138.666667-309.333333-309.333333-309.333334z" p-id="1473" ></path></svg>';
    flower_search_code += "</div>";
    let flower_search_code_append = document.getElementsByClassName("flower_search")[0];
    flower_search_code_append.innerHTML = flower_search_code;document.getElementsByClassName("flower_subunit")[0].getElementsByClassName("flower_subunit_btn")[0].style.transform = "translateY(42px)"; 
    document.getElementsByClassName("flower_subunit")[0].getElementsByClassName("flower_copy_url")[0].style.transform = "translateY(84px)"; 
    document.getElementsByClassName("flower_search")[0].style.transform = "translateY(126px)"; 
    document.getElementsByClassName("left-toolbar-box")[0].style.transform = "translateY(168px)";
    if (document.getElementsByClassName('flower_subunit_btn')[0]) {
        document.getElementsByClassName('flower_subunit_btn')[0].onclick = function() {
            let flower_cookie = localStorage.getItem('hope-ui-color-mode');
            if (flower_cookie == 'light' || !flower_cookie) {
                document.body.className = "hope-ui-dark";
                localStorage['hope-ui-color-mode'] = 'dark';
            }else{
                document.body.className = "hope-ui-light";
                localStorage['hope-ui-color-mode'] = 'light';
            }
        };
    }
    
    if (document.getElementsByClassName('flower_copy_url')[0]) {
        document.getElementsByClassName('flower_copy_url')[0].onclick = function() {
            flower_copy_web_url();
        }
    }
    
    if (document.getElementsByClassName('flower_search')[0]) {
        document.getElementsByClassName('flower_search')[0].onclick = function() {
            flower_tips("开启单字模糊搜索功能!");
            document.getElementsByClassName('header-right')[0].getElementsByClassName('hope-stack')[0].click();
        }
    }
    
    setTimeout(function(){
        console.clear("");
        var flower_console = ["启明星-云盘美化包","https://alistskin.xhto.cn/"];
        console.log('%c '+flower_console[0]+' %c '+flower_console[1]+' ','padding: 5px 10px; color: #FFF; background-color:#282828; border-radius: 2px 0px 0px 2px;','padding: 5px 10px;color: #FFF; background-image: linear-gradient(to left,#00f2fe,#1890ff); border-radius: 0px 2px 2px 0px;');
    },200)
    
    }
    
    function flower_create_code (flower_appendto, flower_html="div", flower_text="", flower_style="", flower_class="", flower_id="") {
        var flower_create_html = document.createElement(flower_html);
        if (flower_style) {
            flower_create_html.style.cssText = flower_style;
        }
        if (flower_class) {
            flower_create_html.className = flower_class;
        }
        if (flower_id) {
            flower_create_html.id = flower_id;
        }
        flower_appendto.appendChild(flower_create_html);
    }
    
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            flower_interface();
        });
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });
    function flower_interface() {
        let flower_cookie = localStorage.getItem('hope-ui-color-mode');
        if (flower_cookie == 'light' || !flower_cookie) {
            document.getElementsByClassName('flower_subunit_btn_night')[0].style.display = 'block';
            document.getElementsByClassName('flower_subunit_btn_day')[0].style.display = 'none';
        }else{
            document.getElementsByClassName('flower_subunit_btn_night')[0].style.display = 'none';
            document.getElementsByClassName('flower_subunit_btn_day')[0].style.display = 'block';
        }
    }
    
    function flower_copy_web_url(){
          const input = document.createElement('input')
          input.setAttribute('readonly', 'readonly')
          let url=window.location.href
          input.setAttribute('value', url)
          document.body.appendChild(input)
          input.select()
          if (document.execCommand('copy')) {
                document.execCommand('copy')
                flower_tips("页面链接复制成功!");
          }
          document.body.removeChild(input)
    }
    
    var flower_outtip_left = '',
        flower_outtip = '';
    function flower_tips(flower_text) {
        flower_outtip_left && clearTimeout(flower_outtip_left);
        flower_outtip && clearTimeout(flower_outtip);
        if (document.getElementsByClassName('flower_tips')[0]) {
            document.body.removeChild(document.getElementsByClassName('flower_tips')[0]);
        }
        let flower_appendto = document.body;
        let flower_html = 'div';
        let flower_class = 'flower_tips';
        flower_create_code(flower_appendto, flower_html, '', '', flower_class);
        document.getElementsByClassName('flower_tips')[0].innerText = flower_text;
        // 动效
        document.getElementsByClassName('flower_tips')[0].style.right = '0px';
        flower_outtip_left = setTimeout(function(){
            document.getElementsByClassName('flower_tips')[0].style.right = '-100%';
            flower_outtip = setTimeout(function(){
                document.body.removeChild(document.getElementsByClassName('flower_tips')[0]);
            },10)
        },3000)
    }
    
    function flower_html_settimeout() {
        setTimeout(function() {
            flower_html();
        }, 10)
    }
    
    for (i in flower_timeout_arr) {
        setTimeout(function(num) {
            flower_settime_htmltrue = document.getElementById("root").getElementsByTagName('div').length;
            if (flower_htmltrue_if && flower_settime_htmltrue > flower_htmltrue_count) {
                flower_html_second = num;
                flower_html_settimeout();
                flower_htmltrue_if = false;
                clearTimeout(flower_htmltrue_timeout_flase);
                return false;
            }
        }, flower_timeout_arr[i], flower_timeout_arr[i])
    }
    
    let flower_htmltrue_timeout_flase = setTimeout(function() {
        if (flower_htmltrue_if) {
            let flower_confirm_f5 = confirm("页面美化AlistSkin包数据加载超时，是否进行刷新页面?");
            if (flower_confirm_f5 == true) {
                window.location.href = "";
            }
        }
    }, flower_timeout_arr[flower_timeout_arr.length -1]+1000);
    
    }
