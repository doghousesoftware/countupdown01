input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(index)
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.showString("?")
})
input.onButtonPressed(Button.B, function () {
    startNumber = 4
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(startNumber - index)
        basic.pause(1000)
    }
    basic.showIcon(IconNames.Happy)
    basic.pause(2000)
    basic.showString("?")
})
let startNumber = 0
basic.showString("?")
