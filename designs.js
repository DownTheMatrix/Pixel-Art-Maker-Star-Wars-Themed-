// Udacity Scolarship 2017: Bruno Mazza

// Grid building (columns=width; rows=height)
function makeGrid() {
  const GRID = $("#pixel_canvas");

  // Select size input
  const COLUMNS = $("#input_width").val();
  const ROWS = $("#input_height").val();

  // Clears the table
  GRID.children().remove();

  // Limit the grid size to avoid browser          crash
  if (COLUMNS <= 50 && ROWS <= 50) {
    // Adds new rows
    for (let i = 0; i < ROWS; i++) {
      GRID.append("<tr></tr>");

      // Adds new columns
      for (let j = 0; j < COLUMNS; j++)
        GRID.children()
          .last()
          .append("<td></td>");
    }
  }

  tile = GRID.find("td");

  // Allows the interaction with the grid
  tile.click(function() {
    // Selects color input
    let colorPicker;
    color = $("#colorPicker").val();
    $(this).attr("bgcolor", color);
  });
  // Erases single cell color
  tile.on("dblclick", function() {
    let colorPicker;
    color = $("#colorPicker").val();
    $(this).removeAttr("bgcolor");
  });

  // Executes the action on the table and   allows  the colour selection
  GRID.on("click", "td", function() {
    const COLOR = $("input[type = 'color']#colorPicker").val();
    $(this).attr("background-color", COLOR);
  });
}

// Selects Submit button
const SUBMIT_BUTTON = $("input[type = 'submit']");

// Selects Reset Grid button
function resetGrid() {
  const RESET_BUTTON = $("input[type = 'reset']");
  $("#pixel_canvas").empty();
}

// Selects Reset Color button
function resetColor() {
  const RESET_COLOR = $("#reset_color");
  $("#pixel_canvas td").removeAttr("bgcolor");
}

// When size is submitted by the user, call makeGrid() and prevents browser default behaviours
SUBMIT_BUTTON.click(function(f) {
  f.preventDefault();
  makeGrid();
});

RESET_BUTTON.click(function(r) {
  r.preventDefault();
  resetGrid();
});

// Extra: Sound effects
function PlaySound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.play();
}

function StopSound(soundobj) {
  var thissound = document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}

// Toggle music button
function toggleMusic() {
  var audioElem = document.getElementById("rancorEgg");
  if (audioElem.paused) audioElem.play();
  else audioElem.pause();
}

// Right-click erase color function
