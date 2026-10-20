const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

const profile = {
  email: "aryankushwaha599@gmail.com",
  github: "https://github.com/aryan2004-tech",
  linkedin: "https://www.linkedin.com/in/aryan-kushwaha-599bbb30a/",
  resume: "assets/resume/aryan-kushwaha-resume.pdf",
  availability: "OPEN TO OPPORTUNITIES"
};

const projects = {
  herbalai: {
    no:"01", title:"HerbalAI", category:["web","fullstack"], type:"WEB / FULL STACK",
    description:"AI-inspired herbal medicine recommendation and medicinal plant identification platform. The project combines a web interface with PHP/MySQL-based functionality and a plant knowledge database.",
    stack:["HTML","CSS","JavaScript","PHP","MySQL"], status:"LOCAL DEMO", code:"", live:"",
    visual:"HERBALAI SCREENSHOT", images:[
      "assets/projects/herbalai-1.png","assets/projects/herbalai-2.png",
      "assets/projects/herbalai-3.png","assets/projects/herbalai-4.png",
      "assets/projects/herbalai-5.png","assets/projects/herbalai-6.png"
    ]
  },
  shopease: {
    no:"02", title:"Shopease", category:["web"], type:"WEB / ECOMMERCE",
    description:"A clean e-commerce frontend project focused on product presentation, responsive layouts, reusable UI patterns and a simple shopping experience.",
    stack:["HTML","CSS","JavaScript"], status:"LIVE DEMO", code:"", live:"https://aryan2004-tech.github.io/ShopEase/#home",
    visual:"SHOPEASE SCREENSHOT", images:[
      "assets/projects/shopease-1.png","assets/projects/shopease-2.png",
      "assets/projects/shopease-3.png","assets/projects/shopease-4.png",
      "assets/projects/shopease-5.png","assets/projects/shopease-6.png"
    ]
  },
  ecotrack: {
    no:"03", title:"EcoTrack", category:["flutter"], type:"MOBILE / FLUTTER",
    description:"A Flutter-based carbon footprint and sustainability app. The provided app screens show monthly carbon calculation inputs for transport and home energy, emission history, carbon goals, analytics with emission distribution, environment information, eco recommendations, streak tracking, achievements, and a user profile.",
    stack:["Flutter","Dart","fl_chart","SQLite","SharedPreferences","PDF / Printing","HTTP"], status:"APP SCREENSHOTS ADDED", code:"", live:"",
    visual:"ECOTRACK MOBILE APP", images:[
      "assets/projects/ecotrack-1.jpg","assets/projects/ecotrack-2.jpg",
      "assets/projects/ecotrack-3.jpg","assets/projects/ecotrack-4.jpg",
      "assets/projects/ecotrack-5.jpg","assets/projects/ecotrack-6.jpg",
      "assets/projects/ecotrack-7.jpg","assets/projects/ecotrack-8.jpg",
      "assets/projects/ecotrack-9.jpg"
    ]
  },
  smartsave: {
    no:"04", title:"SmartSave", category:["flutter"], type:"MOBILE / FINANCE",
    description:"Personal finance tracker concept for recording income and expenses, organizing categories and presenting monthly spending summaries.",
    stack:["Flutter","Dart","UI"], status:"SCREENSHOTS PENDING", code:"", live:"",
    visual:"PROJECT PREVIEW / IMAGE SLOT"
  }
};

function projectCard(key, p){
  return `
    <article class="project-card showcase-card" data-category="${p.category.join(" ")}">
      <button class="project-preview magnetic" data-project="${key}" data-cursor="PREVIEW" aria-label="Open ${p.title}">
        ${p.images ? `<img class="project-shot" src="${p.images[0]}" alt="${p.title} application screenshot" loading="lazy">` : `<span class="preview-grid"></span><span class="preview-label">${p.visual}</span>`}
        <span class="preview-scan"></span>
        <strong>${p.no}</strong>
        <small>${p.type}</small>
      </button>
      <div class="project-body">
        <div class="project-topline"><div class="project-no">${p.no}</div><span class="status">${p.status}</span></div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <div class="tags">${p.stack.map(x=>`<span>${x}</span>`).join("")}</div>
        <div class="project-actions">
          <button class="magnetic" data-project="${key}" data-cursor="VIEW">VIEW PROJECT ↗</button>
          ${p.code ? `<a class="magnetic" href="${p.code}" target="_blank" rel="noopener noreferrer" data-cursor="CODE">SOURCE ↗</a>` : `<span class="project-link-disabled" aria-label="Source link not configured">SOURCE PENDING</span>`}
          ${p.live ? `<a class="live magnetic" href="${p.live}" target="_blank" rel="noopener noreferrer" data-cursor="LIVE">LIVE ↗</a>` : `<span class="project-link-disabled" aria-label="Live demo not available">DEMO PENDING</span>`}
        </div>
      </div>
    </article>`;
}

