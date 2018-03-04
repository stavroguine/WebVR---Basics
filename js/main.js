//la fonction getVRDisplays renvoie un tableau pour chaque casque détecté
navigator.getVRDisplays().then(function(displays) {
    for (i=0; i<displays.length; i++) {
        //parmi les éléments du tableau retournés, on trouve displayName qui retourne le nom du casque
        deviceName = displays[i].displayName;
        console.log("Le casque suivant est utilisé : " + deviceName );
    }
});

