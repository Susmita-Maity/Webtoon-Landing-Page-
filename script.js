var typed= new Typed(".text",{
    strings: ["Welcome to the ","Lore Olympus Webtoon: Jaw Dropping Seen on Media."],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'

}
function hideSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}


