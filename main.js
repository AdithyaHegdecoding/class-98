var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function(event){
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    
    if(Content == "take my selfie"){
        speak();
        console.log(Content);
    }
    if(Content == "take a selfie"){
        speak();
        console.log(Content);
    }
    if(Content == "take selfie"){
        speak();
        console.log(Content);
    }
    if(Content == "take a selfies"){
        speak();
        console.log(Content);
    }
    if(Content == "please selfie tagoli"){
        speak();
        console.log(Content);
    }
    if(Content == "selfie taga"){
        speak();
        console.log(Content);
    }
    if(Content == "on selfie taka"){
        speak();
        console.log(Content);
    }
    if(Content == "one selfie taka"){
        speak();
        console.log(Content);
    }
    
    
}
function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
   Webcam.attach(camera);

   setTimeout(function(){
    take_snap();
    save();
    
   } ,5000);
   
}
Webcam.set({
    width:360,
    height:250,
    image_format:"png",
    png_quality:0.00000001
});
camera = document.getElementById("camera");

function take_snap(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML = "<img id = 'photo' src = '" + data_uri + "'>"
        console.log("tets")
    })
    console.log("test")
    
}
function save(){
    link = document.getElementById("link");
    image = document.getElementById("photo").src;
    link.href = image
    link.click();
}
// 62248510