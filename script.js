//your JS code here. If required.
document.addEventListener('DOMContentLoaded', (event) => {
    const squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            squares.forEach(s => {
                if (s !== square) {
                    s.style.backgroundColor = '#6F4E37'; // Coffee
                }
            });
        });

        square.addEventListener('mouseout', () => {
            squares.forEach(s => {
                if (s !== square) {
                    s.style.backgroundColor = '#E6E6FA'; // Lavender
                }
            });
        });
    });
});
