let Intro = 1
let Quiz = 1
serialmp3.connectSerialMp3(DigitalPin.C16, DigitalPin.C17)
basic.showIcon(IconNames.Heart)
serialmp3.playMp3TrackFromFolder(Intro, Quiz, Mp3Repeat.No)
basic.setLedColor(0x00ff00)
basic.forever(function () {
	
})
