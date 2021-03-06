// Initialize Firebase
var config = {
    apiKey: "AIzaSyC3rK5fG2PwqAtjTQ2FhOCyzb4dIcXN2_0",
    authDomain: "project-2930.firebaseapp.com",
    databaseURL: "https://project-2930.firebaseio.com",
    projectId: "project-2930",
    storageBucket: "project-2930.appspot.com",
    messagingSenderId: "16612303844"
};
firebase.initializeApp(config);

//Script for nav-bar

function dis() {
    if(document.getElementById("i-need-you").style.left == "0px"){
        document.getElementById("i-need-you").style.left = "-10000px";
        document.getElementById("i-need-you").style.top = "-10000px";
    }else{
        document.getElementById("i-need-you").style.left = "0px";
        document.getElementById("i-need-you").style.top = "0px";

    }
}


// Script to display content 
var count = 0;
document.getElementById("c1").addEventListener("click", function() {
    ShowlistFruits("Carrots/Name");
    ShowlistFruits("Carrots/Info");
    ShowlistFruits("Carrots/Ingredients");
    ShowlistFruits("Carrots/Ingredients1");
    ShowlistFruits("Carrots/Method");
    ShowlistFruits("Carrots/Method1");
    ShowlistFruits("Carrots/Method2");
    ShowlistFruits("Carrots/Method3");
    ShowlistFruits("Carrots/Method4");
    ShowlistFruits("Carrots/Method5");
});

document.getElementById("c2").addEventListener("click", function() {
    ShowlistFruits("SweetPotatoes/Name");
    ShowlistFruits("SweetPotatoes/Info");
    ShowlistFruits("SweetPotatoes/Ingredients");
    ShowlistFruits("SweetPotatoes/Ingredients1");
    ShowlistFruits("SweetPotatoes/Method");
    ShowlistFruits("SweetPotatoes/Method1");
    ShowlistFruits("SweetPotatoes/Method2");
    ShowlistFruits("SweetPotatoes/Method3");
    ShowlistFruits("SweetPotatoes/Method4");
    ShowlistFruits("SweetPotatoes/Method5");
});
document.getElementById("c3").addEventListener("click", function() {
    ShowlistFruits("Kale/Name");
    ShowlistFruits("Kale/Info");
    ShowlistFruits("Kale/Ingredients");
    ShowlistFruits("Kale/Ingredients1");
    ShowlistFruits("Kale/Method");
    ShowlistFruits("Kale/Method1");
    ShowlistFruits("Kale/Method2");
    ShowlistFruits("Kale/Method3");
    ShowlistFruits("Kale/Method4");
    ShowlistFruits("Kale/Method5");
});
document.getElementById("c4").addEventListener("click", function() {
    ShowlistFruits("Zucchini/Name");
    ShowlistFruits("Zucchini/Info");
    ShowlistFruits("Zucchini/Ingredients");
    ShowlistFruits("Zucchini/Ingredients1");
    ShowlistFruits("Zucchini/Method");
    ShowlistFruits("Zucchini/Method1");
    ShowlistFruits("Zucchini/Method2");
    ShowlistFruits("Zucchini/Method3");
    ShowlistFruits("Zucchini/Method4");
    ShowlistFruits("Zucchini/Method5");
});
document.getElementById("c5").addEventListener("click", function() {
    ShowlistFruits("Tomatoes/Name");
    ShowlistFruits("Tomatoes/Info");
    ShowlistFruits("Tomatoes/Ingredients");
    ShowlistFruits("Tomatoes/Ingredients1");
    ShowlistFruits("Tomatoes/Method");
    ShowlistFruits("Tomatoes/Method1");
    ShowlistFruits("Tomatoes/Method2");
    ShowlistFruits("Tomatoes/Method3");
    ShowlistFruits("Tomatoes/Method4");
    ShowlistFruits("Tomatoes/Method5");
});



function ShowlistFruits(catergory) {
    var dbRef = firebase.database().ref("Team02/Suggestions/Vegetables/" + catergory);
    var promise = dbRef.once("value", function(snap) {
        list = snap.val();
        count++;
        if(count>10){
            var elem = document.getElementById('listofplant');
            elem.parentNode.removeChild(elem);
            var brek = document.getElementById('break');
            brek.parentNode.removeChild(brek);
        }
    });

    promise.then(function() {
        DisplayList(list); //JSON object
    });
}


function DisplayList(list) {
    var para = document.createElement("div");

    var linebreak = document.createElement("br");
    linebreak.setAttribute('id','break');

    var bottonClick = document.createElement("div");
    var inside = document.createElement("p");

    var doc = document.getElementById("content");
    doc.appendChild(para);

    para.appendChild(bottonClick);
    bottonClick.appendChild(inside);

    var node = document.createTextNode(list);

    inside.appendChild(node);
    para.setAttribute("id", "listofplant");
    bottonClick.setAttribute("Class", "bottonClick");
    doc.appendChild(linebreak);
}
