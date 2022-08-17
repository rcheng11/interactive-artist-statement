// pokemon
pokeCounterNum = 2
pokeCounter = $(".pokeball-counter")
pokeWrapper = $(".pokemon-wrapper")
pokeBall = $(".pokeball")

var pokemonTimer;
pokeBall.on("mousedown", function() {
  if(pokeCounterNum > 0){
    createPokemon()
    pokemonTimer = setInterval(createPokemon, 500)
  }
  else {
    clearInterval(pokemonTimer)
  }})
pokeBall.on("mouseup", function() {
    clearInterval(pokemonTimer)
})
pokeObject = $(".pokeball")

// 50-30-15-5 odds
pokemonCommon = ["bulbasaur", "charmander", "squirtle",
                "caterpie", "weedle", "rattata"]
pokemonUncommon = ["ivysaur", "charmeleon", "wartortle",
                "metapod", "kakuna", "ekans", "exeggcute",
              "cubone"]
pokemonRare = ["venusaur", "charizard", "blastoise",
              "butterfree", "beedrill", "raticate",
              "arbok", "exeggutor", "marowak"]
pokemonLegendary = ["omastar", "kabutops", "articuno", "zapdos",
              "moltres", "dragonite", "mewtwo", "mew"]
// pokemon are added to the pokemon-wrapper div
// they are either WALKING or STATIONARY
// if walking they are assigned the walk class and
// a randomly generated walk speed (animation speed)
function generateWalkSpeed(){
  if (Math.random() > 0.5){
    return "walk-fast"
  }
  return "walk-slow"
}
function pickRandEle(arr){
  return arr[Math.floor(Math.random()*arr.length)]
}
function generatePokemon(){
  var pokemon = "rattata"
  var chance = Math.random()
  if (Math.random() < 0.5){
    pokemon = pickRandEle(pokemonCommon)
  }
  else if(Math.random() < 0.8){
    pokemon = pickRandEle(pokemonUncommon)
  }
  else if(Math.random() < 0.95){
    pokemon = pickRandEle(pokemonRare)
  }
  else{
    pokemon = pickRandEle(pokemonLegendary)
  }
  return pokemon + ".png"
}
function changePokeCounter(num){
  pokeCounterNum += num
  pokeCounter.text(pokeCounterNum)
}
function createPokemon(){
  if(pokeCounterNum > 0){
    pokeWrapper.append(`<img class = "pokemon walk ${generateWalkSpeed()}" src="images/${generatePokemon()}">`)
    changePokeCounter(-1)}
}

// minecraft
// each block has a counter
// 1 hit -> dirt (15%), 2 hits -> stone (65%)
// 3 hits -> iron (15%), 8 hits -> diamond (2%)
var pickaxePower = 1

var block1Counter = 2
var block2Counter = 2
var block3Counter = 2
var block4Counter = 2
var block5Counter = 2

var block1Bar = {max: 2, current:2};
var block2Bar = {max: 2, current:2};
var block3Bar = {max: 2, current:2};
var block4Bar = {max: 2, current:2};
var block5Bar = {max: 2, current:2};

block1 = $("#block-1")
block2 = $("#block-2")
block3 = $("#block-3")
block4 = $("#block-4")
block5 = $("#block-5")

function generateBlock(){
  var chance = Math.random()
  if(chance < 0.15){
    return {img: "images/dirtblock.png", hits: 2}
  }
  else if(chance < 0.8){
    return {img: "images/stoneblock.png", hits: 3}
  }
  else if(chance < 0.95){
    return {img: "images/ironblock.png", hits: 4}
  }
  else{
    return {img: "images/diamondblock.png", hits: 10}
  }
}

var dirt = 0
var stone = 0
var iron = 0
var diamond = 0

