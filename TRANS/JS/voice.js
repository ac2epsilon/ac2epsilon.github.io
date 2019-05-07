function voice_a(text, voice=3) {
  console.log('Hello Voice');
  // var msg = new SpeechSynthesisUtterance('Hello World');
const synth = window.speechSynthesis
synth.cancel();
var msg = new SpeechSynthesisUtterance();
var voices = synth.getVoices();
// console.log(text,voices);
msg.voice = voices[voice];
msg.volume = 1; // 0 to 1
msg.rate = 1; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.text = text;
// msg.lang = 'en-US';

msg.onstart = function(e) {
  console.log('Started in ' + event.elapsedTime + ' seconds.');
};
msg.onend = function(e) {
  console.log('Finished in ' + event.elapsedTime + ' seconds.');
};
msg.onerror = function(e) {
  console.log('Error in ' + event.elapsedTime + ' seconds.');
};

window.speechSynthesis.speak(msg);
  console.log('speechSynthesis' in window)

}

function voice_populateList(element) {
  if (element.length>0) return;
  console.log("Populating...");  
  let voices = window.speechSynthesis.getVoices();
  let count = 0;
  voices.forEach( function(voice) {
    var el = document.createElement("option");
    el.textContent = voice.name;
    el.value = count++;
    element.appendChild(el);
  });
}
