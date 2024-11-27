const arr = [
    {
       sentence: "Wir $ morgen nach Berlin.",
       verb: "fahren",
       answer: "fahren"
    },
    {
        sentence: "Du $ jeden Tag joggen.",
        verb: "gehen",
        answer: "gehst"
    },
    {
        sentence: "Er $ sehr schnell.",
        verb: "schwimmen",
        answer: "schwimmt"
    },
    {
        sentence: "Maria und Markus $ durch den Wald.",
        verb: "laufen",
        answer: "laufen"
    },
    {
        sentence: "Wir $ heute Abend zusammen.",
        verb: "kochen",
        answer: "kochen"
    },
    {
        sentence: "Du $ gerne Sushi.",
        verb: "essen",
        answer: "isst"
    },
    {
        sentence: "Ich $ gern Tee.",
        verb: "trinken",
        answer: "trinke"
    },
    {
        sentence: "Lidia $ eine Postkarte.",
        verb: "schreiben",
        answer: "schreibt"
    },
    {
        sentence: "Ich $ ein Bild von meinem Hund.",
        verb: "malen",
        answer: "male"
    },
    {
        sentence: "Ihr $ in einem Chor.",
        verb: "singen",
        answer: "singt"
    },
    {
        sentence: "Wir $ auf der Party.",
        verb: "tanzen",
        answer: "tanzen"
    },
    {
        sentence: "Donya und Julia $ Hilfe mit den Hausaufgaben.",
        verb: "brauchen",
        answer: "brauchen"
    },
    {
        sentence: "Ursula und Heidi $ aus der Schweiz.",
        verb: "kommen",
        answer: "kommen"
    },
    {
        sentence: "Ich $ Englisch und Deutsch.",
        verb: "sprechen",
        answer: "spreche"
    },
    {
        sentence: "Du $ deiner Schwester.",
        verb: "helfen",
        answer: "hilfst"
    },
    {
        sentence: "Er $ Medizin an der Universität.",
        verb: "studieren",
        answer: "studiert"
    },
    {
        sentence: "Wir $ jeden Tag Deutsch.",
        verb: "lernen",
        answer: "lernen"
    },
    {
        sentence: "Karina $ bis 10 Uhr.",
        verb: "schlafen",
        answer: "schläft"
    },
    {
        sentence: "Ihr $ durch die Stadt.",
        verb: "spazieren",
        answer: "spaziert"
    },
    {
        sentence: "Er $ Fußball im Park. ",
        verb: "spielen",
        answer: "spielt"
    },
    {
        sentence: "Wir $ zwei Katzen.",
        verb: "haben",
        answer: "haben"
    },
    {
        sentence: "Du $ sehr freundlich.",
        verb: "sein",
        answer: "bist"
    },
    {
        sentence: "Polina $ ihre Hausaufgaben.",
        verb: "machen",
        answer: "macht"
    },
    {
        sentence: "Ich $ Schokolade.",
        verb: "lieben",
        answer: "liebe"
    },
    {
        sentence: "Ihr $ in einem großen Haus.",
        verb: "leben",
        answer: "lebt"
    },
    {
        sentence: "Ich $ in Bern.",
        verb: "wohnen",
        answer: "wohne"
    },
    {
        sentence: "Sie $ Anna und Peter.",
        verb: "heißen",
        answer: "heißen"
    },
    {
        sentence: "Wir $ gerne klassische Musik.",
        verb: "hören",
        answer: "hören"
    },
    {
        sentence: "Du $ müde aus.",
        verb: "sehen",
        answer: "siehst"
    },
    {
        sentence: "Ich $ das Badezimmer.",
        verb: "putzen",
        answer: "putze"
    },
    {
        sentence: "Ich $ ein neues Handy.",
        verb: "kaufen",
        answer: "kaufe"
    },
    {
        sentence: "Ihr $ euer Auto.",
        verb: "verkaufen",
        answer: "verkauft"
    },
    {
        sentence: "Ihr $ an der Kasse.",
        verb: "bezahlen",
        answer: "bezahlt"
    },
    {
        sentence: "Das Buch $ 20 Euro.",
        verb: "kosten",
        answer: "kostet"
    },
    {
        sentence: "Wir $ in einem Büro.",
        verb: "arbeiten",
        answer: "arbeiten"
    },
    {
        sentence: "Er $ viel Geld in seinem Beruf.",
        verb: "verdienen",
        answer: "verdient"
    },
    {
        sentence: "Er $ das letzte Stück Pizza.",
        verb: "nehmen",
        answer: "nimmt"
    },
    {
        sentence: "Wir $ morgen zusammen arbeiten.",
        verb: "können",
        answer: "können"
    },
    {
        sentence: "Ich $ ein Stück Kuchen",
        verb: "möchte",
        answer: "möchte"
    },
    {
        sentence: "Er $ eine neue Gitarre kaufen.",
        verb: "wollen",
        answer: "will"
    }
];

var audio;

function init() {
    const container = document.getElementById("container");
    audio = document.getElementById("myAudio"); 
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        // console.log(element);
    
        // create a new div element
        const newDiv = document.createElement("div");
        newDiv.setAttribute("id", element.verb + "div");
    
        let inx = element.sentence.indexOf("$");
    
        // and give it some content
        // const newContent = document.createTextNode(element.sentence.substring(0, inx-1) + element.sentence.substring(inx+1) + " (" + element.verb + ")");
        let text = document.createTextNode(element.sentence.substring(0, inx-1) + " ");
    
        // add the text node to the newly created div
        newDiv.appendChild(text);
    
        const input = document.createElement("input");
        input.setAttribute("id", element.verb);
        newDiv.appendChild(input);
    
        text = document.createTextNode(element.sentence.substring(inx+1) + " (" + element.verb + ")");
        newDiv.appendChild(text);
    
        container.appendChild(newDiv);
    }
}

function validate() {
    let collection = document.getElementsByClassName("success");
    for (let index = 0; index < collection.length; index++) {
        collection[index].innerHTML = "";
    }
    collection = document.getElementsByClassName("faliure");
    for (let index = 0; index < collection.length; index++) {
        collection[index].innerHTML = "";
    }

    let isAllTrue = true;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        const value = document.getElementById(element.verb).value;
        if (value.trim() == element.answer){
            const newSpan = document.createElement("span");
            const text = document.createTextNode(" Success!");
            newSpan.setAttribute("class", "success");
            newSpan.appendChild(text);
            document.getElementById(element.verb + "div").appendChild(newSpan);
        }
        else{
            const newSpan = document.createElement("span");
            const text = document.createTextNode(" Faliure!");
            newSpan.setAttribute("class", "faliure");
            newSpan.appendChild(text);
            document.getElementById(element.verb + "div").appendChild(newSpan);
            isAllTrue = false;
        }
    }
    if(isAllTrue){
        document.getElementById("pyro").setAttribute("class", "pyro");
        playAudio();
        const myTimeout = setTimeout(myStopFunction, 3000);
        function myStopFunction() {
            clearTimeout(myTimeout);
            document.getElementById("pyro").removeAttribute("class");
        }
    }
}

function playAudio() { 
  audio.play(); 
} 

function pauseAudio() { 
  audio.pause(); 
} 
