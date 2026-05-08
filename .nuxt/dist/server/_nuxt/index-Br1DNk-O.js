import { a as __nuxt_component_0, e as engineCards, b as analyticsMetrics, c as analyticsDetails, u as useCaseCards, f as communityHighlights, w as workflowSteps } from "../server.mjs";
import { _ as _sfc_main$1 } from "./SectionHeading-C09SnNgA.js";
import { _ as _sfc_main$2 } from "./FeatureCard-CCx8xoOl.js";
import { _ as _sfc_main$3 } from "./AppIcon-CurEwq_f.js";
import { defineComponent, withCtx, createTextVNode, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import { u as useHead } from "./v3-8Mxd8mNf.js";
import "ofetch";
import "#internal/nuxt/paths";
import "/Users/yusuf/Systems/Work/Aortem/node_modules/hookable/dist/index.mjs";
import "/Users/yusuf/Systems/Work/Aortem/node_modules/unctx/dist/index.mjs";
import "/Users/yusuf/Systems/Work/Aortem/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/yusuf/Systems/Work/Aortem/node_modules/radix3/dist/index.mjs";
import "/Users/yusuf/Systems/Work/Aortem/node_modules/defu/dist/defu.mjs";
import "/Users/yusuf/Systems/Work/Aortem/node_modules/ufo/dist/index.mjs";
import "/Users/yusuf/Systems/Work/Aortem/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_SectionHeading = _sfc_main$1;
      const _component_FeatureCard = _sfc_main$2;
      const _component_AppIcon = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="hero-fade overflow-hidden"><div class="site-container relative py-14 sm:py-18 lg:py-24"><div class="pointer-events-none absolute left-[-6%] top-[21%] hidden h-72 w-60 -rotate-6 rounded-[26px] doc-ghost p-6 lg:block"><div class="h-14 w-14 rounded-full bg-slate-100"></div><div class="mt-6 h-3 w-4/5 rounded-full bg-slate-100"></div><div class="mt-4 h-3 w-2/3 rounded-full bg-slate-100"></div><div class="mt-10 space-y-3"><div class="h-3 rounded-full bg-slate-100"></div><div class="h-3 rounded-full bg-slate-100"></div><div class="h-3 w-5/6 rounded-full bg-slate-100"></div></div><div class="mt-8 rounded-2xl bg-primary/10 py-5 text-center font-semibold text-success"> Send </div></div><div class="pointer-events-none absolute bottom-[28%] left-[-1%] hidden h-56 w-44 -rotate-[18deg] rounded-[26px] doc-ghost p-6 opacity-80 lg:block"><div class="space-y-4"><!--[-->`);
      ssrRenderList(5, (n) => {
        _push(`<div class="h-3 rounded-full bg-slate-200"></div>`);
      });
      _push(`<!--]--></div></div><div class="pointer-events-none absolute right-[3%] top-[20%] hidden h-72 w-60 rotate-6 rounded-[26px] doc-ghost p-6 opacity-70 lg:block"><div class="space-y-4 opacity-50"><div class="h-3 w-3/4 rounded-full bg-slate-100"></div><div class="h-3 w-5/6 rounded-full bg-slate-100"></div><div class="h-3 w-2/3 rounded-full bg-slate-100"></div><div class="h-3 rounded-full bg-slate-100"></div><div class="h-3 w-4/5 rounded-full bg-slate-100"></div></div></div><div class="pointer-events-none absolute bottom-[29%] right-[-1%] hidden h-52 w-48 rotate-[-6deg] rounded-[26px] doc-ghost p-6 opacity-85 lg:block"><div class="mt-24 grid grid-cols-3 gap-3 opacity-60"><div class="aspect-square rounded bg-slate-100"></div><div class="aspect-square rounded bg-slate-100"></div><div class="aspect-square rounded bg-slate-100"></div></div></div><div class="mx-auto max-w-[74rem] text-center"><h1 class="mx-auto max-w-[17ch] text-[2.75rem] font-extrabold leading-[0.99] text-[#5e5e66] sm:text-[3.55rem] lg:text-[4.25rem] xl:text-[5rem]"><span class="italic text-primary">Documentation</span> that <span class="text-secondary">builds</span> itself, <span class="text-secondary">improves</span> itself, and proves its <span class="text-secondary">value</span></h1><p class="mx-auto mt-6 max-w-5xl text-base font-semibold leading-relaxed text-[#676973] sm:text-lg lg:text-[1.55rem]"> AI-native platform that generates documentation from code, scores quality in real time, routes low confidence content to expert review, and delivers measurable ROI for enterprise teams. </p><div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "cta-button min-w-[15rem] px-7 py-3.5 text-base"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book a Demo `);
          } else {
            return [
              createTextVNode(" Book a Demo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "ghost-button min-w-[15rem] px-7 py-3.5 text-base"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Join Enterprise Waitlist `);
          } else {
            return [
              createTextVNode(" Join Enterprise Waitlist ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-semibold text-primary sm:text-base lg:text-lg"><div class="flex items-center gap-3"><span class="text-success">✓</span> AI-generated docs in minutes</div><div class="flex items-center gap-3"><span class="text-success">✓</span> Confidence scoring built in</div><div class="flex items-center gap-3"><span class="text-success">✓</span> Enterprise-grade compliance</div></div></div></div></section><section class="bg-white py-10 sm:py-12"><div class="site-container text-center"><p class="mx-auto max-w-[18ch] text-[32px] font-semibold leading-[1.2] text-[#4f5058] sm:max-w-none"> Trusted by developer teams, open source communities, and enterprise orgs </p></div></section><section class="site-container py-20 sm:py-24">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: "AI-native documentation engine",
        title: "AI-Native Documentation Engine",
        copy: "Three revolutionary AI engines working together to transform how teams create, validate, and scale technical documentation."
      }, null, _parent));
      _push(`<div class="mt-14 grid gap-8 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(engineCards), (card) => {
        _push(ssrRenderComponent(_component_FeatureCard, {
          key: card.title,
          icon: card.icon,
          title: card.title,
          description: card.description,
          points: card.points,
          tone: card.tone
        }, null, _parent));
      });
      _push(`<!--]--></div></section><section class="site-container py-12 sm:py-16">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: "ROI & analytics",
        title: "Enterprise-Grade ROI And Analytics",
        copy: "The first documentation platform with measurable business impact. Track time saved, productivity gains, and documentation health in real time."
      }, null, _parent));
      _push(`<div class="dark-panel pricing-glow mt-14 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12"><div class="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-6"><div><h3 class="text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">Executive ROI Dashboard</h3><p class="mt-3 text-base text-white/[0.65] sm:text-lg">Real-time documentation impact metrics</p></div><span class="hidden rounded-2xl bg-success/[0.15] px-4 py-2.5 text-base font-extrabold text-[#73ff4b] lg:inline-flex"> Live Data </span></div><div class="grid gap-6 xl:grid-cols-4"><!--[-->`);
      ssrRenderList(unref(analyticsMetrics), (metric) => {
        _push(`<article class="metric-card"><div class="flex items-center gap-3 text-white/60">`);
        _push(ssrRenderComponent(_component_AppIcon, {
          name: metric.icon,
          class: ["h-7 w-7", metric.accent === "secondary" ? "text-secondary" : metric.accent === "success" ? "text-success" : "text-primary"]
        }, null, _parent));
        _push(`<span class="text-lg font-medium sm:text-xl">${ssrInterpolate(metric.label)}</span></div><p class="mt-5 text-3xl font-extrabold text-white sm:text-4xl">${ssrInterpolate(metric.value)}</p><p class="mt-3 text-lg font-semibold text-[#73ff4b] sm:text-xl">↑ ${ssrInterpolate(metric.change)}</p></article>`);
      });
      _push(`<!--]--></div><div class="mt-6 grid gap-6 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(analyticsDetails), (detail) => {
        _push(`<article class="metric-card"><div class="flex items-center justify-between gap-4"><div><p class="text-lg font-medium text-white/[0.65] sm:text-xl">${ssrInterpolate(detail.label)}</p><p class="mt-4 text-3xl font-extrabold text-white sm:text-4xl">${ssrInterpolate(detail.value)}</p><p class="mt-2 text-sm text-[#73ff4b] sm:text-base">${ssrInterpolate(detail.subcopy)}</p></div></div><div class="mt-8 h-4 rounded-full bg-white/10"><div class="h-4 rounded-full bg-gradient-to-r from-success via-primary to-primary" style="${ssrRenderStyle({ width: `${detail.progress}%` })}"></div></div></article>`);
      });
      _push(`<!--]--></div></div></section><section class="site-container py-20 sm:py-24">`);
      _push(ssrRenderComponent(_component_SectionHeading, { title: "Plans Built For Every Stage Of Growth" }, null, _parent));
      _push(`<div class="mt-12 flex flex-col items-center text-center"><div class="price-badge-hanger price-badge-tag mx-auto flex h-[230px] w-[230px] items-center justify-center bg-secondary px-5 text-center text-ink shadow-soft sm:h-[250px] sm:w-[250px]"><span aria-hidden="true" class="price-badge-eyelet"></span><div><p class="text-[1.05rem] font-medium text-[#575862] sm:text-[1.1rem]">Prices starts at</p><div class="mt-3 flex items-end justify-center gap-1"><span class="mb-2 text-[2rem] font-bold leading-none sm:text-[2.3rem]">$</span><span class="text-[40px] font-extrabold leading-none tracking-[-0.05em]">499</span><span class="mb-1 text-[18px] font-medium leading-none">/month</span></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "cta-button mt-10 min-w-[260px] px-8 py-4 text-base sm:min-w-[275px] sm:text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Subscription Details `);
          } else {
            return [
              createTextVNode(" View Subscription Details ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="site-container py-20 sm:py-24">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: "Use cases",
        title: "Built For Every Team That Ships Code.",
        copy: "Whether you’re a solo OSS maintainer or a 10,000-person enterprise, TechniDox adapts to how your team creates and maintains documentation."
      }, null, _parent));
      _push(`<div class="mt-14 grid gap-8 xl:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(useCaseCards), (card) => {
        _push(ssrRenderComponent(_component_FeatureCard, {
          key: card.title,
          icon: card.icon,
          title: card.title,
          description: card.description,
          points: card.points,
          eyebrow: card.eyebrow,
          tone: card.tone
        }, null, _parent));
      });
      _push(`<!--]--></div></section><section class="site-container py-20 sm:py-24">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        label: "AI-native documentation engine",
        title: "Community-Driven Improvement At Scale",
        copy: "Democratize documentation contributions with gamified workflows, micro-tasks, mentorship matching, and peer validation systems that keep contributors engaged long-term."
      }, null, _parent));
      _push(`<div class="mt-14 grid gap-8 xl:grid-cols-[1.1fr,1fr]"><div class="space-y-6"><!--[-->`);
      ssrRenderList(unref(communityHighlights), (highlight) => {
        _push(`<article class="flex gap-5 rounded-[28px] border border-primary/[0.15] bg-white p-6 shadow-soft"><div class="icon-tile shrink-0">`);
        _push(ssrRenderComponent(_component_AppIcon, {
          name: highlight.icon,
          class: "h-8 w-8"
        }, null, _parent));
        _push(`</div><div><h3 class="text-2xl font-extrabold text-ink sm:text-[1.7rem]">${ssrInterpolate(highlight.title)}</h3><p class="mt-3 text-base leading-relaxed text-body">${ssrInterpolate(highlight.description)}</p></div></article>`);
      });
      _push(`<!--]--></div><div class="glass-card p-6 sm:p-8"><!--[-->`);
      ssrRenderList(unref(workflowSteps), (step) => {
        _push(`<div class="mb-4 rounded-[24px] border border-primary/[0.15] bg-white px-5 py-6 shadow-sm last:mb-0"><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-5"><span class="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl font-extrabold text-primary sm:h-16 sm:w-16 sm:text-3xl">${ssrInterpolate(step.step)}</span><div><h3 class="text-2xl font-extrabold text-ink sm:text-[1.7rem]">${ssrInterpolate(step.title)}</h3><p class="mt-2 text-base text-body">${ssrInterpolate(step.detail)}</p></div></div>`);
        if (step.badge) {
          _push(`<span class="rounded-xl bg-secondary/[0.15] px-4 py-2 text-base font-extrabold text-secondary">${ssrInterpolate(step.badge)}</span>`);
        } else {
          _push(`<span class="text-3xl text-success">✓</span>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="site-container pb-6 pt-6 sm:pb-10 sm:pt-8"><section class="relative overflow-hidden rounded-[36px] bg-primary px-6 py-14 text-center text-white shadow-panel sm:px-10 lg:px-16 lg:py-20"><div class="absolute inset-x-0 top-0 h-16 bg-black"></div><div class="pointer-events-none absolute right-8 top-0 h-52 w-52 rounded-full border-[44px] border-white/[0.16]"></div><div class="relative mx-auto max-w-5xl"><span class="section-label bg-white/10 text-white">Ready to launch</span><h2 class="text-[2rem] font-extrabold leading-tight text-white sm:text-[2.4rem] lg:text-[3rem]"> Scale your documentation with confidence. </h2><p class="mx-auto mt-6 max-w-4xl text-base font-semibold leading-relaxed text-white/85 sm:text-lg"> Join engineering teams that have eliminated documentation debt, onboarded developers faster, and built a healthier contributor community with measurable ROI. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "mt-8 inline-flex rounded-2xl bg-white px-8 py-3.5 text-base font-extrabold text-primary transition hover:-translate-y-0.5"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Book a Demo Today `);
          } else {
            return [
              createTextVNode(" Book a Demo Today ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Br1DNk-O.js.map
