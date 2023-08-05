function countWords() {
    var text = document.getElementById("textArea").value;
    var words = text.split(/\s+/).filter(Boolean);
    document.getElementById("count").textContent = "Word Count: " + words.length;
}
