document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
            <iframe class="contact__iframe" frameborder="0" scrolling="0" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12167.559326475839!2d-3.705960133296931!3d40.42215861115423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289a4a865227%3A0x98278b3a144a86f1!2sPuerta%20de%20Alcal%C3%A1!5e0!3m2!1sen!2sus!4v1690035280797!5m2!1sen!2sus"></iframe>
        `;
    }, 500);
});