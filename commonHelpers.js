import{S as g,i as a}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function f(r){const s="https://pixabay.com",o="/api",n="/?key=42307654-d98cffd477e66adb5fa77b8c6",e=`&q=${r}&image_type=photo&orientation=horizontal&safesearch=true`,t=s+o+n+e;return fetch(t).then(i=>i.json()).catch(i=>{throw new Error(i.status)})}const d=document.querySelector(".gallery");function h(r){const s=r.hits.map(({webformatURL:n,largeImageURL:e,tags:t,likes:i,views:p,comments:m,downloads:u})=>`<li class="gallery-item">
    <a class="gallery-link" href="${e}">
      <img
        class="gallery-image"
        src="${n}"
        alt="${t}"
      />
      <div class="descriptions-container">
       <div class="img-description">
      <p class="img-description-title">Likes</p>
      <p class="img-description-content">${i}</p>
    </div>
    <div class="img-description">
      <p class="img-description-title">Views</p>
      <p class="img-description-content">${p}</p>
    </div>
    <div class="img-description">
      <p class="img-description-title">Comments</p>
      <p class="img-description-content">${m}</p>
    </div>
    <div class="img-description">
      <p class="img-description-title">Downloads</p>
      <p class="img-description-content">${u}</p>
    </div>
    </div>
    </a>
  </li>`).join("");d.insertAdjacentHTML("beforeend",s),new g(".gallery a",{captions:!0,captionDelay:250,captionsData:"alt"}).refresh()}const y=document.querySelector(".form"),c=document.querySelector(".loader-container"),l={backgroundColor:"red",messageColor:"white",messageSize:"14",position:"topRight",timeout:3e3};y.addEventListener("submit",v);function v(r){r.preventDefault(),d.innerHTML="",c.classList.remove("is-hidden");const s=r.target.elements.input.value.trim();f(s).then(o=>{c.classList.add("is-hidden"),o.totalHits===0?a.show({...l,message:"Sorry, there are no images matching your search query. Please try again!"}):s===""?(c.classList.add("is-hidden"),a.show({...l,message:"Fill out the search form!"})):(c.classList.add("is-hidden"),h(o))}),r.target.reset()}
//# sourceMappingURL=commonHelpers.js.map
