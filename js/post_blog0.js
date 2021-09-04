var Blazy = 'loading="lazy" class="lazyload p-e_n" oncontextmenu="return false"';
var Btitle = document.querySelector("title").innerText;
var Bthumb = document.querySelector('meta[property="og:image"]').getAttribute("content").replace(/.*?:\/\//g,"https://cdn.statically.io/img/");

$('<div class="text-center blogthumb"><img '+Blazy+' alt="'+Btitle+'" data-src="'+Bthumb+'" width="1280" height="720"/></div>').prependTo('#articlepostid');
