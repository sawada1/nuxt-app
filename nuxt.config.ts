// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'nuxt app three',
            meta: [{
                name: 'description',
                content:'this is a wonderful page'
            }],
            link: [
                 {
                        rel: 'stylesheet',
                        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
                        integrity: "sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==",
                        crossorigin: 'anonymous',
                        referrerpolicy:'no-referrer'
                }
          
          ],
          script:[
            {
                  src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js',
                integrity:'sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe',
                crossorigin:"anonymous",
            }
          ],     
        },
         
       
    },
        css:[
        '~/assets/css/bootstrap.css',
        '~/assets/main.css',
    ],
  
     
});
