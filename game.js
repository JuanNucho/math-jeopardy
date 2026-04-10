let score = 0;

const board = document.getElementById("board");

categories.forEach((cat, i) => {
  const catDiv = document.createElement("div");
  catDiv.className = "category";
  catDiv.innerText = cat.name;
  board.appendChild(catDiv);

  cat.questions.forEach((q, j) => {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.innerText = `$${q.value}`;

    tile.onclick = () => showQuestion(i, j, tile);

    board.appendChild(tile);
  });
});

function showQuestion(catIndex, qIndex, tile) {
  const modal = document.getElementById("questionModal");
  const questionText = document.getElementById("questionText");
  const answersDiv = document.getElementById("answers");

  const q = categories[catIndex].questions[qIndex];

  questionText.innerText = q.q;
  answersDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;

    btn.onclick = () => {
      if (i === q.answer) {
        score += q.value;
      } else {
        score -= q.value;
      }

      document.getElementById("score").innerText = "Score: $" + score;
      modal.classList.add("hidden");
      tile.innerText = "";
      tile.onclick = null;
    };

    answersDiv.appendChild(btn);
  });

  modal.classList.remove("hidden");
}
