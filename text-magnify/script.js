document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Grab both magnifiers
    const mag1 = document.querySelectorAll('.magnifier')[0];
    const mag2 = document.querySelectorAll('.magnifier')[1];

    // 2. Grab the text tracks inside the second magnifier
    const mag2Tracks = mag2.querySelectorAll('.magnify-track');

    // 3. Calculate the physical distance between the left edges of the two lenses
    const distanceBetweenLenses = mag2.getBoundingClientRect().left - mag1.getBoundingClientRect().left;

    // 4. Shift the text inside the second magnifier to the left by that exact distance.
    // This perfectly aligns the text across both lenses as if they are one continuous line!
    gsap.set(mag2Tracks, {
        x: -distanceBetweenLenses
    });

    // 5. Animate everything together
    // GSAP will animate the percentages perfectly while respecting our pixel shift from Step 4.
    const allTracks = document.querySelectorAll(".innerText");
    
    gsap.to(allTracks, {
        xPercent: -100,     // Move exactly 100% of their own width
        ease: "none",       // Keep a constant linear speed
        duration: 15,       // Adjust speed here
        repeat: -1          // Infinite loop
    });

});