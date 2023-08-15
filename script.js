let fileinput=document.getElementById("file-input")
let fileList=document.getElementById("files-list")
let numfiles=document.getElementById("num-of-files")

fileinput.addEventListener("change",()=>{
    fileList.innerHTML="";
    numfiles.textContent=`${fileinput.files.length}Files Selected`
    for(i of fileinput.files){
        let reader=new FileReader();
        let listItem=document.createElement("li")
        let fileName=i.name
        let fileSize=(i.size/1024).toFixed(1)
        if(fileSize>=1024){
            fileSize=(fileSize/1024).toFixed(1)
        
        }
        
        fileList.appendChild(listItem)

    }

}
)