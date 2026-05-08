globalThis.__timing__.logStart('Load chunks/build/about-DEsp2ncr');import { _ as _sfc_main$1 } from './SectionHeading-C09SnNgA.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/vue/server-renderer/index.mjs';
import { o as overviewBullets, w as workflowSteps } from './server.mjs';
import { u as useHead } from './v3-8Mxd8mNf.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/h3/dist/index.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/ufo/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/destr/dist/index.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/hookable/dist/index.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/ohash/dist/index.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/klona/dist/index.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/defu/dist/defu.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/scule/dist/index.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/unctx/dist/index.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/pathe/dist/index.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/unhead/dist/server.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/devalue/index.js';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/yusuf/Systems/Work/Aortem/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About Us"
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SectionHeading = _sfc_main$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "site-container py-16 sm:py-20 lg:py-24" }, _attrs))}><div class="grid gap-10 xl:grid-cols-[0.95fr,1.15fr] xl:items-start"><div class="pt-6">`);
      _push(ssrRenderComponent(_component_SectionHeading, {
        align: "left",
        title: "TechniDox Overview",
        copy: "TechniDox is an enterprise-grade knowledge infrastructure platform designed to transform how teams create, manage, and scale their documentation."
      }, null, _parent));
      _push(`<p class="mt-8 max-w-2xl text-base leading-relaxed text-body sm:text-lg"> By combining AI-powered insights with collaborative workflows, TechniDox ensures your organizational knowledge is always accurate, accessible, and up to date. </p><ul class="mt-10 space-y-4"><!--[-->`);
      ssrRenderList(unref(overviewBullets), (bullet) => {
        _push(`<li class="flex items-center gap-4 text-lg font-medium text-body"><span class="inline-flex h-10 w-10 items-center justify-center rounded-full border-4 border-primary text-primary">\u2713</span><span>${ssrInterpolate(bullet)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div class="glass-card p-6 sm:p-8"><!--[-->`);
      ssrRenderList(unref(workflowSteps), (step) => {
        _push(`<div class="mb-4 rounded-[24px] border border-primary/[0.15] bg-white px-5 py-6 shadow-sm last:mb-0"><div class="flex items-center justify-between gap-4"><div class="flex items-center gap-5"><span class="inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-2xl font-extrabold text-primary sm:h-16 sm:w-16 sm:text-3xl">${ssrInterpolate(step.step)}</span><div><h3 class="text-2xl font-extrabold text-ink sm:text-[1.7rem]">${ssrInterpolate(step.title)}</h3><p class="mt-2 text-base text-body">${ssrInterpolate(step.detail)}</p></div></div>`);
        if (step.badge) {
          _push(`<span class="rounded-xl bg-secondary/[0.15] px-4 py-2 text-base font-extrabold text-secondary">${ssrInterpolate(step.badge)}</span>`);
        } else {
          _push(`<span class="text-3xl text-success">\u2713</span>`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };;globalThis.__timing__.logEnd('Load chunks/build/about-DEsp2ncr');
//# sourceMappingURL=about-DEsp2ncr.mjs.map
