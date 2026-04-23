import { component, css, html } from 'fudgel';

component(
    'menu-items',
    {
        style: css`
            .top-image {
                max-width: 260px;
                width: 100%;
                padding: 1rem;
                box-sizing: border-box;
            }

            .site-name {
                font-size: 1.5rem;
                font-weight: bold;
                margin: 0.5rem 0;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .links {
                flex-direction: column;
                display: flex;
                gap: 0.5rem;
            }

            .links a {
                color: #ddd;
                text-decoration: none;
            }

            .site-name a {
                color: white;
                text-decoration: none;
            }

            .bottom-wrapper {
                display: flex;
                justify-content: center;
            }

            .bottom-image {
                width: 60%;
                max-width: 140px;
                padding: 1rem;
                box-sizing: border-box;
            }
        `,
        template: html`
            <a href="/"
                ><img
                    class="top-image"
                    src="/Images/metacycle-dark-background.webp"
                    alt="Metacycle"
            /></a>

            <div class="site-name"><a href="/">Metacyclopedia</a></div>

            <p class="links">
                <a *for="link of links" href="{{link.href}}">{{link.text}}</a>
            </p>

            <div class="bottom-wrapper">
                <img
                    class="bottom-image"
                    src="/Images/tron.jpg"
                    alt="Tron Effect"
                />
            </div>
        `,
    },
    class {
        links = [
            { href: '/', text: 'Home' },
            { href: '/accessories/', text: 'Accessories' },
            { href: '/battery/', text: 'Battery' },
            { href: '/battery-activator/', text: 'Battery Activator' },
            { href: '/can-bus/', text: 'CAN Bus' },
            { href: '/charger/', text: 'Charger' },
            { href: '/community/', text: 'Community' },
            {
                href: '/connect-through-usb-port/',
                text: 'Connect through USB Port',
            },
            { href: '/connect-via-bluetooth/', text: 'Connect via Bluetooth' },
            {
                href: '/connect-with-20-pin-cable/',
                text: 'Connect with 20-pin Cable',
            },
            { href: '/controller/', text: 'Controller' },
            { href: '/display-unit/', text: 'Display Unit' },
            { href: '/files/', text: 'Files' },
            { href: '/metahack/', text: 'MetaHack' },
            { href: '/motor/', text: 'Motor' },
            { href: '/parts/', text: 'Parts' },
            { href: '/problems/', text: 'Problems' },
            { href: '/programming/', text: 'Programming' },
            { href: '/programming-cable/', text: 'Programming Cable' },
            { href: '/registration/', text: 'Registration & VIN' },
            { href: '/removing-alarm-system/', text: 'Removing Alarm System' },
            { href: '/serial-protocol/', text: 'Serial Protocol' },
            { href: '/tools/', text: 'Tools' },
            { href: '/tutorials/', text: 'Tutorials' },
            { href: '/windows-software/', text: 'Windows Software' },
        ];
    }
);
