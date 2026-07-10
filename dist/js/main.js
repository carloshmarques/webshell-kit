(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// Substitui o topo do teu main.js por isto:
const logger = {
    log: function(msg) {
        if (typeof console !== 'undefined') console.log(msg);
    }
};

logger.log("Hurray it Works, ready or not were i came :)!");

// O teu coiso original para abrir o menu (Intacto e Funcional):
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn_burger') || document.querySelector('.menu-btn__burger'); 

let showMenu = false; 

if (menuBtn) {
    menuBtn.addEventListener('click', toggleMenu);
}

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('open');
    if (hamburger) hamburger.classList.add('open');
    showMenu = true;
  } else {
    menuBtn.classList.remove('open');
    if (hamburger) hamburger.classList.remove('open');
    showMenu = false;
  }
}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcY2FybG9cXFRFTVBcXEVuZ2luZWVyaW5nXFxjb250YWluZXJcXHdlYnNoZWxsLWtpdFxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiQzovVXNlcnMvY2FybG8vVEVNUC9FbmdpbmVlcmluZy9jb250YWluZXIvd2Vic2hlbGwta2l0L2Fzc2V0cy9qcy9mYWtlXzc0ODQ5ZDhjLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gU3Vic3RpdHVpIG8gdG9wbyBkbyB0ZXUgbWFpbi5qcyBwb3IgaXN0bzpcbmNvbnN0IGxvZ2dlciA9IHtcbiAgICBsb2c6IGZ1bmN0aW9uKG1zZykge1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSBjb25zb2xlLmxvZyhtc2cpO1xuICAgIH1cbn07XG5cbmxvZ2dlci5sb2coXCJIdXJyYXkgaXQgV29ya3MsIHJlYWR5IG9yIG5vdCB3ZXJlIGkgY2FtZSA6KSFcIik7XG5cbi8vIE8gdGV1IGNvaXNvIG9yaWdpbmFsIHBhcmEgYWJyaXIgbyBtZW51IChJbnRhY3RvIGUgRnVuY2lvbmFsKTpcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idG4nKTtcbmNvbnN0IGhhbWJ1cmdlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWJ0bl9idXJnZXInKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1idG5fX2J1cmdlcicpOyBcblxubGV0IHNob3dNZW51ID0gZmFsc2U7IFxuXG5pZiAobWVudUJ0bikge1xuICAgIG1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVNZW51KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlTWVudSgpIHtcbiAgaWYgKCFzaG93TWVudSkge1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xuICAgIGlmIChoYW1idXJnZXIpIGhhbWJ1cmdlci5jbGFzc0xpc3QuYWRkKCdvcGVuJyk7XG4gICAgc2hvd01lbnUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1lbnVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuICAgIGlmIChoYW1idXJnZXIpIGhhbWJ1cmdlci5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuJyk7XG4gICAgc2hvd01lbnUgPSBmYWxzZTtcbiAgfVxufVxuIl19
