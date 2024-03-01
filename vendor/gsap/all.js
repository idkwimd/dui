import gsap from "./gsap-core.js";
import CSSPlugin from "./CSSPlugin.js";
var gsapWithCSS = gsap.registerPlugin(CSSPlugin) || gsap,
    // to protect from tree shaking
TweenMaxWithCSS = gsapWithCSS.core.Tween;
export { gsapWithCSS as gsap, gsapWithCSS as default, TweenMaxWithCSS as TweenMax, CSSPlugin };
export { TweenLite, TimelineMax, TimelineLite, Power0, Power1, Power2, Power3, Power4, Linear, Quad, Cubic, Quart, Quint, Strong, Elastic, Back, SteppedEase, Bounce, Sine, Expo, Circ, wrap, wrapYoyo, distribute, random, snap, normalize, getUnit, clamp, splitColor, toArray, mapRange, pipe, unitize, interpolate, shuffle, selector } from "./gsap-core.js";
export * from "./custom-ease.js";
export * from "./draggable.js";
export * from "./css-rule-plugin.js";
export * from "./easel-plugin.js";
export * from "./ease-pack.js";
export * from "./flip.js";
export * from "./motion-path-plugin.js";
export * from "./observer.js";
export * from "./pixi-plugin.js";
export * from "./scroll-to-plugin.js";
export * from "./scroll-trigger.js";
export * from "./text-plugin.js"; //BONUS EXPORTS
// export * from "./DrawSVGPlugin.js";
// export * from "./Physics2DPlugin.js";
// export * from "./PhysicsPropsPlugin.js";
// export * from "./ScrambleTextPlugin.js";
// export * from "./CustomBounce.js";
// export * from "./CustomWiggle.js";
// export * from "./GSDevTools.js";
// export * from "./InertiaPlugin.js";
// export * from "./MorphSVGPlugin.js";
// export * from "./MotionPathHelper.js";
// export * from "./ScrollSmoother.js";
// export * from "./SplitText.js";