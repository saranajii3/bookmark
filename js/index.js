var siteInput = document.getElementById("siteName");
var urlInput = document.getElementById("website url");

var bookmarkList = [];

function Submit() {
  if(ValidationName()){{
    var bookmark = {
      bookname: siteInput.value,
      websiteurl: urlInput.value,
    }
  
    bookmarkList.push(bookmark);
    localStorage.setItem("Bookmarks", JSON.stringify(bookmarkList));
  
    displayData();
  
    console.log(bookmark);
  
    clearForm();
  }

  }
}

function clearForm() {
  siteInput.value = null;
  urlInput.value = null;
}

function displayData(){
  var table='';
  for (  var i = 0; i < bookmarkList.length ; i++){
  table+=`
  
       <tr>
         <td>${i}</td>
         <td>(${bookmarkList[i].bookname})</td>
         <td><button class="btn btn-outline-main" onclick="visit (${i});"><i class="fa-solid fa-eye"></i></button></td>
          <td><button class="btn btn-outline-main" onclick="deleteBookmark();"><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>
                      
  `
  }
  document.getElementById("tableContenet").innerHTML = table;



}


function deleteBookmark(i) {
  bookmarkList.splice(i, 1);
  localStorage.setItem("Bookmarks", JSON.stringify(bookmarkList));
  displayData(bookmarkList);
}



function ValidationName(){
  var regex = /^\w{3,}(\s+\w+)*$/;
   var term = siteInput.value
   
   if( regex.test(term)){
    siteInput.classList.add("is-valid")
    siteInput.classList.remove("is-invalid")
    return true

   }
   else{
    siteInput.classList.add("is-invalid")
    siteInput.classList.remove("is-valid")

    swal({
      title: "Name or URL is not valid!",
      text: `Please follow the rules below:
              > Site name must contain at least 3 characters
              > The URL must start with either http or https followed by :// 
                it must contain www. followed by subdomain of length(2, 256)
                last part contains top level domain like .com, .org etc.`,
    });

    return false
    

  
   }
   
  }
  
    function Validationurl(){
      var httpRegEx = /^https?:\/\//;
       var urlregex= urlInput.value
       if( httpRegEx.test(urlregex)){
        urlInput.classList.add("is-valid")
        urlInput.classList.remove("is-invalid")
        
        return true
    
       }
       else{
        urlInput.classList.add("is-invalid")
        urlInput.classList.remove("is-valid")
        swal({
          title: "Name or URL is not valid!",
          text: `Please follow the rules below:
                  > Site name must contain at least 3 characters
                  > The URL must start with either http or https followed by :// 
                    it must contain www. followed by subdomain of length(2, 256)
                    last part contains top level domain like .com, .org etc.`,
        });
    
    
        return false

        
    
      
       }
       
      }
      



function visit(i) {
  const httpRegEx = /^https?:\/\//;
  if (httpRegEx.test(bookmarkList[i].websiteurl)) {
    window.open(bookmarkList[i].websiteurl);
  } else {
    window.open(`https://${bookmarkList[i].websiteurl}`);
  }
}
