$(document).ready(function() {
    // Toggle search bar
    $('#search-button').click(function() {
        $('.search-container').toggleClass('active');
        if ($('.search-container').hasClass('active')) {
            $('#search-input').focus();
        }
    });
    
    // Close search when clicking outside
    $(document).click(function(event) {
        if (!$(event.target).closest('.search-container').length) {
            $('.search-container').removeClass('active');
        }
    });
    
    // Settings modal functionality
    $('.settings-button').click(function(e) {
        e.preventDefault();
        $('#settings-modal').addClass('active');
        $('body').css('overflow', 'hidden');
    });
    
    $('.close-settings').click(function() {
        $('#settings-modal').removeClass('active');
        $('body').css('overflow', 'auto');
    });
    
    // Close modal when clicking outside
    $('#settings-modal').click(function(e) {
        if ($(e.target).is('#settings-modal')) {
            $('#settings-modal').removeClass('active');
            $('body').css('overflow', 'auto');
        }
    });
    
    // Sign out button
    $('.sign-out-btn').click(function() {
        // Add sign out logic here
        alert('Sign out functionality would go here');
    });
    
    // Smooth scrolling for comic lists
    $('.comic-list').on('wheel', function(e) {
        e.preventDefault();
        this.scrollLeft += e.originalEvent.deltaY;
    });
    
    // Add hover effects for comic items
    $('.comic-item').hover(
        function() {
            $(this).find('h4').css('color', 'var(--primary-color)');
        },
        function() {
            $(this).find('h4').css('color', 'var(--text-primary)');
        }
    );
    
    // Mobile menu toggle (if needed in future)
    $('.mobile-menu-toggle').click(function() {
        $('.nav-links').toggleClass('active');
    });

// Policy screens navigation
$('a[href="#privacy"]').click(function(e) {
    e.preventDefault();
    $('#settings-modal').removeClass('active');
    $('#privacy-modal').addClass('active slide-in');
    $('body').css('overflow', 'hidden');
});

$('a[href="#terms"]').click(function(e) {
    e.preventDefault();
    $('#settings-modal').removeClass('active');
    $('#terms-modal').addClass('active slide-in');
    $('body').css('overflow', 'hidden');
});

$('a[href="#about"]').click(function(e) {
    e.preventDefault();
    $('#settings-modal').removeClass('active');
    $('#about-modal').addClass('active slide-in');
    $('body').css('overflow', 'hidden');
});

// Back to settings functionality
$('.back-to-settings').click(function() {
    const currentModal = $(this).closest('.policy-modal');
    currentModal.removeClass('slide-in').addClass('slide-out');
    
    setTimeout(function() {
        currentModal.removeClass('active slide-out');
        $('#settings-modal').addClass('active');
    }, 300);
});

// Close modal when animation ends (for edge cases)
$('.policy-modal').on('animationend', function() {
    if ($(this).hasClass('slide-out') && !$(this).hasClass('active')) {
        $(this).removeClass('slide-out');
    }
});

// Update support links in settings modal to use the new navigation
$('.support-links a').click(function(e) {
    e.preventDefault();
    const target = $(this).attr('href');
    
    if (target === '#privacy') {
        $('#settings-modal').removeClass('active');
        $('#privacy-modal').addClass('active slide-in');
    } else if (target === '#terms') {
        $('#settings-modal').removeClass('active');
        $('#terms-modal').addClass('active slide-in');
    } else if (target === '#about') {
        $('#settings-modal').removeClass('active');
        $('#about-modal').addClass('active slide-in');
    }
    
    $('body').css('overflow', 'hidden');
});
});