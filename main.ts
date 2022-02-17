let llum = 0
serial.redirect(
SerialPin.P0,
SerialPin.P1,
BaudRate.BaudRate9600
)
basic.forever(function () {
    llum = input.lightLevel()
    led.plot(2, 2)
    basic.pause(llum)
    led.unplot(2, 2)
    basic.pause(llum)
    serial.writeNumber(llum)
})
