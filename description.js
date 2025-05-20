$(document).ready(function() {
    // Like button functionality
    $('.love-button').click(function() {
        $(this).toggleClass('liked');
        const likeCount = $(this).find('.like-count');
        let count = parseInt(likeCount.text());
        likeCount.text($(this).hasClass('liked') ? count + 1 : count - 1);
    });
    
    // Notify button functionality
    $('.notify-button').click(function() {
        $(this).toggleClass('notified');
    });
    
    // Read More button functionality
    $('.read-more-btn').click(function(e) {
        e.preventDefault();
        $('#description-modal').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    
    // Close modal
    $('.close-modal').click(function() {
        $('#description-modal').removeClass('active');
        $('body').css('overflow', 'auto');
    });
    
    // Close modal when clicking outside
    $('#description-modal').click(function(e) {
        if ($(e.target).is('#description-modal')) {
            $('#description-modal').removeClass('active');
            $('body').css('overflow', 'auto');
        }
    });
    
    // Smooth scrolling for issue lists (desktop)
    $('.issues-list').on('wheel', function(e) {
        if ($(window).width() > 768) {
            e.preventDefault();
            this.scrollLeft += e.originalEvent.deltaY;
        }
    });
});