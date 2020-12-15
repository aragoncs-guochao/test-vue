<template>
  <header class="navbar bg-success mb0 IN-header" style="">
    <div class="cm-container clearfix">
        <div class="navbar-header pull-left">
            <a href="/" class="navbar-brand text-white logo-dt">INSOMNIAC<br class="visible-xs"> TICKETS</a>
        </div>
        <!--collapse navbar-collapse-->
        <div id="bs-navbar" class="INheader-user pull-right" data-url="{% url 'accounts:is-login' %}">
            <ul class="nav">
                <!--navbar-nav-->
                <li>
                    <a href="{% url 'cart:cart-tickets' %}" class="Shoppingbag-icon"><img src="/img/shopping-bag.svg" width="20" alt=""><span id="top-bar-cart-count" class="badge"></span></a>
                </li>
                <li class="dropdown hidden" id="userDropdown">
                    <a class="text-white User-icon user-info" id="dropdownMenu1" data-target="#" href="#" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">
                        <!--username-->
                        <img onload="loadImage(this)" data-src="/img/user.svg" src="" alt="">
                    </a>
                    <ul class="dropdown-menu dropdown-menu-right" aria-labelledby="dLabel">
                        <li class="user-info-li">
                            <a class="text-white User-icon user-info" style="max-height: 63px">
                                <img onload="loadImage(this)" data-src="/img/user.svg" src="" alt="">
                            </a>
                        </li>
                        <li><a href="{% url 'orders:request-tickets-list' %}">My Requests</a></li>
                        <li><a href="{% url 'accounts:logout' %}">Log Out</a></li>
                    </ul>
                </li>
                <li id="notLogin">
                    <a class="text-white User-icon" type="button" data-toggle="modal" data-target="#registrationModal" href="#" id="dropdownMenu1" aria-haspopup="true" aria-expanded="true">
                        <!--username-->
                        <img src="/img/user.svg" width="20" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>
</header>
</template>

<script>
export default {
    name: 'navbar',
}
</script>