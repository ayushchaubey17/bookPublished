function StringChallenge(str) {
    const openingTags = new Set(['<b>', '<i>', '<em>', '<div>', '<p>']);
    const closingTags = new Set(['</b>', '</i>', '</em>', '</div>', '</p>']);
    const tagStack = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '<') {
            const endIndex = str.indexOf('>', i);
            if (endIndex !== -1) {
                const tag = str.substring(i, endIndex + 1);
                if (openingTags.has(tag)) {
                    tagStack.push(tag);
                } else if (closingTags.has(tag)) {
                    const matchingOpeningTag = '<' + tag.substring(2);
                    if (tagStack.length === 0 || tagStack.pop() !== matchingOpeningTag) {
                        return tag.substring(1, tag.length - 1); // Exclude '/' character
                    }
                }
                i = endIndex;
            }
        }
    }

    // Check if there are remaining opening tags in the stack
    if (tagStack.length > 0) {
        return tagStack.pop().substring(1, tagStack.pop().length - 1);
    }

    return 'true';
}

// Test cases
console.log(StringChallenge("<div><div><b></b></div></p>")); // Output: div
console.log(StringChallenge("<div>abc</div><p><em> <i>test test test</b></em></p>")); // Output: i
