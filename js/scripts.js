

function translator(wordInput){
  var vowels = ["a", "e", "i", "o", "u"];
  var wordArray = wordInput.split("");
      if(wordArray[0]=== "a"||wordArray[0]=== "e"||wordArray[0]=== "i"||wordArray[0]=== "o"||wordArray[0]=== "u"){
        result = wordInput.concat("ay");
        return result;
      }else {
        var consonant= wordArray.shift();
        return wordArray.join("") + consonant + "ay";
      }



      }


$(document).ready(function() {
  $("form#translator").submit(function(event){
    event.preventDefault();

    var wordInput = $("#input").val();
    console.log(wordInput);
     var output = translator(wordInput);
     $("#output").text(output);


      // $(wordArray).toString();

    });




})
// };
