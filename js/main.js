var $creatures = [$('.mammals'), $('.plesiosaurs'), $('.dinosaurs'), $('.pterosaurs')];

$creatures.forEach(function (creature) {
  creature.waypoint(function (direction) {
    if (direction == 'down') {
      creature.addClass('js-creature-animate');
    } else {
      creature.removeClass('js-creature-animate');
    }
  }, {offset: '50%'});
});
