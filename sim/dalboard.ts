/// <reference path="../node_modules/pxt-core/built/pxtsim.d.ts"/>
/// <reference path="../libs/core/dal.d.ts"/>
/// <reference path="../libs/core/enums.d.ts"/>

namespace pxsim {
    export class DalBoard extends CoreBoard
        implements CommonBoard {
        // state & update logic for component services
        ledMatrixState: LedMatrixState;

        // visual
        viewHost: visuals.BoardHost;
        view: SVGElement;

        // board hardware version
        hardwareVersion = 1;

        constructor() {
            super()

            // components
            this.builtinParts["ledmatrix"] = this.ledMatrixState = new LedMatrixState(runtime);
            this.builtinVisuals["ledmatrix"] = () => new visuals.LedMatrixView();
            this.builtinPartVisuals["ledmatrix"] = (xy: visuals.Coord) => visuals.mkLedMatrixSvg(xy, 8, 8);
        }

        ensureHardwareVersion(version: number) {
            if (version > this.hardwareVersion) {
                this.hardwareVersion = version;
                this.updateView();
            }
        }


        initAsync(msg: SimulatorRunMessage): Promise<void> {
            super.initAsync(msg);

            const boardDef = msg.boardDefinition;
            const cmpsList = msg.parts;
            const cmpDefs = msg.partDefinitions || {};
            const fnArgs = msg.fnArgs;

            const v2Parts: pxt.Map<boolean> = { 
                "microphone": true, 
                "logotouch": true, 
                "builtinspeaker": true,
                "v2": true
            };
            if (msg.builtinParts) {
                const v2PartsUsed = msg.builtinParts.filter(k => v2Parts[k])
                if (v2PartsUsed.length) {
                    console.log(`detected v2 feature`, v2PartsUsed);
                    cmpsList.push(...v2PartsUsed);
                    this.hardwareVersion = 2;
                }
            }

            const opts: visuals.BoardHostOpts = {
                state: this,
                boardDef: boardDef,
                partsList: cmpsList,
                partDefs: cmpDefs,
                fnArgs: fnArgs,
                maxWidth: "100%",
                maxHeight: "100%",
                highContrast: msg.highContrast
            };

            this.viewHost = new visuals.BoardHost(pxsim.visuals.mkBoardView({
                visual: boardDef.visual,
                boardDef: boardDef,
                highContrast: msg.highContrast
            }), opts);

            document.body.innerHTML = ""; // clear children
            document.body.appendChild(this.view = this.viewHost.getView());

            return Promise.resolve();
        }

        screenshotAsync(width?: number): Promise<ImageData> {
            return this.viewHost.screenshotAsync(width);
        }
    }

    export function initRuntimeWithDalBoard() {
        U.assert(!runtime.board);
        let b = new DalBoard();
        runtime.board = b;
        runtime.postError = (e) => {
            led.setBrightness(255);
            let img = board().ledMatrixState.image;
            img.clear();
            img.set(0, 4, 255);
            img.set(1, 3, 255);
            img.set(2, 3, 255);
            img.set(3, 3, 255);
            img.set(4, 4, 255);
            img.set(0, 0, 255);
            img.set(1, 0, 255);
            img.set(0, 1, 255);
            img.set(1, 1, 255);
            img.set(3, 0, 255);
            img.set(4, 0, 255);
            img.set(3, 1, 255);
            img.set(4, 1, 255);
            runtime.updateDisplay();
        }

        led.setBrightness(255);
        let img = board().ledMatrixState.image;
        img.clear();
        img.set(0, 0, 255);
        img.set(0, 1, 255);
        img.set(0, 2, 255);
        img.set(0, 3, 255);
        img.set(0, 4, 255);
        img.set(2, 0, 255);
        img.set(2, 1, 255);
        img.set(2, 2, 255);
        img.set(2, 3, 255);
        img.set(2, 4, 255);
        img.set(4, 0, 255);
        img.set(4, 1, 255);
        img.set(4, 2, 255);
        img.set(4, 3, 255);
        img.set(4, 4, 255);
        runtime.updateDisplay();
    }

    if (!pxsim.initCurrentRuntime) {
        pxsim.initCurrentRuntime = initRuntimeWithDalBoard;
    }

    export function board(): DalBoard {
        return runtime.board as DalBoard;
    }
}