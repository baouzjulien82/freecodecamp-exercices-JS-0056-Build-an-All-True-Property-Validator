function truthCheck(collection, pre) {
  for (let elmt of collection) {
    if (!elmt[pre]) {
      return false;
    }
  }
  return true;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
