var storageKey,storedTheme;storageKey="theme",storedTheme=localStorage.getItem(storageKey)||"dark",document.documentElement.setAttribute("data-theme",storedTheme),localStorage.setItem(storageKey,storedTheme);