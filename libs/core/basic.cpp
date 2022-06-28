#include "pxt.h"


/**
 * Provides access to basic micro:bit functionality.
 */
namespace basic {

    /**
     * Draws an image on the LED screen.
     * @param leds the pattern of LED to turn on/off
     * @param interval time in milliseconds to pause after drawing
     */
    //% help=basic/show-leds
    //% weight=85 blockGap=8
    //% imageLiteral=1 async
    //% blockId=device_show_leds
    //% block="show leds" icon="\uf00a"
    //% parts="ledmatrix"
    //% group="LED matrix"
    void showLeds(ImageLiteral_ leds, int interval = 400) {
    }

    /**
     * Display text on the display, one character at a time. If the string fits on the screen (i.e. is one letter), does not scroll.
     * @param text the text to scroll on the screen, eg: "hi!"
     * @param interval how fast to shift characters; eg: 50, 100, 150, 200
     */
    //% help=basic/show-string
    //% weight=100 blockGap=16
    //% block="show|string %text || in an interval of %interval ms"
    //% async
    //% blockId=device_print_message
    //% parts="ledmatrix"
    //% text.shadowOptions.toString=true
    //% expandableArgumentMode="toggle"
    //% interval.defl=80
    //% group="LED matrix"
    void showString(String text, int interval = 80) {
    }

    /**
     * Turn off all LEDs
     */
    //% help=basic/clear-screen weight=75
    //% blockId=device_clear_display block="clear screen"
    //% parts="ledmatrix"
    //% group="LED matrix"
    //% advanced=true
    void clearScreen() {
    }
}