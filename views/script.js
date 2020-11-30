const realFileBtn = document.getElementById("real-file");
               const customBtn = document.getElementById("custom-button");
               const customTxt = document.getElementById("custom-text");

               customBtn.addEventListener("click", function(){
                    realFileBtn.click();
               });
                realFileBtn.addEventListener("change", function(){
                    if (realFileBtn.value){
                        customTxt.innerHTML = realFileBtn.value.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1]; // extract the file name from the path
                    }else{
                        customTxt.innerHTML = "no File chosen, yet. ";
                    }
                })
// Ck Editor code for Text Editor:
ClassicEditor
    .create( document.querySelector( '#body' ), {
        toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
        heading: {
            options: [
                { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
            ]
        }
    } )
    .catch( error => {
        console.log( error );
    } );