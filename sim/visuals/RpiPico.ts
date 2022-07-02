namespace pxsim.visuals {
    const MB_STYLE = `
        .simEventBtn {
            font-size: 1.4rem;
            font-weight: 900;
            padding: 1.25rem 1.75rem;
            border-radius: 3.5rem / 100%;
            border: 0;
            cursor: pointer;
            text-transform: uppercase;
            letter-spacing: 0.07em;
            color: white;
            background: #42c9c9;
            font-family: 'Roboto Mono', monospace;
        }
        button:hover {
            opacity: .7;
        }
        button:active {
            background: #e6007d;
        }

        svg.sim {
            margin-bottom:1em;
        }
        svg.sim.grayscale {
            -moz-filter: grayscale(1);
            -webkit-filter: grayscale(1);
            filter: grayscale(1);
        }
        .sim-button-group {
            cursor: pointer;
        }
        .sim-button {
            pointer-events: none;
        }
        .sim-board, .sim-display, sim-button {
            fill: #111;
        }
        .sim-button-outer:hover {
            stroke:grey;
            stroke-width: 3px;
        }
        .sim-button-nut {
            fill:#704A4A;
            pointer-events:none;
        }
        .sim-button-nut:hover {
            stroke:1px solid #704A4A;
        }
        .sim-pin {
            cursor: pointer;
        }
        .sim-pin:hover {
            stroke:#D4AF37;
            stroke-width:2px;
        }
        .sim-pin-touch.touched:hover {
            stroke:darkorange;
        }
        .sim-led-back:hover {
            stroke:#fff;
            stroke-width:3px;
        }
        .sim-led:hover {
            stroke:#ff7f7f;
            stroke-width:3px;
        }

        .sim-systemled {
            fill:#333;
            stroke:#555;
            stroke-width: 1px;
        }

        .sim-light-level-button {
            stroke:#ccc;
            stroke-width: 2px;
        }

        .sim-antenna {
            fill-opacity:0.0;
            stroke:#555;
            stroke-width: 4px;
        }

        .sim-text {
            font-family: 'Roboto Mono', monospace;
            font-size:14px;
            fill:#fff;
            pointer-events: none; user-select: none;
        }

        .sim-text-pin {
            font-family: 'Roboto Mono', monospace;
            pointer-events: none; user-select: none;
            fill:#000;
            font-size:24px;
            stroke:#fff;
            stroke-alignment: outside;
            paint-order: stroke;
            stroke-width: 3px;
        }

        .sim-thermometer {
            stroke:#aaa;
            stroke-width: 2px;
        }

        #rgbledcircle:hover {
            r:8px;
        }

        .inverted {
            fill:#000;
            stroke:#fff;
            stroke-alignment: outside;
            paint-order: stroke;
            stroke-width: 3px;
        }
        .big {
            font-size:24px;
            font-weight: bold;
        }
        .centered {
            transform: translateX(-1.5ch);
            text-align: center;
        }

        /* animations */
        .sim-theme-glow {
            animation-name: sim-theme-glow-animation;
            animation-timing-function: ease-in-out;
            animation-direction: alternate;
            animation-iteration-count: infinite;
            animation-duration: 1.25s;
        }
        @keyframes sim-theme-glow-animation {
            from { opacity: 1; }
            to   { opacity: 0.75; }
        }

        .sim-flash {
            animation-name: sim-flash-animation;
            animation-duration: 0.1s;
        }

        @keyframes sim-flash-animation {
            from { fill: yellow; }
            to   { fill: default; }
        }

        .sim-flash-stroke {
            animation-name: sim-flash-stroke-animation;
            animation-duration: 0.4s;
            animation-timing-function: ease-in;
        }

        @keyframes sim-flash-stroke-animation {
            from { stroke: yellow; }
            to   { stroke: default; }
        }

        /* wireframe */
        .sim-wireframe * {
            fill: none;
            stroke: black;
        }
        .sim-wireframe .sim-display,
        .sim-wireframe .sim-led,
        .sim-wireframe .sim-led-back,
        .sim-wireframe .sim-head,
        .sim-wireframe .sim-theme,
        .sim-wireframe .sim-button-group,
        .sim-wireframe .sim-button-label,
        .sim-wireframe .sim-button,
        .sim-wireframe .sim-text-pin
        {
            visibility: hidden;
        }
        .sim-wireframe .sim-label
        {
            stroke: none;
            fill: #777;
        }
        .sim-label, .sim-button-label {
            fill: #000;
        }
        .sim-wireframe .sim-board {
            stroke-width: 2px;
        }
        *:focus {
            outline: none;
        }
        *:focus .sim-button-outer,
        .sim-pin:focus,
        .sim-thermometer:focus,
        .sim-shake:focus,
        .sim-light-level-button:focus {
            stroke: #4D90FE;
            stroke-width: 5px !important;
        }
        .no-drag, .sim-text, .sim-text-pin {
            user-drag: none;
            user-select: none;
            -moz-user-select: none;
            -webkit-user-drag: none;
            -webkit-user-select: none;
            -ms-user-select: none;
        }

        .shake_animation {
            animation: shake 0.42s cubic-bezier(.36,.07,.19,.97) both;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
        }

        @keyframes shake {
            10%, 90% {
              transform: translate3d(-1px, 0, 0);
            }
            
            20%, 80% {
              transform: translate3d(2px, 0, 0);
            }
          
            30%, 50%, 70% {
              transform: translate3d(-4px, 0, 0);
            }
          
            40%, 60% {
              transform: translate3d(4px, 0, 0);
            }
          }
    `;
    const BOARD_SVG = `<?xml version="1.0" encoding="utf-8"?>
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
         y="0px" viewBox="0 0 580 630" style="enable-background:new 0 0 580 630;" xml:space="preserve">
    <style type="text/css">
        .st0{fill:#0A613F;}
        .st6{fill:none;stroke:#FFFFFF;stroke-width:1.5;stroke-linecap:round;stroke-miterlimit:10;}
        .st13{fill:#BCCAC3;}
        .st16{fill:#BCCAC3;}
    </style>
    <g id="calliope_mini">
        <path id="mini_Board" class="st0" d="M100,180 h400 a20,20 0 0 1 20,20 v200 a20,20 0 0 1 -20,20 h-470 a20,20 0 0 1 -20,-20 v-200 a20,20 0 0 1 20,-20 z" fill="#177a00"/>
        <path d="M485 295 v-1.554h9.325v1.554h-9.325zm0-5.052v-1.554h9.325v1.554h-9.325zm0-5.049v-1.554h9.325v1.554h-9.325zm0 15.151v-1.555h9.325v1.555h-9.325zm0 5.052v-1.555h9.325v1.555h-9.325z" fill="#dcdcdc"/>
        <path d="M490 78.636 V274.785h1.943v38.85l-1.943.001z" fill="#b4b4b4"/>
        <path d="M492 78.636V274.785h8.157v38.85l-8.157.001z"/>
        <rect x="495" y="255" width="40" height="80" style="fill:grey;" />
        <rect x="350" y="245" width="100" height="100" style="fill:black;" />
        <text x="373" y="300" fill="white">RP2040</text>
    <g id="Button_A">        
        <rect id="BTN_A_BOX" x="25" y="210" class="st13" width="40" height="40"/>
        <circle cx="60" cy="215" r="3"/>
        <circle cx="60" cy="245" r="3"/>
        <circle cx="30" cy="215" r="3"/>
        <circle cx="30" cy="245" r="3"/>
        <circle id="BTN_A" class="st15" cx="45" cy="230" r="15"/>
        <text x="25" y="270" fill="#FFF402">RESET</text>
    </g>
    <g id="Button_B">
        
        <rect id="BTN_B_BOX" x="25" y="345" class="st16" width="40" height="40"/>
        <circle cx="60" cy="350" r="3"/>
        <circle cx="60" cy="380" r="3"/>
        <circle cx="30" cy="350" r="3"/>
        <circle cx="30" cy="380" r="3"/>
        <circle id="BTN_B" class="st15" cx="45" cy="365" r="15"/>
        <text x="15" y="405" fill="#FFF402">USR BTN</text>
    </g>

        <rect x="115" y="215" class="st6" width="160" height="160" style="fill:none;stroke-width:3;
stroke:rgb(0,0,0)"/>
        <rect id="LED_0_0" x="130" y="230" class="st6" width="8" height="14"/>
        <rect id="LED_1_0" x="160" y="230" class="st6" width="8" height="14"/>
        <rect id="LED_2_0" x="190" y="230" class="st6" width="8" height="14"/>
        <rect id="LED_3_0" x="220" y="230" class="st6" width="8" height="14"/>
        <rect id="LED_4_0" x="250" y="230" class="st6" width="8" height="14"/>
        <rect id="LED_0_1" x="130" y="260" class="st6" width="8" height="14"/>
        <rect id="LED_1_1" x="160" y="260" class="st6" width="8" height="14"/>
        <rect id="LED_2_1" x="190" y="260" class="st6" width="8" height="14"/>
        <rect id="LED_3_1" x="220" y="260" class="st6" width="8" height="14"/>
        <rect id="LED_4_1" x="250" y="260" class="st6" width="8" height="14"/>
        <rect id="LED_0_2" x="130" y="290" class="st6" width="8" height="14"/>
        <rect id="LED_1_2" x="160" y="290" class="st6" width="8" height="14"/>
        <rect id="LED_2_2" x="190" y="290" class="st6" width="8" height="14"/>
        <rect id="LED_3_2" x="220" y="290" class="st6" width="8" height="14"/>
        <rect id="LED_4_2" x="250" y="290" class="st6" width="8" height="14"/>
        <rect id="LED_0_3" x="130" y="320" class="st6" width="8" height="14"/>
        <rect id="LED_1_3" x="160" y="320" class="st6" width="8" height="14"/>
        <rect id="LED_2_3" x="190" y="320" class="st6" width="8" height="14"/>
        <rect id="LED_3_3" x="220" y="320" class="st6" width="8" height="14"/>
        <rect id="LED_4_3" x="250" y="320" class="st6" width="8" height="14"/>
        <rect id="LED_0_4" x="130" y="350" class="st6" width="8" height="14"/>
        <rect id="LED_1_4" x="160" y="350" class="st6" width="8" height="14"/>
        <rect id="LED_2_4" x="190" y="350" class="st6" width="8" height="14"/>
        <rect id="LED_3_4" x="220" y="350" class="st6" width="8" height="14"/>
        <rect id="LED_4_4" x="250" y="350" class="st6" width="8" height="14"/>
    </g>
    </svg>`;


    const pinNames = [
        
        "BTN_A", , "BTN_B"
    ];
    const pinTitles = [
        
        "Button A", "Button B"
    ];
    const MB_WIDTH = 530;
    const MB_HEIGHT = 630;
    export interface IBoardTheme {
        accent?: string;
        display?: string;
        pin?: string;
        pinTouched?: string;
        pinActive?: string;
        ledOn?: string;
        ledOff?: string;
        buttonOuter?: string;
        buttonUps: string[];
        buttonDown?: string;
        virtualButtonOuter?: string;
        virtualButtonUp?: string;
        virtualButtonDown?: string;
        lightLevelOn?: string;
        lightLevelOff?: string;
        soundLevelOn?: string;
        soundLevelOff?: string;
    }

    export var themes: IBoardTheme[] = ["#3ADCFE"].map(accent => {
        return {
            accent: accent,
            pin: "#F6C426",
            pinTouched: "#FFA500",
            pinActive: "#E6007D",
            ledOn: "#ff5555",
            ledOff: "#e0e1e2",
            buttonOuter: "#979797",
            buttonUps: ["#186A8C", "#D82E50"],
            buttonDown: "#FFA500",
            virtualButtonDown: "#FFA500",
            virtualButtonOuter: "#333",
            virtualButtonUp: "#fff",
            lightLevelOn: "#555",
            lightLevelOff: "yellow",
            soundLevelOn: "#3ADCFE",
            soundLevelOff: "#555"
        }
    });

    export function randomTheme(): IBoardTheme {
        return themes[Math.floor(Math.random() * themes.length)];
    }

    export interface IBoardProps {
        runtime?: pxsim.Runtime;
        theme?: IBoardTheme;
        wireframe?: boolean;
        disableTilt?: boolean;
    }

    export class RpiPicoBoardSvg implements BoardView {
        public element: SVGSVGElement;
        private style: SVGStyleElement;
        private defs: SVGDefsElement;
        private g: SVGGElement;
        private pkg: SVGPathElement;
        private logos: SVGElement[];
        private headg: SVGGElement;
        private head: SVGGElement;
        private headParts: SVGElement;
        private headInitialized = false;
        private heads: SVGElement[];
        private headText: SVGTextElement;
        private display: SVGElement;
        private buttons: SVGElement[];
        private buttonsOuter: SVGElement[];
        // private buttonABText: SVGTextElement;
        private pins: SVGElement[];
        private pinGradients: SVGLinearGradientElement[];
        private pinTexts:{ [key: number]: SVGTextElement };
        private ledsOuter: SVGElement[];
        private leds: SVGElement[];
        private microphoneLed: SVGElement;
        private systemLed: SVGCircleElement;
        private antenna: SVGPolylineElement;
        private rssi: SVGTextElement;
        private lightLevelButton: SVGCircleElement;
        private lightLevelGradient: SVGLinearGradientElement;
        private lightLevelText: SVGTextElement;
        private thermometerGradient: SVGLinearGradientElement;
        private thermometer: SVGRectElement;
        private thermometerText: SVGTextElement;
        private soundLevelGradient: SVGLinearGradientElement;
        private soundLevel: SVGRectElement;
        private soundLevelText: SVGTextElement;
        private soundLevelIcon: SVGTextElement;
        private shakeButton: SVGElement;
        // private shakeText: SVGTextElement;
        public board: pxsim.DalBoard;
        private domHardwareVersion = 1;
        private rgbLed: SVGElement;
        private pinNmToCoord: Map<Coord> = {
		};

        constructor(public props: IBoardProps) {
            
            this.buildDom();
            if (props && props.wireframe)
                U.addClass(this.element, "sim-wireframe");

            if (props && props.theme)
                this.updateTheme();

            if (props && props.runtime) {
                this.board = this.props.runtime.board as pxsim.DalBoard;
                this.board.updateSubscribers.push(() => this.updateState());
                this.updateState();
                this.attachEvents();
            }
        }

        public getView(): SVGAndSize<SVGSVGElement> {
            return {
                el: this.element,
                y: 0,
                x: 0,
                w: MB_WIDTH,
                h: MB_HEIGHT
            };
        }

        public getCoord(pinNm: string): Coord {
            return this.pinNmToCoord[pinNm];
        }

        public highlightPin(pinNm: string): void {
            //TODO: for instructions
        }

        public getPinDist(): number {
            return 10;
        }

        private updateTheme() {
            let theme = this.props.theme;

            svg.fills(this.leds, theme.ledOn);
            svg.fills(this.ledsOuter, theme.ledOff);
            svg.fills(this.buttonsOuter.slice(6, 8), theme.buttonOuter);
            svg.fill(this.buttons[0], theme.buttonUps[0]);
            svg.fill(this.buttons[1], theme.buttonUps[1]);
            svg.fill(this.buttonsOuter[2], theme.virtualButtonOuter);
            svg.fill(this.buttons[2], theme.virtualButtonUp);
            if (this.shakeButton) svg.fill(this.shakeButton, theme.virtualButtonUp);

            this.pinGradients.forEach(lg => svg.setGradientColors(lg, theme.pin, theme.pinActive));
            svg.setGradientColors(this.lightLevelGradient, theme.lightLevelOn, theme.lightLevelOff);
            svg.setGradientColors(this.soundLevelGradient, theme.soundLevelOff, theme.soundLevelOn);
            svg.setGradientColors(this.thermometerGradient, theme.ledOff, theme.ledOn);
        }

        public updateState() {
            let state = this.board;
            if (!state) return;
            let theme = this.props.theme;

            // let bpState = state.buttonPairState;
            // let buttons = [bpState.aBtn, bpState.bBtn, bpState.abBtn];
            // buttons.forEach((btn, index) => {
            //     svg.fill(this.buttons[index], btn.pressed ? (btn.virtual ? theme.virtualButtonDown : theme.buttonDown) : (btn.virtual ? theme.virtualButtonUp : theme.buttonUps[index]));
            // });

            if (state.ledMatrixState.disabled) {
                this.leds.forEach((led, i) => {
                    const sel = (<SVGStyleElement><any>led)
                    sel.style.opacity = "0";
                })
            } else {
                const bw = state.ledMatrixState.displayMode == pxsim.DisplayMode.bw
                const img = state.ledMatrixState.image;
                const br = state.ledMatrixState.brigthness != undefined ? state.ledMatrixState.brigthness : 255;
                this.leds.forEach((led, i) => {
                    const sel = (<SVGStyleElement><any>led)
                    let imgbr = bw ? (img.data[i] > 0 ? br : 0) : img.data[i];
                    // correct brightness
                    const opacity = imgbr > 0 ? imgbr / 255 * 155 + 100 : 0;
                    const transfrom = imgbr > 0 ? imgbr / 255 * 0.4 + 0.6 : 0;
                    sel.style.opacity = (opacity / 255) + "";
                    if (transfrom > 0) {
                        (sel.style as any).transformBox = 'fill-box';
                        sel.style.transformOrigin = '50% 50%';
                        sel.style.transform = `scale(${transfrom})`;
                    }
                })
            }
            

            if (!runtime || runtime.dead) U.addClass(this.element, "grayscale");
            else U.removeClass(this.element, "grayscale");
        }

        private buildDom() {
			this.element = new DOMParser().parseFromString(BOARD_SVG, "image/svg+xml").querySelector("svg") as SVGSVGElement;
            svg.hydrate(this.element, {
                "version": "1.0",
                "viewBox": `0 0 ${MB_WIDTH} ${MB_HEIGHT}`,
                "class": "sim",
                "x": "0px",
                "y": "0px",
                "width": MB_WIDTH + "px",
                "height": MB_HEIGHT + "px",
                "fill": "rgba(0,0,0,0)"
            });
            this.style = <SVGStyleElement>svg.child(this.element, "style", {});
            this.style.textContent = MB_STYLE;

            this.defs = <SVGDefsElement>svg.child(this.element, "defs", {});
            this.g = <SVGGElement>svg.elt("g");
            this.element.appendChild(this.g);

            // filters
            let ledglow = svg.child(this.defs, "filter", { id: "ledglow", x: "-75%", y: "-75%", width: "300%", height: "300%" });
            svg.child(ledglow, "feMorphology", { operator: "dilate", radius: "4", in: "SourceAlpha", result: "thicken" });
            svg.child(ledglow, "feGaussianBlur", { stdDeviation: "5", in: "thicken", result: "blurred" });
            svg.child(ledglow, "feFlood", { "flood-color": "rgb(255, 17, 77)", result: "glowColor" });
            svg.child(ledglow, "feComposite", { in: "glowColor", in2: "blurred", operator: "in", result: "ledglow_colored" });
            let ledglowMerge = svg.child(ledglow, "feMerge", {});
            svg.child(ledglowMerge, "feMergeNode", { in: "ledglow_colored" });
            svg.child(ledglowMerge, "feMergeNode", { in: "SourceGraphic" });

            let glow = svg.child(this.defs, "filter", { id: "filterglow", x: "-5%", y: "-5%", width: "120%", height: "120%" });
            svg.child(glow, "feGaussianBlur", { stdDeviation: "5", result: "glow" });
            let merge = svg.child(glow, "feMerge", {});
            for (let i = 0; i < 3; ++i) svg.child(merge, "feMergeNode", { in: "glow" })

            // leds
            this.leds = [];
            this.ledsOuter = [];
            const left = Number(this.element.getElementById("LED_0_0").getAttribute("x"));
            const top = Number(this.element.getElementById("LED_0_0").getAttribute("y"));
            const ledoffw = Number(this.element.getElementById("LED_1_0").getAttribute("x"))-left;
            const ledoffh = Number(this.element.getElementById("LED_0_1").getAttribute("y"))-top;
            // const ledw = 5.1;
            // const ledh = 12.9;
            for (let i = 0; i < 5; ++i) {
                let ledtop = i * ledoffh + top;
                for (let j = 0; j < 5; ++j) {
                    let ledleft = j * ledoffw + left;
                    let k = i * 5 + j;
                    this.ledsOuter.push(svg.child(this.g, "rect", { class: "sim-led-back", x: ledleft, y: ledtop, width: 10, height: 20, rx: 2, ry: 2 }));
                    let led = svg.child(this.g, "rect", { class: "sim-led", x: ledleft - 2, y: ledtop - 2, width: 14, height: 24, rx: 3, ry: 3, title: `(${j},${i})` });
                    svg.filter(led, `url(#ledglow)`)
                    this.leds.push(led);
                }
            }


             // head
            //  this.headg = <SVGGElement>svg.child(this.g, "g", { style: "transform: translate(100px, 0px);" });
             this.head = <SVGGElement>svg.child(this.g, "g", { class: "sim-head" });
             svg.child(this.head, "circle", { cx: 501.2, cy: 75, r: 100, fill: "transparent" })
             this.headParts = <SVGGElement>svg.child(this.head, "g", { class: "sim-button-outer sim-button-group" });
             this.heads = []
            //  background
            this.heads.push(svg.path(this.headParts, "sim-button",""));
            //  shapes
            this.heads.push(<SVGGElement>svg.child(this.headParts, "g", { class: "sim-theme" }));
            //  this.heads.push(svg.path(this.headParts, "sim-theme", "M230.6,69.7c-2.9,0-5.3,2.4-5.3,5.3c0,2.9,2.4,5.3,5.3,5.3c2.9,0,5.3-2.4,5.3-5.3C235.9,72.1,233.5,69.7,230.6,69.7"));
            //  this.heads.push(svg.path(this.headParts, "sim-theme", "M269.7,80.3c2.9,0,5.3-2.4,5.3-5.3c0-2.9-2.4-5.3-5.3-5.3c-2.9,0-5.3,2.4-5.3,5.3C264.4,77.9,266.8,80.3,269.7,80.3"));
             this.headText = <SVGTextElement>svg.child(this.g, "text", { x: 500, y: 165, class: "sim-text inverted big centered" })

            // https://www.microbit.co.uk/device/pins
            // P0, P1, P2
            this.pins = pinNames.map(n => {
				let p = this.element.getElementById(n) as SVGElement;
				if(!p) console.log("missing "+n);
				U.addClass(p, "sim-pin");
                // console.log(p);
				return p;
			});

            this.pins.forEach((p, i) => svg.hydrate(p, { title: pinTitles[i] }));

            this.pinGradients = this.pins.map((pin, i) => {
                let gid = "gradient-pin-" + i
                let lg = svg.linearGradient(this.defs, gid)
                pin.setAttribute("fill", `url(#${gid})`);
                return lg;
            })

            // this.pinTexts = [
            //         [-20,   340],
            //         [50,    495],
            //         [450,   495],
            //         [500,   340]
            //     ].map(p => <SVGTextElement>svg.child(this.g, "text", { class: "sim-text-pin", x: p[0], y: p[1] }));

            // this.pinTexts = { 
            //     [DigitalPin.P0]: <SVGTextElement>svg.child(this.g, "text", { class: "sim-text-pin big centered", x: 20, y: 325 }),
            //     [DigitalPin.P1]: <SVGTextElement>svg.child(this.g, "text", { class: "sim-text-pin big centered", x: 135, y: 540 }),
            //     [DigitalPin.P2]: <SVGTextElement>svg.child(this.g, "text", { class: "sim-text-pin big centered", x: 395, y: 540 }),
            //     [DigitalPin.P3]: <SVGTextElement>svg.child(this.g, "text", { class: "sim-text-pin big centered", x: 540, y: 325 })
            // }

            // BTN A, B
            const btnids = ["BTN_A", "BTN_B"];
            this.buttonsOuter = btnids.map(n => this.element.getElementById(n + "_BOX") as SVGElement);
            this.buttonsOuter.forEach(b => U.addClass(b, "sim-button-outer"));
            this.buttons = btnids.map(n => this.element.getElementById(n) as SVGElement);
            this.buttons.forEach(b => U.addClass(b, "sim-button"));

            // BTN A+B
            const outerBtn = (left: number, top: number) => {
                const button = this.mkBtn(left, top, 'A + B');
                this.buttonsOuter.push(button.outer);
                this.buttons.push(button.inner);
                return button;
            }

            let ab = outerBtn(100, MB_HEIGHT - 75);
            // let abtext = svg.child(ab.outer, "text", { x: 210, y: MB_HEIGHT - 5, class: "sim-text big inverted centered" }) as SVGTextElement;
            // abtext.textContent = "A+B";
            (<any>this.buttonsOuter[2]).style.visibility = "hidden";
            (<any>this.buttons[2]).style.visibility = "hidden";
        }

        private mkBtn(left: number, top: number, text: string): { outer: SVGElement, inner: SVGElement } {
            const btnr = 2;
            const btnw = 20;
            const btnn = 1.6;
            const btnnm = 2;
            const btnb = 5;
            let btng = svg.child(this.g, "g", { class: "sim-button-group" });
            // var fo = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
            var fo = svg.child(btng, "foreignObject");
            fo.setAttribute("id", "y");
            fo.setAttribute("x", left+'');
            fo.setAttribute("y", top+'');
            fo.setAttribute("width", "300");
            fo.setAttribute("height", "100");
            fo.innerHTML = `<body xmlns="http://www.w3.org/1999/xhtml">
             <button class="simEventBtn">${text}</button>
          </body>`;
            // var ta = document.createElement("button");
            // ta.innerText = text;
            // fo.appendChild(ta);
            
            // svg.child(btng, "rect", { class: "sim-button-outer", x: left, y: top, rx: btnr, ry: btnr, width: btnw, height: btnw });
            // svg.child(btng, "circle", { class: "sim-button-nut", cx: left + btnnm, cy: top + btnnm, r: btnn });
            // svg.child(btng, "circle", { class: "sim-button-nut", cx: left + btnnm, cy: top + btnw - btnnm, r: btnn });
            // svg.child(btng, "circle", { class: "sim-button-nut", cx: left + btnw - btnnm, cy: top + btnw - btnnm, r: btnn });
            // svg.child(btng, "circle", { class: "sim-button-nut", cx: left + btnw - btnnm, cy: top + btnnm, r: btnn });

            const outer = btng;
            const inner = svg.child(btng, "circle", {
                class: "sim-button",
                cx: left + btnw / 2,
                cy: top + btnw / 2,
                r: 0
            });

            return { outer, inner };
        }

        private attachEvents() {

        }
    }
}
