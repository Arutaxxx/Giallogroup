document.addEventListener('DOMContentLoaded', function(event) {
    //the event occurred
    
    //ElementRef ele = element(tag HTML)
    var eleVideoBG = document.getElementById("videoBG");
    // Sor = Sorce
    var eleSorceVideoBG = document.getElementById("sorceVideoBG");
    // Sec = section
    var eleSelections = document.getElementById("Selections");
    var eleSecHome = document.getElementById("home");
    var eleSecFeaturedon = document.getElementById("featuredon");
    var eleSecAboutMe = document.getElementById("aboutMe");
    var eleSecDev = document.getElementById("dev");
    // A = a
    var eleAHome = document.getElementById("aHome");
    var eleAFeaturedon = document.getElementById("aFeaturedon");
    var eleAAboutMe = document.getElementById("aAboutMe");
    var eleADev = document.getElementById("aDev");

    //#region Method
    

    //#endregion Method
    function test(){
        var tabsNewAnim = $('#navbarSupportedContent');
        var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
        var activeItemNewAnim = tabsNewAnim.find('.active');
        var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
        var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
        var itemPosNewAnimTop = activeItemNewAnim.position();
        var itemPosNewAnimLeft = activeItemNewAnim.position();
        $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
        });
        $("#navbarSupportedContent").on("click","li",function(e){
        $('#navbarSupportedContent ul li').removeClass("active");
        $(this).addClass('active');
        var activeWidthNewAnimHeight = $(this).innerHeight();
        var activeWidthNewAnimWidth = $(this).innerWidth();
        var itemPosNewAnimTop = $(this).position();
        var itemPosNewAnimLeft = $(this).position();
        $(".hori-selector").css({
            "top":itemPosNewAnimTop.top + "px", 
            "left":itemPosNewAnimLeft.left + "px",
            "height": activeWidthNewAnimHeight + "px",
            "width": activeWidthNewAnimWidth + "px"
        });
        });
    }
    $(document).ready(function(){
        setTimeout(function(){ test(); });
    });
    $(window).on('resize', function(){
        setTimeout(function(){ test(); }, 500);
    });
    $(".navbar-toggler").click(function(){
        setTimeout(function(){ test(); });
    });

    //Git logo contoller
    $('#logogit').click(function(){
        if(($(this).attr('src')!='Media/img/icons/GitHub-Mark-120px-plus.png')) {
            $(this).attr('class','Media/img/icons/GitHub-Mark-Light-120px-plus.png');
        }
    });
});