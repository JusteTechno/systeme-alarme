function Activer_lalarme () {
    if (Etat_de_lalarme == 0) {
        Etat_de_lalarme = 1
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
        for (let index = 0; index < 2; index++) {
            music.ringTone(988)
            basic.pause(500)
            music.stopAllSounds()
            basic.pause(500)
        }
        basic.pause(1000)
    }
}
function Déclencher_la_sirène () {
    while (Etat_de_lalarme == 1) {
        music.ringTone(587)
        basic.pause(500)
        music.stopAllSounds()
        basic.pause(500)
        if (input.buttonIsPressed(Button.B)) {
            Désactiver_lalarme()
        }
    }
}
input.onButtonPressed(Button.A, function () {
    Activer_lalarme()
})
function Désactiver_lalarme () {
    if (Etat_de_lalarme == 1) {
        Etat_de_lalarme = 0
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        music.ringTone(988)
        basic.pause(1000)
        music.stopAllSounds()
    }
}
input.onButtonPressed(Button.B, function () {
    Désactiver_lalarme()
})
let Détecteur_douverture = 0
let Détecteur_de_mouvement = 0
let Etat_de_lalarme = 0
Etat_de_lalarme = 0
basic.forever(function () {
    Détecteur_de_mouvement = pins.digitalReadPin(DigitalPin.P0)
    Détecteur_douverture = pins.digitalReadPin(DigitalPin.P1)
})
