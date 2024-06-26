//% weight=100 color=#0080ff icon="\uf1b2"
namespace カラーセンサー {

    let R = 0
    let G = 0
    let B = 0


    //% block="初期化"
    export function init() {
        pins.i2cWriteNumber(
            42,
            139,
            NumberFormat.UInt16BE,
            false
        )
        pins.i2cWriteNumber(
            42,
            11,
            NumberFormat.UInt16BE,
            false
        )
    }
/*
    //% block="RGB読み出し"
    export function RGB_read():number{
        pins.i2cWriteNumber(
            42,
            3,
            NumberFormat.UInt8BE,
            true
        )
        R = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        G = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        B = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        return R;
    }
*/
    //% block="R"
    export function R_read(): number {
        pins.i2cWriteNumber(
            42,
            3,
            NumberFormat.UInt8BE,
            true
        )
        R = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        return R;
    }
    //% block="G"
    export function G_read(): number {
        pins.i2cWriteNumber(
            42,
            5,
            NumberFormat.UInt8BE,
            true
        )
        G = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        return G;
    }
    //% block="B"
    export function B_read(): number {
        pins.i2cWriteNumber(
            42,
            7,
            NumberFormat.UInt8BE,
            true
        )
        B = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        return B;
    }
}
