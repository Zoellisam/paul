basic.forever(function () {
    basic.setLedColor(0x00ffff)
    if (calliBot2.readBumperSensor(C2Sensor.rechts, C2State.an) || calliBot2.readBumperSensor(C2Sensor.links, C2State.an)) {
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        for (let index = 0; index < 2; index++) {
            calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 50)
        }
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("Hi! Ich bin Paul.")
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(500)
        while (!(input.buttonIsPressed(Button.A))) {
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        }
    }
    if (calliBot2.entfernung(C2Einheit.cm) < 10) {
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        basic.setLedColor(0xff0000)
        basic.pause(2000)
        basic.turnRgbLedOff()
    }
    if (calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.dunkel) && calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.dunkel)) {
        calliBot2.setLed(C2Motor.beide, false)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 100)
    } else {
        if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.dunkel) && calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell)) {
            calliBot2.setLed(C2Motor.links, true)
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 80)
            calliBot2.motorStop(C2Motor.links, C2Stop.Bremsen)
        } else {
            if (calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.dunkel) && calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell)) {
                calliBot2.setLed(C2Motor.rechts, true)
                calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 80)
                calliBot2.motorStop(C2Motor.rechts, C2Stop.Bremsen)
            }
        }
    }
})
basic.forever(function () {
    calliBot2.setRgbLed1(C2RgbLed.RV, 0xff0000, 6)
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.LV, 0x0000ff, 6)
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.LH, 0x00ff00, 6)
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.RH, 0xffff00, 6)
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.RV, 0xa300ff, 6)
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.LH, 0x00ffdc, 6)
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.RV, 0xff0000, 6)
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.LV, 0xffff00, 6)
    basic.pause(100)
    calliBot2.setRgbLed1(C2RgbLed.RH, 0x00ffdc, 6)
})
