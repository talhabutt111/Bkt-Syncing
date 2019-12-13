
var wpApi=require('wpapi');
var wp = new wpApi(
  { 
    endpoint: 'https://bktstaging.devzonesolutions.com/wp-json' ,
    username: 'Talha',
    password: 'laravel5.8',
    auth:true
});




module.exports = (server) => {

  server.get('/posts', (req,res) =>{

     console.log('wordpress api');

     
    // process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

    //  wp.posts()
    //  .then(function( data ) {

    //      console.log(data);
         
    //  }).catch(function( err ) {

    //       console.log(err);
          
    //  });

    wp.posts().get(function( err, data) {
      if ( err ) {
        console.log(err);
        
      }
      else
      {
        console.log(data);
        
        

      }
      // do something with the returned posts
  });

   })

   
  server.get('/users', (req,res) =>{

    console.log('wordpress users api');

    wp.users()
    .then(function( data ) {

        console.log(data);
        
    }).catch(function( err ) {

         console.log(err);
         
    });

  })
  server.get('/pages', (req,res) =>{

    console.log('wordpress pages api');

    wp.pages()
    .then(function( data ) {

        console.log(data);
        
    }).catch(function( err ) {

         console.log(err);
         
    });

  });
  
  
  server.get('/createposts', (req,res) =>{
    console.log('wordpress create posts api');
    wp.posts().create({
      // "title" and "content" are the only required properties
      title: 'my post title',
      content: 'My post content',
      // Post will be created as a draft by default if a specific "status"
      // is not specified
      status: 'publish'
    }).then(function( response ) {
      // "response" will hold all properties of your newly-created post,
      // including the unique `id` the post was assigned on creation
      console.log( response.id );
    }).catch(err =>{
      console.log(err);
      
    });

  })
  
}