import{c as o,q as c,t as g,v as u,w as i,x as n,y as l,z as d,B as f,C as m}from"./index-Rf2APXQs.js";import{p as y}from"./requestMethods-BzQyz_Fg.js";/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=o("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.390.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E=o("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),p=async(e,t)=>{var a,s;e(c()),e(g());try{const r=await y.post("/auth/login",t);e(u(r.data)),e(i({userId:r.data.id})),e(n({userId:r.data.id}))}catch(r){e(l(((s=(a=r.response)==null?void 0:a.data)==null?void 0:s.error)||"Something went wrong. Please try again."))}},I=async(e,t)=>{var a,s;e(d());try{const r=await y.post("/auth/register",t);e(f(r.data)),e(i({userId:r.data.id})),e(n({userId:r.data.id}))}catch(r){e(m(((s=(a=r.response)==null?void 0:a.data)==null?void 0:s.error)||"Registration failed. Please try again."))}};export{x as E,E as a,p as l,I as r};
