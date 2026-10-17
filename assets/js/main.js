(function(){
 var b=document.getElementById('burger'),m=document.getElementById('menu');
 b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
 m.addEventListener('click',function(e){if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded','false')}});
 var f=document.getElementById('cf'),bill=document.getElementById('bill');
 var idr=function(n){return 'Rp '+Math.round(n).toLocaleString('id-ID')};
 function num(){return parseInt(bill.value.replace(/\D/g,''),10)||0}
 bill.addEventListener('blur',function(){var n=num();bill.value=n?idr(n):''});
 function calc(){
  var n=num(),va=+document.getElementById('va').value,psh=+document.getElementById('city').value;
  var tarif=va<=900?1352:1444.7; /* Rp/kWh, asumsi tarif rumah tangga */
  var kwh=n/tarif;
  var target=kwh*0.7; /* sasaran menutup ~70% konsumsi */
  var kwp=target/(psh*30*0.8);
  var cap=Math.max(0.55,va/1000); /* batas kasar terhadap daya terpasang */
  kwp=Math.min(kwp,cap);
  var panels=Math.max(1,Math.ceil(kwp*1000/550)); kwp=panels*0.55;
  var save=kwp*psh*30*0.8*tarif;
  document.getElementById('r1').textContent=kwp.toFixed(2).replace('.',',')+' kWp';
  document.getElementById('r2').textContent=panels+' × 550 Wp';
  document.getElementById('r3').textContent='± '+idr(Math.min(save,n));
  document.getElementById('r4').textContent='Rp '+Math.round(kwp*14)+'–'+Math.round(kwp*18)+' jt';
 }
 f.addEventListener('submit',function(e){e.preventDefault();bill.value=num()?idr(num()):'';calc()});
 calc();
})();
