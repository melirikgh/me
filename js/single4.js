/* IMG */
var imgattr = 'loading="lazy" class="lazyload p-e_n" oncontextmenu="return false"';
$(".id_img").each(function(){$(this).replaceWith('<div class="text-center"><img '+imgattr+' alt="'+$(this).data("a")+'" src="https://'+$(this).data("s")+'" width="'+$(this).data("w")+'" height="'+$(this).data("h")+'"/></div>')});

$(document).ready(function(){$("#flippy").click(function(){$("#flippanel").slideToggle("normal")})});
/* Double Click */
$('i[rel="pre"]').replaceWith(function(){return $("<pre><code>"+$(this).html()+"</code></pre>")});for(var pres=document.querySelectorAll("pre,code,kbd,blockquote,td"),i=0;i<pres.length;i++)pres[i].addEventListener("dblclick",function(){var e=getSelection(),t=document.createRange();t.selectNodeContents(this),e.removeAllRanges(),e.addRange(t)},!1);
