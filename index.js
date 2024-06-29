 // JavaScript functionality

        // Elements
        const updateAddressBtn = document.getElementById('update-address-btn');
        const updateModal = document.getElementById('update-modal');
        const overlay = document.getElementById('overlay');
        const closeModal = document.getElementById('close-modal');
        const saveAddressBtn = document.getElementById('save-address-btn');
        const cancelBtn = document.getElementById('cancel-btn');
        const newAddressInput = document.getElementById('new-address');
        const ownerAddressSpan = document.getElementById('owner-address');
        const printBtn = document.getElementById('print-btn');
        const downloadEvidenceBtn = document.getElementById('download-evidence-btn');
        const backBtn = document.getElementById('back-btn');

        // Show the modal
        updateAddressBtn.addEventListener('click', () => {
            updateModal.style.display = 'block';
            overlay.style.display = 'block';
        });

        // Hide the modal
        const closeModalFunction = () => {
            updateModal.style.display = 'none';
            overlay.style.display = 'none';
            newAddressInput.value = ''; // Clear input field
        };

        closeModal.addEventListener('click', closeModalFunction);
        cancelBtn.addEventListener('click', closeModalFunction);

        // Save the new address
        saveAddressBtn.addEventListener('click', () => {
            const newAddress = newAddressInput.value.trim();
            if (newAddress) {
                ownerAddressSpan.textContent = newAddress;
                closeModalFunction();
            } else {
                alert('Please enter a valid address.');
            }
        });

        // Print functionality
        printBtn.addEventListener('click', () => {
            window.print();
        });

        // Placeholder for download functionality
        downloadEvidenceBtn.addEventListener('click', () => {
            alert('Download functionality is not implemented yet.');
        });

        // Back button functionality
        backBtn.addEventListener('click', () => {
            alert('Back button functionality is not implemented yet.');
        });

        // Close modal when clicking outside of it
        window.addEventListener('click', (event) => {
            if (event.target === overlay) {
                closeModalFunction();
            }
        });