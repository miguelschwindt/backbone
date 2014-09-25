// Filename: views/projects/list
define([
  'jquery',
  'underscore',
  'backbone',
  // Pull in the Collection module from above
  'collections/projects',
  'models/projects',
  //agrego los modelos nuevos
  'models/AnotherModel',
  'models/AnotherModel2',
  // agrego tambien el template que se va a utilizar en esta vista,
  // puedo agregar uno por seccion que necesite pero aca estoy usando uno solo
  'text!/templates/projects/newlist.html'
], function($, _, Backbone, ProjectsCollection, ProjectsModels, PrimerModelo,
            SegundoModelo, projectsListTemplate){
  
  var ProjectListView = Backbone.View.extend({
    //defino el objeto con el que voy a trabajar(esta ubicado en index.html)
    el: $("#container"),
    //asi le pongo un nombre al template con el que lo voy a llamar mas abajo
    template: _.template(projectsListTemplate),
    //defino eventos del boton que va a mostrar los modelos cuando haga click,
    // el segundo es de ejemplo asi que no hace nada
    events:  {
      'click button#listarProject': 'listarProject',
      'click #addNew': 'addNew'
    },

    initialize: function(){
      _.bindAll(this,'listarProject');//"ligo" los eventos mediante underscore, cada evento que use lo pongo aca
      console.log('view.list');
      this.$el.html('<h1>Projects</h1>');
      this.projectsModels= new ProjectsModels; //creo el modelo que voy a usar y lo seteo con propiedades simples
      this.projectsModels.set('propiedad1', "hola");
      this.projectsModels.set('propiedad2', "hola");
      //creo la coleccion vacia para pasarla al render, 
      //por que cuando use el evento del boton necesito este parametro para el evento
      //para evitar esto podria crear una vista para el boton y su evento
      this.projectsCollection = new ProjectsCollection();
      this.render();    
      },
    
    render: function(){
      //si no hay evento del boton la coleccion que le paso es vacia
      this.$el.html(this.template(this.projectsCollection.models));

      return this;
    },

    listarProject: function(){
      //creo el objeto data para agregarselo a la coleccion 
      //y luego renderizo la vista si hay evento del boton esta se actualiza
      var data = [PrimerModelo,SegundoModelo];
      this.projectsCollection = new ProjectsCollection();
      this.projectsCollection.add(data);
      console.log('boton funcionando');
      this.render();
    }

  });
 
  
  return ProjectListView;

});