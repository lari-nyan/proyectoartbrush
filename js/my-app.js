
// Initialize your app
var myApp = new Framework7({
	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: false
    },
	panel:{
		swipe:false
	},
	toolbar: {
		hideOnPageScroll: true,
	  },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'ArtBrush',
	dialog: {
		title: 'ArtBrush',
		buttonOk: 'Aceptar',
  	},
	routes: [
		
		
		{
		path: '/profile/',
    	url: 'index.html',
    	name: 'profile',
  		},
		{
		path: '/pedidos/',
    	url: 'pedidos.html',
    	name: 'pedidos',
  		},
			
		{
		path: '/aaron/',
    	url: 'aaroncommi.html',
    	name: 'aaron',
  		},
		
		{
		path: '/carrito/',
    	url: 'carrito.html',
    	name: 'carrito',
  		},
		
		{
		path: '/carrusel/',
    	url: 'carrusel.html',
    	name: 'carrusel',
  		},
		
		{
		path: '/orden/',
    	url: 'orden.html',
    	name: 'orden',
  		},
		
		{
		path: '/about/',
    	url: 'about.html',
    	name: 'about',
  		},
		
		{
		path: '/confirm/',
    	url: 'confirm-order.html',
    	name: 'confirm',
  		},
		
	]
});

// Export selectors engine
var $$ = Dom7;

