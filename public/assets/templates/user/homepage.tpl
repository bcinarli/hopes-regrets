<section class="pages group" ng-class="{'on-yesterday': settings.currentPage === 1, 'on-today': settings.currentPage === 2, 'on-tomorrow': settings.currentPage === 3}">
    <article class="page yesterday">
        <h2 class="properties-title"><span>What Happened?</span></h2>

        <div class="graph yesterday-graph" ng-class="{'loading-view': settings.content_loading}">
            <div yesterday-chart data-source="model"></div>
        </div>
    </article>

    <article class="page properties">
        <h2 class="properties-title"><span>My Property</span></h2>

        <div ng-show="settings.showInput" class="property-amount-holder" ng-class="{'top-line': settings.inputIndex === 3 || settings.inputIndex === 4, 'middle-line': settings.inputIndex === 5 || settings.inputIndex === 6}">
            <input ng-model="model.active" type="tel" class="property-input" id="property-input" />
            <a ng-click="closeInput()" class="property-amount-submit">OK</a>
        </div>

        <ul class="my-properties" ng-class="{'loading-view': settings.content_loading}">
            <li class="property">
                <a ng-click="toggleInput(1)" class="property-link">
                    <i class="property-icon icon-money"></i>
                    <h3 class="property-title">Cash</h3>
                </a>
                <span class="property-amount" ng-show="model.cash">${{model.cash | number}}</span>
            </li>

            <li class="property">
                <a ng-click="toggleInput(2)" class="property-link">
                    <i class="property-icon icon-gold"></i>
                    <h3 class="property-title">Gold (Ons)</h3>
                </a>
                <span class="property-amount" ng-show="model.gold">${{model.gold * 1172 | number}}</span>
            </li>

            <li class="property">
                <a ng-click="toggleInput(3)" class="property-link">
                    <i class="property-icon icon-coffeebean"></i>
                    <h3 class="property-title">Cocoa (Tonne)</h3>
                </a>
                <span class="property-amount" ng-show="model.cocoa">${{model.cocoa * 2358 | number}}</span>
            </li>

            <li class="property">
                <a ng-click="toggleInput(4)" class="property-link">
                    <i class="property-icon icon-dollar"></i>
                    <h3 class="property-title">Exchange</h3>
                </a>
                <span class="property-amount" ng-show="model.exchange">${{model.exchange | number}}</span>
            </li>

            <li class="property">
                <a ng-click="toggleInput(5)" class="property-link">
                    <i class="property-icon icon-new-york"></i>
                    <h3 class="property-title">NYSE (100)</h3>
                </a>
                <span class="property-amount" ng-show="model.nyse">${{model.nyse | number}}</span>
            </li>

            <li class="property">
                <a ng-click="toggleInput(6)" class="property-link">
                    <i class="property-icon icon-house"></i>
                    <h3 class="property-title">Real Estate</h3>
                </a>
                <span class="property-amount" ng-show="model.estate">${{model.estate | number}}</span>
            </li>
        </ul>
    </article>

    <article class="page tomorrow">
        <h2 class="properties-title"><span>What Could Happen?</span></h2>

        <div class="graph tomorrow-graph" ng-class="{'loading-view': settings.content_loading}">
            <div yesterday-chart data-source="model"></div>
        </div>
    </article>
</section>