window.onload = function onload() {
    let isToggle = false;
    
    document.querySelector('.toggle').addEventListener('click', function onClick() {
        let val = '';
        
        if(!isToggle) {
            val = 'block';
        } else {
            val = 'none';
        }

        isToggle = !isToggle;
        document.querySelector('.nav').style.display = val;
    });
}