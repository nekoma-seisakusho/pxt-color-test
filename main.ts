namespace カラーセンサー {

    let R = 0
    let G = 0
    let B = 0
    let RM = 0
    let GM = 0
    let BM = 0

    //% block="初期化"
    export function 初期化() {
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

    //% block="RGB読み出し"
    export function RGB読み出し() {
        pins.i2cWriteNumber(
            42,
            3,
            NumberFormat.UInt8BE,
            true
        )
        R = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        G = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        B = pins.i2cReadNumber(42, NumberFormat.UInt16BE, true)
        RM = Math.trunc(Math.map(R, 2000, 4000, 0, 255))
        GM = Math.trunc(Math.map(G, 2000, 5000, 0, 255))
        BM = Math.trunc(Math.map(B, 1200, 3000, 0, 255))
    }
}

