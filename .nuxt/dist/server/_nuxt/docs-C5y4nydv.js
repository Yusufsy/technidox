import { _ as _sfc_main$2 } from "./SectionHeading-C09SnNgA.js";
import { _ as _sfc_main$3 } from "./FeatureCard-CCx8xoOl.js";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { d as docsCategories, q as quickStartSlides } from "../server.mjs";
import { u as useHead } from "./v3-8Mxd8mNf.js";
import "./AppIcon-CurEwq_f.js";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "QuickStartCarousel",
  __ssrInlineRender: true,
  props: {
    slides: {}
  },
  setup(__props) {
    const active = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "dark-panel relative overflow-hidden px-6 py-10 sm:px-10 lg:px-14 lg:py-16" }, _attrs))}><div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(111,102,215,0.35),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.08),transparent_28%)]"></div><div class="absolute inset-y-0 left-0 w-1/3 bg-[radial-gradient(circle_at_15%_35%,rgba(255,255,255,0.18),transparent_60%)] opacity-60"></div><div class="relative"><h3 class="text-center text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl"> Quick Start Guide </h3><div class="mt-8 flex items-center justify-center gap-3"><!--[-->`);
      ssrRenderList(__props.slides, (slide, index) => {
        _push(`<button type="button" class="${ssrRenderClass([unref(active) === index ? "w-16 border-primary bg-primary/25" : "w-4 border-white/50 bg-white/10", "h-4 rounded-full border transition"])}"${ssrRenderAttr("aria-label", `View ${slide.title}`)}></button>`);
      });
      _push(`<!--]--></div><div class="mt-10 grid gap-6 lg:grid-cols-[72px,1fr,72px] lg:items-center"><button type="button" class="mx-auto hidden h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/[0.15] lg:inline-flex" aria-label="Previous step"> ‹ </button><div class="rounded-[30px] border border-white/20 bg-white/8 p-8 backdrop-blur-sm"><div class="flex items-center justify-between gap-4"><h4 class="text-3xl font-extrabold text-white sm:text-5xl">${ssrInterpolate(__props.slides[unref(active)].title)}</h4><span class="text-2xl font-extrabold text-secondary">${ssrInterpolate(__props.slides[unref(active)].step)}</span></div><ol class="mt-8 space-y-5 text-xl leading-relaxed text-white/[0.88] sm:text-2xl"><!--[-->`);
      ssrRenderList(__props.slides[unref(active)].bullets, (bullet, index) => {
        _push(`<li class="flex gap-4"><span class="font-bold text-white">${ssrInterpolate(index + 1)}.</span><span>${ssrInterpolate(bullet)}</span></li>`);
      });
      _push(`<!--]--></ol></div><button type="button" class="mx-auto hidden h-16 w-16 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition hover:bg-white/[0.15] lg:inline-flex" aria-label="Next step"> › </button></div><div class="mt-6 flex justify-center gap-4 lg:hidden"><button type="button" class="ghost-button border-white/30 bg-white/10 text-white"> Previous </button><button type="button" class="ghost-button border-white/30 bg-white/10 text-white"> Next </button></div></div></section>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/QuickStartCarousel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "docs",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Docs"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeading = _sfc_main$2;
      const _component_FeatureCard = _sfc_main$3;
      const _component_QuickStartCarousel = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="bg-surface py-16 sm:py-20 lg:py-24"><div class="site-container">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        title: "Documentation & Guides",
        copy: "Everything you need to know about building, managing, and scaling your knowledge base with TechniDox."
      }, null, _parent));
      _push(`<div class="mt-14 grid gap-8 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(docsCategories).slice(0, 3), (category) => {
        _push(ssrRenderComponent(_component_FeatureCard, {
          key: category.title,
          icon: category.icon,
          title: category.title,
          description: category.description,
          points: category.points,
          tone: category.dark ? "dark" : "light"
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="mt-8 grid gap-8 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(docsCategories).slice(3), (category) => {
        _push(ssrRenderComponent(_component_FeatureCard, {
          key: category.title,
          icon: category.icon,
          title: category.title,
          description: category.description,
          points: category.points,
          tone: category.dark ? "dark" : "light"
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="site-container py-20 sm:py-24">`);
      _push(ssrRenderComponent(_component_QuickStartCarousel, { slides: unref(quickStartSlides) }, null, _parent));
      _push(`</section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/docs.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=docs-C5y4nydv.js.map
