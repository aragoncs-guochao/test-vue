<template>
    <footer>
        <h4 class="logo-footer">INSOMNIAC TICKETS</h4>
        <div class="align-center d-flex just-between flex-wrap">
            <ul class="footer-links mb0 list-unstyled">
                <li>
                    <a href="/">Contact Us</a>
                </li>
                <li>
                    <a href="/">Web Accessibility</a>
                </li>
                <li>
                    <a href="/">Privacy Policy</a>
                </li>
                <li>
                    <a href="/#your">Do Not Sell My Info</a>
                </li>
            </ul>
            <div class="footer-terms">By continuing past this page, you agree to our <a href="/">terms of use</a>. ©2020 Insomniac Holdings, LLC. All Rights Reserved.</div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'footerbar',
}
export function footerPosition(){
        document.getElementsByTagName('footer').removeClass("fixed-bottom");
        var contentHeight = document.body.scrollHeight,//网页正文全文高度
            winHeight = window.innerHeight;//可视窗口高度，不包括浏览器顶部工具栏
        if(!(contentHeight > winHeight)){
            //当网页正文高度小于可视窗口高度时，为footer添加类fixed-bottom
            document.getElementsByTagName('footer').addClass('fixed-bootem')
        } else {
            document.getElementsByTagName('footer').removeClass("fixed-bottom");
        }
}
</script>