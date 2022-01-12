var selTable = "TABLE[summary='LongList']";
var selPaginationWrapper = "#scriptPagingWPQ1";
var selPaginationNext = "A[title='Next']";

var oWin = window.open(window.location.href, "win1");
var oWin2 = window.open("_blank", "win2","",false);
var bGotPage = false;
var bWait = true;
var intvl = null;
var intvlFirstLoad = setInterval(function(){
    if ( oWin.document.readyState === "complete" ) {
        oWin2.document.write(oWin.document.querySelector(selTable).outerHTML);
        bGotPage = true;
        var intvlPages = setInterval(function(){
            
            if ( bGotPage === true ){
                if ( oWin.document.querySelector(selPaginationNext) !== null ) {
                    try{console.log("clicking next page");}catch(e){}
                    oWin.document.querySelector(selPaginationNext).click();
                    bGotPage = false;
                }
                else {
                    alert("Done!");
                    clearInterval(intvlPages);
                }
            }
            bWait = true;
            intvl = setInterval(function() {
                if ( oWin.document.readyState === "complete" ) {
                    try{console.log("next page is loaded");}catch(e){}
                    bWait = false;
                    oWin2.document.querySelector(selTable+ " > TBODY").append(oWin.document.querySelector(selTable+ " > TBODY").innerHTML);
                    bGotPage = true;
                    clearInterval(intvl);
                }
            }, 100);
        }, 123);
        try{console.log("first load");}catch(e){}
        clearInterval(intvlFirstLoad);
    }
}, 500);



