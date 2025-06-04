document.addEventListener('DOMContentLoaded', function () {
    const filterGroups = document.querySelectorAll('.filter-group');
    filterGroups.forEach(group => {
        group.addEventListener('click', function () {
            const expandIcon = this.querySelector('.filter-expand');
            const options = this.querySelector('.filter-options');
            const isOpen = expandIcon.textContent === '-';

            expandIcon.textContent = isOpen ? '+' : '-';

            if (options) {
                options.style.display = isOpen ? 'none' : 'flex';
            }
        });
    });

    const gridView = document.querySelector('.view-grid');
    const listView = document.querySelector('.view-list');
    const productGrid = document.querySelector('.product-grid');

    if (gridView && listView) {
        gridView.addEventListener('click', function () {
            productGrid.classList.remove('list-view');
            gridView.classList.add('active');
            listView.classList.remove('active');
        });

        listView.addEventListener('click', function () {
            productGrid.classList.add('list-view');
            listView.classList.add('active');
            gridView.classList.remove('active');
        });
    }

    const addToCartButtons = document.querySelectorAll('.product-card button');
    const cartCount = document.getElementById('cartCount');

    addToCartButtons.forEach(button => {
        if (!button.classList.contains('out-of-stock')) {
            button.addEventListener('click', function () {
                let currentCount = parseInt(cartCount.textContent || '0');
                cartCount.textContent = currentCount + 1;
                cartCount.classList.add('show');

                this.textContent = 'Added!';
                setTimeout(() => {
                    this.textContent = 'Add To Cart';
                }, 1500);
            });
        }
    });

    const paginationItems = document.querySelectorAll('.pagination span');
    paginationItems.forEach(item => {
        if (item.textContent === '1') {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }

        item.addEventListener('click', function () {
            if (this.textContent === '1') {
                paginationItems.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    const viewControlsPages = document.querySelectorAll('.view-controls span:not(.view-grid):not(.view-list)');
    viewControlsPages.forEach(item => {
        if (item.textContent === '1') {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }

        item.addEventListener('click', function () {
            if (this.textContent === '1') {
                viewControlsPages.forEach(i => i.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    const sortSelect = document.querySelector('.sort-by select');
    if (sortSelect) {
        sortSelect.addEventListener('change', function () {
            console.log('Sort option selected:', this.value);
        });
    }
    const brandCheckboxes = document.querySelectorAll('.filter-options input[type="checkbox"]');

    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const checkedBrands = Array.from(brandCheckboxes)
                .filter(cb => cb.checked)
                .map(cb => cb.parentElement.textContent.trim());

            const productCards = document.querySelectorAll('.product-card');

            productCards.forEach(card => {
                const brand = card.getAttribute('data-brand');
                if (checkedBrands.length === 0 || checkedBrands.includes(brand)) {
                    card.style.display = 'flex'; // or 'block' if in list view
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

});
