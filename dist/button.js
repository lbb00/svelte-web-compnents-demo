function a() {
}
function A(t) {
  return t();
}
function B() {
  return /* @__PURE__ */ Object.create(null);
}
function m(t) {
  t.forEach(A);
}
function w(t) {
  return typeof t == "function";
}
function F(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function I(t) {
  return Object.keys(t).length === 0;
}
function y(t, e) {
  t.appendChild(e);
}
function U(t, e, n) {
  const r = W(t);
  if (!r.getElementById(e)) {
    const s = k("style");
    s.id = e, s.textContent = n, X(r, s);
  }
}
function W(t) {
  if (!t)
    return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function X(t, e) {
  return y(t.head || t, e), e.sheet;
}
function S(t, e, n) {
  t.insertBefore(e, n || null);
}
function T(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function k(t) {
  return document.createElement(t);
}
function V(t) {
  return document.createTextNode(t);
}
function Y() {
  return V(" ");
}
function Z(t, e, n, r) {
  return t.addEventListener(e, n, r), () => t.removeEventListener(e, n, r);
}
function q(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function tt(t) {
  return Array.from(t.childNodes);
}
function et(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function nt(t, e, { bubbles: n = !1, cancelable: r = !1 } = {}) {
  const s = document.createEvent("CustomEvent");
  return s.initCustomEvent(t, n, r, e), s;
}
function rt(t) {
  const e = {};
  for (const n of t)
    e[n.name] = n.value;
  return e;
}
let b;
function g(t) {
  b = t;
}
function G() {
  if (!b)
    throw new Error("Function called outside component initialization");
  return b;
}
function ot() {
  const t = G();
  return (e, n, { cancelable: r = !1 } = {}) => {
    const s = t.$$.callbacks[e];
    if (s) {
      const c = nt(e, n, { cancelable: r });
      return s.slice().forEach((u) => {
        u.call(t, c);
      }), !c.defaultPrevented;
    }
    return !0;
  };
}
const _ = [], H = [], v = [], z = [], st = Promise.resolve();
let j = !1;
function it() {
  j || (j = !0, st.then(p));
}
function L(t) {
  v.push(t);
}
const C = /* @__PURE__ */ new Set();
let x = 0;
function p() {
  const t = b;
  do {
    for (; x < _.length; ) {
      const e = _[x];
      x++, g(e), ct(e.$$);
    }
    for (g(null), _.length = 0, x = 0; H.length; )
      H.pop()();
    for (let e = 0; e < v.length; e += 1) {
      const n = v[e];
      C.has(n) || (C.add(n), n());
    }
    v.length = 0;
  } while (_.length);
  for (; z.length; )
    z.pop()();
  j = !1, C.clear(), g(t);
}
function ct(t) {
  if (t.fragment !== null) {
    t.update(), m(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(L);
  }
}
const E = /* @__PURE__ */ new Set();
let h;
function ut() {
  h = {
    r: 0,
    c: [],
    p: h
  };
}
function ft() {
  h.r || m(h.c), h = h.p;
}
function $(t, e) {
  t && t.i && (E.delete(t), t.i(e));
}
function N(t, e, n, r) {
  if (t && t.o) {
    if (E.has(t))
      return;
    E.add(t), h.c.push(() => {
      E.delete(t), r && (n && t.d(1), r());
    }), t.o(e);
  } else
    r && r();
}
function at(t) {
  t && t.c();
}
function J(t, e, n, r) {
  const { fragment: s, after_update: c } = t.$$;
  s && s.m(e, n), r || L(() => {
    const u = t.$$.on_mount.map(A).filter(w);
    t.$$.on_destroy ? t.$$.on_destroy.push(...u) : m(u), t.$$.on_mount = [];
  }), c.forEach(L);
}
function D(t, e) {
  const n = t.$$;
  n.fragment !== null && (m(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function lt(t, e) {
  t.$$.dirty[0] === -1 && (_.push(t), it(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function K(t, e, n, r, s, c, u, d = [-1]) {
  const i = b;
  g(t);
  const o = t.$$ = {
    fragment: null,
    ctx: [],
    props: c,
    update: a,
    not_equal: s,
    bound: B(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (i ? i.$$.context : [])),
    callbacks: B(),
    dirty: d,
    skip_bound: !1,
    root: e.target || i.$$.root
  };
  u && u(o.root);
  let f = !1;
  if (o.ctx = n ? n(t, e.props || {}, (l, M, ...O) => {
    const R = O.length ? O[0] : M;
    return o.ctx && s(o.ctx[l], o.ctx[l] = R) && (!o.skip_bound && o.bound[l] && o.bound[l](R), f && lt(t, l)), M;
  }) : [], o.update(), f = !0, m(o.before_update), o.fragment = r ? r(o.ctx) : !1, e.target) {
    if (e.hydrate) {
      const l = tt(e.target);
      o.fragment && o.fragment.l(l), l.forEach(T);
    } else
      o.fragment && o.fragment.c();
    e.intro && $(t.$$.fragment), J(t, e.target, e.anchor, e.customElement), p();
  }
  g(i);
}
let Q;
typeof HTMLElement == "function" && (Q = class extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { on_mount: t } = this.$$;
    this.$$.on_disconnect = t.map(A).filter(w);
    for (const e in this.$$.slotted)
      this.appendChild(this.$$.slotted[e]);
  }
  attributeChangedCallback(t, e, n) {
    this[t] = n;
  }
  disconnectedCallback() {
    m(this.$$.on_disconnect);
  }
  $destroy() {
    D(this, 1), this.$destroy = a;
  }
  $on(t, e) {
    if (!w(e))
      return a;
    const n = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return n.push(e), () => {
      const r = n.indexOf(e);
      r !== -1 && n.splice(r, 1);
    };
  }
  $set(t) {
    this.$$set && !I(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
});
class dt {
  $destroy() {
    D(this, 1), this.$destroy = a;
  }
  $on(e, n) {
    if (!w(n))
      return a;
    const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return r.push(n), () => {
      const s = r.indexOf(n);
      s !== -1 && r.splice(s, 1);
    };
  }
  $set(e) {
    this.$$set && !I(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function ht(t) {
  U(t, "svelte-ua97dh", ".loading.svelte-ua97dh{display:block;width:25px;height:25px;margin-right:10px;border-radius:50%;border:3px solid #fff;border-color:#fff transparent #fff transparent;animation:svelte-ua97dh-ring 1.2s linear infinite}@keyframes svelte-ua97dh-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}");
}
function mt(t) {
  let e;
  return {
    c() {
      e = k("span"), q(e, "class", "loading svelte-ua97dh");
    },
    m(n, r) {
      S(n, e, r);
    },
    p: a,
    i: a,
    o: a,
    d(n) {
      n && T(e);
    }
  };
}
class _t extends dt {
  constructor(e) {
    super(), K(this, e, null, mt, F, {}, ht);
  }
}
function P(t) {
  let e, n;
  return e = new _t({}), {
    c() {
      at(e.$$.fragment);
    },
    m(r, s) {
      J(e, r, s), n = !0;
    },
    i(r) {
      n || ($(e.$$.fragment, r), n = !0);
    },
    o(r) {
      N(e.$$.fragment, r), n = !1;
    },
    d(r) {
      D(e, r);
    }
  };
}
function gt(t) {
  let e, n, r, s, c, u, d, i = t[1] && P();
  return {
    c() {
      e = k("button"), i && i.c(), n = Y(), r = k("slot"), s = V(t[0]), this.c = a, q(e, "class", "custom-button");
    },
    m(o, f) {
      S(o, e, f), i && i.m(e, null), y(e, n), y(e, r), y(r, s), c = !0, u || (d = Z(e, "click", t[2]), u = !0);
    },
    p(o, [f]) {
      o[1] ? i ? f & 2 && $(i, 1) : (i = P(), i.c(), $(i, 1), i.m(e, n)) : i && (ut(), N(i, 1, 1, () => {
        i = null;
      }), ft()), (!c || f & 1) && et(s, o[0]);
    },
    i(o) {
      c || ($(i), c = !0);
    },
    o(o) {
      N(i), c = !1;
    },
    d(o) {
      o && T(e), i && i.d(), u = !1, d();
    }
  };
}
function pt(t, e, n) {
  const r = G(), s = ot(), c = (o, f) => (r.dispatchEvent && r.dispatchEvent(new CustomEvent(o, { detail: f })), s(o, f));
  let { text: u = "" } = e, { loading: d = !1 } = e;
  function i(o) {
    c("tap");
  }
  return t.$$set = (o) => {
    "text" in o && n(0, u = o.text), "loading" in o && n(1, d = o.loading);
  }, [u, d, i];
}
class $t extends Q {
  constructor(e) {
    super(), this.shadowRoot.innerHTML = "<style>.custom-button{font-size:2rem;background-color:#256eff;box-shadow:0px 15px 27px 2px rgba(37, 110, 255, 0.28);border:none;outline:none;display:flex;align-items:center;justify-content:center;padding:1rem 3rem;border-radius:1rem;color:#fff;cursor:pointer}</style>", K(
      this,
      {
        target: this.shadowRoot,
        props: rt(this.attributes),
        customElement: !0
      },
      pt,
      gt,
      F,
      { text: 0, loading: 1 },
      null
    ), e && (e.target && S(e.target, this, e.anchor), e.props && (this.$set(e.props), p()));
  }
  static get observedAttributes() {
    return ["text", "loading"];
  }
  get text() {
    return this.$$.ctx[0];
  }
  set text(e) {
    this.$$set({ text: e }), p();
  }
  get loading() {
    return this.$$.ctx[1];
  }
  set loading(e) {
    this.$$set({ loading: e }), p();
  }
}
customElements.define("custom-button", $t);
export {
  $t as default
};
