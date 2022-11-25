
document.getElementById('john').addEventListener('focus', function(event) {
  event.stopPropagation();
  var elements = document.getElementById('john').getElementsByClassName('important');
  for (var i = 0; i < elements.length; i++) {
    elements[i].classList.add('shape');
  }
}, false);