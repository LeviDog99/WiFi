
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="on"
    One,
    //% block="off"
    Two
}

/**
 * Custom blocks
 */
//% weight=100 color=#3452C3 icon="\uf1eb"
namespace WiFi {
    /**
     * TODO: describe your function here
     * @param n describe parameter here, eg: 0
     * @param s describe parameter here, eg: "network"
     * @param e describe parameter here
     */
    //% block
    export function internet(n: number, s: string, e: MyEnum): void {
        // Add code here
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 0
     */
    //% block
    export function router(value: number): number {
        return value <= 1 ? value : router(value -1) + router(value - 2);
    }
}
