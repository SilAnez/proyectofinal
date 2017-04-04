var express = require ('express');
var app = express ();

app.use(express.static('public'))


var guitarra = [
	
	{pathImage:'Imagenes/guitars/MitchelSolid.png',name:'Mitchell HD400 Hard Rock Double Cutaway Electric Guitar', description:'The Mitchell HD400 electric guitar starts with a resonant, double cutaway, basswood body and a thin “C” shape maple neck with either a maple or rosewood fretboard, providing the perfect platform for lead guitar pyrotechnics. The high-output humbucker/single-coil/humbucker configuration features paraffin-dipped ceramic pickups to reduce microphonics and unwanted feedback. And to help you create superior sonic gymnastics with solid tuning stability, the HD400 comes with a licensed Floyd Rose double locking floating tremolo. Plus, its wide/tall jumbo frets make bending and legato phrasing a breeze.'},
	{pathImage:'Imagenes/guitars/Rogue.png',name:'Rogue RR100 Rocketeer Electric Guitar', description:'The Rocketeer RR100 electric guitar is Rogues take on a classic design, built for ease of playability. It is constructed with a lightweight contoured double-cutaway paulownia body. The ultra-thin, comfortable maple neck makes it easy to fly up and down the 22-fret rosewood fingerboard with ease. The humbucker/dual single-coil pickup configuration with a 5-way switch allows for a wide-variety of tones. A 6-screw vintage tremolo lets you have tons of whammy bar fun, while the Rogue Rocketeers die-cast tuners ensure solid tuning stability. Guitar case sold separately.'},
	{pathImage:'Imagenes/guitars/KramerAssault.png',name:'Kramer Assault 220 Electric Guitar', description:'The Kramer Assault 220 electric guitar features a single-cutaway mahogany body with a set mahogany neck that has a thin-tapered profile that makes playing effortless. A 24-fret rosewood fingerboard sports thorn-shaped position inlays. A licensed Floyd Rose vibrato is onboard for plenty of performance-enhancing fun. Electronics include dual Alnico V humbucking pickups with a master volume, master tone with push/pull coil-splitting for additional single-coil sounds, and a 3-way selector. The Volume on the Kramer Assault 220 guitar features what Kramer calls the "treble bleed" mod that lets you keep your tone bright when backing down the volume control.'},
	{pathImage:'Imagenes/guitars/Dangelico.png',name:'DAngelico EX-DC/SP Semi-Hollowbody Electric Guitar', description:'With its dual Kent Armstrong humbuckers and semi-hollow construction the EX-DC is built with versatility in mind. The EX-DC can span multiple musical genres from jazz to rock n roll without breaking... Click To Read More About This Product'},


]


app.get ('/devolverguitarras', function (req,res){

	res.send (guitarra)

})



 var bajo = [
	
 	{pathImage:'Imagenes/bass/RogueLX200B.png',name:'Rogue LX200B Series III Electric Bass Guitar', description:'You wont believe the great sound and consummate playability of this sonic destroyer. The Rogue LX200B bass guitar features a maple neck, fast and friendly rosewood fretboard, covered traditional-style split and single-coil pickups, 2 volume and 2 tone controls, die-cast machine heads, and black hardware.'},
 	{pathImage:'Imagenes/bass/Lakland.png',name:'Lakland Skyline 44-02 4-String Bass ', description:'A Lakland humbucker (bridge) and a single-coil (neck) are teamed with the same 3-band active preamp used in the US-made 55-94 to let you dial in an incredible range of tones. 3-way toggle splits coils for increased tonal range. It has that deep Lakland cutaway on the high register side of the neck that allows easy access to highest frets for throwing licks on top of your grooves. Ash body with quilt maple top.'},
 	{pathImage:'Imagenes/bass/Luna.png',name:'Luna Guitars Tattoo Long Scale Electric Bass', description:'With this long-scale version, youll enjoy the stable feel and satisfying response of comfortable action. Youll be enveloped in deep, fundamental bass tone, whether fat and unadorned (with the tone control at zero) or mixed with the perfect treble component (with the tone control at maximum), or anywhere in between.'},
 	{pathImage:'Imagenes/bass/Tobias.png',name:'Tobias Toby Deluxe-IV Electric Bass ', description:'The Toby Deluxe IV features the classic ergonomic body shape that bassists find so easy to play, providing a focused, ˜finished sound that has all the punch of an upright bass with all the clear detail of an electric. And now, the Toby Deluxe IV comes with an Active Tonexpressor Bass Enhancement Control for making creative blends and fine adjustments to cut through dense mixes.'},


 ]


 app.get ('/devolverbajos', function (req,res){

 	res.send (bajo)

 })

