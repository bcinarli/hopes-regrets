<section class="pages group" ng-class="{'on-yesterday': settings.currentPage === 1, 'on-today': settings.currentPage === 2, 'on-tomorrow': settings.currentPage === 3}">
    <article class="page yesterday"></article>

    <article class="page properties">
        <h2 class="properties-title">My Property</h2>

        <ul class="my-properties">
            <li class="property" ng-class="{'property-selected': inputStates[1]}">
                <a ng-click="toggleInput(1)" class="property-link">
                    <i class="property-icon icon-money"></i>
                    <h3 class="property-title">Cash</h3>
                </a>
                <input ng-blur="inputBlur(1)" ng-model="model.cash" ng-show="inputStates[1]" type="number" class="property-input" />
                <span class="property-amount">{{model.cash}}</span>
            </li>

            <li class="property" ng-class="{'property-selected': inputStates[2]}">
                <a ng-click="toggleInput(2)" class="property-link">
                    <i class="property-icon icon-gold"></i>
                    <h3 class="property-title">Gold</h3>
                </a>
                <input ng-blur="inputBlur(2)" ng-model="model.gold" ng-show="inputStates[2]" type="number" class="property-input" />
                <span class="property-amount">{{model.gold}}</span>
            </li>

            <li class="property" ng-class="{'property-selected': inputStates[3]}">
                <a ng-click="toggleInput(3)" class="property-link">
                    <i class="property-icon icon-coffeebean"></i>
                    <h3 class="property-title">Coffee Bean</h3>
                </a>
                <input ng-blur="inputBlur(3)" ng-model="model.coffee" ng-show="inputStates[3]" type="number" class="property-input" />
                <span class="property-amount">{{model.coffee}}</span>
            </li>

            <li class="property" ng-class="{'property-selected': inputStates[4]}">
                <a ng-click="toggleInput(4)" class="property-link">
                    <i class="property-icon icon-dollar"></i>
                    <h3 class="property-title">Exchange</h3>
                </a>
                <input ng-blur="inputBlur(4)" ng-model="model.exchange" ng-show="inputStates[4]" type="number" class="property-input" />
                <span class="property-amount">{{model.exchange}}</span>
            </li>

            <li class="property" ng-class="{'property-selected': inputStates[5]}">
                <a ng-click="toggleInput(5)" class="property-link">
                    <i class="property-icon icon-new-york"></i>
                    <h3 class="property-title">NYSE</h3>
                </a>
                <input ng-blur="inputBlur(5)" ng-model="model.nyse" ng-show="inputStates[5]" type="number" class="property-input" />
                <span class="property-amount">{{model.nyse}}</span>
            </li>

            <li class="property" ng-class="{'property-selected': inputStates[6]}">
                <a ng-click="toggleInput(6)" class="property-link">
                    <i class="property-icon icon-house"></i>
                    <h3 class="property-title">Real Estate</h3>
                </a>
                <input ng-blur="inputBlur(6)" ng-model="model.estate" ng-show="inputStates[6]" type="number" class="property-input" />
                <span class="property-amount">{{model.estate}}</span>
            </li>
        </ul>
    </article>

    <article class="page tomorrow"></article>
</section>