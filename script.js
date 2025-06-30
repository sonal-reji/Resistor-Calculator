
let colors =["#000000","#8B4513","#FF0000","#FFA500","#FFFF00","#008000","#0000FF","#8A2BE2","#808080","#FFFFFF","#FFD700","#C0C0C0"]
let bandval = []
let r =0;
let r1 =0;
let input;
let order =[]
window.onload = randomr
function randomr(){
    for(let i=1 ;i<=3;i++){
        order[i]= (Math.floor((Math.random()*9)+1));
        document.getElementById('ban'+i).style.backgroundColor = colors[order[i]];
    }
}
function setupBandSelector(bandId, selectId) {
  document.getElementById(selectId).addEventListener('change', (e) => {
    document.getElementById(bandId).style.backgroundColor = colors[parseInt(e.target.value)];
    bandval[parseInt(bandId.slice(-1))] = e.target.options[e.target.selectedIndex].dataset.digit;
  });

}
function calculateResistance(){
r = (parseInt(bandval[1]+bandval[2]) * Math.pow(10,bandval[3])) ; 
if (r>=1000){
     document.getElementById("show").textContent = r/1000+("K ohms ");
}
else{
     document.getElementById("show").textContent = r+(" ohms ");
}

}
function check(){
    r1 = (parseInt(order[1].toString()+order[2].toString()) * Math.pow(10,order[3])) ; 
    input =document.getElementById("val").value
    input =input.replace("K","000");
    input =input.replace("k","000");
    if (r1 == input){
        window.alert(" Corect Answer !!!")
        randomr()
    }
    else{
         window.alert(" Wrong Answer !!!")
    }
}
setupBandSelector('band1', 'band1Select');
setupBandSelector('band2', 'band2Select');
setupBandSelector('band3', 'band3Select');
setupBandSelector('band4', 'band4Select');
