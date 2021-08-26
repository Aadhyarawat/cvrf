function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/_F02hnoIZ/model.json',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}
function gotResults(error,results)
{
    if(error){
        console.error(error);
    }else{
        random_number_r=Math.floor(Math.random() * 255) + 1;
        random_number_g=Math.floor(Math.random() * 255) + 1;
        random_number_b=Math.floor(Math.random() * 255) + 1;

        document.getElementById("result_label").innerHTML='I can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML='Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.solor="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.solor="rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

       img= document.getElementById("alien1");
       img1= document.getElementById("alien2");
       img2= document.getElementById("alien3");
       img3= document.getElementById("alien4");
if(results[0].label == "Barking")
{
    img.src="dog-01.gif";
    img1.src="dog-02.png";
    img2.src="dog-03.png";
    img3.src="dog-04.png";

}else if(results[0].label == "roar")
{
    img.src="lion-01.png";
    img1.src="lion-02.gif";
    img2.src="lion-03.png";
    img3.src="lion-04.png";

    }else if(results[0].label == "mooing")
    {
        img.src="cow-01.png";
        img1.src="cow-02.png";
        img2.src="cow-03.gif";
        img3.src="cow-04.png";
    
        }else 
        {
            img.src="cat-01.png";
            img1.src="cat-02.png";
            img2.src="cat-03.png";
            img3.src="cat-04.gif";
        
            }

}
}
