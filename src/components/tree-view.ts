import { FASTTreeView, treeViewTemplate } from '@microsoft/fast-foundation';
import { css } from '@microsoft/fast-element';

const treeItemStyles = css`
:host{
    --body-font: aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif;
    --base-height-multiplier: 10;
    --base-horizontal-spacing-multiplier: 3;
    --base-layer-luminance: 1;
    --control-corner-radius: 4;
    --density: 0;
    --design-unit: 4;
    --direction: ltr;
    --disabled-opacity: 0.3;
    --stroke-width: 1;
    --focus-stroke-width: 2;
    --type-ramp-base-font-size: 14px;
    --type-ramp-base-line-height: 20px;
    --type-ramp-minus-1-font-size: 12px;
    --type-ramp-minus-1-line-height: 16px;
    --type-ramp-minus-2-font-size: 10px;
    --type-ramp-minus-2-line-height: 16px;
    --type-ramp-plus-1-font-size: 16px;
    --type-ramp-plus-1-line-height: 24px;
    --type-ramp-plus-2-font-size: 20px;
    --type-ramp-plus-2-line-height: 28px;
    --type-ramp-plus-3-font-size: 28px;
    --type-ramp-plus-3-line-height: 36px;
    --type-ramp-plus-4-font-size: 34px;
    --type-ramp-plus-4-line-height: 44px;
    --type-ramp-plus-5-font-size: 46px;
    --type-ramp-plus-5-line-height: 56px;
    --type-ramp-plus-6-font-size: 60px;
    --type-ramp-plus-6-line-height: 72px;
    --neutral-color: #808080;
    --accent-color: #da1a5f;
    --neutral-layer-card-container: #f7f7f7;
    --neutral-layer-floating: #ffffff;
    --neutral-layer-1: #ffffff;
    --neutral-layer-2: #e5e5e5;
    --neutral-layer-3: #dddddd;
    --neutral-layer-4: #d6d6d6;
    --fill-color: #ffffff;
    --accent-fill-rest: #dc2969;
    --accent-fill-hover: #da1a5f;
    --accent-fill-active: #df3c77;
    --accent-fill-focus: #dc2969;
    --foreground-on-accent-rest: #ffffff;
    --foreground-on-accent-hover: #ffffff;
    --foreground-on-accent-active: #000000;
    --foreground-on-accent-focus: #ffffff;
    --foreground-on-accent-rest-large: #000000;
    --foreground-on-accent-hover-large: #000000;
    --foreground-on-accent-active-large: #000000;
    --foreground-on-accent-focus-large: #000000;
    --accent-foreground-rest: #da1a5f;
    --accent-foreground-hover: #b3154e;
    --accent-foreground-active: #dc2969;
    --accent-foreground-focus: #da1a5f;
    --neutral-fill-rest: #ededed;
    --neutral-fill-hover: #e5e5e5;
    --neutral-fill-active: #f2f2f2;
    --neutral-fill-focus: #ffffff;
    --neutral-fill-input-rest: #ffffff;
    --neutral-fill-input-hover: #ffffff;
    --neutral-fill-input-active: #ffffff;
    --neutral-fill-input-focus: #ffffff;
    --neutral-fill-stealth-rest: #ffffff;
    --neutral-fill-stealth-hover: #f2f2f2;
    --neutral-fill-stealth-active: #f7f7f7;
    --neutral-fill-stealth-focus: #ffffff;
    --neutral-fill-strong-rest: #767676;
    --neutral-fill-strong-hover: #616161;
    --neutral-fill-strong-active: #838383;
    --neutral-fill-strong-focus: #767676;
    --neutral-fill-layer-rest: #f7f7f7;
    --focus-stroke-outer: #888888;
    --focus-stroke-inner: #ffffff;
    --neutral-foreground-hint: #767676;
    --neutral-foreground-rest: #2b2b2b;
    --neutral-stroke-rest: #bebebe;
    --neutral-stroke-hover: #979797;
    --neutral-stroke-active: #d6d6d6;
    --neutral-stroke-focus: #bebebe;
    --neutral-stroke-divider-rest: #eaeaea;
    --clear-button-hover: #f2f2f2;
    --clear-button-active: #ededed;
    --tree-item-expand-collapse-hover: #e5e5e5;
    --tree-item-expand-collapse-selected-hover: #e0e0e0;
}
    :host([hidden]) {
        display: none;
    }
    :host {
        flex-direction: column;
        align-items: stretch;
        display: flex;
        min-width: fit-content;
        font-size: 0;
    }

    :host:focus-visible {
        outline: none;
    }
`;

export default FASTTreeView.define({
  name: "fast-tree-view",
  styles: treeItemStyles,
  template: treeViewTemplate(),
});
