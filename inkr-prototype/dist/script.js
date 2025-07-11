const editor = document.querySelector('.editor');

// Automatically focus when the page loads
window.addEventListener('DOMContentLoaded', () => {
  editor.focus();
});

// Re-focus editor if you accidentally click outside then hit arrow keys or tab
window.addEventListener('keydown', (e) => {
  const active = document.activeElement;
  if (active !== editor && ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
    e.preventDefault();
    editor.focus();
  }
});

//Hitting tab will make a tab indent, or a /t
editor.addEventListener('keydown', function(e) {
  if (e.key === 'Tab') {
    e.preventDefault();

    // Insert 4 spaces or tab
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);

    const tabNode = document.createTextNode('    ');
    range.insertNode(tabNode);

    // Move cursor after inserted tab
    range.setStartAfter(tabNode);
    range.setEndAfter(tabNode);
    selection.removeAllRanges();
    selection.addRange(range);
  }
});

// Click anywhere in the editor to start Typing
editor.addEventListener('click', (e) => {
  const selection = window.getSelection();

  // If there's no text node selected (i.e. clicked on empty space), create one
  if (selection.rangeCount === 0 || selection.isCollapsed && selection.anchorNode === editor) {
    const range = document.createRange();
    const textNode = document.createTextNode('\u200B'); // invisible space
    editor.appendChild(textNode);
    range.setStart(textNode, 1);
    range.collapse(true);
    selection.removeAllRanges();
    selection.addRange(range);
  }
});