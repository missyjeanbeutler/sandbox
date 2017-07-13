var hello = document.getElementsByClassName('hello')
var you = document.getElementById("you");

// TweenLite.to(you, 2, {left:"440px", ease:Bounce.easeOut, delay: 1});

var tl = new TimelineLite()

tl.to(you, 4, {backgroundColor: 'blue'})
  .to(hello, 4, {backgroundColor: 'red'}, 0)
  .to(you, 2, {left:"440px", ease:Bounce.easeOut}, 0.5)
  .to(hello, 2, {left: '440px', ease:Bounce.easeOut}, 1)
  .add('end', 2) // label that you can reference as the starting time for future tweens
  .to(you, 2, {left: '0px', ease:Bounce.easeOut}, 'end')

