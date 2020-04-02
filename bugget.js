var alldata={
    eventdata:
    {
        click1:'click1',
        enter:13
    },
    domdata:
    {
        type1:'#type1',
        input1:'#input1',
        input2:'#input2'
    }

}

var d=function(a,b,c){
    this.a=type1;
    this.b=input1;
    this.c=input2;

}


  var total=0;
  var totalinc=0;
  var empt=[];
 

//event valu insert


var sa=function(){

    var type1=document.querySelector(alldata.domdata.type1).value;
    console.log(type1);
    
    var input1=document.querySelector(alldata.domdata.input1).value;
    var input2=document.querySelector(alldata.domdata.input2).value;
    var intinput=parseInt(input2);

    if(type1==='exp'){
        document.querySelector('.exp').insertAdjacentHTML('beforebegin','<li id="list1"class="v list-group-item d-flex justify-content-between align-items-center list-group-item-success font-size-sm-13">'+input1+'<span class="badge badge-primary badge-pill">'+input2+' TK</span><i class="fas fa-window-close" id="close1"></i></li><br>');
          total+=intinput;
          console.log(total);
          
          empt.push(total);
          console.log(empt);
          document.querySelector('.total').textContent=total;
          document.querySelector('.buget').textContent='Available Budget in '+total;

    }
    else{
        document.querySelector('.inc').insertAdjacentHTML('beforebegin','<li id="list1"class="v list-group-item d-flex justify-content-between align-items-center list-group-item-warning font-size-sm-13">'+input1+'<span class="badge badge-primary badge-pill">'+input2+' TK</span><i class="fas fa-window-close" id="close1"></i></li><br>');
        totalinc+=intinput;
        console.log(totalinc);
        
        empt.push(totalinc);
        console.log(empt);
        document.querySelector('.z').textContent=totalinc;
        
        
    }
    var sd=total-totalinc;
    document.querySelector('.sd').textContent=' income '+total+' Total Cost '+ totalinc +' you have Now '+sd;
    
}


//event call here 
   document.getElementById(alldata.eventdata.click1).addEventListener('click',function(){
   
  sa();

 });
//key bord event call here
 document.addEventListener('keypress', function (event) {
    if (event.keyCode === alldata.eventdata.enter || event.which === alldata.eventdata.enter) {

       sa();
        
    }
});
    