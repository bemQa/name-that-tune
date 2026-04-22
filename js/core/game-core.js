(function initGameCore(global) {
  function esc(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function padTime(value) {
    if (!Number.isFinite(value) || value < 0) return "0:00";
    var minutes = Math.floor(value / 60);
    var seconds = Math.floor(value % 60);
    return String(minutes) + ":" + String(seconds).padStart(2, "0");
  }

  function normalizePlayers(raw) {
    var unique = new Set();
    String(raw || "")
      .split(",")
      .map(function (part) { return part.trim(); })
      .filter(Boolean)
      .forEach(function (name) { unique.add(name); });
    return Array.from(unique);
  }

  function hasGameProgress(state, totalCells) {
    var hasScores = Object.values(state.scores || {}).some(function (value) { return Number(value) > 0; });
    var hasGuesses = Object.values(state.guessedCounts || {}).some(function (value) { return Number(value) > 0; });
    return hasScores || hasGuesses || Number(state.remaining) < Number(totalCells);
  }

  function debounce(fn, delayMs) {
    var timerId = null;
    return function debounced() {
      var args = arguments;
      clearTimeout(timerId);
      timerId = setTimeout(function () {
        fn.apply(null, args);
      }, delayMs);
    };
  }

  function setCellDisabled(cell, isDisabled) {
    cell.classList.toggle("disabled", isDisabled);
    cell.disabled = isDisabled;
    cell.setAttribute("aria-disabled", isDisabled ? "true" : "false");
  }

  global.GameCore = {
    esc: esc,
    padTime: padTime,
    normalizePlayers: normalizePlayers,
    hasGameProgress: hasGameProgress,
    debounce: debounce,
    setCellDisabled: setCellDisabled
  };
})(window);
