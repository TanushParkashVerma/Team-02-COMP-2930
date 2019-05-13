// ----- constants -----
// elements
let img = document.getElementById("img"),
    itemName = document.getElementById("itemName"),
    expirationDate = document.getElementById("expirationDate"),
    notifyMe = document.getElementById("notifyMe"),
    expitems = document.getElementById("expitems"),
    recmcontainer = document.getElementById("rec");
// variables
let items = [],
    sorter,
    recms = [];

// ----- general expiry -----
function sortSelection(num){
    switch (num) {
    case 0:
        return function (a,b) {
            let r = daysTillExpiry(a) - daysTillExpiry(b);
            if (r==0)
                r = a.name.localeCompare(b.name);
            return r;
        }
    default:
        return function (a,b) {
            let r = a.name.localeCompare(b.name);
            if (r==0)
                r = daysTillExpiry(a) - daysTillExpiry(b);
            return r;
        }
    }
}

function daysTillExpiry(item){
    return (new Date(new Date(item.date).getFullYear(),new Date(item.date).getMonth(),new Date(item.date).getDate()+1) - new Date(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()))/(1000*60*60*24);
}

function addItem(item){
    let nimg = document.createElement("img"),
        np = document.createElement("p"),
        np2 = document.createElement("p"),
        np3 = document.createElement("p"),
        nbutton = document.createElement("button");
        
    expitems.appendChild(nimg);
    expitems.appendChild(np);
    expitems.appendChild(np2);
    expitems.appendChild(np3);
    expitems.appendChild(nbutton);
    
    nimg.className = nbutton.className = "left expitems";
    np.className = np2.className = np3.className = "left exptab expitems";
    
    nimg.id = "exptab"
    nimg.src = item.img;

    np.innerHTML = item.name;

    np2.innerHTML = item.date; 
    
    let days = daysTillExpiry(item);
    np3.innerHTML = days;
    if (days>3) {
        np3.style.color = "green";
    } else if (days<0){
        np3.style.color = "red";
        if (days==-1)
            np3.innerHTML = "Yesterday";
        else
            np3.innerHTML = -days + " Days Ago";
    }else{
        np3.style.color = "yellow";
        if (days==1)
            np3.innerHTML = "Tomorrow";
        else if (days==0)
            np3.innerHTML = "Today";
    }
    
    nbutton.id = "exptabu";
    nbutton.innerHTML = "x";
    nbutton.onclick = function() {removeItem(item.unique)};
}

function putItems(){
    let con = document.getElementById("expcon")
    if (items.length==0)
        con.style.display = "none";
    else 
        con.style.display = "block";

    items.sort(sorter);
    expitems.innerHTML = "";

    let h = 29;
    for(let i=0; i<items.length; i++){
        h+=62
        items[i].unique=i;
        addItem(items[i]);
    }
    con.style.height = h+"px";
}

// ----- in expiry container -----
function reput(num) {
    sorter = sortSelection(num);
    putItems();
}

function removeItem(num){
    items.splice(num,1);
    putItems();
}


// ----- in expiry input -----
function newItem(){
    let item = new Object();
    item.img = img.src;
    item.name = itemName.value;
    item.date = expirationDate.value;
    item.notify = notifyMe.value;

    items.push(item);
    putItems();

    img.src = "icon3.png";
    itemName.value = "";
    expirationDate.value = "";
    notifyMe.value = 3;
}

function readURL(input) {

    if (input.files && input.files[0]) {
      var reader = new FileReader();
  
      reader.onload = function(e) {
        $('#img').attr('src', e.target.result);
      }
  
      reader.readAsDataURL(input.files[0]);
    }
  }
  
  $("#file").change(function() {
    readURL(this);
  });

// ----- recomended expiry -----

function makeRec(rec) {
    let ndiv = document.createElement("div"),
        ndiv2 = document.createElement("div"),
        nimg = document.createElement("img"),
        np = document.createElement("p"),
        nbutton = document.createElement("button");

    recmcontainer.appendChild(ndiv); //change this
    ndiv.appendChild(ndiv2);
    ndiv.appendChild(nbutton);
    ndiv2.appendChild(np);
    ndiv2.appendChild(nimg);

    ndiv.className = "left qmarg";
    ndiv.id = "imgcon";
    ndiv.style.marginRight = "15px";

    // onclick of ndiv2

    np.className = "left recmod";
    np.id = "imgbtn";
    np.innerHTML = rec.name;

    nimg.className = "recmodi";
    nimg.id = "img";
    nimg.src = rec.img;

    nbutton.id = "recmod";
    // onclick of nbutton
    nbutton.innerHTML = "info>>";
}
function startupGeneration(){ // TEST - not final
    sorter = sortSelection(0);

    let rec = new Object();
    rec.name = "fruit";
    rec.img = "icon3.png";

    for(let i=0; i<4; i++){
        makeRec(rec);
    }
}
