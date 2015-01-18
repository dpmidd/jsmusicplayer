"use strict";

$('.container').on('click', '.fa-play', function() {

  // Class .fa that is not the thing that was clicked - pause removed and play added
  $('.fa').not(this).removeClass('fa-pause').addClass('fa-play');

  // For the thing that was clicked - play is removed and pause is added
  $(this).removeClass('fa-play').addClass('fa-pause');

  // For the thing that was clicked, grab the value of the data title attribute and use it in h1 header
  var info = $(this).data('title');
  $("h1").html("Now Playing: " + info);

  // For the thing that was clicked, grab the value of the data id attribute and use it to get the audio by id
  var id = $(this).data('id');
  var sound = document.getElementById(id);
  sound.load();
  sound.play();

  // For everything that did not have a play event, pause it
  document.addEventListener('play', function(current){
    var otherAudio = document.getElementsByTagName('audio');
    for(var i = 0, length = otherAudio.length; i < length; i++){
      if (otherAudio[i] != current.target){
        otherAudio[i].pause();
      }
    }
  }, true);

});

$('.container').on('click', '.fa-pause', function(){

  $(this).removeClass('fa-pause').addClass('fa-play');

  var id = $(this).data('id');

  $("h1").html("Select a Song!");

  var sound = document.getElementById(id);

  sound.pause();

});


jQuery.getJSON('data.json', function(tracks) {

  var $tracksTemplate = $('#tracksTemplate').html();

  var newHTML = Mustache.to_html($tracksTemplate, tracks);

  $('.tracks').html(newHTML);

});
