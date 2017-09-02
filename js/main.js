var $creatures = [$('.mammals'), $('.plesiosaurs'), $('.dinosaurs'), $('.pterosaurs')];

$creatures.forEach(function (item) {
  item.waypoint(function (direction) {
    item.addClass('js-creature-animate');
  }, {offset: '50%'});
});
