import { css, html } from '@microsoft/fast-element';
import { FASTTreeItem, treeItemTemplate} from '@microsoft/fast-foundation';

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
        display: block;
    }
    :host {
        contain: content;
        position: relative;
        outline: none;
        color: var(--neutral-foreground-rest);
        background: var(--neutral-fill-stealth-rest);
        cursor: pointer;
        font-family: var(--body-font);
        --expand-collapse-button-size: calc(
            (var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px
        );
        --tree-item-nested-width: 0;
    }

    :host(:focus) > .positioning-region {
        outline: none;
    }

    :host(:focus) .content-region {
        outline: none;
    }

    :host(:focus-visible) .positioning-region {
        border: var(--focus-stroke-outer) calc(var(--stroke-width) * 1px) solid;
        border-radius: calc(var(--control-corner-radius) * 1px);
        color: var(--neutral-foreground-rest);
    }

    .positioning-region {
        display: flex;
        position: relative;
        box-sizing: border-box;
        border: transparent calc(var(--stroke-width) * 1px) solid;
        height: calc(
            ((var(--base-height-multiplier) + var(--density)) * var(--design-unit) + 1) *
                1px
        );
    }

    .positioning-region::before {
        content: "";
        display: block;
        width: var(--tree-item-nested-width);
        flex-shrink: 0;
    }

    .positioning-region:hover {
        background: var(--neutral-fill-stealth-hover);
    }

    .positioning-region:active {
        background: var(--neutral-fill-stealth-active);
    }

    .content-region {
        display: inline-flex;
        align-items: center;
        white-space: nowrap;
        width: 100%;
        height: calc(
            (var(--base-height-multiplier) + var(--density)) * var(--design-unit) * 1px
        );
        margin-inline-start: calc(var(--design-unit) * 2px + 8px);
        font-size: var(--type-ramp-base-font-size);
        line-height: var(--type-ramp-base-line-height);
        font-weight: 400;
    }

    .items {
        display: none;
        font-size: calc(1em + (var(--design-unit) + 16) * 1px);
    }

    .expand-collapse-button {
        background: none;
        border: none;
        outline: none;
        width: calc(
            (
                    ((var(--base-height-multiplier) / 2) * var(--design-unit)) +
                        ((var(--design-unit) * var(--density)) / 2) +
                        (var(--design-unit) * 2)
                ) * 1px
        );
        height: calc(
            (
                    ((var(--base-height-multiplier) / 2) * var(--design-unit)) +
                        ((var(--design-unit) * var(--density)) / 2) +
                        (var(--design-unit) * 2)
                ) * 1px
        );
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        margin-left: 6px;
        margin-right: 6px;
    }

    .expand-collapse-glyph {
        width: 16px;
        height: 16px;
        transition: transform 0.1s linear;

        pointer-events: none;
        fill: currentcolor;
    }

    ::slotted([slot="start"]),
    ::slotted([slot="end"]) {
        display: flex;
    }

    ::slotted([slot="start"]) {
        margin-inline-end: 11px;
    }

    ::slotted([slot="end"]) {
        margin-inline-start: 11px;
    }

    :host([aria-expanded="true"]) > .items {
        display: block;
    }

    :host([disabled]) .content-region {
        opacity: var(--disabled-opacity);
        cursor: not-allowed;
    }

    :host([nested]) .content-region {
        position: relative;
        margin-inline-start: var(--expand-collapse-button-size);
    }

    :host([nested]) .expand-collapse-button {
        position: absolute;
        right: 100%;
    }

    :host([nested]) .expand-collapse-button:hover {
        background: var(--tree-item-expand-collapse-hover);
    }

    :host([selected]) .positioning-region {
        background: var(--neutral-fill-rest);
    }

    :host([selected]) .expand-collapse-button:hover {
        background: var(--tree-item-expand-collapse-selected-hover);
    }

    :host([selected])::after {
        background: var(--accent-foreground-rest);
        border-radius: calc(var(--control-corner-radius) * 1px);
        content: "";
        display: block;
        position: absolute;
        top: calc(((var(--base-height-multiplier)) * var(--design-unit) / 4) * 1px);
        width: 3px;
        height: calc(((var(--base-height-multiplier)) * var(--design-unit) / 2) * 1px);
    }

    ::slotted(fast-tree-item) {
        --tree-item-nested-width: 1em;
        --expand-collapse-button-nested-width: calc(
            (var(--base-height-multiplier) + var(--density)) * var(--design-unit) * -1px
        );
    }

    .expand-collapse-glyph {
        transform: rotate(0deg);
    }
    :host([nested]) .expand-collapse-button {
        right: 100%;
    }
    :host([selected])::after {
        left: calc(var(--focus-stroke-width) * 1px);
    }
    :host([aria-expanded="true"]) > .positioning-region .expand-collapse-glyph {
        transform: rotate(45deg);
    }`;

export default FASTTreeItem.define({
  name: "fast-tree-item",
  template: treeItemTemplate({
      expandCollapseGlyph: /* html */ html`
          <svg
              viewBox="0 0 16 16"
              xmlns="http://www.w3.org/2000/svg"
              class="expand-collapse-glyph"
          >
              <path
                  d="M5 12.3a1 1 0 0 0 1.6.8L11 8.8a1.5 1.5 0 0 0 0-2.3L6.6 2.2A1 1 0 0 0 5 3v9.3Z"
              />
          </svg>
      `,
  }),
  styles: treeItemStyles
});


