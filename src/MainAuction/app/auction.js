var width = 0;
var height = 0;
var fullSize = false;
var images = [];
var bayId = "";
var imageId = "";
var startAt = 0;

function init()
{
    getSize();

    $("#wrapper").hide();

    var bayList = $("#nav ul.home > li.page-item-8 > ul > li > a");

    var bayBrowser = $("<div id=\"BayBrowser\"></div>").insertAfter("body");
    bayBrowser.append('<ul class="south"><li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/1e/" title="1E">1E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/2e/" title="2E">2E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/3e/" title="3E">3E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/4e/" title="4E">4E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/5e/" title="5E">5E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/6e/" title="6E">6E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/7e/" title="7E">7E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/8e/" title="8E">8E</a></li><li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/9e/" title="9E">9E</a></li><li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/10e/" title="10E">10E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/11e/" title="11E">11E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/12e/" title="12E">12E</a></li> <li id="autolot"><a class="bay" href="http://mainauctioncorp.com/bay-gallery/auto-lot/" title="AUTO LOT">AUTO LOT</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/13w/" title="13W">13W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/14w/" title="14W">14W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/15w/" title="15W">15W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/16w/" title="16W">16W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/17w/" title="17W">17W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/18w/" title="18W">18W</a></li><li> </li><li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/19w/" title="19W">19W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/20w/" title="20W">20W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/21w/" title="21W">21W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/22w/" title="22W">22W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/23w/" title="23W">23W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/24w/" title="24W">24W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/25w/" title="25W">25W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/26w/" title="26W">26W</a></li></ul>');
    bayBrowser.append('<div id="BayGallery"></div>');
    bayBrowser.append('<ul class="north"><li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/13e/" title="13E">13E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/14e/" title="14E">14E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/15e/" title="15E">15E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/16e/" title="16E">16E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/17e/" title="17E">17E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/18e/" title="18E">18E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/19e/" title="19E">19E</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/20e/" title="20E">20E</a></li> <li id="office">OFFICE - DINER - RESTROOMS</li><li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/1w/" title="1W">1W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/2w/" title="2W">2W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/3w/" title="3W">3W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/4w/" title="4W">4W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/5w/" title="5W">5W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/6w/" title="6W">6W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/7w/" title="7W">7W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/8w/" title="8W">8W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/9w/" title="9W">9W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/10w/" title="10W">10W</a></li> <li><a class="bay" href="http://mainauctioncorp.com/bay-gallery/11w/" title="11W">11W</a></li></ul>');

    //$('<ul class="nav"><li><button id="Expand">Expand </button></li></ul>').insertAfter("body");

    resize();

    $("a.bay").click(function (event)
    {
        event.preventDefault();
        event.stopPropagation();

        getBayGallery($(this).attr("href"));
    })

    getLocation();
    loadFromUrl();
}

function getBayGallery(href)
{
    var src = chrome.extension.getURL("img/ajax-loader.gif");

    bayId = href.replace("http://mainauctioncorp.com/bay-gallery/", "").replace("/", "").toUpperCase();

    $("#BayGallery").html("");
    $("#BayGallery").append('<div class="spinner"><p><img src="' + src + '" /></p><br /><p>Downloading Bay: <strong>' + bayId + '</strong></p></div>');


    $.get(href, function (html)
    {
        images = [];
        $("div.ngg-gallery-thumbnail > a", html).each(function ()
        {
            images.push({ url: $(this).attr("href"), thumbnail: $(this).find("img").attr("src"), element: $(this) });
        });

    }).always(function ()
    {
        $("#BayGallery .spinner").remove();
        displayImages();
    });
}

function loadFromUrl()
{
    if(bayId != "")
    {
        getBayGallery($("a.bay[title='" + bayId + "']").attr("href"));
    }
    if (imageId != "")
    {
        getBayGallery($("a.bay[title='" + bayId + "']").attr("href"));
        startAt = imageId;
    }
    else
        startAt = 0;
}
function getLocation()
{
    var hash = window.location.hash.trim().replace("#", '');

    var data = hash.split("/");

    if (data.length > 0)
        bayId = data[0];

    if (data.length > 1)
        imageId = data[1];
}

function setLocation()
{
    window.location.hash = "#" + bayId + "/" + imageId;
}

function displayImages()
{
    var imageList = $('<ul class="slides"></ul>');
    var thumbnails = $('<ul class="slides"></ul>');
    for(var i in images)
    {
        thumbnails.append('<li><img data-id="' + i + '" src="' + images[i].thumbnail + '" /></li>');
        imageList.append('<li><img data-id="' + i + '" src="' + images[i].url + '" /></li>');
        //imageList.append('<li><a class="thumbnail" href="' + images[i].url + '"><img src="' + images[i].thumbnail + '" /></a></li>');
    }

    var c1 = $('<div id="carousel"  class="flexslider"></div>').append(thumbnails);
    var c2 = $('<div id="slider" class="flexslider"></div>').append(imageList);

    $("#BayGallery").append(c1);
    $("#BayGallery").append(c2);

    $('#carousel').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        itemWidth: 75,
        itemMargin: 5,
        asNavFor: '#slider'
    });


    $('#slider').flexslider({
        animation: "slide",
        controlNav: false,
        animationLoop: false,
        slideshow: false,
        sync: "#carousel",
        startAt: startAt,
        after: function(slider)
        {
            imageId = slider.currentSlide;
            setLocation();
        }
    });

    $("#slider li img").css({
        height: $("#BayGallery").height() - 80,
        width: 'auto',
        margin: 'auto'
    });

    setLocation();

}

function getSize()
{
    width = $(window).width();
    height = $(window).height();
}

function resize()
{
    if (fullSize)
    {

    }

    $("#BayBrowser").height(height - 30)
    $("#BayGallery").height($("#BayBrowser").height()-100);
}

init();