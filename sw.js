// Service worker: guarda o app no aparelho para abrir e funcionar sem internet.
// Ao publicar uma versão nova, troque o número da VERSION.
const VERSION='guapos-v8';
const CORE=['./','./index.html','./firebase-config.js','./manifest.webmanifest','./icons/icon-192.png','./icons/icon-512.png','./icons/apple-touch-icon.png'];
// Bibliotecas e fontes que podem ser guardadas (o login e o banco do Firebase nunca passam pelo cache)
const CDN=['fonts.googleapis.com','fonts.gstatic.com','cdn.jsdelivr.net','www.gstatic.com'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(VERSION).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()));
});

self.addEventListener('activate',e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(k=>k!==VERSION).map(k=>caches.delete(k))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener('fetch',e=>{
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  // Arquivos do próprio app: rede primeiro (pega atualizações e a configuração nova), cópia guardada sem internet
  if(url.origin===self.location.origin){
    e.respondWith(
      fetch(req)
        .then(res=>{
          if(res.ok){const copy=res.clone();caches.open(VERSION).then(c=>c.put(req.mode==='navigate'?'./index.html':req,copy))}
          return res;
        })
        .catch(()=>caches.match(req.mode==='navigate'?'./index.html':req,{ignoreSearch:true}))
    );
    return;
  }
  if(!CDN.includes(url.hostname))return;
  // Fontes, Chart.js e Firebase: responde com a cópia guardada e atualiza em segundo plano
  e.respondWith(
    caches.match(req).then(hit=>{
      const net=fetch(req)
        .then(res=>{
          if(res.ok||res.type==='opaque'){const copy=res.clone();caches.open(VERSION).then(c=>c.put(req,copy))}
          return res;
        })
        .catch(()=>hit);
      return hit||net;
    })
  );
});