const projectCards = Object.entries(projects).map(([key,p]) => projectCard(key,p)).join("");

const templates = {
  home: `
    <div class="section-kicker">SYSTEM / HOME</div>
    <h2>Welcome to ARYAN.OS</h2>
    <p>This is a creative developer portfolio designed as a small interactive operating system. Explore the applications below or use the terminal to navigate.</p>
    <div class="info-grid">
      <div class="info-card"><b>01 / Explore</b><span>Open About, Skills, Projects and Contact.</span></div>
      <div class="info-card"><b>02 / Interact</b><span>Use the terminal commands to control the interface.</span></div>
      <div class="info-card"><b>03 / Responsive</b><span>Built to adapt from desktop screens to mobile devices.</span></div>
      <div class="info-card"><b>04 / Stack</b><span>HTML, CSS and vanilla JavaScript.</span></div>
    </div>`,
  about: `
    <div class="section-kicker">APPLICATION / ABOUT</div>
    <h2>I'm Aryan Kushwaha.</h2>
    <p>A B.Tech Computer Science Engineering graduate interested in frontend development and full-stack web development. I enjoy solving problems, experimenting with interfaces and turning ideas into practical products.</p>
    <div class="info-grid">
      <div class="info-card"><b>Focus</b><span>Frontend & Full-Stack Web Development</span></div>
      <div class="info-card"><b>Education</b><span>B.Tech — Computer Science Engineering</span></div>
      <div class="info-card"><b>Approach</b><span>Clean UI, responsive layouts and practical solutions</span></div>
      <div class="info-card"><b>Currently</b><span>Building projects and improving production-ready development skills</span></div>
    </div>`,
  skills: `
    <div class="section-kicker">APPLICATION / TECH STACK</div>
    <h2>Skills & Tools</h2>
    <p>Core technologies I use while building web and software projects.</p>
    <div class="skill-list">
      ${[["HTML",95],["CSS",92],["JavaScript",86],["React",82],["Node.js",76],["MongoDB",72],["Python",68],["Git & GitHub",80]].map(([n,w])=>`<div class="skill-row"><span>${n}</span><div class="bar"><i style="--w:${w}%"></i></div><span>${w}%</span></div>`).join("")}
    </div>`,
  projects: `
    <div class="section-kicker">APPLICATION / PROJECTS</div>
    <div class="projects-heading">
      <div>
        <h2>Selected Builds</h2>
        <p>Explore the builds behind the portfolio, including real screenshots from the EcoTrack mobile application.</p>
      </div>
      <div class="project-count"><strong>04</strong><span>PROJECT MODULES</span></div>
    </div>
    <div class="project-filters" role="group" aria-label="Filter projects by category">
      <button class="filter active" data-filter="all">ALL</button>
      <button class="filter" data-filter="web">WEB</button>
      <button class="filter" data-filter="flutter">FLUTTER</button>
      <button class="filter" data-filter="fullstack">FULL STACK</button>
    </div>
    <div class="featured-project">
      <div class="featured-copy">
        <span class="featured-kicker">FEATURED BUILD / 01</span>
        <h3>HerbalAI</h3>
        <p>AI-inspired herbal medicine recommendation and plant identification interface.</p>
        <button class="primary magnetic" data-project="herbalai" data-cursor="OPEN">OPEN FEATURED ↗</button>
      </div>
      <button class="featured-visual featured-visual-image" data-project="herbalai" aria-label="Open HerbalAI project details">
        <img src="assets/projects/herbalai-1.png" alt="HerbalAI medicinal plant identification homepage" loading="lazy">
        <span class="featured-image-caption">HERBALAI / PROJECT SCREENSHOT</span>
        <span class="preview-scan"></span>
      </button>
    </div>
    <div class="project-grid" id="project-grid">${projectCards}</div>`,
  contact: `
    <div class="section-kicker">APPLICATION / CONTACT</div>
    <div class="contact-heading">
      <div>
        <h2>Let's build something.</h2>
        <p>For internships, frontend work, full-stack projects or collaboration, use one of the channels below.</p>
      </div>
      <span class="availability"><span class="pulse-dot"></span>${profile.availability}</span>
    </div>
    <div class="contact-grid-v7">
      <div class="contact-panel-v7">
        <span class="featured-kicker">PRIMARY CHANNEL</span>
        <h3>Direct Email</h3>
        <div class="contact-value" id="email-value">${profile.email || "EMAIL ADDRESS TO BE ADDED"}</div>
        <div class="contact-actions">
          ${profile.email ? `<button class="primary magnetic copy-email" data-cursor="COPY">COPY EMAIL</button><a class="magnetic" href="mailto:${profile.email}" data-cursor="MAIL">SEND MAIL ↗</a>` : `<span class="project-link-disabled">EMAIL LINK PENDING — ADD YOUR EMAIL IN js/script.js</span>`}
        </div>
        <div class="copy-feedback" id="copy-feedback" aria-live="polite"></div>
      </div>
      <div class="contact-panel-v7">
        <span class="featured-kicker">NETWORK</span>
        <div class="social-row-v7">
          <a href="${profile.linkedin}" target="_blank" rel="noopener" class="social-card magnetic" data-cursor="OPEN">
            <strong>LINKEDIN</strong><span>Professional profile ↗</span>
          </a>
          ${profile.github ? `<a href="${profile.github}" target="_blank" rel="noopener noreferrer" class="social-card magnetic" data-cursor="OPEN"><strong>GITHUB</strong><span>Projects & source ↗</span></a>` : `<div class="social-card"><strong>GITHUB</strong><span>Profile link pending</span></div>`}
          ${profile.resume ? `<a href="${profile.resume}" download="Aryan-Kushwaha-Resume.pdf" class="social-card magnetic" data-cursor="DOWNLOAD"><strong>RESUME</strong><span>Download CV PDF ↓</span></a>` : `<div class="social-card"><strong>RESUME</strong><span>Upload / link resume before submission</span></div>`}
        </div>
      </div>
    </div>
    <div class="contact-note-v7">
      <span>ARYAN.OS / CONTACT PROTOCOL</span>
      <span>RESPONSE WINDOW: 24–72H</span>
    </div>`,
  terminal: `
    <div class="section-kicker">SYSTEM / TERMINAL</div>
    <h2>Command Center</h2>
    <p>Type a command and press Enter.</p>
    <div class="terminal-output" id="terminal-output"><b>aryan@aryan-os:~$</b> help<br>Available: help · about · skills · projects · contact · github · linkedin · resume · clear</div>
    <div class="terminal-command"><input id="terminal-input" autocomplete="off" placeholder="type a command..."><button id="terminal-run">RUN</button></div>`
};

