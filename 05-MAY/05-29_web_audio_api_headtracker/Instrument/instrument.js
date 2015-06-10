var context = new AudioContext ();
var oscillator = context.createOscillator();
oscillator.connect(context.destination);
oscillator.start();

gainNode = context.createGain();
gainNode.gain.value = 0.3;
oscillator.connect(gainNode);
gainNode.connect(context.destination);
