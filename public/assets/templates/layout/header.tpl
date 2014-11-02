<header id="masthead" class="page-header" ng-class="{'loading': settings.page_loading}">
    <a ng-click="changePage(1)" class="navigate-day navigate-yesterday"><i class="icon-chevron-left"></i> Yesterday</a>

    <div class="profile">
        <a ng-click="changePage(2)" class="profile-link">
            <img src="assets/images/me.jpg" class="profile-photo" />
        </a>
    </div>

    <a ng-click="changePage(3)" class="navigate-day navigate-tomorrow">Tomorrow <i class="icon-chevron-right"></i></a>
</header>