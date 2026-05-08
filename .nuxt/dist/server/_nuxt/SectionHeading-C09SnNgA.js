import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SectionHeading",
  __ssrInlineRender: true,
  props: {
    label: {},
    title: {},
    copy: {},
    align: {},
    light: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: __props.align === "left" ? "text-left" : "text-center"
      }, _attrs))}>`);
      if (__props.label) {
        _push(`<span class="${ssrRenderClass([__props.light ? "bg-white/10 text-secondary" : "", "section-label"])}">${ssrInterpolate(__props.label)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h2 class="${ssrRenderClass([__props.light ? "text-white" : "", "section-title"])}">${ssrInterpolate(__props.title)}</h2>`);
      if (__props.copy) {
        _push(`<p class="${ssrRenderClass([__props.align === "left" ? "mx-0 max-w-none" : "", "section-copy mt-6"])}">${ssrInterpolate(__props.copy)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SectionHeading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=SectionHeading-C09SnNgA.js.map
