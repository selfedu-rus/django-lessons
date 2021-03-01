function toTranslit(text) {
    return text.replace(/([а-яё])|([\s_-])|([^a-z\d])/gi,
    function (all, ch, space, words, i) {
        if (space || words) {
            return space ? '-' : '';
        }
        var code = ch.charCodeAt(0),
            index = code == 1025 || code == 1105 ? 0 :
                code > 1071 ? code - 1071 : code - 1039,
            t = ['yo', 'a', 'b', 'v', 'g', 'd', 'e', 'zh',
                'z', 'i', 'y', 'k', 'l', 'm', 'n', 'o', 'p',
                'r', 's', 't', 'u', 'f', 'h', 'c', 'ch', 'sh',
                'shch', '', 'y', '', 'e', 'yu', 'ya'
            ]; 
        return t[index];
    });
}
