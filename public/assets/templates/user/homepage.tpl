<section class="pages group" ng-class="{'on-yesterday': settings.currentPage === 1, 'on-today': settings.currentPage === 2, 'on-tomorrow': settings.currentPage === 3}">
    <article class="page yesterday"></article>

    <article class="page properties">
        <h2 class="properties-title">My Property</h2>

        <ul class="my-properties">
            <li class="property">
                <a href="#" class="property-link">
                    <i class="property-icon icon-money"></i>
                    <h3 class="property-title">Cash</h3>
                </a>
                <input type="text" class="property-input" />
                <span class="property-amount"></span>
            </li>

            <li class="property">
                <a href="#" class="property-link">
                    <i class="property-icon icon-gold"></i>
                    <h3 class="property-title">Gold</h3>
                </a>
                <input type="text" class="property-input" />
                <span class="property-amount"></span>
            </li>

            <li class="property">
                <a href="#" class="property-link">
                    <i class="property-icon icon-coffeebean"></i>
                    <h3 class="property-title">Coffee Bean</h3>
                </a>
                <input type="text" class="property-input" />
                <span class="property-amount"></span>
            </li>

            <li class="property">
                <a href="#" class="property-link">
                    <i class="property-icon icon-dollar"></i>
                    <h3 class="property-title">Exchange</h3>
                </a>
                <input type="text" class="property-input" />
                <span class="property-amount"></span>
            </li>

            <li class="property">
                <a href="#" class="property-link">
                    <i class="property-icon icon-new-york"></i>
                    <h3 class="property-title">NYSE</h3>
                </a>
                <input type="text" class="property-input" />
                <span class="property-amount"></span>
            </li>

            <li class="property">
                <a href="#" class="property-link">
                    <i class="property-icon icon-house"></i>
                    <h3 class="property-title">Real Estate</h3>
                </a>
                <input type="text" class="property-input" />
                <span class="property-amount"></span>
            </li>
        </ul>
    </article>

    <article class="page tomorrow"></article>
</section>