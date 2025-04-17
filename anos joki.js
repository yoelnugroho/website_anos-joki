function sendToWhatsApp() {
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const contact = document.getElementById("contact").value;
    const service = document.getElementById("service").value;
    const details = document.getElementById("details").value;
  
    const message = `Halo Admin Anos Joki! Saya ingin melakukan pemesanan.%0A%0A` +
                    `Nama: ${name}%0A` +
                    `Username PUBG: ${username}%0A` +
                    `Nomor WhatsApp: ${contact}%0A` +
                    `Layanan: ${service}%0A` +
                    `Catatan Tambahan: ${details}`;
  
    const waLink = `https://wa.me/6285691387148?text=${message}`;
    window.open(waLink, '_blank');
    return false;
  }
  