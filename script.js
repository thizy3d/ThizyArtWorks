document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    alert('Pesan Anda telah dikirim! Terima kasih.');
    
    // Reset form setelah pengiriman
    this.reset();
});
