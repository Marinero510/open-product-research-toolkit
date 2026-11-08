const products = [
  {name:'Hydrating face serum',category:'Beauty',price:'$18.00',signal:'Rising',icon:'🧴'},
  {name:'Compact desk organizer',category:'Home',price:'$22.00',signal:'Stable',icon:'🗂️'},
  {name:'Minimalist phone strap',category:'Accessories',price:'$12.00',signal:'Rising',icon:'📱'},
  {name:'Resistance band set',category:'Fitness',price:'$16.00',signal:'Watch',icon:'🏋️'},
  {name:'Pet grooming brush',category:'Pets',price:'$14.00',signal:'Rising',icon:'🐾'},
  {name:'Reusable makeup pads',category:'Beauty',price:'$9.00',signal:'Stable',icon:'✨'}
];
const rows = document.querySelector('#productRows');
const search = document.querySelector('#searchInput');
const category = document.querySelector('#categoryFilter');
const signal = document.querySelector('#signalFilter');
function render(){
  const q = search.value.trim().toLowerCase();
  const filtered = products.filter(p => (p.name.toLowerCase().includes(q)||p.category.toLowerCase().includes(q)) && (category.value==='all'||p.category===category.value) && (signal.value==='all'||p.signal===signal.value));
  rows.innerHTML = filtered.map((p,i)=>`<tr><td><div class="product-cell"><span class="product-icon">${p.icon}</span>${p.name}</div></td><td>${p.category}</td><td>${p.price}</td><td><span class="signal ${p.signal.toLowerCase()}">${p.signal}</span></td><td><button class="view-btn" data-name="${p.name}">View details ↗</button></td></tr>`).join('');
  document.querySelector('#resultCount').textContent = `${filtered.length} product${filtered.length===1?'':'s'}`;
  document.querySelector('#emptyState').hidden = filtered.length!==0;
  rows.querySelectorAll('.view-btn').forEach(btn=>btn.addEventListener('click',()=>alert(`${btn.dataset.name}\n\nThis is sample product data. Live product details will be added in a later development step.`)));
}
[search,category,signal].forEach(el=>el.addEventListener('input',render));
render();
