input.onButtonPressed(Button.A, function () {
    basic.showNumber(moist)
})
let moist = 0
edubitMotors.setServoPosition(ServoChannel.S1, 90)
basic.forever(function () {
    if (moist / 10 < 600) {
        edubitMotors.setServoPosition(ServoChannel.S1, 0)
    } else if (moist / 10 < 722) {
        edubitMotors.setServoPosition(ServoChannel.S1, 90)
    }
    moist = 0
    for (let index = 0; index < 10; index++) {
        moist += pins.analogReadPin(AnalogPin.P1)
    }
})
