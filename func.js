$(document).ready(function(){
  
    $("#search").keypress().on("click",function(){
       var skey= $("#data").val();
      var c=0;
      var surl="https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search="+skey+"&namespace=0&limit=29&callback=?";
    $.ajax({
      type : 'GET',
      url : surl,
      asynch: false,
      contentType:'plain/text',
      dataType:'json',
      success : function(arr){
        $("#out").html('');
        if(arr[1].length<10)
       { for(var i=0;i<arr[1].length;i++)
          {  $("#out").append("<li class='block'><a href='"+arr[3][i]+"' target='_blank'><h2> "+arr[1][i]+"</h2><p><h3> "+arr[2][i]+"</h3></p></a></li>"); c++;} }
    
      else if(arr[1].length!=0&&arr[1].length>9){ for(var i=0;i<10;i++)
          {  $("#out").append("<li class='block'><a href='"+arr[3][i]+"' target='_blank'><h2> "+arr[1][i]+"</h2><p><h3> "+arr[2][i]+"</h3></p></a></li>"); c++;} 
        
      $("html").append("<button class='btn btn-default' data-toggle='collapse' data-target='#m' ><label>more...</label>");
        for(var j=10;j<arr[1].length;j++){
          $("#out2").append("<li class='block'><a href='"+arr[3][j]+"' target='_blank'><h2> "+arr[1][j]+"</h2><p><h3> "+arr[2][j]+"</h3></p></a></li>");
        }
 }
        else{
          $("#out").append("<li>Oops!Result not found.</li>");
        }
      },
     error : function(err){
       alert('error');
     } 
    });
     
  }); 
 });
