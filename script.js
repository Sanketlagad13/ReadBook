function likeBook(el) {
    el.classList.toggle("liked");
}

function openBook(title, desc) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = desc;

    let modal = new bootstrap.Modal(document.getElementById('bookModal'));
    modal.show();
}

function addToRead(bookName) {
    let list = document.getElementById("readList");

    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between";

    li.innerHTML = `
        ${bookName}
        <button class="btn btn-danger btn-sm" onclick="this.parentElement.remove()">Remove</button>
    `;

    list.appendChild(li);
}

function searchBook() {
    let input = document.getElementById("search").value.toLowerCase();
    let books = document.getElementsByClassName("book");

    for (let i = 0; i < books.length; i++) {
        let name = books[i].getAttribute("data-name");

        books[i].style.display = name.includes(input) ? "block" : "none";
    }
}