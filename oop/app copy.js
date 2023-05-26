let naruto = {
    attack : function(){ return "Raisengan";},
    name : "Naruto Uzumaki",
    weapon : "Kunai"
};

document.write("<h2>Ecriture litterale</h2>");
document.write(naruto.name + "<br>");
document.write(naruto.attack() + "<br>");

//-----------------------------------------------------

function Ninja(name, weapon) {
    this.attack = function(){
        return "Rahhh !!";
    };
    this.name = name || "Naruto Uzumaki";
    this.weapon = weapon || "Shuriken";
};

document.write("<h2>Constructeur via function</h2>");

let hinata = new Ninja("Hinata Hyuga");
document.write(hinata.name + "<br>");
document.write(hinata.attack() + "<br>");




//-----------------------------------------------------

class Genin{
    constructor(name ="Naruto Uzumaki", weapon="Shuriken"){
        this.name = name;
        this.weapon = weapon;
    }

    attack(){
        return "Rahhh !!!";
    }
};

document.write("<h2>Constructeur via classe</h2>");
let sasuke = new Genin("Sasuke Uchiha", "Shuriken fuma");
document.write(sasuke.name + "<br>");
document.write(sasuke.attack() + "<br>");

//-----------------------------------------------------
