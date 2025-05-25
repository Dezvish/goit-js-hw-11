import{a as y,S as f,i as c}from"./assets/vendor-g8RIeo89.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const p="50492024-422e121587c507d29de78ae86",g="https://pixabay.com/api/",h=async o=>{try{return(await y.get(g,{params:{key:p,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(t){throw console.error("Error fetching images:",t),new Error("Could not fetch images")}};let n;const b=o=>{const t=document.querySelector(".gallery"),s=o.map(({webformatURL:i,largeImageURL:e,tags:r,likes:a,views:u,comments:d,downloads:m})=>`
      <li class="gallery-item">
        <a href="${e}">
          <img src="${i}" alt="${r}" loading="lazy" />
        </a>
        <div class="image-info">
          <span><b>Likes:</b> ${a}</span>
          <span><b>Views:</b> ${u}</span>
          <span><b>Comments:</b> ${d}</span>
          <span><b>Downloads:</b> ${m}</span>
        </div>
      </li>`).join("");t.insertAdjacentHTML("beforeend",s),n&&n.refresh()},L=()=>{const o=document.querySelector(".gallery");o.innerHTML=""},S=()=>{document.querySelector(".loader").classList.add("visible")},q=()=>{document.querySelector(".loader").classList.remove("visible")},w=()=>{n&&n.destroy(),n=new f(".gallery a",{captionsData:"alt",captionDelay:250})},l=document.querySelector(".form"),v=l.querySelector('input[name="search-text"]');l.addEventListener("submit",async o=>{o.preventDefault();const t=v.value.trim();if(t===""){c.error({title:"Error",message:"Please enter a search query."});return}L(),S();try{const s=await h(t);s.length===0?c.info({title:"No Results",message:"Sorry, there are no images matching your search query. Please try again!"}):(b(s),w())}catch{c.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{q()}});
//# sourceMappingURL=index.js.map
