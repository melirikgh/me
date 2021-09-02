/* Share Button */
$('<button class="frshare" type="share"><svg height="35" viewBox="0 0 24 24" width="35"><path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" fill="#fff"/></svg></button>').appendTo(".fixright");

(function (win, doc) {
const testButton = doc.createElement('button');
testButton.setAttribute('type','share');
if (testButton.type != 'share') {
  win.addEventListener('click', function(ev) {
    ev = ev || win.event;
    let target = ev.target;
    let button = target.closest('button[type="share"]');
    if (button) {
      const title = doc.querySelector('title').innerText;
      const url = doc.querySelector('link[rel="canonical"]').getAttribute('href');
      if (navigator.share) {
        navigator.share({ title: title, text: title, url: url });
      } else {
        win.location.href='mailto:?subject='+title+'&body='+url;
      }
    }
  });
}
}(this, this.document));
/* Share Link */
var canonicalLink = document.querySelector('link[rel="canonical"]').getAttribute('href');
$('<div class="s_link text-center"><input type="text" value="'+canonicalLink+'" id="s_linkInput" disabled><div class="tooltip"><button class="s_linkbutton" onclick="s_linkClick()" onmouseout="s_linkOut()"><span class="tooltiptext" id="s_linkTooltip">Copy to clipboard</span>Copy Link</button></div></div>').appendTo("#endofpost");
function s_linkClick(){var e=document.getElementById("s_linkInput");e.select(),e.setSelectionRange(0,99999),navigator.clipboard.writeText(e.value),document.getElementById("s_linkTooltip").innerHTML="&#10003; Copied: "+e.value}function s_linkOut(){document.getElementById("s_linkTooltip").innerHTML="Copy to clipboard"}
