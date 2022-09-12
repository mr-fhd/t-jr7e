$("style").last().append(`
#users .uzr.fhd1 .fitimg.u-pic {
  border: 1px solid #fff;
  border-radius: 5px;
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 3px #797979;
  margin-top: 0px;
}
#users .uzr.fhd1 .u-msg {
  text-align: center;
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: #0000;
  background-image: linear-gradient(-225deg,#a8a8a8 0%,#939393 29%,#f00 67%,#8e8e8e 100%);
  padding: 0px !important;
  font-size: 89% !important;
}
#users .uzr.fhd1 span.uhash {
  margin-right: 324px;
  margin-top: 24px;
  margin-left: 0px;
}
#users .uzr.fhd1 img.co {
  transform: rotate(90deg);
  margin-top: -60px !important;
  margin-right: 282px;
}
#users .uzr.fhd1 {
  box-shadow: inset 0 0 0 rgba(0,0,0,.08),0 0 2px #000;
  margin-bottom: 3px !important;
  margin-top: 2px !important;
  border-radius: 4px;
  background-image: url("https://i.ibb.co/nnGzJDC/3.png");
  background-size: cover;
  border: 1px solid #fff;
}
#users .uzr.fhd1 .c-flex.fr {
  margin-left: -4px!important;
  float: left;
}
#users .uzr.fhd1 .d-flex.fl {
  padding-right: 0px !important;
}
#users .uzr.fhd1 .u-topic {
  margin-left: 5px;
}
#users .uzr.fhd1 .My_star2 {
width: 18px;
margin-top: -19px;
cursor: pointer;
margin-left: 9px;
}
#users .uzr.fhd1 .My_mood2 {
  float: right;
  margin-right: 7px;
  margin-top: 1px;
  width: 29px;
  cursor: pointer;
}
#users .uzr.fhd1 .my_drink2 {
  float: right;
  width: 20px;
  margin-top: -1.5px;
  margin-right: 6px;
  cursor: pointer;
}
#users .uzr.fhd1 .My_vedio2 {
  float: right;
  width: 20px;
  margin-top: 1px;
  margin-right: 0px;
  cursor: pointer;
}
`);

var l_itv=setInterval(function(){
    if(myid!=null){
        clearInterval(l_itv);
        $("#users .uzr:contains('#••')").addClass('fhd1');
        $("#users .uzr.fhd1 .c-flex.fr").append('<img class="My_star2" title="توثيق" src="https://h.top4top.io/p_2442c44gj5.png">');
        $("#users .uzr span.u-topic:contains('#••')").after('<img id="mymood" class="My_mood2" title="مزاجي" src="https://g.top4top.io/p_2443n9tfx9.png">'); 
        $("#users .uzr span.u-topic:contains('#••')").after('<img id="mydrink" class="my_drink2" title="مشروبي" src="https://h.top4top.io/p_2443a8y3c2.png">');
        $("#users .uzr span.u-topic:contains('#••')").after('<img id="mystory" class="My_vedio2" title="ستوري" src="https://i.ibb.co/47VS4nY/image.png">');
    
        $("#users .uzr.fhd1 span.uhash, #users .uzr.fhd1 img.co").hide(); 


        $("#upro").before('<div id="movon" onclick="$(this).hide().html(``);" class="moveon" style="display:none;width:100%;height:100%;z-index:999999;position: fixed;left: 0px;top: 0px;background-color: rgba(0, 0, 0, 0.6);">'); 
        
        
        
        $("div#users .uzr:contains('#••') .My_vedio2").click(function(){
        $("#movon").show();
        
        $('#movon').addClass('fhd1');
        $("#movon").before('<div class="modal-dialog fr break" style="height: 338px;min-height: 599px;overflow: visible;margin-top:40px;"></div>');
        
        
        $("#movon").append('<div style="color:white; width: 338px !important; float: right;" class="modal-header label-primary"><span class="pull-right clickable badge"><i class="fa fa-times"></i></span><label style="margin:1px; float: right;" > My vedio </label></div>');
          
		  
        $("#movon").append('<iframe id="ifr_mov2" style="right: 0; top: 35px; left: auto;" class="modal in" role="dialog" style="z-index: 2100; display: none; style="max-width:240px;" src="https://www.youtube.com/embed/RjFPKOZHTm0" allowfullscreen="" width="338" height="590" frameborder="0"></iframe>');
        
       $("#ifr_mov2").show(function(){
        $("#upro").modal("hide");
    } ); 
});
    }
}, 20000);
