self.addEventListener('install', (event) => {
    console.log("SW install")
});
self.addEventListener('fetch', (event) => {
    if (event.request.url.includes('css')) {
        const resp = new Response(
            `
                    body {
                        color: grey;
                        background-color: lightgrey;
                    }   
                `,
            {
                headers: {
                    "Content-Type": "text/css",
                },
            }
        );
        event.responseWith(resp);
    }
    changeImage(event);

});


function changeImage(event) {
    if (event.request.url.includes(".jpg")) {
        console.log(event.request.url);
        event.respondWith(fetch("./images/halo2.jpeg"));
    }
}

/* const respuesta= fetch(event.request.url)
   .then((resp)=>{
       console.log(resp);
       if(resp.ok){
           return resp;
       }else{
           return fetch('images/halo.jpg')
       }
   }).catch((err)=>{
       console.log('Error ',err);
   })

   event.respondWith(respuesta);
/* if(event.request.url.includes('css')){
        console.log(event.request.url);
        event.respondWith(fetch('images/halo2.jpeg'))
    }
   //TAREA la imagen que se muestre debe de ser la otra
   */
