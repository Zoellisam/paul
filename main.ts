basic.forever(function () {
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
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 76)
    } else {
        if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.dunkel) && calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell)) {
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 65)
            calliBot2.motorStop(C2Motor.links, C2Stop.Bremsen)
        } else {
            if (calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.dunkel) && calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell)) {
                calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 65)
                calliBot2.motorStop(C2Motor.rechts, C2Stop.Bremsen)
            }
        }
    }
})
