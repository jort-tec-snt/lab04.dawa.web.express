document.addEventListener("DOMContentLoaded", () => {
    const sidenavs = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenavs, { edge: "left" });

    const selects = document.querySelectorAll("select");
    M.FormSelect.init(selects);
});
