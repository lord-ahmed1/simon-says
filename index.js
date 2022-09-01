var z=0;
var colors=$('.btn');
var level=1;
var sequence=[];
var i=0;
var path_firstpart=''
var path_ending='.mp3'
function play_sound(color){var audio = new Audio(path_firstpart+color+path_ending); audio.play()}

function add_sequence(array,colors){
  setTimeout(function(){
  random_num=Math.floor(Math.random()*(colors.length))
  array.push(colors[random_num]);
  button=colors[random_num]
  play_sound(button.getAttribute('id'));
  button.classList.add('pressed');
  setTimeout(function(){button.classList.remove('pressed');},200)},1500)
  return array
}



function main_program(){
  console.log(sequence)

console.log('z '+z)

 sequence=add_sequence(sequence,colors);



 $('h1').text('level '+level);

 $('.btn').on('click',function(event){var clicked=event.currentTarget;
   color=clicked.getAttribute('id')
   console.log(color)
   play_sound(color)
   clicked.classList.add('pressed');
   setTimeout(function(){clicked.classList.remove('pressed');},100);
 if (clicked==sequence[i] && i<level){i++;}
 else if(clicked !== sequence[i]){
   play_sound('wrong');
   $('body').addClass('game-over')
   setTimeout(function(){document.querySelector('body').classList.remove('game-over');},100);

   z=2;


if (z==2){
  z=1;
  sequence=[];

   $('h1').text('Game Over, Press Any Key to Restart');
   $(document).on('keydown',function(){
     i=0;
   sequence=add_sequence(sequence,colors);
   level=1;
   $('h1').text('level '+level);
   $(document).off('keydown');
})

}

 }

 if(i==level){sequence=add_sequence(sequence,colors); i=0; level++;$('h1').text('level '+level);setTimeout(function(){console.log('next level')},3000);}


 });
}

$(document).on('keydown',function(e){if((e.key=='a'|e.key=='A') && z==0){z=1;main_program()} if(z==2){z=1;main_program()}  })
