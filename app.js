"use strict";

$('.container').on('click', '.fa-play', function() {
  $('.fa').not(this).removeClass('fa-stop').addClass('fa-play');
  $(this).removeClass('fa-play').addClass('fa-stop');
  var info = $(this).data('title');
  $("h1").html("Now Playing: " + info);
  var id = $(this).data('id');
  var sound = document.getElementById(id);
  sound.load();
  sound.play();

  document.addEventListener('play', function(current){
    var otherAudio = document.getElementsByTagName('audio');
    for(var i = 0, length = otherAudio.length; i < length; i++){
      if (otherAudio[i] != current.target){
        otherAudio[i].pause();
      }
    }
  }, true);
});

$('.container').on('click', '.fa-stop', function(){
  $(this).removeClass('fa-stop').addClass('fa-play');
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
