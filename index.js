const btn = document.getElementById('shareButton');
const share = document.getElementById('share');

btn.addEventListener('click', () => {
    // console.log(share);
    share.classList.toggle('hidden');
    btn.classList.toggle('active');
});
