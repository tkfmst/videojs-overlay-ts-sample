import './css.ts';
import 'videojs-overlay';

// import 'videojs-overlay/dist/videojs-overlay.css';
// import 'videojs-overlay/dist/videojs-overlay.min.js';
import videojs from 'video.js';

import { img } from './img';

const tipHref = 'https://example.com/';

function overlayTip(i: number): unknown {
    return {
        class: `customOverlayNend${++i}`,
        start: i * 2 + 1,
        end: 10 + i * 3,
        content:
            '<a href="' +
            tipHref +
            '"><img class="tip" src="' +
            img.tipIcon +
            '"></img></a>',
    };
}

const line: unknown = {
    class: 'customOverlay',
    start: 0,
    end: 10,
    content:
        '<a href="https://player.support.brightcove.com/plugins/display-overlay-plugin.html">videojs-overlay sample</a>',
    align: 'top',
};

const tips: unknown[] = [...Array(10).keys()].map((i: number) => overlayTip(i));

const overlays: unknown[] = [line].concat(tips);

window.addEventListener('load', () => {
    videojs('my-video', {
        autoplay: true,
        muted: true,
        controls: true,
        plugins: {
            overlay: {
                debug: true,
                overlays: overlays,
            },
        },
    });
});
