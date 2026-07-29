import{c as p,t as k,b as g}from"./cartStore.3EzXnGQY.js";const i=t=>new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t).replace("$","$ ");function m(){const t=document.getElementById("checkout-form");if(!t)return;const l=document.getElementById("ticket-modal"),n=document.getElementById("ticket-products"),c=document.getElementById("ticket-total"),a=document.getElementById("ticket-customer"),o=document.getElementById("ticket-date"),s=document.getElementById("ticket-id");t.addEventListener("submit",d=>{d.preventDefault();const u=new FormData(t).get("name"),r=p.get(),f=k.get();if(r.length===0){alert("Your cart is empty!");return}n&&(n.innerHTML=r.map(e=>`
                  <div class="flex justify-between items-center text-sm">
                      <div class="flex flex-col">
                          <span class="font-black text-slate-950 uppercase italic text-xs tracking-tight">${e.name}</span>
                          <span class="text-[10px] font-bold text-slate-400">QTY: ${e.quantity}</span>
                      </div>
                      <span class="font-black italic text-slate-900">${i(e.price*(1-(e.discount||0)/100)*e.quantity)}</span>
                  </div>
              `).join("")),c&&(c.textContent=i(f)),a&&(a.textContent=u),o&&(o.textContent=new Date().toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})),s&&(s.textContent="TRX-"+Math.random().toString(36).substring(2,11).toUpperCase()),g(),l?.classList.add("open")})}m();document.addEventListener("astro:after-swap",m);
