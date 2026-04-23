import { component, css, html } from 'fudgel';

component(
    'flyout-menu',
    {
        style: css`
            .menu {
                background: black;
                color: white;
                right: 100%;
                padding: 8px;
                position: fixed;
                top: 0;
                transition-property: left, right;
                transition-duration: 0.5s;
                transition-timing-function: ease-in-out;
                width: 300px;
                max-width: calc(100% - 120px);
                border-right: #333 solid 1px;
                border-bottom: #333 solid 1px;
                box-sizing: border-box;
                interpolate-size: allow-keywords;
            }

            .menu.flyout {
                right: calc(100% - min(calc(100% - 120px), 300px));
            }

            @media screen and (min-width: 1280px) {
                .menu {
                    display: none;
                }
            }

            svg {
                fill: white;
            }

            .toggle {
                position: absolute;
                top: 0;
                left: 100%;
                display: block;
                background: black;
                padding: 8px;
                border-right: #333 solid 1px;
                border-bottom: #333 solid 1px;
            }

            /* scrollbar on the left */
            .scrollable {
                max-height: 100vh;
                overflow-y: auto;
                padding-left: 8px;
                box-sizing: border-box;
                direction: rtl
            }

            .scrollable::-webkit-scrollbar {
                width: 8px;
            }

            .scrollable::-webkit-scrollbar-thumb {
                background: #333;
                border-radius: 4px;
            }

            menu-items {
                direction: ltr;
            }
        `,
        template: html`
            <div #ref="menu" class="unprintable menu">
                <a class="toggle" @click.stop.prevent="toggle()" href="#">
                    <svg
                        viewBox="0 0 100 100"
                        width="40"
                        height="40"
                        style="fill: white"
                    >
                        <rect
                            x="5"
                            y="14"
                            width="90"
                            height="16"
                            rx="10"
                        ></rect>
                        <rect
                            x="5"
                            y="42"
                            width="90"
                            height="16"
                            rx="10"
                        ></rect>
                        <rect
                            x="5"
                            y="70"
                            width="90"
                            height="16"
                            rx="10"
                        ></rect>
                    </svg>
                </a>

                <div class="scrollable">
                    <menu-items></menu-items>
                </div>
            </div>
        `,
    },
    class {
        menu!: HTMLDivElement;

        toggle() {
            this.menu.classList.toggle('flyout');
        }
    }
);
