let pst, frm;

      window.onload=function(){
        frm =document.getElementById("form");
        pst = new Pristine(form);
        var aspectoBtn = document.getElementById("aspectoBtn")
        frm.addEventListener('submit',function(event){
          event.preventDefault();
          console.log("event");
          var valid=pst.validate();
          return true;

        });
        aspectoBtn.addEventListener("click", function(){
            console.log("modificar aspecto")
        })
      };