document.addEventListener('DOMContentLoaded', () => {
    const { jsPDF } = window.jspdf;

    // Function to generate and download PDF
    const generatePDF = () => {
        const doc = new jsPDF();
        
        // Add content to the PDF
        doc.setFontSize(22);
        doc.text("Nipun Rawal", 20, 30);
        doc.setFontSize(16);
        doc.text("Full-Stack Web Developer", 20, 40);
        doc.setFontSize(14);

        doc.text("Personal Information", 20, 60);
        doc.text("Name: Nipun Rawal", 20, 70);
        doc.text("Age: 20", 20, 80);
        doc.text("Email: nrawal@email.com", 20, 90);
        doc.text("Phone: 177 888 0560", 20, 100);

        doc.text("Skills", 20, 120);
        doc.text("- HTML/CSS", 20, 130);
        doc.text("- JavaScript", 20, 140);
        doc.text("- React", 20, 150);
        doc.text("- Node.js", 20, 160);
        doc.text("- SQL", 20, 170);

        doc.text("Education", 20, 190);
        doc.text("Diploma in Computer Science", 20, 200);
        doc.text("Guru Gobind Singh Polytechnic, 2020-2023", 20, 210);
        doc.text("B.Tech in Computer Science", 20, 230);
        doc.text("MIT-WPU, 2023-2026", 20, 240);

        doc.text("Work Experience", 20, 260);
        doc.text("XYZ Company", 20, 270);
        doc.text("Position: Software Developer", 20, 280);
        doc.text("Duration: 2026-2028", 20, 290);
        doc.text("- Developed and maintained web applications using React, Node.js, and SQL", 20, 300);
        doc.text("- Implemented responsive design using CSS and media queries", 20, 310);
        doc.text("- Collaborated with cross-functional teams to deliver high-quality software products", 20, 320);

        doc.text("ABC Company", 20, 340);
        doc.text("Position: Web Developer", 20, 350);
        doc.text("Duration: 2026-2028", 20, 360);
        doc.text("- Created and maintained websites using HTML, CSS, and JavaScript", 20, 370);
        doc.text("- Optimized website performance and user experience using best practices", 20, 380);
        doc.text("- Worked with clients to understand their needs and deliver custom solutions", 20, 390);

        // Save the PDF
        doc.save('Nipun_Rawal_CV.pdf');
    };

    // Add event listener to the button
    const downloadButton = document.getElementById('download-cv');
    if (downloadButton) {
        downloadButton.addEventListener('click', generatePDF);
    }
});
