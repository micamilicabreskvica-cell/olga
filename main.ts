input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
basic.showString("Hello!")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showNumber(67)
})
