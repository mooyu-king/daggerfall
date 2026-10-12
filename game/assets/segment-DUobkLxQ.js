function M(o,c,e,s,m,r){const t=m-e,n=r-s,h=t*t+n*n,i=h>0?Math.max(0,Math.min(1,((o-e)*t+(c-s)*n)/h)):0;return Math.hypot(o-(e+t*i),c-(s+n*i))}export{M as s};
