/* ================================================================
   LOBBY — YOU × Curry
   JavaScript Separado
================================================================ */

(function () {
'use strict';

/* ── 1. CURSOR ── */
var csr = document.getElementById('csr');
var dot = document.getElementById('csrDot');
var mx=0,my=0,cx=0,cy=0;

document.addEventListener('mousemove', function(e){
  mx=e.clientX; my=e.clientY;
  dot.style.left=mx+'px'; dot.style.top=my+'px';
});
(function anim(){ cx+=(mx-cx)*.13; cy+=(my-cy)*.13;
  csr.style.left=cx+'px'; csr.style.top=cy+'px';
  requestAnimationFrame(anim); })();

/* Muda cor do cursor por painel */
document.getElementById('pYOU').addEventListener('mouseenter',   function(){ document.body.className='on-you';   });
document.getElementById('pCurry').addEventListener('mouseenter', function(){ document.body.className='on-curry'; });

/* Escala cursor sobre botões */
document.querySelectorAll('.enter-btn').forEach(function(b){
  b.addEventListener('mouseenter', function(){ csr.style.width=csr.style.height='52px'; });
  b.addEventListener('mouseleave', function(){ csr.style.width=csr.style.height='34px'; });
});

/* ── 2. HOVER EXPAND ── */
var lobby = document.getElementById('lobby');
var pYOU  = document.getElementById('pYOU');
var pCur  = document.getElementById('pCurry');

pYOU.addEventListener('mouseenter',  function(){ lobby.classList.remove('hc'); lobby.classList.add('hy'); });
pYOU.addEventListener('mouseleave',  function(){ lobby.classList.remove('hy'); });
pCur.addEventListener('mouseenter',  function(){ lobby.classList.remove('hy'); lobby.classList.add('hc'); });
pCur.addEventListener('mouseleave',  function(){ lobby.classList.remove('hc'); });

/* ── 3. NAVEGAÇÃO ── */
var navigating = false;
window.goTo = function(dest) {
  if (navigating) return;
  navigating = true;
  var target = dest==='you' ? 'index.html' : 'curry.html';
  var audio  = document.getElementById('audioHelloYou');

  /* Desabilita todo clique */
  pYOU.style.pointerEvents = pCur.style.pointerEvents = 'none';
  lobby.classList.remove('hy','hc');

  /* Expande o lado escolhido */
  lobby.classList.add(dest==='you' ? 'xy' : 'xc');

  /* Toca áudio imediatamente se for YOU */
  if (dest === 'you' && audio) {
    audio.play().catch(function(error){
      console.log("Erro ao tocar áudio (provavelmente bloqueio de autoplay):", error);
    });
  }

  /* Fade to black */
  setTimeout(function(){
    document.getElementById('overlay').classList.add('show');
  }, 580);

  /* Redireciona após 2s para YOU ou após ~1s para Curry */
  setTimeout(function(){
    window.location.href = target;
  }, dest==='you' ? 2000 : 1040);
};

/* ── 4. CANVAS YOU — Logo + Sangue ── */
(function initCanvas(){
  var canvas = document.getElementById('youCanvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var panel = document.getElementById('pYOU');

  function setSize(){
    canvas.width  = panel.offsetWidth  || window.innerWidth * .5;
    canvas.height = panel.offsetHeight || window.innerHeight;
  }
  setSize();

  var CW, CH, FS, TY, TB, BT, BH, CUTS, SEGS;

  function layout(){
    CW   = canvas.width;
    CH   = canvas.height;
    FS   = Math.min(CW * 0.72, 540);   /* tamanho do "YOU" */
    TY   = CH * 0.10;                  /* topo da letra */
    TB   = TY + FS * 0.82;             /* base da letra */
    BT   = TB;                         /* topo da área de sangue */
    BH   = CH - BT;                    /* altura da área de sangue */

    CUTS = [
      { y: TY + FS*0.37, h: 3.6, dx:  11 },
      { y: TY + FS*0.67, h: 2.9, dx:  -8 },
      { y: TY + FS*0.86, h: 2.3, dx:   7 },
    ];
    SEGS = [
      { from: 0,                    to: CUTS[0].y,           dx: 0          },
      { from: CUTS[0].y+CUTS[0].h,  to: CUTS[1].y,           dx: CUTS[0].dx },
      { from: CUTS[1].y+CUTS[1].h,  to: CUTS[2].y,           dx: CUTS[1].dx },
      { from: CUTS[2].y+CUTS[2].h,  to: CH+30,               dx: CUTS[2].dx },
    ];
  }
  layout();

  function ax(){
    return [
      CW*.08,CW*.14,CW*.20,CW*.27,CW*.35,CW*.42,
      CW*.50,CW*.58,CW*.65,CW*.72,CW*.79,CW*.86,CW*.92
    ];
  }

  /* Desenha "YOU" fatiado */
  function drawYOU(){
    var F = '900 italic '+FS+"px 'Playfair Display',Georgia,serif";
    SEGS.forEach(function(s){
      var h=s.to-s.from; if(h<=0) return;
      ctx.save();
      ctx.beginPath(); ctx.rect(0,s.from,CW,h); ctx.clip();
      ctx.font=F; ctx.textAlign='center'; ctx.textBaseline='top';
      ctx.fillStyle='#0e0e0e';
      ctx.fillText('YOU', CW/2+s.dx, TY);
      ctx.restore();
    });
    CUTS.forEach(function(c){
      var g=ctx.createLinearGradient(CW*.04,c.y,CW*.96,c.y);
      g.addColorStop(0,   'rgba(42,0,0,0)');
      g.addColorStop(0.11,'rgba(140,7,7,.62)');
      g.addColorStop(0.50,'rgba(208,18,18,.96)');
      g.addColorStop(0.89,'rgba(140,7,7,.62)');
      g.addColorStop(1,   'rgba(42,0,0,0)');
      ctx.fillStyle=g; ctx.fillRect(0,c.y,CW,c.h);
      ctx.fillStyle='rgba(255,55,55,.11)'; ctx.fillRect(0,c.y,CW,.9);
    });
  }

  /* ── Drip ── */
  function Drip(){ this.r(true); }
  Drip.prototype.r=function(init){
    var a=ax();
    this.x    =a[Math.floor(Math.random()*a.length)]+(Math.random()-.5)*CW*.07;
    this.topY =BT; this.maxY=BT+BH*(.22+Math.random()*.78);
    this.head =this.topY;
    this.spd  =.08+Math.random()*.44;
    this.w    =1.4+Math.random()*3.6;
    this.al   =.40+Math.random()*.44;
    this.done =false;
    this.delay=(init?Math.random()*4800:Math.random()*1100)+performance.now();
    this.hr   =this.w*1.7;
  };
  Drip.prototype.tick=function(now){ if(now<this.delay||this.done) return; this.head+=this.spd; if(this.head>=this.maxY) this.done=true; };
  Drip.prototype.draw=function(ctx,now){
    if(now<this.delay||this.head<=this.topY) return;
    var g=ctx.createLinearGradient(this.x,this.topY,this.x,this.head);
    g.addColorStop(0,'rgba(100,0,0,'+(this.al*.42)+')');
    g.addColorStop(1,'rgba(68,0,0,'+this.al+')');
    ctx.beginPath(); ctx.moveTo(this.x,this.topY); ctx.lineTo(this.x,this.head);
    ctx.strokeStyle=g; ctx.lineWidth=this.w; ctx.lineCap='round'; ctx.stroke();
    if(!this.done){
      ctx.beginPath(); ctx.ellipse(this.x,this.head,this.hr*.82,this.hr*1.46,0,0,Math.PI*2);
      ctx.fillStyle='rgba(118,0,0,'+this.al+')'; ctx.fill();
    } else {
      for(var i=0;i<3;i++){
        ctx.beginPath();
        ctx.ellipse(this.x+(Math.random()-.5)*5,this.maxY,this.w*(1.4+i*.6),this.w*(.5+i*.25),0,0,Math.PI*2);
        ctx.fillStyle='rgba(72,0,0,'+(this.al*(.72-i*.19))+')'; ctx.fill();
      }
    }
  };

  /* ── Drop ── */
  function Drop(init){ this.r(init); }
  Drop.prototype.r=function(init){
    var a=ax();
    this.x =a[Math.floor(Math.random()*a.length)]+(Math.random()-.5)*CW*.09;
    this.y =BT+BH*.025;
    this.vy=.4+Math.random()*1.65; this.vx=(Math.random()-.5)*.52;
    this.rad=1.1+Math.random()*2.7; this.al=.54+Math.random()*.33;
    this.str=1+Math.random()*2.1; this.trail=[];
    this.delay=(init?Math.random()*4200:Math.random()*210)+performance.now();
    this.alive=false;
  };
  Drop.prototype.tick=function(now){
    if(!this.alive){if(now>=this.delay)this.alive=true;else return;}
    this.trail.push({x:this.x,y:this.y,r:this.rad*.5});
    if(this.trail.length>8) this.trail.shift();
    this.y+=this.vy; this.x+=this.vx; this.vy*=1.019;
    this.rad=Math.max(.17,this.rad-.013); this.al=Math.max(0,this.al-.002);
    if(this.y>CH*1.06||this.rad<.17||this.al<=0) this.r(false);
  };
  Drop.prototype.draw=function(ctx){
    if(!this.alive) return;
    var s=this;
    this.trail.forEach(function(t,i){
      ctx.beginPath(); ctx.ellipse(t.x,t.y,t.r*.55,t.r*.85,0,0,Math.PI*2);
      ctx.fillStyle='rgba(85,0,0,'+((i/s.trail.length)*s.al*.38)+')'; ctx.fill();
    });
    ctx.beginPath(); ctx.ellipse(this.x,this.y,this.rad*.68,this.rad*this.str,0,0,Math.PI*2);
    ctx.fillStyle='rgba(108,0,0,'+this.al+')'; ctx.fill();
  };

  /* ── Puddle ── */
  function Puddle(){
    var a=ax();
    this.x=a[Math.floor(Math.random()*a.length)]+(Math.random()-.5)*CW*.07;
    this.y=BT+BH*(.38+Math.random()*.52);
    this.rx=0; this.ry=0; this.mrx=4+Math.random()*15;
    this.al=.24+Math.random()*.24; this.spd=.024+Math.random()*.08;
    this.delay=Math.random()*5800+performance.now();
  }
  Puddle.prototype.tick=function(now){ if(now<this.delay||this.rx>=this.mrx) return; this.rx+=this.spd; this.ry=this.rx*.38; };
  Puddle.prototype.draw=function(ctx,now){
    if(now<this.delay||this.rx<.5) return;
    ctx.beginPath(); ctx.ellipse(this.x,this.y,this.rx,this.ry,0,0,Math.PI*2);
    ctx.fillStyle='rgba(58,0,0,'+this.al+')'; ctx.fill();
  };

  /* Init partículas */
  var drips   = Array.from({length:28},  function(){ return new Drip(); });
  var drops   = Array.from({length:118}, function(){ return new Drop(true); });
  var puddles = Array.from({length:15},  function(){ return new Puddle(); });

  var BD=780, t0=null;

  function loop(now){
    if(!t0) t0=now;
    ctx.clearRect(0,0,CW,CH);
    ctx.fillStyle='rgba(8,8,8,.065)'; ctx.fillRect(0,0,CW,CH);
    drawYOU();
    if(now-t0>BD){
      puddles.forEach(function(p){ p.tick(now); p.draw(ctx,now); });
      drips.forEach(function(d){   d.tick(now); d.draw(ctx,now); });
      drops.forEach(function(d){   d.tick(now); d.draw(ctx);     });
    }
    requestAnimationFrame(loop);
  }

  /* Resize */
  var rt;
  window.addEventListener('resize', function(){
    clearTimeout(rt);
    rt=setTimeout(function(){
      setSize(); layout();
      drips   = Array.from({length:28},  function(){ return new Drip(); });
      drops   = Array.from({length:118}, function(){ return new Drop(false); });
      puddles = Array.from({length:15},  function(){ return new Puddle(); });
    }, 220);
  });

  document.fonts.ready.then(function(){ requestAnimationFrame(loop); });

})(); // fim canvas

})(); // fim IIFE

