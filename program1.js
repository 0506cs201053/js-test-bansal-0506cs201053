function isValid(s) {
    const stack = [];
    const opening = ['(', '{', '['];
    const closing = [')', '}', ']'];
  
    for (let i = 0; i < s.length; i++) {
      if (opening.includes(s[i])) {
        stack.push(s[i]);
      } else if (closing.includes(s[i])) {
        const lastOpening = stack.pop();
        if (
          (s[i] === ')' && lastOpening !== '(') ||
          (s[i] === '}' && lastOpening !== '{') ||
          (s[i] === ']' && lastOpening !== '[')
        ) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  console.log(isValid("^{'}"));
  console.log(isValid(":=^{-}000^{-}"));
  console.log(isValid("^{\\neg}O^{\\circ}"));
