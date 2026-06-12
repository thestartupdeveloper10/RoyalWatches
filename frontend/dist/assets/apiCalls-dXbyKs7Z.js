import{c as o}from"./createLucideIcon-DDe2CseG.js";import{l as i,m as c,n as y,o as g,p as l,q as p,t as u}from"./index-CJOUeIIP.js";import{p as n}from"./requestMethods-BzQyz_Fg.js";/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=o("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=o("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),E=async(e,s)=>{var a,t;e(i()),e(c());try{const r=await n.post("/auth/login",s);e(y(r.data))}catch(r){e(g(((t=(a=r.response)==null?void 0:a.data)==null?void 0:t.error)||"Something went wrong. Please try again."))}},h=async(e,s)=>{var a,t;e(l());try{const r=await n.post("/auth/register",s);e(p(r.data))}catch(r){e(u(((t=(a=r.response)==null?void 0:a.data)==null?void 0:t.error)||"Registration failed. Please try again."))}};export{d as E,w as a,E as l,h as r};
