import { _ as _sfc_main$3 } from "./SectionHeading-C09SnNgA.js";
import { _ as _sfc_main$2 } from "./AppIcon-CurEwq_f.js";
import { defineComponent, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { p as pricingPlans } from "../server.mjs";
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PricingCard",
  __ssrInlineRender: true,
  props: {
    icon: {},
    name: {},
    price: {},
    suffix: {},
    points: {},
    cta: {},
    featured: { type: Boolean },
    badge: {}
  },
  setup(__props) {
    const props = __props;
    const hasNumericPrice = computed(() => props.price.startsWith("$"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppIcon = _sfc_main$2;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["relative rounded-[32px] border border-white/30 bg-[#28244f]/88 p-5 text-white shadow-panel backdrop-blur-sm sm:p-6", __props.featured ? "bg-[#3b3487]/92 ring-2 ring-white/10" : ""]
      }, _attrs))}><div class="mb-6 flex items-start justify-between gap-4"><div class="icon-tile h-12 w-12 rounded-2xl bg-white/[0.04] text-success">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: __props.icon,
        class: "h-6 w-6"
      }, null, _parent));
      _push(`</div>`);
      if (__props.badge) {
        _push(`<span class="rounded-full bg-secondary/20 px-3.5 py-2 text-[14px] font-extrabold text-secondary">${ssrInterpolate(__props.badge)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><h3 class="text-[1.45rem] font-extrabold text-white sm:text-[1.75rem]">${ssrInterpolate(__props.name)}</h3>`);
      if (unref(hasNumericPrice)) {
        _push(`<div class="mt-5 flex items-end gap-1.5"><span class="${ssrRenderClass([__props.featured ? "text-secondary" : "text-white", "text-[1.05rem] font-bold"])}">$</span><span class="${ssrRenderClass([__props.featured ? "text-secondary" : "text-white", "text-[2.4rem] font-extrabold leading-none sm:text-[3rem]"])}">${ssrInterpolate(__props.price.replace("$", ""))}</span><span class="${ssrRenderClass([__props.featured ? "text-secondary" : "text-white/[0.85]", "pb-0.5 text-[1rem] font-medium"])}">${ssrInterpolate(__props.suffix)}</span></div>`);
      } else {
        _push(`<div class="mt-6"><span class="text-[2.4rem] font-extrabold leading-none text-white sm:text-[3rem]">${ssrInterpolate(__props.price)}</span></div>`);
      }
      _push(`<div class="my-6 h-px bg-white/30"></div><ul class="space-y-3 text-[0.95rem] text-white/[0.85] sm:text-[1rem]"><!--[-->`);
      ssrRenderList(__props.points, (point) => {
        _push(`<li class="flex gap-4"><span class="mt-1 text-success">✓</span><span>${ssrInterpolate(point)}</span></li>`);
      });
      _push(`<!--]--></ul><button type="button" class="${ssrRenderClass([__props.featured ? "bg-primary text-white" : "bg-transparent text-white", "mt-7 w-full rounded-2xl border border-white/50 px-6 py-3 text-[15px] font-extrabold transition hover:-translate-y-0.5 sm:text-[16px]"])}">${ssrInterpolate(__props.cta)}</button></article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const pricingBackground = "" + __buildAssetsURL("pricing-section1-background.BfvghLI9.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Pricing"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeading = _sfc_main$3;
      const _component_PricingCard = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative isolate overflow-hidden bg-[#14122d] py-16 text-white sm:py-20 lg:py-24" }, _attrs))}><div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95" style="${ssrRenderStyle({ backgroundImage: `url(${unref(pricingBackground)})` })}"></div><div class="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(88,80,183,0.18),transparent_38%),linear-gradient(180deg,rgba(16,15,37,0.18),rgba(16,15,37,0.36))]"></div><div class="site-container relative"><div class="mx-auto max-w-5xl">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        light: "",
        title: "Plans Built For Every Stage Of Growth"
      }, null, _parent));
      _push(`</div><div class="mt-16 grid gap-8 xl:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(pricingPlans), (plan) => {
        _push(ssrRenderComponent(_component_PricingCard, {
          key: plan.name,
          icon: plan.icon,
          name: plan.name,
          price: plan.price,
          suffix: plan.suffix,
          points: plan.points,
          cta: plan.cta,
          featured: plan.featured,
          badge: plan.badge
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=pricing-DXIYosuk.js.map
