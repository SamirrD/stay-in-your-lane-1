input.onButtonPressed(Button.A, function () {
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 50)
})
input.onButtonPressed(Button.B, function () {
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
})
motobit.enable(MotorPower.On)
let factor = 1.2
let servoCenter = -1
pins.servoWritePin(AnalogPin.P15, 90)
basic.forever(function () {
    if (100 < Math.abs(pins.analogReadPin(AnalogPin.P0) - pins.analogReadPin(AnalogPin.P1))) {
        pins.servoWritePin(AnalogPin.P15, Math.map(factor * (pins.analogReadPin(AnalogPin.P0) - pins.analogReadPin(AnalogPin.P1)), -1023, 1023, 45, 145))
        basic.showIcon(IconNames.Square)
    } else {
        pins.servoWritePin(AnalogPin.P15, 90 + servoCenter)
        basic.showIcon(IconNames.SmallSquare)
    }
})
