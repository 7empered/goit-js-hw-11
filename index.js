import{a as p,i as s,S as m}from"./assets/vendor-zdB1qm3K.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const y="48568808-b5581b6c1359d9abd76100469",g="https://pixabay.com/api/";function h(o){return p.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data.hits).catch(t=>(s.error({title:"Error",message:"Failed to fetch images"}),[]))}const u=document.querySelector(".gallery"),b=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(){u.innerHTML=""}function S(o){if(o.length===0){s.error({title:"Error",message:"Sorry, there are no images matching your search query. Please, try again"});return}const t=o.map(({webformatURL:n,largeImageURL:i,tags:e,likes:r,views:a,comments:d,downloads:f})=>`
      <a href="${i}" class="gallery-item">
        <img src="${n}" alt="${e}" loading="lazy" />
        <div class="info">
          <p><br>Likes:</br>${r}</p>
          <p><br>Views:</br>${a}</p>
          <p><br>Comments:</br>${d}</p>
          <p><br>Downloads:</br>${f}</p>
        </div>
      </a>
    `).join("");u.innerHTML=t,b.refresh()}const l=document.querySelector("#search-form"),c=document.querySelector(".loader");l.addEventListener("submit",o=>{o.preventDefault();const t=l.querySelector("input").value.trim();if(!t){s.warning({title:"Warning",message:"Please enter a search term"});return}L(),c.style.display="block",h(t).then(n=>{c.style.display="none",S(n)})});
//# sourceMappingURL=index.js.map
