# INKR FEATURES CHECKLIST - Mark as I go
This checklist outlines the current and upcoming features for the Inkr writing editor prototype.

---

## ✅ Core Editor Setup
- [x] Contenteditable editor box
- [x] CSS-styled for full-screen writing
- [x] Word processor look & feel (centered layout)
- [x] Prevent textarea resizing
- [x] Auto-focus on load
- [x] Tab key inserts spaces instead of moving focus
- [x] Placeholder for empty editor
- [x] Prevent weird selection issues when clicking empty space

---

## 🔤 Inline Formatting Features (Planned)
- [ ] **Bold** selected text (via button or shortcut)
- [ ] **Italic** selected text (via button or shortcut)
- [ ] **Underline** selected text (optional)
- [ ] Keyboard shortcuts:  
  - [ ] Ctrl/Cmd + B = Bold  
  - [ ] Ctrl/Cmd + I = Italic  
  - [ ] Ctrl/Cmd + U = Underline  

---

## 🎯 Floating Format Toolbar
- [ ] Appears when text is selected
- [ ] Auto-positions above selection
- [ ] Contains:
  - [ ] Bold button
  - [ ] Italic button
  - [ ] Underline button
  - [ ] Clear formatting
- [ ] Disappears when nothing is selected

---

## 📊 Writing Metrics
- [ ] Word count tracker (live)
- [ ] Character count
- [ ] Estimated read time
- [ ] Session timer (optional)

---

## 💡 Extra Writing Utilities (Later)
- [ ] Spellcheck toggle
- [ ] Grammar checker integration (e.g., Grammarly API or LanguageTool)
- [ ] Track paragraphs and scene breaks
- [ ] Dark mode toggle
- [ ] Focus/distraction-free mode (hide everything except text)
- [ ] Auto-save to local storage
- [ ] Export options (DOCX, PDF, plain text, Markdown)

---

## 🧩 Long-Term Features
- [ ] Drag-and-drop scenes/chapters
- [ ] Note-taking panel
- [ ] Sidebar outline view
- [ ] Character manager
- [ ] Goal tracker (daily words, chapters, streaks)
- [ ] Commenting system (like Google Docs or Figma)

---

## 🔐 Accessibility & Usability
- [ ] Works with screen readers
- [ ] Keyboard navigable
- [ ] Works on tablet/mobile
- [ ] No login required to start writing
- [ ] Optional sign-in to save or sync projects (future)

---

## 💾 Save & Sync
- [ ] Local autosave
- [ ] Optional sign-in to sync across devices (future)
- [ ] Export to GitHub/Gist or backup to cloud (Google Drive, Dropbox, etc.)

---

## 🧪 In-Progress Dev Features (Current Sprint)
- [ ] Floating formatting toolbar with `getSelection()`
- [ ] Apply formatting using `document.execCommand()` or modern Range API
- [ ] Responsive layout tuning
- [ ] Keyboard shortcut handling

---

This checklist will evolve as development continues. Star this file if you're contributing or tracking features!
