document.addEventListener('DOMContentLoaded', () => {
    // Show initial pop-ups
    const messages = [
        "Welcome to the Love Experience!",
        "Get ready to embark on a journey of love and romance.",
        "Let's sprinkle some magic into your day!"
    ];
    
    let index = 0;
    const showPopup = () => {
        if (index < messages.length) {
            alert(messages[index]);
            index++;
            setTimeout(showPopup, 1000); // 1 second delay between pop-ups
        } else {
            showTypewriterMessage();
        }
    };

    const showTypewriterMessage = () => {
        const typewriterText = "Hello! I'm here to remind you how beautiful love can be. Take a moment to cherish the special connections in your life.";
        const typewriterElement = document.getElementById('typewriter');
        let i = 0;

        const type = () => {
            if (i < typewriterText.length) {
                typewriterElement.innerHTML += typewriterText.charAt(i);
                i++;
                setTimeout(type, 50); // Type speed
            } else {
                setTimeout(showImages, 1000); // Wait before showing images
            }
        };
        type();
    };

    const showImages = () => {
        const imageContainer = document.getElementById('imageContainer');
        const images = [
            'image1.jpg', 'image2.jpg', 'image3.jpg', // Add your image paths
            // ... add more images up to 20
        ];

        let imgIndex = 0;

        const displayImage = () => {
            if (imgIndex < images.length) {
                const img = document.createElement('img');
                img.src = images[imgIndex];
                imageContainer.appendChild(img);
                img.style.display = 'block'; // Show the image

                imgIndex++;
                setTimeout(() => {
                    img.style.display = 'none'; // Hide the image after a while
                    displayImage();
                }, 2000); // Show each image for 2 seconds
            } else {
                setTimeout(showPickupLines, 1000);
            }
        };
        displayImage();
    };

    const showPickupLines = () => {
        const pickupLines = [
            "Do you believe in love at first sight, or should I walk by again?",
            "Are you a magician? Because whenever I look at you, everyone else disappears.",
            "If you were a vegetable, you’d be a cute-cumber!",
            "Can you lend me a kiss? I promise I’ll give it back.",
            "Is your name Google? Because you have everything I’m searching for."
        ];

        const pickupLinesContainer = document.getElementById('pickupLines');
        pickupLines.forEach((line, idx) => {
            setTimeout(() => {
                const lineElement = document.createElement('div');
                lineElement.textContent = line;
                pickupLinesContainer.appendChild(lineElement);
            }, idx * 3000); // Show each line every 3 seconds
        });

        setTimeout(showFinalPopup, pickupLines.length * 3000);
    };

    const showFinalPopup = () => {
        const finalPopup = document.getElementById('finalPopup');
        finalPopup.textContent = "Will you be my girlfriend?";
        finalPopup.style.display = 'block';
    };

    // Start the process
    showPopup();
});