let lastFocusedElement = null;
function openWindow(name){
  lastFocusedElement = document.activeElement;
  const content = templates[name] || templates.home;
  $("#window-title").textContent = name === "projects" ? "projects.app" : `${name}.exe`;
  $("#window-content").innerHTML = content;
  $("#modal-backdrop").classList.remove("hidden");
  document.body.style.overflow = "hidden";
  bindDynamic();
  $("#window-close").focus();
}
function closeWindow(){
  $("#modal-backdrop").classList.add("hidden");
  document.body.style.overflow = "";
  if(lastFocusedElement && typeof lastFocusedElement.focus === "function") lastFocusedElement.focus();
}

$$("[data-open]").forEach(el=>el.addEventListener("click",()=>openWindow(el.dataset.open)));
$("#window-close").addEventListener("click",closeWindow);
$("#modal-backdrop").addEventListener("click",(e)=>{if(e.target.id==="modal-backdrop")closeWindow()});
document.addEventListener("keydown",e=>{
  if(e.key==="Escape" && !$("#modal-backdrop").classList.contains("hidden")){closeWindow();return;}
  if(e.key==="Tab" && !$("#modal-backdrop").classList.contains("hidden")){
    const focusable=[...$("#window").querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')].filter(el=>el.offsetParent!==null);
    if(!focusable.length){e.preventDefault();return;}
    const first=focusable[0],last=focusable[focusable.length-1];
    if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
    else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
  }
});

function bindDynamic(){
  $$("[data-project]").forEach(btn=>btn.addEventListener("click",()=>openProject(btn.dataset.project)));
  const input=$("#terminal-input"), run=$("#terminal-run");
  if(input){
    run.addEventListener("click",()=>execute(input.value));
    input.addEventListener("keydown",e=>{if(e.key==="Enter")execute(input.value)});
    setTimeout(()=>input.focus(),80);
  }
  const copyEmail=$(".copy-email");
  if(copyEmail){
    copyEmail.addEventListener("click",async()=>{
      const email=$("#email-value")?.textContent?.trim() || profile.email;
      try{
        await navigator.clipboard.writeText(email);
        const feedback=$("#copy-feedback");
        if(feedback) feedback.textContent="EMAIL COPIED TO CLIPBOARD";
        copyEmail.textContent="COPIED ✓";
        setTimeout(()=>{
          copyEmail.textContent="COPY EMAIL";
          if(feedback) feedback.textContent="";
        },1800);
      }catch{
        const feedback=$("#copy-feedback");
        if(feedback) feedback.textContent=`Copy unavailable — use ${email}`;
      }
    });
  }

  $$(".terminal-shortcuts button").forEach(btn=>{
    btn.addEventListener("click",()=>{
      const input=$("#terminal-input");
      if(!input) return;
      input.value=btn.dataset.command;
      input.dispatchEvent(new Event("input"));
      const form=$("#terminal-form");
      if(form) form.requestSubmit();
    });
  });

  $$(".filter").forEach(btn=>{
    btn.addEventListener("click",()=>{
      $$(".filter").forEach(x=>x.classList.remove("active"));
      btn.classList.add("active");
      const filter=btn.dataset.filter;
      $$(".showcase-card").forEach(card=>{
        const show=filter==="all" || card.dataset.category.split(" ").includes(filter);
        card.classList.toggle("filtered-out", !show);
      });
    });
  });
  bindCursorTargets();
}
function openProject(key){
  const p=projects[key];
  $("#window-title").textContent=`${p.title.toLowerCase()}.app`;
  $("#window-content").innerHTML=`
    <div class="section-kicker">PROJECT / ${p.no} / ${p.type}</div>
    <div class="detail-v4">
      <div class="detail-visual-stack">
        <div class="detail-preview ${p.images ? "detail-preview-image" : ""}">
          ${p.images ? `<img src="${p.images[0]}" alt="${p.title} application screenshot" loading="lazy">` : `<span class="preview-grid"></span><strong>${p.title}</strong><small>SCREENSHOTS COMING SOON</small>`}
          <span class="preview-scan"></span>
        </div>
        ${p.images ? `<div class="project-gallery" aria-label="${p.title} screenshot gallery">${p.images.map((image,index)=>`<button class="gallery-thumb ${index===0?"active":""}" data-gallery-image="${image}" aria-label="Show screenshot ${index+1}"><img src="${image}" alt="${p.title} screen ${index+1}" loading="lazy"><span>0${index+1}</span></button>`).join("")}</div>` : ""}
      </div>
      <div class="detail-copy">
        <div class="detail-status">${p.status}</div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <h4>TECH STACK</h4>
        <div class="tags">${p.stack.map(x=>`<span>${x}</span>`).join("")}</div>
        <div class="detail-links">
          ${p.code ? `<a class="magnetic" href="${p.code}" target="_blank" rel="noopener noreferrer" data-cursor="CODE">SOURCE CODE ↗</a>` : `<span class="project-link-disabled">SOURCE LINK NOT CONFIGURED</span>`}
          ${p.live ? `<a class="magnetic" href="${p.live}" target="_blank" rel="noopener noreferrer" data-cursor="LIVE">LIVE DEMO ↗</a>` : `<span class="project-link-disabled">DEMO NOT PUBLICLY HOSTED</span>`}
        </div>
      </div>
    </div>`;
  $$(".gallery-thumb").forEach(thumb=>{
    thumb.addEventListener("click",()=>{
      const preview=$(".detail-preview img");
      if(preview) preview.src=thumb.dataset.galleryImage;
      $$(".gallery-thumb").forEach(x=>x.classList.toggle("active",x===thumb));
    });
  });
  bindCursorTargets();
}

function execute(raw){
  const cmd=raw.trim().toLowerCase();
  const out=$("#terminal-output"); if(!out) return;
  const responses={
    help:"Available: help · about · skills · projects · contact · github · linkedin · resume · clear",
    about:"Aryan Kushwaha — B.Tech CSE graduate focused on frontend and full-stack web development.",
    skills:"HTML · CSS · JavaScript · React · Node.js · MongoDB · Python · Git/GitHub",
    projects:"Opening projects.app...",
    contact:"Opening contact.exe...",
    github:"Opening GitHub profile...",
    linkedin:"Opening LinkedIn...",
    resume:"Opening resume PDF..."
  };
  const safeCmd=cmd.replace(/[&<>"]/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[char]));
  out.innerHTML += `<br><b>aryan@aryan-os:~$</b> ${safeCmd}<br>`;
  if(cmd==="clear"){out.innerHTML="";return}
  if(cmd==="projects"){openWindow("projects");return}
  if(cmd==="about"||cmd==="skills"||cmd==="contact"){out.innerHTML+=`${responses[cmd]}<br>`;openWindow(cmd);return}
  if(cmd==="linkedin"){out.innerHTML+=responses[cmd];window.open(profile.linkedin,"_blank","noopener,noreferrer");out.scrollTop=out.scrollHeight;return}
   if(cmd==="resume"){out.innerHTML+=responses[cmd];window.open(profile.resume,"_blank","noopener,noreferrer");out.scrollTop=out.scrollHeight;return}
  if(cmd==="github"){out.innerHTML+=profile.github ? responses[cmd] : "Add your GitHub URL in the profile settings.";if(profile.github)window.open(profile.github,"_blank","noopener,noreferrer");out.scrollTop=out.scrollHeight;return}
  out.innerHTML += (responses[cmd] || "Command not found. Type <b>help</b>.") + "<br>";
  out.scrollTop=out.scrollHeight;
}

function updateClock(){
  $("#clock").textContent=new Date().toLocaleTimeString("en-IN",{hour12:false});
}
setInterval(updateClock,1000);updateClock();

let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my;
const dot=$("#cursor-dot"), ring=$("#cursor-ring"), label=$("#cursor-label");
document.addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY;dot.style.left=mx+"px";dot.style.top=my+"px"});
function animateCursor(){rx+=(mx-rx)*.14;ry+=(my-ry)*.14;ring.style.left=rx+"px";ring.style.top=ry+"px";requestAnimationFrame(animateCursor)}
animateCursor();
function bindCursorTargets(){
  $$(".magnetic,[data-cursor]").forEach(el=>{
    if(el.dataset.cursorBound) return;
    el.dataset.cursorBound="1";
    el.addEventListener("mouseenter",()=>{ring.classList.add("hot");label.textContent=el.dataset.cursor||""});
    el.addEventListener("mouseleave",()=>{ring.classList.remove("hot");label.textContent=""});
    el.addEventListener("click",()=>{ring.classList.add("click");setTimeout(()=>ring.classList.remove("click"),300)});
  });
}
bindCursorTargets();

function boot(){
  const lines=["INITIALIZING CORE","LOADING DEVELOPER PROFILE","MOUNTING PROJECT MODULES","STARTING INTERFACE","CHECKING RESPONSIVE MODE"];
  const box=$("#boot-lines"),bar=$("#boot-bar"),status=$("#boot-status");
  let i=0;
  const timer=setInterval(()=>{
    if(i<lines.length){
      box.insertAdjacentHTML("beforeend",`<span>[ OK ] ${lines[i]} <b>READY</b></span>`);
      i++;bar.style.width=(i/lines.length*100)+"%";
    }else{
      clearInterval(timer);status.textContent="SYSTEM READY_";
      setTimeout(()=>$("#boot-screen").classList.add("hide"),500);
    }
  },230);
}
window.addEventListener("load",boot);


// V10 avatar pointer response: restrained tilt, disabled on touch/reduced-motion.
(function initAvatarMotion(){
  const avatar=document.querySelector(".avatar-core");
  const stage=document.querySelector(".orbital");
  if(!avatar || !stage) return;
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer=window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if(reduced || !finePointer) return;
  let frame=0;
  stage.addEventListener("pointermove",event=>{
    const rect=stage.getBoundingClientRect();
    const x=(event.clientX-rect.left)/rect.width-.5;
    const y=(event.clientY-rect.top)/rect.height-.5;
    cancelAnimationFrame(frame);
    frame=requestAnimationFrame(()=>{
      avatar.style.transform=`rotateY(${x*7}deg) rotateX(${-y*5}deg) translateY(-2px)`;
    });
  });
  stage.addEventListener("pointerleave",()=>{
    cancelAnimationFrame(frame);
    avatar.style.transform="";
  });
})();


// V11 pointer light: adds depth to the existing portrait without pretending it is a rigged 3D face.
(function initAvatarLight(){
  const avatar=document.querySelector(".avatar-core");
  const stage=document.querySelector(".orbital");
  if(!avatar || !stage) return;
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer=window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  if(reduced || !finePointer) return;
  stage.addEventListener("pointermove",event=>{
    const rect=avatar.getBoundingClientRect();
    const x=Math.max(0,Math.min(100,((event.clientX-rect.left)/rect.width)*100));
    const y=Math.max(0,Math.min(100,((event.clientY-rect.top)/rect.height)*100));
    avatar.style.setProperty("--pointer-x",`${x}%`);
    avatar.style.setProperty("--pointer-y",`${y}%`);
  });
  stage.addEventListener("pointerleave",()=>{
    avatar.style.setProperty("--pointer-x","50%");
    avatar.style.setProperty("--pointer-y","42%");
  });
})();
