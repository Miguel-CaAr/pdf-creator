function printPDF() {
  const btn = document.querySelector(".btn").addEventListener("click", () => {
    window.print();
  });
}
printPDF();
