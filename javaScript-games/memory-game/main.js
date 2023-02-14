// document.querySelector('.control-buttons span').addEventListener('click',()=>{
//   let name = prompt('what is your name ? ') ;

//   if (name ==null || name == ""){
//     document.querySelector('.name span').innerHTML = "unknown" ;  
//   }
//   else{
//   document.querySelector('.name span').innerHTML = name ;
//   }
// document.querySelector('.control-buttons').remove()
// });

document.querySelector('.control-buttons').remove()
let blocksContainer = document.querySelector('.memory-game-blocks')

let blocks = Array.from(blocksContainer.children)

let orderRange = [...blocks.keys()]

// console.log(orderRange)
shuffle(orderRange)
// console.log(orderRange)

blocks.forEach((block,index)=>{
  block.style.order = orderRange[index]

  block.addEventListener('click',()=>{
    flipBlock(block)
  })
  
})

function flipBlock(selectedBlock){
  selectedBlock.classList.add('is-flipped');

  let allFlippedBlock = blocks.filter(block=> block.classList.contains('is-flipped'))
  console.log(allFlippedBlock)
  if(allFlippedBlock.length === 2){

    stopClicking()

  }
}

function stopClicking(){
  blocksContainer.classList.add('no-clicking')

  setTimeout(()=>{

    blocksContainer.classList.remove('no-clicking')
  },1000)
}

// Check Matched Block
function checkMatchedBlocks(firstBlock, secondBlock) {

  let triesElement = document.querySelector('.tries span');

  if (firstBlock.dataset.technology === secondBlock.dataset.technology) {

    firstBlock.classList.remove('is-flipped');
    secondBlock.classList.remove('is-flipped');

    firstBlock.classList.add('has-match');
    secondBlock.classList.add('has-match');

    document.getElementById('success').play();

  } else {

    triesElement.innerHTML = parseInt(triesElement.innerHTML) + 1;

    setTimeout(() => {

      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');

    }, duration);

    document.getElementById('fail').play();

  }

}

function shuffle(array){
  let current =array.length,
    temp,
    random

  while (current > 0){
    random = Math.floor(Math.random() * current);

    current--;

    temp = array[current]

    array[current] = array[random]

    array[random] = temp
  }

  return array
}