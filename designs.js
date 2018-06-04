// Udacity Scholarship 2017: Bruno Mazza

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

// Resets the grid
function resetGrid() {
  $("#pixel_canvas").empty();
}

const RESET_BUTTON = $("input[type = 'reset']");
RESET_BUTTON.click(function(r) {
  r.preventDefault();
  resetGrid();
});

// Selects Reset Color button
const RESET_COLOR = $("#reset_color");
RESET_COLOR.on('click', function() {
  $("#pixel_canvas td").removeAttr("bgcolor");
})

// When size is submitted by the user, call makeGrid() and prevents browser default behaviours
SUBMIT_BUTTON.click(function(f) {
  f.preventDefault();
  makeGrid();
});

// Extra: Sound effects
function PlaySound(soundobj) {
  const thissound = document.getElementById(soundobj);
  thissound.play();
}

function StopSound(soundobj) {
  const thissound = document.getElementById(soundobj);
  thissound.pause();
  thissound.currentTime = 0;
}

// Toggle music button
function toggleMusic() {
  const audioElem = document.getElementById("rancorEgg");
  if (audioElem.paused) audioElem.play();
  else audioElem.pause();
}
