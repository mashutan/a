input.onButtonPressed(Button.A, function () {
    plenbit.servoWrite(3, 45)
    plenbit.servoWrite(7, 85)
    basic.pause(100)
    plenbit.servoWrite(3, 0)
    plenbit.servoWrite(0, 0)
})
input.onButtonPressed(Button.B, function () {
    plenbit.stdMotion(plenbit.StdMotions.RStep)
})
plenbit.servoInitialSet()
basic.forever(function () {
	
})
