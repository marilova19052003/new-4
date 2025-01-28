document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("popover-button");
  const popover = document.getElementById("popover");

  button.addEventListener("click", () => {
    const rect = button.getBoundingClientRect();
    const popoverWidth = popover.offsetWidth;

    popover.style.left = `${rect.left + rect.width / 2 - popoverWidth / 2}px`;
    popover.style.top = `${rect.top - popover.offsetHeight - 10}px`;
    popover.style.display = "block";
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("popover-button");
  const popover = document.getElementById("popover");

  button.addEventListener("click", () => {
    const rect = button.getBoundingClientRect();
    const popoverWidth = popover.offsetWidth;

    popover.style.left = `${rect.left + rect.width / 2 - popoverWidth / 2}px`;
    popover.style.top = `${rect.top - popover.offsetHeight - 10}px`;
    popover.style.display = "block";
  });
});