var efecto = [
	
 	{pathImage:'Imagenes/effects/Earthquaker.png',name:'Earthquaker Devices Avalanche Run - Stereo Delay And Reverb with Tap Tempo', description:'The Avalanche Run was developed with one goal in mind: to take the floating ambient tones of the Dispatch Master to the next level while still keeping it user friendly and refined. Taking you into the aural exploratorium without having to break open the user manual every time you want to open up your inner eye and get free is no easy task. Earthquaker is using a high-powered proprietary DSP platform to recreate all the characteristics of all Earthquakers old favorite delay and reverb machines while still retaining a simple, yet flexible workspace.'},
 	{pathImage:'Imagenes/effects/Morley.png',name:'Morley MWV Mini Wah Volume Guitar Effects Pedal Black', description:'Designed for guitar, bass, or keyboards, the Morley MWV Mini Wah Volume pedal combines an electro-optical wah with volume control in a size thats perfect for any pedal board. The MWV boasts a traditional wah tone, a smooth audio taper for volume control, and LED idnicator, wah level control, and easy-access battery compartment. It all comes in a road-ready cold-rolled steel housing.'},
 	{pathImage:'Imagenes/effects/Outlaw.png',name:'Outlaw Effects Vigilante Guitar Chorus Pedal', description:'Vigilante enhances your tone by adding a sparkling modulation effect, allowing you to get everything from a subtle, ambient shimmer to more a dramatic effect with pulsating tones. Use VIigilante on clean tones for crystal clear chorus, or pair it with delay and/or distortion effects to expand your soundscape. Vigilante reacts equally well to rhythm chords and lead work, and can even be used for acoustic guitar. The LEVEL control allows you to blend your dry signal in or out for additional versatility.Featuring True Bypass switching, VIGILANTE offers richly textured analog chorus in a compact package.'},
 	{pathImage:'Imagenes/effects/Rogue.png',name:'Rogue Analog Delay Guitar Effects Pedal', description:'The Rogue Analog Delay pedal creates echo effects, from short slap-back to longer repeating echoes. Use it on electric guitars, electronic keyboards and more. Three control knobs let you quickly adjust the speed of the echo repeats, the number of echoes and overall volume of the effected sound. A true bypass switch engages and disengages the effect. An LED indicator shows you when the effect is engaged and gets dim when its time to change the battery.'},


 ]


 app.get ('/devolverefectos', function (req,res){

 	res.send (efecto)

 })

 var amplificador = [
	
 	{pathImage:'Imagenes/amps/Friedman.png',name:'Friedman Brown Eye 100W 2-Channel Tube Guitar Head Black with 4x12 Guitar Cabinet', description:'The BE100 is a hand-wired, 100W, EL34-powered, multi-channel British-style amp that is capable of producing many styles of music, from blues to classic rock, and from heavy rock to metal by just adjus... Click To Read More About This Product.'},
 	{pathImage:'Imagenes/amps/BadCat.png',name:'Bad Cat Black Cat 30W 1x12 Guitar Combo Amp', description:'This is the one that started it all! The Black Cats pedigree is well known. The amp of choice for countless arena acts. Huge, chimey 3-D cleans. A sound so delicate yet ferocious when pushed. You have never heard lows like this come from an EL84 amp. The 12AX7 side gives lush sweet and complex mid-range that works from warm punchy cleans through tight crunchy growl. Engage the master volume and get the dirt at any level.'},
 	{pathImage:'Imagenes/amps/Soldano.png',name:'Soldano Lucky 13 50W 2x12 Tube Guitar Combo Amp Black', description:'Designed for the guitarist who needs the best of all worlds, the LUCKY 13 is a 50W 2x12 tube amplifier thats basically two amps in one box-a sparkling, super luscious, and somewhat "vintage" sounding clean amp combined with a rich, singing, harmonic-laden high gain amp. The Clean channel has a single volume control and is designed to be clean all the way up until the power amp reaches full power and begins its warm power tube breakup. The Overdrive channel has preamp and master volume controls; any level of gain and overdrive is available at any volume level.'},
 	{pathImage:'Imagenes/amps/Fargen.png',name:'Fargen Amps FJLI John Lennon Limited Edition 15W 1x12 Tube Guitar Combo', description:'The Imagine Series combines world-class tube amplifier engineering with luxurious cabinetry and craftsmanship, to accomplish the ultimate John Lennon experience. Adorned with pure white features and components throughout, the Imagine Series amplifier captures the essence of John Lennon and his vintage tones. The Imagine Series is available in a limited series of 51 hand-numbered pieces.'},


 ]


 app.get ('/devolveramplificadores', function (req,res){

 	res.send (amplificador)



 })

app.get('/', function (req,res){
	
		res.sendFile(__dirname + '/public/index.html');
	

})





var server = app.listen(8081,function (){
	
	console.log("servidor arriba")


})