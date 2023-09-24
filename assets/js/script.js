
$(function () {
    $('.iconButton').click(function () {
        const $this = $(this);
        const icon = $this.find('i');
        if (icon.hasClass('fa-angles-down')) {
            icon.removeClass('fa-angles-down').addClass('fa-angles-up');
        } else {
            icon.removeClass('fa-angles-up').addClass('fa-angles-down');
        }
    });
});



// اظهار الزر عند التمرير لأسفل الصفحة
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollButton").style.display = "block";
    } else {
        document.getElementById("scrollButton").style.display = "none";
    }
};

// التمرير إلى أعلى الصفحة عند النقر على الزر
function scrollToTop() {
    document.body.scrollTop = 0; // لأقدم إصدارات من المستعرضات
    document.documentElement.scrollTop = 0; // لأحدث إصدارات من المستعرضات
}
