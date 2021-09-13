var lazyM = 'loading="lazy" class="lazyload p-e_n" oncontextmenu="return false"';
var mtitle = document.querySelector("title").innerText;
var thumb = document.querySelector('meta[property="og:image"]').getAttribute("content").replace(/.*?:\/\//g,"https://cdn.statically.io/img/");

$('<div class="text-center"><img '+lazyM+' alt="'+mtitle+'" data-src="'+thumb+'" width="1280" height="720"/></div>').prependTo("#tablelagu");

$(".sumberlirik").replaceWith('<div id="msource"><div class="msource_text">Sumber Lirik &#10095;</div><a href="https://www.google.com/url?sa=t&url=https%3A%2F%2Fwww.musixmatch.com" rel="nofollow noopener" target="_blank" title="Musixmatch"><img '+lazyM+' data-src="https://cdn.statically.io/img/hamdaniazzah.github.io/img/svg/musixmatch.svg"/></a></div>');

$(".id_yt").each(function(){$(this).replaceWith('<div class="yt_class"><div class="yt_text">Dengarkan di YouTube<a href="https://youtu.be/'+$(this).data("id")+'" rel="nofollow noopener" target="_blank"><span id="yt_link"/></a></div><div class="yt_box"><iframe loading="lazy" src="https://www.youtube.com/embed/'+$(this).data("id")+'" frameborder="0" allowfullscreen></iframe></div></div><div class="dengarkan"><div class="listen_text">Dengarkan di &#10095;</div></div>')});

var lbox1 = '<div class="listen_box"><a href="https://';
var lboxA = '" rel="nofollow noopener" target="_blank"><img '+lazyM+' data-src="https://cdn.statically.io/img/hamdaniazzah.github.io/icon/';
var lboxS = lboxA + 'spotify40.svg"/>Spotify</a></div>';
var lboxJ = lboxA + 'joox40.svg"/>JOOX</a></div>';
var lboxD = lboxA + 'deezer40.svg"/>Deezer</a></div>';

$(".id_spotify").each(function(){$(this).replaceWith(lbox1+'open.spotify.com/track/'+$(this).data("id")+lboxS)});
$(".id_joox").each(function(){$(this).replaceWith(lbox1+'www.joox.com/single/'+$(this).data("id")+lboxJ)});
$(".id_deezer").each(function(){$(this).replaceWith(lbox1+'www.deezer.com/track/'+$(this).data("id")+lboxD)});

$(".id_spotifyalbum").each(function(){$(this).replaceWith(lbox1+'open.spotify.com/album/'+$(this).data("id")+lboxS)});
$(".id_jooxalbum").each(function(){$(this).replaceWith(lbox1+'www.joox.com/album/'+$(this).data("id")+lboxJ)});
$(".id_deezeralbum").each(function(){$(this).replaceWith(lbox1+'www.deezer.com/album/'+$(this).data("id")+lboxD)});

$(".listen_box").appendTo(".dengarkan");
