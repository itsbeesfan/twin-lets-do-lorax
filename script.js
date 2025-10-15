window.addEventListener("DOMContentLoaded", () => {
    function show(sectionId) {
        document.querySelectorAll("section").forEach(s => s.classList.remove("active"));
        const target = document.getElementById(sectionId);
        if (!target) {
            console.warn(`section "${sectionId}" not found`);
            return;
        }
        target.classList.add("active");
        document.body.style.overflowY = sectionId === "album" ? "auto" : "hidden";
    }

    document.getElementById("yes").onclick = () => show("yes-section");
    document.getElementById("no").onclick = () => show("no-section");


    document.getElementById("wait").onclick = () => show("entry");
    document.getElementById("wait2").onclick = () => show("entry");
    })