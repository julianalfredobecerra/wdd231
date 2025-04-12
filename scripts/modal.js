let courseDetails = document.querySelector("#course-details");

function displayCourseDetails(course) {
    courseDetails.innerHTML = "";
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(", ")}</p>`;\

    const closeModal = courseDetails.querySelector("#closeModal");

    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.closest();
    });
}

courseDiv.addEventListener('click', () => {
    displayCourseDetails(course);
});