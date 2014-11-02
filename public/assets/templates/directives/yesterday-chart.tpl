<div>
    <canvas id="yesterday-chart" height="355"></canvas>

    <label>
        Donut
        <input ng-model="model.chartType" type="checkbox" class="switch" checked />
        <div class="switch-button">
            <div class="switch-knob"></div>
        </div>
        Radar
    </label>

    <span class="total-change">Difference: <span class="amount" ng-class="{'negative-amount':model.amount<0}">{{model.amount}}USD</span></span>
</div>