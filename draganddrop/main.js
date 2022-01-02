const dragArea = document.querySelector('.dragBox');
         input = dragArea.querySelector('input');
let dragText = document.querySelector('.dragBox span');
input.addEventListener("change", function(){
    file = this.files[0];
    showFile();
  });
    dragArea.addEventListener("dragover", (event)=>{
        event.preventDefault();
        dragArea.classList.add("active");
        dragText.textContent = "Release to Upload File";
    });
    dragArea.addEventListener("dragleave", ()=>{
        dragArea.classList.remove("active");
        dragText.textContent = "Drag & Drop to Upload File";
    });
    dragArea.addEventListener("drop", (event)=>{
        event.preventDefault();
        dragArea.classList.remove("active");
        file = event.dataTransfer.files[0];
        showFile();
      });

      function showFile(){
        let fileType = file.type; 
        let filename = file.name;
        let fileSize = (file.size / 1024 /1024).toFixed(2);
        let validExtensions = ["image/jpeg", "image/jpg", "image/png"]; 
        let changeImg = 'png.svg';
        let changeclr = 'barpurple';
        if(validExtensions.includes(fileType)){ 
           if(fileType == 'image/jpeg' || fileType == 'image/jpg'){
            changeImg = 'jpg.svg';
            changeclr = 'barblue'
           }
          let fileReader = new FileReader();
          fileReader.onload = ()=>{
            let fileURL = fileReader.result;
            let imgTag = ` <h4>Uploaded files here</h4><div class="fileDetails"><img src="${changeImg}" alt=""><div class="file-load"><span>${filename}</span><div class="progress-bar"><div data-size="80" class="progress ${changeclr}"></div></div><p>${fileSize}MB</p></div></div>`;
            let showImg = `<img id="show" src="${fileURL}" alt="image">`;
            dragArea.innerHTML = showImg;
            document.querySelector('.files').innerHTML = imgTag; 
          }
          fileReader.readAsDataURL(file);
        }else{
          document.querySelector('.files').innerHTML=`<span>class="error">Please select only Jpg,Jpeg,png file.</span>`
          dragArea.classList.remove("active");
          dragText.textContent = "Drag & Drop to Upload File";
        }
      }







      