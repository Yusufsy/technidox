import { _ as _sfc_main$1 } from "./AppIcon-CurEwq_f.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "FeatureCard",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    description: {},
    points: {},
    eyebrow: {},
    tone: {}
  },
  setup(__props) {
    const toneMap = {
      lavender: "bg-[#efefff] text-ink",
      amber: "bg-[#fff6e8] text-ink",
      mint: "bg-[#eefbe9] text-ink",
      light: "bg-white text-ink",
      dark: "bg-primary text-white border-primary/10"
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_AppIcon = _sfc_main$1;
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["glass-card h-full p-5 sm:p-6", toneMap[__props.tone ?? "light"]]
      }, _attrs))}><div class="${ssrRenderClass([__props.tone === "dark" ? "bg-white text-primary" : "", "icon-tile"])}">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: __props.icon,
        class: "h-7 w-7"
      }, null, _parent));
      _push(`</div>`);
      if (__props.eyebrow) {
        _push(`<p class="${ssrRenderClass([__props.tone === "dark" ? "text-white/[0.8]" : "text-ink", "mt-5 text-[11px] font-extrabold uppercase tracking-[0.2em]"])}">${ssrInterpolate(__props.eyebrow)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="${ssrRenderClass([__props.tone === "dark" ? "text-white" : "text-ink", "mt-4 text-[1.1rem] font-extrabold leading-tight sm:text-[1.4rem]"])}">${ssrInterpolate(__props.title)}</h3><p class="${ssrRenderClass([__props.tone === "dark" ? "text-white/[0.78]" : "text-body", "mt-3 text-[0.9rem] leading-relaxed sm:text-[0.95rem]"])}">${ssrInterpolate(__props.description)}</p>`);
      if ((_a = __props.points) == null ? void 0 : _a.length) {
        _push(`<ul class="mt-5 space-y-2.5"><!--[-->`);
        ssrRenderList(__props.points, (point) => {
          _push(`<li class="${ssrRenderClass([__props.tone === "dark" ? "text-white" : "text-body", "flex items-start gap-3 text-[0.9rem] font-medium sm:text-[0.95rem]"])}"><span class="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-current text-[11px]"><span class="-mt-0.5">✓</span></span><span>${ssrInterpolate(point)}</span></li>`);
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=FeatureCard-CCx8xoOl.js.map
