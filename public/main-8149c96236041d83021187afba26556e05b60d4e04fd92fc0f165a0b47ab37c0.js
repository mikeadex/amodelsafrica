"use strict";function menuHideExtraElements(){jQuery("#more-li").remove();var e=jQuery(".mainmenu_wrapper").width(),a=0,t=jQuery(".sf-menu > li");t.removeClass("md-hidden"),t.each(function(r){var i=jQuery(this).outerWidth();if((a+=i)>=e){var s=jQuery('<li id="more-li"><a>...</a><ul></ul></li>');jQuery(t[r-1]).before(s);jQuery(s).outerWidth(!0);var o=t.filter(":gt("+(r-2)+")");return o.clone().appendTo(s.find("ul")),o.addClass("md-hidden"),!1}})}function initMegaMenu(){var e=jQuery(".mainmenu_wrapper .mega-menu");if(e.length){var a=jQuery("body").innerWidth();a>991&&e.each(function(){var e=jQuery(this);e.css({display:"block",left:"auto"});var t=e.outerWidth(),r=e.offset().left+t/2-a/2;e.css({left:-r,display:"none"}),e.closest("ul").hasClass("nav")||e.css("left","")})}}function pieChart(){jQuery().easyPieChart&&jQuery(".chart").each(function(){var e=jQuery(this);if(e.offset().top<jQuery(window).scrollTop()+900){var a=e.data("size")?e.data("size"):270,t=e.data("line")?e.data("line"):20,r=e.data("bgcolor")?e.data("bgcolor"):"#f5f5f5",i=e.data("trackcolor")?e.data("trackcolor"):"#c14240",s=e.data("speed")?e.data("speed"):3e3;e.easyPieChart({barColor:i,trackColor:r,scaleColor:!1,scaleLength:!1,lineCap:"butt",lineWidth:t,size:a,rotate:0,animate:s,onStep:function(e,a,t){jQuery(this.el).find(".percent").text(Math.round(t))}})}})}function affixSidebarInit(){var e=jQuery(".affix-aside");if(e.length){e.on("affix.bs.affix",function(){var a=e.width()-1,t=e.offset().left;e.width(a).css("left",t)}).on("affix-top.bs.affix affix-bottom.bs.affix",function(){e.css({width:"",left:""})});var a=e.offset().top-jQuery(".page_header").height(),t=jQuery(".page_footer").outerHeight(!0)+jQuery(".page_copyright").outerHeight(!0);e.affix({offset:{top:a,bottom:t}}),jQuery(window).on("resize",function(){e.css({width:"",left:""}),e.hasClass("affix")&&e.removeClass("affix").css("left","").addClass("affix-top");var a=jQuery(".page_topline").outerHeight(!0)+jQuery(".page_toplogo").outerHeight(!0)+jQuery(".page_breadcrumbs").outerHeight(!0)+jQuery(".page_header").outerHeight(!0),t=jQuery(".page_footer").outerHeight(!0)+jQuery(".page_copyright").outerHeight(!0);e.data("bs.affix").options.offset.top=a,e.data("bs.affix").options.offset.bottom=t,e.affix("checkPosition")})}}function documentReadyInit(){jQuery().scrollbar&&jQuery('[class*="scrollbar-"]').scrollbar(),jQuery().superfish&&(jQuery("ul.sf-menu").superfish({popUpSelector:"ul:not(.mega-menu ul), .mega-menu ",delay:700,animation:{opacity:"show",marginTop:0},animationOut:{opacity:"hide",marginTop:5},speed:200,speedOut:200,disableHI:!1,cssArrows:!0,autoArrows:!0}),jQuery("ul.sf-menu-side").superfish({popUpSelector:"ul:not(.mega-menu ul), .mega-menu ",delay:500,animation:{opacity:"show",height:"100%"},animationOut:{opacity:"hide",height:0},speed:400,speedOut:300,disableHI:!1,cssArrows:!0,autoArrows:!0})),jQuery(".toggle_menu").on("click",function(){jQuery(".toggle_menu").toggleClass("mobile-active"),jQuery(".page_header").toggleClass("mobile-active")}),jQuery(".mainmenu a").on("click",function(){jQuery(this).hasClass("sf-with-ul")||(jQuery(".toggle_menu").toggleClass("mobile-active"),jQuery(".page_header").toggleClass("mobile-active"))});var e=jQuery(".page_header_side");if(e.length){var a=jQuery("body");jQuery(".toggle_menu_side").on("click",function(){jQuery(this).hasClass("header-slide")?e.toggleClass("active-slide-side-header"):jQuery(this).parent().hasClass("header_side_right")?a.toggleClass("active-side-header slide-right"):a.toggleClass("active-side-header")}),jQuery("ul.menu-side-click").find("li").each(function(){var e=jQuery(this);e.find("ul").length&&e.append('<span class="activate_submenu"></span>').find(".activate_submenu").on("click",function(){var a=jQuery(this);a.parent().hasClass("active-submenu")?a.parent().removeClass("active-submenu"):e.addClass("active-submenu").siblings().removeClass("active-submenu")})}),jQuery("body").on("click",function(t){jQuery(t.target).closest(".page_header_side").length||(e.removeClass("active-slide-side-header"),a.removeClass("active-side-header slide-right"))})}var t=jQuery(window).width();jQuery(window).on("resize",function(){t=jQuery(window).width()}),jQuery(".mainmenu_wrapper .sf-menu").on("mouseover","ul li",function(){if(t>991){var e=jQuery(this);if(e.find("ul").length>0){var a=e.find("ul, div").first().width();if(e.find("ul, div").first().parent().offset().left+a+a>t){var r=a+0;e.find("ul, div").first().css({left:-r})}else e.find("ul, div").first().css({left:"100%"})}}}).on("mouseover","> li",function(){if(t>991){var e=jQuery(this);if(e.find("ul").length>0){var a=e.find("ul").width(),r=e.find("ul").parent().offset().left;if(r+a>t){var i=t-(r+a);e.find("ul").first().css({left:i})}}}});var r=jQuery(".page_header").outerHeight(!0);jQuery(".mainmenu_wrapper").length&&jQuery("body").scrollspy({target:".mainmenu_wrapper",offset:r}),jQuery(".mainmenu_side_wrapper").length&&jQuery("body").scrollspy({target:".mainmenu_side_wrapper",offset:r}),jQuery().localScroll&&jQuery(".mainmenu_wrapper > ul, .mainmenu_side_wrapper > ul, #land").localScroll({duration:900,easing:"easeInOutQuart",offset:10-r}),jQuery().UItoTop&&jQuery().UItoTop({easingType:"easeOutQuart"}),jQuery().parallax&&jQuery(".parallax").parallax("50%",.01),jQuery().prettyPhoto&&jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook:"data-gal",theme:"facebook"}),jQuery().carousel&&jQuery(".carousel").carousel(),jQuery(".nav-tabs").each(function(){jQuery(this).find("a").first().tab("show")}),jQuery(".tab-content").each(function(){jQuery(this).find(".tab-pane").first().addClass("fade in")}),jQuery(".panel-group").each(function(){jQuery(this).find("a").first().filter(".collapsed").trigger("click")}),jQuery().tooltip&&jQuery('[data-toggle="tooltip"]').tooltip(),jQuery().owlCarousel&&jQuery(".owl-carousel").each(function(){var e=jQuery(this),a=!!e.data("loop")&&e.data("loop"),t=e.data("margin")||0==e.data("margin")?e.data("margin"):30,r=!!e.data("nav")&&e.data("nav"),i=!!e.data("dots")&&e.data("dots"),s=e.data("themeclass")?e.data("themeclass"):"owl-theme",o=!!e.data("center")&&e.data("center"),n=e.data("items")?e.data("items"):4,l=!!e.data("autoplay")&&e.data("autoplay"),u=e.data("responsive-xs")?e.data("responsive-xs"):1,d=e.data("responsive-sm")?e.data("responsive-sm"):2,f=e.data("responsive-md")?e.data("responsive-md"):3,c=e.data("responsive-lg")?e.data("responsive-lg"):4,p=!!e.data("filters")&&e.data("filters");p&&(e.clone().appendTo(e.parent()).addClass(p.substring(1)+"-carousel-original"),jQuery(p).on("click","a",function(a){if(a.preventDefault(),!jQuery(this).hasClass("selected")){var t=jQuery(this).attr("data-filter");jQuery(this).siblings().removeClass("selected active"),jQuery(this).addClass("selected active"),e.find(".owl-item").length;for(var r=e.find(".owl-item").length-1;r>=0;r--)e.trigger("remove.owl.carousel",[1]);jQuery(e.next().find(" > "+t).clone()).each(function(){e.trigger("add.owl.carousel",jQuery(this))}),e.trigger("refresh.owl.carousel")}})),e.owlCarousel({loop:a,margin:t,nav:r,autoplay:l,dots:i,themeClass:s,center:o,items:n,responsive:{0:{items:u},767:{items:d},992:{items:f},1200:{items:c}}}).addClass(s),o&&e.addClass("owl-center")});var i=1;if(jQuery(".owl-carousel.numbered-dots .owl-dot").each(function(){i<10?jQuery(this).text("0"+i):jQuery(this).text(i),i++}),jQuery().countdown){var s=new Date;s.setMonth(s.getMonth()+1),jQuery("#comingsoon-countdown").countdown({until:s})}jQuery("form.contact-form").on("submit",function(e){e.preventDefault();var a=jQuery(this);if(jQuery(a).find("span.contact-form-respond").remove(),jQuery(a).find('[aria-required="true"], [required]').each(function(){jQuery(this).val().length||jQuery(this).addClass("invalid").on("focus",function(){jQuery(this).removeClass("invalid")})}),!a.find('[aria-required="true"], [required]').hasClass("invalid")){var t=a.serialize();jQuery.post("contact-form.php",t).done(function(e){jQuery(a).find('[type="submit"]').attr("disabled",!1).parent().append('<span class="contact-form-respond highlight">'+e+"</span>"),a.find(".form-errors").length||a[0].reset()}).fail(function(){jQuery(a).find('[type="submit"]').attr("disabled",!1).parent().append('<span class="contact-form-respond highlight">Mail cannot be sent. You need PHP server to send mail.</span>')})}}),jQuery(".search_modal_button").on("click",function(e){e.preventDefault(),jQuery("#search_modal").modal("show").find("input").first().focus()}),jQuery("form.searchform").on("submit",function(e){e.preventDefault();var a=jQuery(this),t=jQuery("#search_modal");if(t.find("div.searchform-respond").remove(),jQuery(a).find('[type="text"]').each(function(){jQuery(this).val().length||jQuery(this).addClass("invalid").on("focus",function(){jQuery(this).removeClass("invalid")})}),!a.find('[type="text"]').hasClass("invalid")){t.modal("show");var r=a.serialize();jQuery.post("search.php",r).done(function(e){t.append('<div class="searchform-respond">'+e+"</div>")}).fail(function(){t.append('<div class="searchform-respond">Search cannot be done. You need PHP server to search.</div>')})}}),jQuery(".signup").on("submit",function(e){e.preventDefault();var a=jQuery(this);a.find(".response").html("Adding email address..."),jQuery.ajax({url:"mailchimp/store-address.php",data:"ajax=true&email="+escape(a.find(".mailchimp_email").val()),success:function(e){a.find(".response").html(e)}})}),jQuery().tweet&&jQuery(".twitter").tweet({modpath:"./twitter/",count:2,avatar_size:48,loading_text:"loading twitter feed...",join_text:"auto",username:"ThemeForest",template:'{avatar}<div class="tweet_right">{time}{join}<span class="tweet_text">{tweet_text}</span></div>'}),jQuery("#toggle_shop_view").on("click",function(e){e.preventDefault(),jQuery(this).toggleClass("grid-view"),jQuery("#products").toggleClass("grid-view list-view")}),jQuery().elevateZoom&&jQuery("#product-image").elevateZoom({gallery:"product-image-gallery",cursor:"pointer",galleryActiveClass:"active",responsive:!0,loadingIcon:"img/AjaxLoader.gif"}),jQuery(".review-link").on("click",function(){var e=jQuery(this),a=jQuery('a[href="#reviews_tab"]');a.parent().hasClass("active")||a.tab("show").on("shown.bs.tab",function(){jQuery(window).scrollTo(jQuery(e).attr("href"),400)}),jQuery(window).scrollTo(jQuery(e).attr("href"),400)}),jQuery(".plus, .minus").on("click",function(){var e=jQuery(this).parent().find('[type="number"]'),a=e.val();"-"===jQuery(this).val()?a>1&&e.val(parseFloat(a)-1):e.val(parseFloat(a)+1)}),jQuery("a.remove").on("click",function(e){e.preventDefault(),jQuery(this).closest("tr, .media").remove()}),jQuery().slider&&(jQuery(".slider-range-price").slider({range:!0,min:0,max:1e5,values:[1500,3e4],slide:function(e,a){jQuery(".slider_price_min").val(a.values[0]),jQuery(".slider_price_max").val(a.values[1])}}),jQuery(".slider_price_min").val(jQuery(".slider-range-price").slider("values",0)),jQuery(".slider_price_max").val(jQuery(".slider-range-price").slider("values",1))),jQuery(".color-filters").find("a[data-background-color]").each(function(){jQuery(this).css({"background-color":jQuery(this).data("background-color")})}),jQuery("#mainteasers .col-lg-4").addWidthClass({breakpoints:[500,600]}),jQuery(".bg_teaser").each(function(){var e=jQuery(this),a=e.find("img").first().attr("src");e.css("background-image","url("+a+")"),e.find(".bg_overlay").length||e.prepend('<div class="bg_overlay"/>')});var o=jQuery("#timetable");o.length&&jQuery("#timetable_filter").on("click","a",function(e){if(e.preventDefault(),e.stopPropagation(),!jQuery(this).hasClass("selected")){var a=jQuery(this).attr("data-filter");o.find("tbody td").removeClass("current").end().find(a).closest("td").addClass("current"),jQuery(this).closest("ul").find("a").removeClass("selected"),jQuery(this).addClass("selected")}})}function windowLoadInit(){(pieChart(),jQuery().flexslider)&&(jQuery(".intro_section .flexslider").each(function(){jQuery(this).flexslider({animation:"fade",pauseOnHover:!0,useCSS:!0,controlNav:!0,directionNav:!1,prevText:"",nextText:"",smoothHeight:!1,slideshowSpeed:1e4,animationSpeed:600,start:function(e){e.find(".slide_description").children().css({visibility:"hidden"}),e.find(".flex-active-slide .slide_description").children().each(function(e){var a=jQuery(this),t=a.data("animation")?a.data("animation"):"fadeInRight";setTimeout(function(){a.addClass("animated "+t)},200*e)})},after:function(e){e.find(".flex-active-slide .slide_description").children().each(function(e){var a=jQuery(this),t=a.data("animation")?a.data("animation"):"fadeInRight";setTimeout(function(){a.addClass("animated "+t)},200*e)})},end:function(e){e.find(".slide_description").children().each(function(){var e=jQuery(this),a=e.data("animation")?e.data("animation"):"fadeInRight";e.removeClass("animated "+a).css({visibility:"hidden"})})}}).find(".flex-control-nav").wrap('<div class="container-fluid nav-container"/>').end().find(".flex-control-paging a").each(function(){var e=jQuery(this),a=parseInt(e.text(),10);a<10&&e.text("0"+a)})}),jQuery(".flexslider").each(function(){var e=jQuery(this);e.find(".flex-active-slide").length||e.flexslider({animation:"fade",useCSS:!0,controlNav:!0,directionNav:!1,prevText:"",nextText:"",smoothHeight:!1,slideshowSpeed:5e3,animationSpeed:800}).find(".flex-control-nav").wrap('<div class="container-fluid nav-container"/>').end().find(".flex-control-paging a").each(function(){var e=jQuery(this),a=parseInt(e.text(),10);a<10&&e.text("0"+a)})}));var e=jQuery(".page_header").first();if(e.length){e.hasClass("transparent_header")||(menuHideExtraElements(),e.wrap('<div class="page_header_wrapper"></div>').parent().css({height:a}),jQuery(e).on("affixed-top.bs.affix affixed.bs.affix",function(){e.hasClass("affix-top")?e.parent().removeClass("affix-wrapper affix-bottom-wrapper").addClass("affix-top-wrapper"):e.hasClass("affix")?e.parent().removeClass("affix-top-wrapper affix-bottom-wrapper").addClass("affix-wrapper"):e.hasClass("affix-bottom")?e.parent().removeClass("affix-wrapper affix-top-wrapper").addClass("affix-bottom-wrapper"):e.parent().removeClass("affix-wrapper affix-top-wrapper affix-bottom-wrapper"),menuHideExtraElements()}),jQuery(e).on("affixed-top.bs.affix",function(){e.parent().css({height:e.outerHeight()})}));var a=e.outerHeight(),t=0;t=e.offset().top,jQuery(e).affix({offset:{top:t,bottom:0}})}initMegaMenu(),affixSidebarInit();var r=jQuery(".theme_breadcrumbs");if(r.length){var i="url('./images/parallax/breadcrumbs"+(Math.floor(6*Math.random())+1)+".jpg')";r.attr("style","background-image: "+i)}if(jQuery("body").scrollspy("refresh"),jQuery().appear&&(jQuery(".to_animate").appear(),jQuery(".to_animate").filter(":appeared").each(function(e){var a=jQuery(this),t=a.data("animation")?a.data("animation"):"fadeInUp",r=a.data("delay")?a.data("delay"):210;setTimeout(function(){a.addClass("animated "+t)},e*r)}),jQuery("body").on("appear",".to_animate",function(e,a){jQuery(a).each(function(e){var a=jQuery(this),t=a.data("animation")?a.data("animation"):"fadeInUp",r=a.data("delay")?a.data("delay"):210;setTimeout(function(){a.addClass("animated "+t)},e*r)})}),jQuery(".counter").appear(),jQuery(".counter").filter(":appeared").each(function(){jQuery(this).hasClass("counted")||jQuery(this).countTo().addClass("counted")}),jQuery("body").on("appear",".counter",function(e,a){jQuery(a).each(function(){jQuery(this).hasClass("counted")||jQuery(this).countTo().addClass("counted")})}),jQuery().progressbar&&(jQuery(".progress .progress-bar").appear(),jQuery(".progress .progress-bar").filter(":appeared").each(function(){jQuery(this).progressbar({transition_delay:300})}),jQuery("body").on("appear",".progress .progress-bar",function(e,a){jQuery(a).each(function(){jQuery(this).progressbar({transition_delay:300})})}),jQuery('a[data-toggle="tab"]').on("shown.bs.tab",function(e){jQuery(jQuery(e.target).attr("href")).find(".progress .progress-bar").progressbar({transition_delay:300})}))),jQuery().jflickrfeed){var s=jQuery("#flickr");s.length&&(s.hasClass("flickr_loaded")||s.jflickrfeed({flickrbase:"http://api.flickr.com/services/feeds/",limit:8,qstrings:{id:"131791558@N04"},itemTemplate:'<a href="{{image_b}}" data-gal="prettyPhoto[pp_gal]"><li><img alt="{{title}}" src="{{image_s}}" /></li></a>'},function(){s.find("a").prettyPhoto({hook:"data-gal",theme:"facebook"})}).addClass("flickr_loaded"))}jQuery(".embed-placeholder").each(function(){jQuery(this).on("click",function(e){e.preventDefault(),jQuery(this).replaceWith('<iframe class="embed-responsive-item" src="'+jQuery(this).attr("href")+'?rel=0&autoplay=1"></iframe>')})}),jQuery(".isotope_container").each(function(){var e=jQuery(this),a=e.hasClass("masonry-layout")?"masonry":"fitRows";e.isotope({percentPosition:!0,layoutMode:a,masonry:{}});var t=jQuery(this).attr("data-filters")?jQuery(jQuery(this).attr("data-filters")):e.prev().find(".filters");t.length&&t.on("click","a",function(a){a.preventDefault();var t=jQuery(this).attr("data-filter");e.isotope({filter:t}),jQuery(this).siblings().removeClass("selected active"),jQuery(this).addClass("selected active")})}),jQuery(".preloaderimg").fadeOut(),jQuery(".preloader").delay(200).fadeOut("slow").delay(200,function(){jQuery(this).remove()})}function hiddenBlogItems(e){if(jQuery(".blog_isotope").length){var a,t=jQuery(".blog_isotope").find(".isotope-item"),r=jQuery(e).attr("data-filter").toString().substring(1),i=1;a=jQuery(window).width()>991&&jQuery(window).width()<1200?6:4,t.each(function(){!r&&jQuery(this).index()>a-1&&(jQuery(this).removeClass("hidden-item"),jQuery(this).addClass("hidden-item")),jQuery(this).hasClass(r)&&(jQuery(this).removeClass("hidden-item"),i>a&&jQuery(this).addClass("hidden-item"),i++)})}}jQuery(document).ready(function(){documentReadyInit(),hiddenBlogItems(jQuery(".blog_filters .selected"))}),jQuery(window).on("load",function(){windowLoadInit();var e=jQuery("#map, .page_map");e.length&&e.each(function(){var e,a,t,r=jQuery(this),i=[{featureType:"administrative",elementType:"labels.text.fill",stylers:[{color:"#444444"}]},{featureType:"landscape",elementType:"all",stylers:[{color:"#f2f2f2"}]},{featureType:"poi",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"all",stylers:[{saturation:-100},{lightness:45}]},{featureType:"road.highway",elementType:"all",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{color:"#46bcec"},{visibility:"on"}]}],s=r.data("address")?r.data("address"):"london, baker street, 221b",o=r.find(".map_marker_description").prop("outerHTML"),n=r.find("h3").first().text()?r.find("h3").first().text():"Map Title",l=r.find(".map_marker_icon").first().attr("src");jQuery.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address="+s,function(t){e=t.results[0].geometry.location.lat,a=t.results[0].geometry.location.lng}).complete(function(){var s=new google.maps.LatLng(e,a),u={mapTypeId:google.maps.MapTypeId.ROADMAP,zoom:16,draggable:!1,scrollwheel:!1,center:s,styles:i};t=new google.maps.Map(r[0],u);var d=new google.maps.Marker({position:s,title:n,map:t,icon:l}),f=new google.maps.InfoWindow({content:o});google.maps.event.addListener(d,"click",function(){f.open(t,d)})})})}),jQuery(window).on("resize",function(){jQuery("body").scrollspy("refresh"),hiddenBlogItems(jQuery(".blog_filters .selected")),initMegaMenu();var e=jQuery(".page_header").first();e.length&&!jQuery(document).scrollTop()&&e.first().data("bs.affix")&&(e.first().data("bs.affix").options.offset.top=e.offset().top),jQuery(".page_header_wrapper").css({height:e.first().outerHeight()})}),jQuery(window).scroll(function(){pieChart()}),jQuery(".blog_filters").find("a").on("click",function(){hiddenBlogItems(this)});