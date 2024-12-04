document.addEventListener("DOMContentLoaded", () => {
    const downloadButton = document.getElementById("downloadresume");
    const previewContent = document.getElementById("previewContent");

    downloadButton.addEventListener("click", () => {
        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const summary = document.getElementById("summary").value.trim();
        const experience = document.getElementById("experience").value.trim();
        const education = document.getElementById("education").value.trim();

        // Ensure at least the name is provided
        if (!name) {
            alert("Please enter your name to generate the resume.");
            return;
        }

        // Format the resume
        const resumeContent = `
        ===========================
                    RESUME
        ===========================

        Name: ${name}
        Email: ${email || "N/A"}
        Phone: ${phone || "N/A"}

        ---------------------------
        Summary:
        ---------------------------
        ${summary || "N/A"}

        ---------------------------
        Experience:
        ---------------------------
        ${experience || "N/A"}

        ---------------------------
        Education:
        ---------------------------
        ${education || "N/A"}

        ===========================
        `;

        // Update the preview section on the browser
        previewContent.textContent = resumeContent;

        // Create a Blob for download
        const blob = new Blob([resumeContent], { type: "text/plain" });

        // Create a download link
        const downloadLink = document.createElement("a");
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = `${name.replace(/\s+/g, "_")}_Resume.txt`;
        document.body.appendChild(downloadLink);
        downloadLink.click(); // Trigger the download
        document.body.removeChild(downloadLink);
    });
});


// document.addEventListener("DOMContentLoaded", () => {
//     const downloadButton = document.getElementById("DownloadResume");
//     const previewContent = document.getElementById(previewContent)
//     downloadButton.addEventListener("click", () => {
//         // Get forms Values
//         const name = document.getElementById("name").value.trim();
//         const email = document.getElementById("email").value.trim();
//         const phone = document.getElementById("phone").value.trim();
//         const summary = document.getElementById("summary").value.trim();
//         const experience = document.getElementById("experience").value.trim();
//         const education = document.getElementById("education").value.trim();
//         if(!name){
//             alert("Please enter your name to generate resume");
//             return;
//         }

//         // Format the resume
//         const resumeContent = `
//         ==========================
//         ====== Resume 
//         ==========================
//         ======
//         Name:${name}
//         Email:${email || "N/A"}
//         Phone: ${phone || "N/A"}
//         Summary: ${summary || "N/A"}
//         Experience: ${experience || "N/A"}
//         Education: ${education || "N/A"}
//         `;

 
//     //   Updating Preview Section
//     previewContent.textContent = resumeContent;
//     // Creating a Blob for download
//           const blob = newBlob([resumeContent], {type: "text/plain"});
//           //Creating a Download link
//           const downloadLink = document.createElement("a");
//           downloadLink.href = URL.createObjectURL(blob);
//           downloadLink.download = `${name.replace()}`;
//           document.body.appendChild(doownloadlink);
//           document.body.removeChild(downloadLink)
//     })
// })
