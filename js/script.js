document.addEventListener('DOMContentLoaded', function () {
    updateCurrentYear();
    updateClock();
    setInterval(updateClock, 1000);

    var newsletterForm = document.getElementById('newsletterForm');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var emailInput = document.getElementById('newsletterEmail');
            var messageBox = document.getElementById('newsletterMessage');

            if (!emailInput || !messageBox) {
                return;
            }

            var email = emailInput.value.trim();

            if (email === '' || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
                messageBox.style.color = '#d9534f';
                messageBox.textContent = 'Please enter a valid email address.';
                return;
            }

            messageBox.style.color = '#1d9a69';
            messageBox.textContent = 'Thank you! You are now subscribed to our property updates.';
            newsletterForm.reset();
        });
    }

    var homepageSearchForm = document.getElementById('homepageSearchForm');
    if (homepageSearchForm) {
        homepageSearchForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var location = document.getElementById('searchLocation').value.trim();
            var type = document.getElementById('searchType').value;
            var minPrice = document.getElementById('searchMinPrice').value;
            var maxPrice = document.getElementById('searchMaxPrice').value;

            var params = new URLSearchParams();

            if (location) {
                params.set('location', location);
            }

            if (type) {
                params.set('type', type);
            }

            if (minPrice) {
                params.set('minPrice', minPrice);
            }

            if (maxPrice) {
                params.set('maxPrice', maxPrice);
            }

            window.location.href = 'properties.html?' + params.toString();
        });
    }

    var propertyData = [
        { id: 1, title: 'Skyline Residences', price: 540000, location: 'Dubai', type: 'Apartment', bedrooms: 2, bathrooms: 2, area: 1200, image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80', gallery: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'], description: 'A modern apartment in the heart of Dubai with open-plan living, ocean views, and easy access to business districts.', address: 'Al Barsha, Dubai', propertyId: 'DX-2045', parking: 1, floorArea: 1200, amenities: ['Swimming Pool', 'Gym', 'Security', 'Parking', 'Lobby Lounge', 'Smart Access'] },
        { id: 2, title: 'Harborview House', price: 690000, location: 'New York', type: 'House', bedrooms: 3, bathrooms: 2, area: 1800, image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80', gallery: ['https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80'], description: 'Spacious family home with a quiet neighborhood feel, large backyard, and a bright open kitchen.', address: 'Brooklyn Heights, New York', propertyId: 'NY-7781', parking: 2, floorArea: 1800, amenities: ['Garden', 'Waterfront View', 'Fireplace', 'Garage', 'Smart Home', 'CCTV'] },
        { id: 3, title: 'Green Oasis Villa', price: 980000, location: 'Los Angeles', type: 'Villa', bedrooms: 4, bathrooms: 3, area: 2600, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80', gallery: ['https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80'], description: 'Luxury villa with panoramic balcony views and tropical landscaping, designed for comfortable resort-style living.', address: 'Beverly Hills, Los Angeles', propertyId: 'LA-3321', parking: 3, floorArea: 2600, amenities: ['Private Pool', 'Garden', 'Cinema Room', 'Home Office', 'Spa Deck', 'Guest Suite'] },
        { id: 4, title: 'Metro Square Office', price: 1250000, location: 'Singapore', type: 'Commercial', bedrooms: 4, bathrooms: 3, area: 3300, image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80', gallery: ['https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'], description: 'Premium office space in the city center, built for businesses that need workspace, conference rooms, and premium access.', address: 'Downtown, Singapore', propertyId: 'SG-9052', parking: 4, floorArea: 3300, amenities: ['Reception', 'Meeting Rooms', 'High Speed Internet', '24/7 Security', 'Lift Access', 'Parking'] },
        { id: 5, title: 'Palm Grove Penthouse', price: 820000, location: 'Dubai', type: 'Apartment', bedrooms: 3, bathrooms: 3, area: 2100, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', gallery: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80'], description: 'High-rise penthouse with city views, private terrace, and designer interiors for a luxury lifestyle.', address: 'Business Bay, Dubai', propertyId: 'DX-5498', parking: 2, floorArea: 2100, amenities: ['Private Terrace', 'Concierge', 'Gym', 'Pool', 'Smart Lighting', 'Security'] },
        { id: 6, title: 'Maple View Retreat', price: 430000, location: 'Chicago', type: 'House', bedrooms: 2, bathrooms: 2, area: 1500, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80', gallery: ['https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80'], description: 'Comfortable suburban home with open family room, landscaped lawns, and a quiet street location.', address: 'Lincoln Park, Chicago', propertyId: 'CH-6806', parking: 1, floorArea: 1500, amenities: ['Backyard', 'Deck', 'Two-Car Garage', 'Basement', 'EV Charger', 'Solar Panels'] },
        { id: 7, title: 'Crescent Heights', price: 880000, location: 'London', type: 'Villa', bedrooms: 5, bathrooms: 4, area: 2950, image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', gallery: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'], description: 'Elegant villa with large rooms, private garden, and a contemporary high-end finish throughout.', address: 'Hammersmith, London', propertyId: 'LD-1765', parking: 3, floorArea: 2950, amenities: ['Pool House', 'Garden', 'Mini Cinema', 'Roof Deck', 'Fireplace', 'Guest Room'] },
        { id: 8, title: 'CityCore Suites', price: 560000, location: 'London', type: 'Apartment', bedrooms: 2, bathrooms: 2, area: 1260, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80', gallery: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80'], description: 'A practical city apartment designed for professionals seeking convenience, modern fixtures, and access to transit.', address: 'Islington, London', propertyId: 'LD-4401', parking: 1, floorArea: 1260, amenities: ['Concierge', 'Gym', 'Community Lounge', 'Bike Storage', 'Secure Entry', 'Lift'] },
        { id: 9, title: 'Commerce Hub Plaza', price: 1500000, location: 'New York', type: 'Commercial', bedrooms: 5, bathrooms: 4, area: 4200, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80', gallery: ['https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1448630360428-65456885c650?auto=format&fit=crop&w=900&q=80', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=900&q=80'], description: 'Large commercial property ideal for retail, office, or mixed-use development in a high-footfall district.', address: 'Midtown, New York', propertyId: 'NY-1923', parking: 4, floorArea: 4200, amenities: ['Reception', 'Meeting Rooms', 'Storage', 'Generator Backup', 'High Visibility', '24/7 Access'] }
    ];

    var propertyForm = document.getElementById('propertyFilterForm');
    if (propertyForm) {
        var propertyResults = document.getElementById('propertyResults');
        var resultCount = document.getElementById('resultCount');
        var noResults = document.getElementById('noResults');
        var pageNumbers = document.getElementById('propertyPagination');
        var currentPage = 1;
        var perPage = 4;

        function formatCurrency(value) {
            return '$' + value.toLocaleString();
        }

        function getActiveFilters() {
            return {
                location: document.getElementById('filterLocation').value.trim(),
                minPrice: Number(document.getElementById('filterMinPrice').value || 0),
                maxPrice: Number(document.getElementById('filterMaxPrice').value || 999999999),
                type: document.getElementById('filterType').value,
                bedrooms: Number(document.getElementById('filterBedrooms').value || 0),
                bathrooms: Number(document.getElementById('filterBathrooms').value || 0)
            };
        }

        function filterProperties() {
            var filters = getActiveFilters();
            var filtered = propertyData.filter(function (property) {
                var matchesLocation = !filters.location || property.location.toLowerCase() === filters.location.toLowerCase();
                var matchesType = !filters.type || property.type === filters.type;
                var matchesPrice = property.price >= filters.minPrice && property.price <= filters.maxPrice;
                var matchesBedrooms = !filters.bedrooms || property.bedrooms >= filters.bedrooms;
                var matchesBathrooms = !filters.bathrooms || property.bathrooms >= filters.bathrooms;

                return matchesLocation && matchesType && matchesPrice && matchesBedrooms && matchesBathrooms;
            });

            if (resultCount) {
                resultCount.textContent = filtered.length + ' properties found';
            }

            if (!filtered.length) {
                if (propertyResults) {
                    propertyResults.innerHTML = '';
                }
                if (noResults) {
                    noResults.style.display = 'block';
                }
                if (pageNumbers) {
                    pageNumbers.innerHTML = '';
                }
                return;
            }

            if (noResults) {
                noResults.style.display = 'none';
            }

            var totalPages = Math.ceil(filtered.length / perPage);
            if (currentPage > totalPages) {
                currentPage = totalPages;
            }

            var startIndex = (currentPage - 1) * perPage;
            var endIndex = startIndex + perPage;
            var pageItems = filtered.slice(startIndex, endIndex);

            if (propertyResults) {
                propertyResults.innerHTML = pageItems.map(function (property) {
                    return '<div class="col-lg-6 col-xl-6">' +
                        '<div class="property-card h-100">' +
                        '<img src="' + property.image + '" class="card-img-top" alt="' + property.title + '">' +
                        '<div class="card-body">' +
                        '<div class="d-flex justify-content-between align-items-center mb-2">' +
                        '<span class="price-tag">' + formatCurrency(property.price) + '</span>' +
                        '<span class="badge bg-light text-dark">' + property.type + '</span>' +
                        '</div>' +
                        '<h3 class="card-title">' + property.title + '</h3>' +
                        '<p class="text-muted mb-3"><i class="fa-solid fa-location-dot me-2 text-green"></i>' + property.location + '</p>' +
                        '<div class="property-meta">' +
                        '<span><i class="fa-solid fa-bed"></i> ' + property.bedrooms + ' Beds</span>' +
                        '<span><i class="fa-solid fa-bath"></i> ' + property.bathrooms + ' Baths</span>' +
                        '<span><i class="fa-solid fa-ruler-combined"></i> ' + property.area + ' sq ft</span>' +
                        '</div>' +
                        '<div class="mt-3"><a class="btn btn-outline-primary" href="property-details.html?id=' + property.id + '">View Details</a></div>' +
                        '</div>' +
                        '</div>' +
                        '</div>';
                }).join('');
            }

            if (pageNumbers) {
                var pageLinks = '';
                for (var i = 1; i <= totalPages; i++) {
                    pageLinks += '<li class="page-item ' + (i === currentPage ? 'active' : '') + '"><a class="page-link" href="#" data-page="' + i + '">' + i + '</a></li>';
                }
                pageNumbers.innerHTML = pageLinks;

                var pageButtons = pageNumbers.querySelectorAll('.page-link');
                pageButtons.forEach(function (button) {
                    button.addEventListener('click', function (event) {
                        event.preventDefault();
                        var pageNumber = Number(button.getAttribute('data-page'));
                        currentPage = pageNumber;
                        filterProperties();
                    });
                });
            }
        }

        var urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('location')) {
            document.getElementById('filterLocation').value = urlParams.get('location');
        }
        if (urlParams.get('type')) {
            document.getElementById('filterType').value = urlParams.get('type');
        }
        if (urlParams.get('minPrice')) {
            document.getElementById('filterMinPrice').value = urlParams.get('minPrice');
        }
        if (urlParams.get('maxPrice')) {
            document.getElementById('filterMaxPrice').value = urlParams.get('maxPrice');
        }

        propertyForm.addEventListener('submit', function (event) {
            event.preventDefault();
            currentPage = 1;
            filterProperties();
        });

        document.getElementById('resetFilters').addEventListener('click', function () {
            propertyForm.reset();
            currentPage = 1;
            filterProperties();
        });

        filterProperties();
    }

    var agentSearch = document.getElementById('agentSearch');
    if (agentSearch) {
        var agentCards = document.querySelectorAll('.agent-card');

        agentSearch.addEventListener('input', function () {
            var searchText = agentSearch.value.toLowerCase();

            agentCards.forEach(function (card) {
                var name = card.getAttribute('data-name').toLowerCase();
                var location = card.getAttribute('data-location').toLowerCase();
                var matches = name.includes(searchText) || location.includes(searchText);

                if (matches || searchText === '') {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var name = document.getElementById('contactName').value.trim();
            var email = document.getElementById('contactEmail').value.trim();
            var phone = document.getElementById('contactPhone').value.trim();
            var subject = document.getElementById('contactSubject').value.trim();
            var message = document.getElementById('contactMessage').value.trim();
            var formMessage = document.getElementById('contactFormMessage');

            if (name === '' || email === '' || phone === '' || subject === '' || message === '') {
                if (formMessage) {
                    formMessage.style.color = '#d9534f';
                    formMessage.innerHTML = 'Please fill in all required fields.';
                }
                return;
            }

            if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
                if (formMessage) {
                    formMessage.style.color = '#d9534f';
                    formMessage.textContent = 'Please enter a valid email address.';
                }
                return;
            }

            if (formMessage) {
                formMessage.style.color = '#1d9a69';
                formMessage.textContent = 'This is a front-end demo form. Your message has been validated successfully.';
            }

            window.alert('Thank you! This is a front-end demo contact form and no email was actually sent.');
            contactForm.reset();
        });
    }

    var bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function (event) {
            event.preventDefault();

            var bookingName = document.getElementById('bookingName').value.trim();
            var bookingEmail = document.getElementById('bookingEmail').value.trim();
            var bookingPhone = document.getElementById('bookingPhone').value.trim();
            var bookingDate = document.getElementById('bookingDate').value;

            if (bookingName === '' || bookingEmail === '' || bookingPhone === '' || bookingDate === '') {
                alert('Please complete all required booking fields.');
                return;
            }

            if (bookingEmail.indexOf('@') === -1 || bookingEmail.indexOf('.') === -1) {
                alert('Please enter a valid email address.');
                return;
            }

            alert('Your viewing request has been received. Our agent will contact you shortly.');
            bookingForm.reset();
        });
    }

    var pagePropertyId = Number(new URLSearchParams(window.location.search).get('id')) || 1;
    var selectedProperty = propertyData.find(function (property) {
        return property.id === pagePropertyId;
    }) || propertyData[0];

    var propertyTitle = document.getElementById('propertyTitle');
    if (propertyTitle) {
        propertyTitle.textContent = selectedProperty.title;
    }

    var propertyPrice = document.getElementById('propertyPrice');
    if (propertyPrice) {
        propertyPrice.textContent = '$' + selectedProperty.price.toLocaleString();
    }

    var propertyAddress = document.getElementById('propertyAddress');
    if (propertyAddress) {
        propertyAddress.textContent = selectedProperty.address;
    }

    var propertyIdBox = document.getElementById('propertyId');
    if (propertyIdBox) {
        propertyIdBox.textContent = selectedProperty.propertyId;
    }

    var mainImage = document.getElementById('propertyMainImage');
    if (mainImage) {
        mainImage.src = selectedProperty.image;
        mainImage.alt = selectedProperty.title;
    }

    var thumbnailRow = document.getElementById('thumbnailRow');
    if (thumbnailRow) {
        thumbnailRow.innerHTML = selectedProperty.gallery.map(function (item, index) {
            var activeClass = index === 0 ? 'active' : '';
            return '<img class="thumbnail ' + activeClass + '" src="' + item + '" alt="' + selectedProperty.title + ' view ' + (index + 1) + '" data-image="' + item + '">';
        }).join('');

        var thumbnails = document.querySelectorAll('.thumbnail');
        thumbnails.forEach(function (thumb) {
            thumb.addEventListener('click', function () {
                var newImage = thumb.getAttribute('data-image');
                if (mainImage && newImage) {
                    mainImage.src = newImage;
                }

                thumbnails.forEach(function (item) {
                    item.classList.remove('active');
                });
                thumb.classList.add('active');
            });
        });
    }

    var propertyDescription = document.getElementById('propertyDescription');
    if (propertyDescription) {
        propertyDescription.textContent = selectedProperty.description;
    }

    var propertyBedrooms = document.getElementById('propertyBedrooms');
    var propertyBathrooms = document.getElementById('propertyBathrooms');
    var propertyArea = document.getElementById('propertyArea');
    var propertyParking = document.getElementById('propertyParking');

    if (propertyBedrooms) propertyBedrooms.textContent = selectedProperty.bedrooms;
    if (propertyBathrooms) propertyBathrooms.textContent = selectedProperty.bathrooms;
    if (propertyArea) propertyArea.textContent = selectedProperty.floorArea + ' sq ft';
    if (propertyParking) propertyParking.textContent = selectedProperty.parking;

    var amenitiesList = document.getElementById('amenitiesList');
    if (amenitiesList) {
        amenitiesList.innerHTML = selectedProperty.amenities.map(function (amenity) {
            return '<li><i class="fa-solid fa-circle-check text-green"></i> ' + amenity + '</li>';
        }).join('');
    }

    var relatedProperties = document.getElementById('relatedProperties');
    if (relatedProperties) {
        var otherProperties = propertyData.filter(function (item) {
            return item.id !== selectedProperty.id;
        }).slice(0, 3);

        relatedProperties.innerHTML = otherProperties.map(function (property) {
            return '<div class="col-md-4">' +
                '<div class="property-card h-100">' +
                '<img src="' + property.image + '" class="card-img-top" alt="' + property.title + '">' +
                '<div class="card-body">' +
                '<span class="price-tag">$' + property.price.toLocaleString() + '</span>' +
                '<h3 class="card-title">' + property.title + '</h3>' +
                '<p class="text-muted mb-3"><i class="fa-solid fa-location-dot me-2 text-green"></i>' + property.location + '</p>' +
                '<a class="btn btn-outline-primary" href="property-details.html?id=' + property.id + '">View Details</a>' +
                '</div>' +
                '</div>' +
                '</div>';
        }).join('');
    }

    var propertyMainImage = document.getElementById('propertyMainImage');
    if (propertyMainImage) {
        propertyMainImage.addEventListener('click', function () {
            window.open(propertyMainImage.src, '_blank');
        });
    }

    var currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    function updateCurrentYear() {
        var year = document.getElementById('currentYear');
        if (year) {
            year.textContent = new Date().getFullYear();
        }
    }

    function updateClock() {
        var clock = document.getElementById('liveClock');
        if (!clock) {
            return;
        }

        var now = new Date();
        clock.textContent = now.toLocaleString([], {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
    }
});
