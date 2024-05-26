basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) <= 6) {
        music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        basic.pause(1000)
    }
    basic.pause(100)
    serial.writeValue("value", pins.analogReadPin(AnalogPin.P0))
})