function addResource(src){
  console.log("called!")
  if(src == "images/stoneblock.png"){
    stone += 1
    $("#stone-counter").text(stone)
  }
  else if(src == "images/ironblock.png"){
    iron += 1
    $("#iron-counter").text(iron)
  }
  else if(src == "images/dirtblock.png"){
     dirt += 1
    $("#dirt-counter").text(dirt)
  }
  else if(src == "images/diamondblock.png"){
    diamond += 1
    $("#diamond-counter").text(diamond)
  }
}
block1.click(function(){
  if(block1Counter - pickaxePower > 0){
    block1Counter -= pickaxePower
    block1Bar.current -= pickaxePower
    $("#bar-1").css("width", Math.round((block1Bar.current/block1Bar.max)*100) + "%")
  }
  else{
    addResource($("#block-1").attr("src"))
    var newBlock = generateBlock()
    $("#block-1").attr("src", newBlock.img)
    block1Counter = newBlock.hits
    block1Bar.max = newBlock.hits
    block1Bar.current = newBlock.hits
    $("#bar-1").css("width", "100%")
  }
})
block2.click(function(){
  if(block2Counter - pickaxePower > 0){
    block2Counter -= pickaxePower
    block2Bar.current -= pickaxePower
    $("#bar-2").css("width", Math.round((block2Bar.current/block2Bar.max)*100) + "%")
    console.log($("#bar-2").attr("width"))
  }
  else{
    addResource($("#block-2").attr("src"))
    var newBlock = generateBlock()
    $("#block-2").attr("src", newBlock.img)
    block2Counter = newBlock.hits
    block2Bar.max = newBlock.hits
    block2Bar.current = newBlock.hits
    $("#bar-2").css("width", "100%")

  }
})
block3.click(function(){
  if(block3Counter - pickaxePower > 0){
    block3Counter -= pickaxePower
    block3Bar.current -= pickaxePower
    $("#bar-3").css("width", Math.round((block3Bar.current/block3Bar.max)*100) + "%")
    console.log($("#bar-3").attr("width"))
  }
  else{
    addResource($("#block-3").attr("src"))
    var newBlock = generateBlock()
    $("#block-3").attr("src", newBlock.img)
    block3Counter = newBlock.hits
    block3Bar.max = newBlock.hits
    block3Bar.current = newBlock.hits
    $("#bar-3").css("width", "100%")

  }
})
block4.click(function(){
  if(block4Counter - pickaxePower > 0){
    block4Counter -= pickaxePower
    block4Bar.current -= pickaxePower
    $("#bar-4").css("width", Math.round((block4Bar.current/block4Bar.max)*100) + "%")
    console.log($("#bar-4").attr("width"))
  }
  else{
    addResource($("#block-4").attr("src"))
    var newBlock = generateBlock()
    $("#block-4").attr("src", newBlock.img)
    block4Counter = newBlock.hits
    block4Bar.max = newBlock.hits
    block4Bar.current = newBlock.hits
    $("#bar-4").css("width", "100%")
  }
})
block5.click(function(){
  if(block5Counter - pickaxePower > 0){
    block5Counter -= pickaxePower
    block5Bar.current -= pickaxePower
    $("#bar-5").css("width", Math.round((block5Bar.current/block5Bar.max)*100) + "%")
    console.log($("#bar-5").attr("width"))
  }
  else{
    addResource($("#block-5").attr("src"))
    var newBlock = generateBlock()
    $("#block-5").attr("src", newBlock.img)
    block5Counter = newBlock.hits
    block5Bar.max = newBlock.hits
    block5Bar.current = newBlock.hits
    $("#bar-5").css("width", "100%")
  }
})

$("#pokeball-trigger").on("mouseover",
  function() {
    $("#pokeball-tooltip").show()}
).on("mouseout", function(){
  $("#pokeball-tooltip").hide()
})

$("#pokeball-trigger").click(function(){
  if(stone >= 5 && iron >= 1 && diamond >=1){
    stone -= 5
    iron -= 1
    diamond -= 1
    pokeCounterNum += 5
    updateValues()
  }
})

function updateValues(){
  $("#diamond-counter").text(diamond)
  $("#dirt-counter").text(dirt)
  $("#iron-counter").text(iron)
  $("#stone-counter").text(stone)
  pokeCounter.text(pokeCounterNum)
}
// TUTORIAL
$(".tutorial-wrapper").hide()
$(".tutorial-wrapper").click(function(){
  $(".tutorial-wrapper").hide()
})
$(".tutorial-button").click(function(){
  $(".tutorial-wrapper").show()
})

// RPG slime
var weaponPower = 1
var slimeDead = false;
$(".win-bar").hide()
var health = 500;
$(".rpg-enemy-slime").click(function(){
  if(health > 1){
    health -= weaponPower
    $(".health-bar-in").css("width", Math.round((health/500)*100) + "%")
  }
  else{
    $(".rpg-wrapper").hide()
    $(".win-bar").show()
    slimeDead = true;
    pickaxePower += 1;
  }

})
$("#icepotion-tooltip").hide()
$("#icepotion-trigger").on("mouseover", function(){
  $("#icepotion-tooltip").show()
}).on("mouseout", function(){
  $("#icepotion-tooltip").hide()
})
$("#icepotion-trigger").click(function(){
  if(diamond > 1 && dirt > 2){
    $(".rpg-enemy-slime").css("animation-play-state", "paused")
    $(".rpg-enemy-slime").addClass("frozen")
    diamond -= 1
    dirt -= 2
    weaponPower += 4
    updateValues()
    setTimeout(function(){
      $(".rpg-enemy-slime").css("animation-play-state", "running")
      $(".rpg-enemy-slime").removeClass("frozen")
      weaponPower = 1
    }, 5000)
  }
})

$("#firepotion-tooltip").hide()
$("#firepotion-trigger").on("mouseover", function(){
  $("#firepotion-tooltip").show()
}).on("mouseout", function(){
  $("#firepotion-tooltip").hide()
})
$("#firepotion-trigger").click(function(){
  if(iron > 3 && stone > 15){
    iron -= 3
    stone -= 15
    health -= 100
    updateValues()
    if(health > 1){
      health--
      $(".health-bar-in").css("width", Math.round((health/500)*100) + "%")
    }
    else{
      $(".rpg-wrapper").hide()
      $(".win-bar").show()
      pickaxePower += 1;
      slimeDead = true;
    }
  }
})


$("#slimescroll-tooltip").hide()
$("#slimescroll-trigger").on("mouseover", function(){
  $("#slimescroll-tooltip").show()
}).on("mouseout", function(){
  $("#slimescroll-tooltip").hide()
})
$("#slimescroll-trigger").click(function(){
  if(stone > 50 && dirt > 10 && diamond > 5 && slimeDead){
    stone -= 50
    diamond -= 5
    dirt -= 10
    updateValues()
    $(".rpg-wrapper").show()
    $(".win-bar").hide()
    health = 500;
    $(".health-bar-in").css("width", Math.round((health/500)*100) + "%")
  }
})
