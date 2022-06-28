namespace pxsim {
    /**
     * Error codes used in the micro:bit runtime.
    */
    export enum PanicCode {
        // PANIC Codes. These are not return codes, but are terminal conditions.
        // These induce a panic operation, where all code stops executing, and a panic state is
        // entered where the panic code is diplayed.

        // Out out memory error. Heap storage was requested, but is not available.
        MICROBIT_OOM = 20,

        // Corruption detected in the micro:bit heap space
        MICROBIT_HEAP_ERROR = 30,

        // Dereference of a NULL pointer through the ManagedType class,
        MICROBIT_NULL_DEREFERENCE = 40,
    };

    export function panic(code: number) {
        console.log("PANIC:", code)
        throw new Error("PANIC " + code)
    }

    export interface RuntimeOptions {
        theme: string;
    }
}

namespace pxsim.basic {
    export var pause = thread.pause;
    export var forever = thread.forever;
}

namespace pxsim.control {
    export var inBackground = thread.runInBackground;

    

    export function eventTimestamp() {
        return board().bus.getLastEventTime()
    }

    export function eventValue() {
        return board().bus.getLastEventValue()
    }
}

//%
namespace pxsim.test {
    /**
     * Plot the LED Matrix
     */
    //% weight=90
    //% blockId=plot block="plot|x %x|y %y"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    export function plot( x : number, y : number ) {
    }

    /**
     * unPlot the LED Matrix
     */
    //% weight=90
    //% blockId=unplot block="unplot|x %x|y %y"
    //% x.min=0 x.max=4 y.min=0 y.max=4
    export function unplot(  x : number, y : number ) {
    }

    /**
     * Plot all the LEDs
     */
    //% weight=90
    //% blockId=plotAll block="plotAll"
    export function plotAll( ) {
    }

    /**
     * Unplot all the LEDs
     */
    //% weight=90
    //% blockId=unplotAll block="unplotAll"
    export function unplotAll( ) {
    }
}
