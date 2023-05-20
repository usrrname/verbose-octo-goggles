import { FASTTreeView, treeViewTemplate } from '@microsoft/fast-foundation';
import { css } from '@microsoft/fast-element';

const treeItemStyles = css`
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
